/**
 * Get data from LocalStorage by key.
 * @param {string} key - The storage key.
 * @param {*} defaultValue - Fallback value if key is not found or parsing fails.
 * @returns {*} Parsed data or default value.
 */
export function getLocalData(key, defaultValue = []) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (err) {
    console.error("Error loading from LocalStorage:", err);
    return defaultValue;
  }
}

/**
 * Save data to LocalStorage by key.
 * @param {string} key - The storage key.
 * @param {*} value - The value to save.
 */
export function saveLocalData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error saving to LocalStorage:", err);
  }
}
