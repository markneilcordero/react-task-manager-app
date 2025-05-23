import React, { useState } from "react";
import { exportLocalStorageData } from "../../utils/dataExportImport";

export default function ExportDataCard() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleExport = () => {
    const date = new Date().toISOString().split("T")[0];
    const filename = `task-manager-backup-${date}.json`;
    const result = exportLocalStorageData("task-manager-app-data", filename);

    setModalMessage(result.message);
    setShowModal(true);
  };

  return (
    <>
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

      {/* ✅ Export Result Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">📁 Export</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
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
