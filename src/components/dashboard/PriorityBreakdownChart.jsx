import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// Register necessary chart features
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PriorityBreakdownChart({ tasks }) {
  const low = tasks.filter((t) => t.priority === "Low").length;
  const medium = tasks.filter((t) => t.priority === "Medium").length;
  const high = tasks.filter((t) => t.priority === "High").length;

  const data = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        data: [low, medium, high],
        backgroundColor: ["#0dcaf0", "#ffc107", "#dc3545"],
        borderColor: ["#0dcaf0", "#ffc107", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Priority Breakdown</h5>
        <Doughnut data={data} />
      </div>
    </div>
  );
}
