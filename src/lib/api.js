// Thin client for the Sevanna API (https://sevanna-api.onrender.com/docs).
// Server-only: every call site is a Server Component / generateStaticParams /
// generateMetadata, so this never ships to the browser bundle.

const API_BASE_URL = process.env.SEVANNA_API_URL ?? "https://sevanna-api.onrender.com/api/v1";

// Render's free tier can cold-start a sleeping instance; give it real time
// before giving up instead of failing fast on the first request after a while.
const TIMEOUT_MS = 20_000;

export class ApiError extends Error {
  constructor(message, status, options) {
    super(message, options);
    this.name = "ApiError";
    this.status = status;
  }
}

/** GET `path` against the API and unwrap its {success, data, message} envelope. */
export async function apiFetch(path, { revalidate = 300 } = {}) {
  let res;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, {
      next: { revalidate },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (cause) {
    throw new ApiError(`No se pudo conectar con la API de Sevanna (${path})`, 0, { cause });
  }

  if (res.status === 404) {
    throw new ApiError(`${path} no existe`, 404);
  }
  if (!res.ok) {
    throw new ApiError(`La API de Sevanna respondió ${res.status} en ${path}`, res.status);
  }

  const body = await res.json();
  if (body.success === false) {
    throw new ApiError(body.message ?? `Error desconocido en ${path}`, res.status);
  }
  return body.data;
}

/** Await `promise`; on failure, log and return `fallback` instead of throwing. */
export async function safe(promise, fallback) {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
    return fallback;
  }
}
