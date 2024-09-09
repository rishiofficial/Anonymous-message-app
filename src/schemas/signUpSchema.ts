import {z} from 'zod';
export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast two character")
    .max(20,"Username must not contain more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
   username:  usernameValidation,
email: z.string().email({message: "password must be at least 6 characters"}),
password: z.string().min(6,{message: "Password must be atleast 6 characters"})

})