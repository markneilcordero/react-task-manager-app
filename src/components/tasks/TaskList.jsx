import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { getLocalData, saveLocalData } from "../../utils/localStorageHelpers";

const STORAGE_KEY = "task-manager-app-data";

export default function TaskList({ tasks, onUpdate, onEdit }) {
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleUpdate = (updatedTask) => {
    const updatedList = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    saveLocalData(STORAGE_KEY, updatedList);
    onUpdate?.();
  };

  const confirmDelete = () => {
    if (!taskToDelete) return;
    const filtered = tasks.filter((task) => task.id !== taskToDelete.id);
    saveLocalData(STORAGE_KEY, filtered);
    onUpdate?.();
    setTaskToDelete(null);
  };

  if (!tasks.length) {
    return <p className="text-center text-muted">No tasks yet. Add one above.</p>;
  }

  return (
    <>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-6 col-lg-4 mb-4" key={task.id}>
            <TaskCard
              task={task}
              onUpdate={handleUpdate}
              onDelete={() => setTaskToDelete(task)}
              onEdit={onEdit}
            />
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {taskToDelete && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirm Delete</h5>
                <button className="btn-close" onClick={() => setTaskToDelete(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this task?</p>
                <p className="fw-bold">{taskToDelete.name}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setTaskToDelete(null)}>
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
