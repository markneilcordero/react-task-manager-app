import React, { useState } from "react";
import { formatDateReadable } from "../../utils/dateUtils";

export default function TaskCard({ task, onUpdate, onDelete, onEdit }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleToggleComplete = () => {
    const updatedTask = { ...task, completed: !task.completed };
    onUpdate(updatedTask);
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className={`card h-100 shadow-sm border-${task.completed ? "success" : "secondary"}`}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className={`card-title ${task.completed ? "text-decoration-line-through text-success" : ""}`}>
                {task.name}
              </h5>
              <p className="card-text mb-1"><strong>Priority:</strong> {task.priority}</p>
              <p className="card-text mb-1"><strong>Due:</strong> {task.dueDate ? formatDateReadable(task.dueDate) : "None"}</p>
              <p className="card-text mb-0"><strong>Status:</strong> {task.completed ? "✅ Completed" : "⏳ Pending"}</p>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <button className="btn btn-sm btn-secondary" onClick={() => onEdit(task)}>Edit</button>
            <button
              className={`btn btn-sm btn-${task.completed ? "warning" : "success"}`}
              onClick={handleToggleComplete}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => setShowConfirmModal(true)}>
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Delete Confirmation Modal */}
      {showConfirmModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirm Delete</h5>
                <button className="btn-close" onClick={() => setShowConfirmModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the task:</p>
                <p className="fw-bold mb-0">{task.name}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={confirmDelete}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
