import { db } from "./db";
import { leads, type InsertLead, type Lead, cardStats, type CardStats, type UpdateCardStats } from "@shared/schema";
import { sql } from "drizzle-orm";

export interface IStorage {
  /**
   * Creates a new lead in the storage system.
   * @param lead - The lead data to insert.
   * @returns A promise that resolves to the created lead record.
   */
  createLead(lead: InsertLead): Promise<Lead>;

  getCardStats(): Promise<CardStats>;
  updateCardStats(update: UpdateCardStats): Promise<CardStats>;
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

  async getCardStats(): Promise<CardStats> {
    const [stats] = await db.select().from(cardStats).limit(1);
    if (!stats) {
      const [newStats] = await db.insert(cardStats).values({}).returning();
      return newStats;
    }
    return stats;
  }

  async updateCardStats(update: UpdateCardStats): Promise<CardStats> {
    const stats = await this.getCardStats();
    const [updatedStats] = await db.update(cardStats)
      .set({
        scrollCount: sql`${cardStats.scrollCount} + ${update.deltaScrollCount}`,
        totalAmount: sql`${cardStats.totalAmount} + ${update.deltaTotalAmount}`,
        paymentCount: sql`${cardStats.paymentCount} + ${update.deltaPaymentCount}`,
        paymentAmount: sql`${cardStats.paymentAmount} + ${update.deltaPaymentAmount}`
      })
      .where(sql`${cardStats.id} = ${stats.id}`)
      .returning();
    return updatedStats;
  }
}

export const storage = new DatabaseStorage();
