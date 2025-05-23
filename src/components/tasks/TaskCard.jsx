import React from "react";
import { formatDateReadable } from "../../utils/dateUtils";

export default function TaskCard({ task, onUpdate, onDelete }) {
  const handleToggleComplete = () => {
    const updatedTask = { ...task, completed: !task.completed };
    onUpdate(updatedTask);
  };

  const handleDelete = () => {
    if (confirm(`Delete task: "${task.name}"?`)) {
      onDelete(task.id);
    }
  };

  return (
    <div
      className={`card h-100 shadow-sm border-${task.completed ? "success" : "secondary"}`}
    >
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
          <button
            className={`btn btn-sm btn-${task.completed ? "warning" : "success"}`}
            onClick={handleToggleComplete}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
