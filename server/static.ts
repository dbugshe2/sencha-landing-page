import express, { type Express } from "express";
import fs from "fs";
import path from "path";

/**
 * Configures the Express app to serve static files from the build directory.
 * Falls back to index.html for unknown routes (SPA support).
 * @param app - The Express application instance.
 * @throws {Error} If the build directory cannot be found.
 */
export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
