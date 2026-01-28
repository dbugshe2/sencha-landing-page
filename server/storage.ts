import { db } from "./db";
import { leads, type InsertLead, type Lead } from "@shared/schema";

export interface IStorage {
  /**
   * Creates a new lead in the storage system.
   * @param lead - The lead data to insert.
   * @returns A promise that resolves to the created lead record.
   */
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  /**
   * Implementation of createLead using the database.
   * @param insertLead - The lead data to insert.
   * @returns A promise that resolves to the created lead record.
   */
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }
}

export const storage = new DatabaseStorage();
