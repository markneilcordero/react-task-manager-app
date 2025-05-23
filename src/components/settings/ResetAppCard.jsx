import React, { useState } from "react";

export default function ResetAppCard() {
  const STORAGE_KEY = "task-manager-app-data";
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleResetConfirmed = () => {
    localStorage.removeItem(STORAGE_KEY);
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      <div className="card shadow-sm border-danger">
        <div className="card-body">
          <h5 className="card-title text-danger">🗑️ Reset App</h5>
          <p className="card-text">
            This will permanently delete all your saved tasks from LocalStorage.
          </p>
          <button className="btn btn-danger" onClick={() => setShowConfirmModal(true)}>
            Reset All Data
          </button>
        </div>
      </div>

      {/* ✅ Confirm Reset Modal */}
      {showConfirmModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">⚠️ Confirm Reset</h5>
                <button className="btn-close" onClick={() => setShowConfirmModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete all your task data? This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleResetConfirmed}>
                  Yes, Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Success Modal */}
      {showSuccessModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">✅ App Reset</h5>
                <button className="btn-close" onClick={() => setShowSuccessModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>All task data has been deleted.</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
