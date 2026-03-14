import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

/**
 * Configures and registers all API routes for the Express application.
 * @param httpServer - The HTTP server instance.
 * @param app - The Express application instance.
 * @returns A promise that resolves to the modified HTTP server.
 */
export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      console.error("Error creating lead:", err);
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  app.get(api.cardStats.get.path, async (req, res) => {
    try {
      const stats = await storage.getCardStats();
      res.status(200).json(stats);
    } catch (err) {
      console.error("Error getting card stats:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post(api.cardStats.update.path, async (req, res) => {
    try {
      const input = api.cardStats.update.input.parse(req.body);
      const stats = await storage.updateCardStats(input);
      res.status(200).json(stats);
    } catch (err) {
      console.error("Error updating card stats:", err);
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  return httpServer;
}
