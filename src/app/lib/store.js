// Process-local in-memory data store. No external database — data resets on
// server restart and (on serverless hosts) is not guaranteed to persist or be
// shared across function instances.
export const grades = [];
export const modules = [];
export const events = [];

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}
