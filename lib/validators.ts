import { z } from "zod";

export const searchQuerySchema = z.object({
  q: z
    .string()
    .trim()
    .min(1, "Query is required")
    .max(100, "Query must be 100 characters or fewer"),
  type: z.enum(["all", "services", "faqs"]).optional().default("all"),
});

export const quoteRequestSchema = z.object({
  serviceSku: z.enum(["SHD-STD", "SHD-PRIORITY", "SHD-FRAGILE", "SHD-BIZ"]),
  pickupCity: z.string().trim().min(2).max(80),
  dropoffCity: z.string().trim().min(2).max(80),
  distanceKm: z.number().min(0).max(200),
  packageType: z.enum(["documents", "parcel", "fragile", "medical", "parts"]),
  priority: z.enum(["standard", "priority"]).default("standard"),
  email: z.string().email(),
  company: z.string().trim().max(120).optional(),
});

export const contactRequestSchema = z.object({
  requestType: z.enum([
    "Book Same Hour Delivery",
    "Request Business Quote",
    "Service availability",
    "Support question",
  ]),
  fullName: z.string().trim().min(2).max(100),
  email: z.string().email(),
  phone: z.string().trim().max(30).optional(),
  city: z.string().trim().min(2).max(100),
  pickupPostal: z.string().trim().max(20).optional(),
  dropoffPostal: z.string().trim().max(20).optional(),
  details: z.string().trim().min(10).max(2000),
});

export type SearchQueryInput = z.infer<typeof searchQuerySchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
