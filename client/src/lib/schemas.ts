import { z } from "zod";

export const registrationSchema = z
  .object({
    firstname: z
      .string()
      .min(1, { message: "First name is required" })
      .max(50, { message: "First name must be less than 50 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
      }),

    lastname: z
      .string()
      .min(1, { message: "Last name is required" })
      .max(50, { message: "Last name must be less than 50 characters" })
      .regex(/^[A-Za-z]+$/, { message: "Last name must contain only letters" }),

    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(20, { message: "Username must be less than 20 characters" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores",
      }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),

    confirmpassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
