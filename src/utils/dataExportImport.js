/**
 * Export LocalStorage data as a downloadable JSON file.
 * @param {string} key - LocalStorage key to export.
 * @param {string} filename - Download filename.
 */
export function exportLocalStorageData(key, filename = "backup.json") {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      alert("No data found to export.");
      return;
    }

    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Export failed:", err);
    alert("Failed to export data.");
  }
}

/**
 * Import JSON data and save it to LocalStorage.
 * @param {File} file - The uploaded .json file.
 * @param {string} key - LocalStorage key to import into.
 * @param {function} callback - Optional function to call after import.
 */
export function importLocalStorageData(file, key, callback) {
  if (!file || file.type !== "application/json") {
    alert("Please select a valid .json file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      localStorage.setItem(key, JSON.stringify(parsed));
      alert("Data imported successfully.");
      if (callback) callback(parsed);
    } catch (err) {
      console.error("Import failed:", err);
      alert("Invalid JSON format.");
    }
  };

  reader.readAsText(file);
}
