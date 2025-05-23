import React from "react";
import { exportLocalStorageData } from "../../utils/dataExportImport";

export default function ExportDataCard() {
  const handleExport = () => {
    exportLocalStorageData("task-manager-app-data", "task-manager-backup.json");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">📤 Export Data</h5>
        <p className="card-text">
          Download all your tasks as a <code>.json</code> file for backup or migration.
        </p>
        <button className="btn btn-primary" onClick={handleExport}>
          Export Tasks
        </button>
      </div>
    </div>
  );
}
