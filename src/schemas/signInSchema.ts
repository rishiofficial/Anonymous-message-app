import {z} from 'zod'

export const signInSchema = z.object({
   indicators: z.string(),
   password: z.string()
})