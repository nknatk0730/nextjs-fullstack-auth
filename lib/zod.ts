import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email is required",
    })
    .min(1, "Email is required"),

  password: z
    .string()
    .min(1, "Password is required")
    .max(32, "Password must be less than 32 characters"),
});