import z from "zod";

export const chatValidation = z.object({
  content: z.string(),
});
