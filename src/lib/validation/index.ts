import * as z from 'zod';

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Name should be more than 2 charaters' }),
  username: z
    .string()
    .min(2, { message: 'Username should be more than 2 charaters' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password should be more than 8 charaters' }),
});
