import React, { useRef } from "react";
import { importLocalStorageData } from "../../utils/dataExportImport";

export default function ImportDataCard() {
  const fileInputRef = useRef(null);
  const STORAGE_KEY = "task-manager-app-data";

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    importLocalStorageData(file, STORAGE_KEY, () => {
      alert("Tasks imported! Please refresh the page to see updates.");
    });
    e.target.value = ""; // Reset input so same file can be selected again
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">📥 Import Data</h5>
        <p className="card-text">
          Upload a <code>.json</code> file to restore your task data from a backup.
        </p>
        <button className="btn btn-outline-primary" onClick={handleImportClick}>
          Import Tasks
        </button>

        <input
          type="file"
          accept=".json"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
