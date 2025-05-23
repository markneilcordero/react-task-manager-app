/**
 * Generates a unique identifier using current timestamp and random string.
 * @returns {string} A unique ID.
 */
export function generateId() {
  return (
    Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
  );
}
