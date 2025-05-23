import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

// Optional enhancements
import FilterBar from "../components/tasks/FilterBar";
import SortControls from "../components/tasks/SortControls";

export default function TasksPage() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="app-content container py-5 flex-grow-1">
        <h2 className="text-center mb-4">My Tasks</h2>

        <TaskForm />

        <div className="d-flex justify-content-between align-items-center my-3">
          <FilterBar />
          <SortControls />
        </div>

        <TaskList />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
