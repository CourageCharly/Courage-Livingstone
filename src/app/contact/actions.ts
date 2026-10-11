"use server";

import { cookies } from "next/headers";
import { CONTACT_SUCCESS_COOKIE, contactSchema, type ContactValues } from "@/lib";

export type ContactResult =
  | { ok: true }
  | { ok: false; errors: Partial<Record<keyof ContactValues, string>> };

export async function submitContact(input: ContactValues): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        company: fieldErrors.company?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const ref = crypto.randomUUID();
  const jar = await cookies();
  jar.set(CONTACT_SUCCESS_COOKIE, ref, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 5,
  });

  return { ok: true };
}
