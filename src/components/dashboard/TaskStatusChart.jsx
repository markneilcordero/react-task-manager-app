import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { isTaskOverdue } from "../../utils/dateUtils";

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaskStatusChart({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const overdue = tasks.filter((t) => !t.completed && isTaskOverdue(t.dueDate)).length;
  const pending = tasks.filter((t) => !t.completed && !isTaskOverdue(t.dueDate)).length;

  const data = {
    labels: ["Completed", "Pending", "Overdue"],
    datasets: [
      {
        data: [completed, pending, overdue],
        backgroundColor: ["#198754", "#0d6efd", "#dc3545"],
        borderColor: ["#198754", "#0d6efd", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Task Status</h5>
        <Pie data={data} />
      </div>
    </div>
  );
}
