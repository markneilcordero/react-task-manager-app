import React from "react";
import { saveLocalData } from "../../utils/localStorageHelpers";

export default function ResetAppCard() {
  const STORAGE_KEY = "task-manager-app-data";

  const handleReset = () => {
    const confirmReset = window.confirm(
      "⚠️ Are you sure you want to delete all your task data? This action cannot be undone."
    );
    if (confirmReset) {
      localStorage.removeItem(STORAGE_KEY);
      alert("App data has been reset.");
      window.location.reload(); // Optional: refresh to reset UI
    }
  };

  return (
    <div className="card shadow-sm border-danger">
      <div className="card-body">
        <h5 className="card-title text-danger">🗑️ Reset App</h5>
        <p className="card-text">
          This will permanently delete all your saved tasks from LocalStorage.
        </p>
        <button className="btn btn-danger" onClick={handleReset}>
          Reset All Data
        </button>
      </div>
    </div>
  );
}
