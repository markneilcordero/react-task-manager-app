/**
 * Checks if a task is overdue.
 * @param {string} dueDate - ISO string or date string (e.g., "2025-05-24").
 * @returns {boolean} - True if overdue and not today.
 */
export function isTaskOverdue(dueDate) {
  if (!dueDate) return false;
  const today = new Date().setHours(0, 0, 0, 0);
  const due = new Date(dueDate).setHours(0, 0, 0, 0);
  return due < today;
}

/**
 * Formats a date string as readable (e.g., May 23, 2025).
 * @param {string|Date} date - Input date.
 * @returns {string}
 */
export function formatDateReadable(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

/**
 * Returns true if the date is within the last N days.
 * @param {string} date - ISO date string.
 * @param {number} days - Number of days to check.
 * @returns {boolean}
 */
export function isWithinLastNDays(date, days) {
  const now = new Date();
  const past = new Date(date);
  const threshold = new Date();
  threshold.setDate(now.getDate() - days);
  return past >= threshold;
}
