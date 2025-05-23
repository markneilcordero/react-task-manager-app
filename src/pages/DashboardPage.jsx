import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import DashboardSummaryCards from "../components/dashboard/DashboardSummaryCards";
import TaskStatusChart from "../components/dashboard/TaskStatusChart";
import PriorityBreakdownChart from "../components/dashboard/PriorityBreakdownChart";
import TaskTrendChart from "../components/dashboard/TaskTrendChart";

// Optional
import TimeRangeFilter from "../components/dashboard/TimeRangeFilter";
import { getLocalData } from "../utils/localStorageHelpers";
import { filterTasksByDateRange } from "../utils/dashboardStats";

const STORAGE_KEY = "task-manager-app-data";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [range, setRange] = useState("30d"); // options: "7d", "30d", "all"

  useEffect(() => {
    const allTasks = getLocalData(STORAGE_KEY, []);
    const filtered = filterTasksByDateRange(allTasks, range);
    setTasks(filtered);
  }, [range]);

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="app-content container py-5 flex-grow-1">
        <h2 className="text-center mb-4">Dashboard</h2>

        <TimeRangeFilter selected={range} onChange={setRange} />

        <DashboardSummaryCards tasks={tasks} />

        <div className="row">
          <div className="col-md-6 mb-4">
            <TaskStatusChart tasks={tasks} />
          </div>
          <div className="col-md-6 mb-4">
            <PriorityBreakdownChart tasks={tasks} />
          </div>
        </div>

        <div className="mb-4">
          <TaskTrendChart tasks={tasks} />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
