import { pgTable, text, serial, timestamp, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }),
  name: varchar("name", { length: 255 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const cardStats = pgTable("card_stats", {
  id: serial("id").primaryKey(),
  scrollCount: integer("scroll_count").notNull().default(0),
  totalAmount: integer("total_amount").notNull().default(0),
  paymentCount: integer("payment_count").notNull().default(0),
  paymentAmount: integer("payment_amount").notNull().default(0),
});

// === SCHEMAS ===
export const insertLeadSchema = createInsertSchema(leads).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email("Please enter a valid email address"),
});

export const updateCardStatsSchema = z.object({
  deltaScrollCount: z.number().int().default(0),
  deltaTotalAmount: z.number().int().default(0),
  deltaPaymentCount: z.number().int().default(0),
  deltaPaymentAmount: z.number().int().default(0),
});

// === TYPES ===
export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type CreateLeadRequest = InsertLead;
export type LeadResponse = Lead;

export type CardStats = typeof cardStats.$inferSelect;
export type UpdateCardStats = z.infer<typeof updateCardStatsSchema>;
