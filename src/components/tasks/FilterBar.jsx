import React, { useState } from "react";

export default function FilterBar({ onFilterChange }) {
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const handleFilterChange = (newStatus, newPriority) => {
    setStatus(newStatus);
    setPriority(newPriority);
    if (onFilterChange) {
      onFilterChange({ status: newStatus, priority: newPriority });
    }
  };

  return (
    <div className="d-flex flex-wrap align-items-center gap-3">
      <div>
        <label className="form-label me-2 mb-0">Status</label>
        <select
          className="form-select form-select-sm"
          value={status}
          onChange={(e) => handleFilterChange(e.target.value, priority)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      <div>
        <label className="form-label me-2 mb-0">Priority</label>
        <select
          className="form-select form-select-sm"
          value={priority}
          onChange={(e) => handleFilterChange(status, e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    </div>
  );
}
