import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { groupTasksByDate } from "../../utils/dashboardStats";

// Register chart components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function TaskTrendChart({ tasks }) {
  const grouped = groupTasksByDate(tasks);
  const labels = Object.keys(grouped).sort();
  const dataPoints = labels.map((date) => grouped[date]);

  const data = {
    labels,
    datasets: [
      {
        label: "Tasks Created",
        data: dataPoints,
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13,110,253,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0
        }
      }
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Tasks Over Time</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
