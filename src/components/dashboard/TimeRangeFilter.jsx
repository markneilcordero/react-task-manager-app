import React from "react";

export default function TimeRangeFilter({ selected, onChange }) {
  const options = [
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
    { label: "All Time", value: "all" }
  ];

  return (
    <div className="d-flex justify-content-center mb-4 gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`btn btn-sm ${
            selected === opt.value ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
