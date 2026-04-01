import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  qualification: z.string().min(1, "Qualification is required"),
  result: z.string().min(1, "GPA/Result is required"),
  university: z.string().min(1, "University selection is required"),
  course: z.string().min(1, "Course selection is required"),
  message: z.string().optional(),
  dob: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;