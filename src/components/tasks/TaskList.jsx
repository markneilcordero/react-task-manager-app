import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { getLocalData, saveLocalData } from "../../utils/localStorageHelpers";

const STORAGE_KEY = "task-manager-app-data";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getLocalData(STORAGE_KEY, []));
  }, []);

  const handleUpdate = (updatedTask) => {
    const updatedList = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    saveLocalData(STORAGE_KEY, updatedList);
    setTasks(updatedList);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const filtered = tasks.filter((task) => task.id !== id);
      saveLocalData(STORAGE_KEY, filtered);
      setTasks(filtered);
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
