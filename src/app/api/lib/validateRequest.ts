// lib/middleware/validateRequest.ts
import { ZodSchema } from "zod";

export async function validateRequest<T>(body: Request, schema: ZodSchema<T>) {
  const result = schema.safeParse(body);

  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  return {
    success: true,
    data: result.data as T,
  };
}
