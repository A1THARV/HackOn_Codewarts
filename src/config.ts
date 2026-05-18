import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  // Add other environment variables here as needed
});

export const config = envSchema.parse(process.env);
