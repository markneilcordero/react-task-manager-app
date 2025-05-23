/**
 * Export LocalStorage data as a downloadable JSON file.
 * @param {string} key - LocalStorage key to export.
 * @param {string} filename - Download filename.
 * @returns {{ success: boolean, message: string }}
 */
export function exportLocalStorageData(key, filename = "backup.json") {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      return { success: false, message: "No data found to export." };
    }

    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);

    return { success: true, message: "Data exported successfully." };
  } catch (err) {
    console.error("Export failed:", err);
    return { success: false, message: "Failed to export data." };
  }
}

/**
 * Import JSON data and save it to LocalStorage.
 * @param {File} file - The uploaded .json file.
 * @param {string} key - LocalStorage key to import into.
 * @param {function} callback - Optional success callback.
 * @returns {{ success: boolean, message: string }}
 */
export function importLocalStorageData(file, key, callback) {
  if (!file || file.type !== "application/json") {
    return { success: false, message: "Please select a valid .json file." };
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      localStorage.setItem(key, JSON.stringify(parsed));
      if (callback) callback(parsed);
    } catch (err) {
      console.error("Import failed:", err);
      callback(null, { success: false, message: "Invalid JSON format." });
    }
  };

  reader.readAsText(file);

  return { success: true, message: "Import started." }; // Early response
}
