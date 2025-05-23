import { getLocalData, saveLocalData } from "./localStorageHelpers";
import { generateId } from "./uuidGenerator";

const STORAGE_KEY = "task-manager-app-data";

/**
 * Handles chatbot commands and returns a structured response.
 * @param {string} input - The user's command input.
 * @returns {{ success: boolean, message: string }} - Bot response.
 */
export function handleCommand(input) {
  const trimmed = input.trim();
  const lower = trimmed.toLowerCase();

  // Add Task
  if (lower.startsWith("add task:")) {
    const taskText = trimmed.substring(9).trim();
    if (!taskText) {
      return { success: false, message: "Please specify the task after 'Add task:'." };
    }

    const tasks = getLocalData(STORAGE_KEY, []);
    tasks.push({
      id: generateId(),
      name: taskText,
      completed: false,
      priority: "Medium",
      dueDate: "",
      createdAt: new Date().toISOString(),
    });

    saveLocalData(STORAGE_KEY, tasks);
    return { success: true, message: `Task "${taskText}" added successfully!` };
  }

  // Show Completed Tasks
  if (lower === "show completed tasks") {
    const tasks = getLocalData(STORAGE_KEY, []);
    const completed = tasks.filter((t) => t.completed);
    return {
      success: true,
      message: completed.length
        ? `You have ${completed.length} completed task(s).`
        : "You have no completed tasks.",
    };
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

    return { success: true, message: "Your data has been exported." };
  }

  // Import Data
  if (lower === "import data") {
    document.getElementById("importFileInput")?.click();
    return { success: true, message: "Please choose a .json file to import." };
  }

  // Unknown Command
  return {
    success: false,
    message: "I didn't understand that command. Try: Add task: Finish homework",
  };
}
