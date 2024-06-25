import { z } from "zod";

export const RegisterValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Please type a valid name",
    })
    .min(3, "Name should be atleast 3 characters long"),
  email: z.string().email("Email is not valid"),
  password: z.string().min(8, "Password should be atleast 8 characters long"),
  passwordConfirm: z.string().min(8, "Password Confirm should be atleast 8 characters long"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: 'Password do not macth',
  path: ['passwordConfirm']
});