// lib/middleware/validateRequest.ts
import { ZodType } from "zod";

export async function validateRequest<T>(body: Request, schema: ZodType<T>) {
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
