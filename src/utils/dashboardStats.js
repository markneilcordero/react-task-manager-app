import { isWithinLastNDays } from "./dateUtils";

/**
 * Groups tasks by creation date (YYYY-MM-DD).
 * @param {Array} tasks - Array of task objects with `createdAt` field.
 * @returns {Object} - { '2025-05-22': 3, '2025-05-23': 5, ... }
 */
export function groupTasksByDate(tasks) {
  const grouped = {};
  tasks.forEach((task) => {
    const date = task.createdAt?.substring(0, 10); // Extract YYYY-MM-DD
    if (date) {
      grouped[date] = (grouped[date] || 0) + 1;
    }
  });
  return grouped;
}

/**
 * Filters tasks by a time range string: "7d", "30d", or "all".
 * @param {Array} tasks - All tasks.
 * @param {string} range - "7d", "30d", "all"
 * @returns {Array} - Filtered task array.
 */
export function filterTasksByDateRange(tasks, range = "30d") {
  if (range === "all") return tasks;

  const days = parseInt(range.replace("d", ""));
  return tasks.filter((task) =>
    isWithinLastNDays(task.createdAt || task.dueDate, days)
  );
}
