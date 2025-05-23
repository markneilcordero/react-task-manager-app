import React, { useState } from "react";

export default function SortControls({ onSortChange }) {
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
    if (onSortChange) {
      onSortChange({ sortBy: newSortBy, order: newOrder });
    }
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <div>
        <label className="form-label me-2 mb-0">Sort By</label>
        <select
          className="form-select form-select-sm"
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value, order)}
        >
          <option value="createdAt">Date Created</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div>
        <label className="form-label me-2 mb-0">Order</label>
        <select
          className="form-select form-select-sm"
          value={order}
          onChange={(e) => handleSortChange(sortBy, e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}
