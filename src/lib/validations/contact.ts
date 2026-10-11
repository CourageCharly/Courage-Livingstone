import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().max(120, "Keep this under 120 characters.").optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Please keep this under 2,000 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;
