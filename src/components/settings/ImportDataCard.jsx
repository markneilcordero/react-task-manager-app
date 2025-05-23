import React, { useRef, useState } from "react";
import { importLocalStorageData } from "../../utils/dataExportImport";

export default function ImportDataCard() {
  const fileInputRef = useRef(null);
  const STORAGE_KEY = "task-manager-app-data";
  const [showModal, setShowModal] = useState(false);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    importLocalStorageData(file, STORAGE_KEY, () => {
      setShowModal(true);
    });
    e.target.value = ""; // Reset input so same file can be selected again
  };

  return (
    <>
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

      {/* ✅ Modal for import success */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">✅ Import Successful</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Your tasks were imported successfully.</p>
                <p className="text-muted">Please refresh the page to see updates.</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
