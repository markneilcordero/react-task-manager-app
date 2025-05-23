import { getLocalData, saveLocalData } from "./localStorageHelpers";
import { generateId } from "./uuidGenerator";

const STORAGE_KEY = "task-manager-app-data";

/**
 * Handles chatbot commands and returns a response.
 * @param {string} input - The user's command input.
 * @returns {string} - Bot's response.
 */
export function handleCommand(input) {
  const trimmed = input.trim();
  const lower = trimmed.toLowerCase();

  // Add Task
  if (lower.startsWith("add task:")) {
    const taskText = trimmed.substring(9).trim();
    if (!taskText) return "Please specify the task after 'Add task:'.";
    const tasks = getLocalData(STORAGE_KEY, []);
    tasks.push({
      id: generateId(),
      name: taskText,
      completed: false,
      createdAt: new Date().toISOString()
    });
    saveLocalData(STORAGE_KEY, tasks);
    return `Task "${taskText}" added successfully.`;
  }

  // Show Completed Tasks
  if (lower === "show completed tasks") {
    const tasks = getLocalData(STORAGE_KEY, []);
    const completed = tasks.filter(t => t.completed);
    return completed.length
      ? `You have ${completed.length} completed task(s).`
      : "You have no completed tasks.";
  }

  // Export Data
  if (lower === "export data") {
    const data = getLocalData(STORAGE_KEY, []);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "task-manager-backup.json";
    anchor.click();
    URL.revokeObjectURL(url);

    return "Your data has been exported.";
  }

  // Import Data
  if (lower === "import data") {
    document.getElementById("importFileInput")?.click();
    return "Please choose a .json file to import.";
  }

  return "I didn't understand that command. Try: Add task: Finish homework";
}
