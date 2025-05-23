import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import FilterBar from "../components/tasks/FilterBar";
import SortControls from "../components/tasks/SortControls";

import { getLocalData } from "../utils/localStorageHelpers";

const STORAGE_KEY = "task-manager-app-data";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    refreshTasks();
  }, []);

  const refreshTasks = () => {
    const storedTasks = getLocalData(STORAGE_KEY, []);
    setTasks(storedTasks);
    setTaskToEdit(null); // Reset form after save
  };

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="app-content container py-5 flex-grow-1">
        <h2 className="text-center mb-4">My Tasks</h2>

        <TaskForm onSave={refreshTasks} taskToEdit={taskToEdit} />

        <div className="d-flex justify-content-between align-items-center my-3">
          <FilterBar />
          <SortControls />
        </div>

        <TaskList tasks={tasks} onUpdate={refreshTasks} onEdit={setTaskToEdit} />
      </main>
      <Footer />
      <ChatWidget onTaskAdded={refreshTasks} />
    </div>
  );
}
