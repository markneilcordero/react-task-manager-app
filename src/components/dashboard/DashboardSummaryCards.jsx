import React from "react";
import { isTaskOverdue } from "../../utils/dateUtils";

export default function DashboardSummaryCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const overdue = tasks.filter((t) => !t.completed && isTaskOverdue(t.dueDate)).length;

  const stats = [
    {
      label: "Total Tasks",
      value: total,
      icon: "📋",
      bg: "primary"
    },
    {
      label: "Completed",
      value: completed,
      icon: "✅",
      bg: "success"
    },
    {
      label: "Overdue",
      value: overdue,
      icon: "⚠️",
      bg: "danger"
    }
  ];

  return (
    <div className="row text-center mb-4">
      {stats.map((stat, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div className={`card text-white bg-${stat.bg} shadow-sm`}>
            <div className="card-body">
              <div className="display-5">{stat.icon}</div>
              <h5 className="card-title mt-2">{stat.label}</h5>
              <p className="card-text fs-4 fw-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
