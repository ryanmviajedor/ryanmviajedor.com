/**
 * Runs once per server start (including each serverless cold start).
 *
 * Importing the env module here forces validation at boot rather than on the
 * first form submission — so a half-configured deploy fails immediately and
 * visibly, instead of looking healthy until someone tries to contact you.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("@/lib/env");
  }
}
