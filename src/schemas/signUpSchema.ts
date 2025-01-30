import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, { message: "Must be 2 characters" })
  .max(10, { message: "Must be less then 10 characters" })
  .regex(/^[a-zA-Z0-9_]+$/, { message: "Invalid" });

export const emailValidation = z
  .string()
  .regex(
    /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    { message: "Invalid" }
  )
  .email({ message: "Invalid email" });

export const passwordValidation = z
  .string()
  .min(5, { message: "Must be 5 characters" })
  .max(11, { message: "Must be less then 11 characters" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)&/, {
    message:
      "Password must contain at least one lowercase letter, one uppercase letter, and one digit       ",
  });
export const signUpSchema = z.object({
  userName: userNameValidation,
  email: emailValidation,
  password:passwordValidation
});
