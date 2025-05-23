import React from "react";
import TaskCard from "./TaskCard";
import { getLocalData, saveLocalData } from "../../utils/localStorageHelpers";

const STORAGE_KEY = "task-manager-app-data";

export default function TaskList({ tasks, onUpdate }) {
  const handleUpdate = (updatedTask) => {
    const updatedList = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    saveLocalData(STORAGE_KEY, updatedList);
    onUpdate?.();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const filtered = tasks.filter((task) => task.id !== id);
      saveLocalData(STORAGE_KEY, filtered);
      onUpdate?.();
    }
  };

  if (!tasks.length) {
    return <p className="text-center text-muted">No tasks yet. Add one above.</p>;
  }

  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-6 col-lg-4 mb-4" key={task.id}>
          <TaskCard task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}
