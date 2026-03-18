import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  university: z.string().min(1, "Please select a university"),
  message: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;