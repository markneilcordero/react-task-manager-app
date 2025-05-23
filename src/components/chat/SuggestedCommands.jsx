import React from "react";

const suggestedCommands = [
  "Add task: Buy groceries",
  "Show completed tasks",
  "Export data",
  "Import data",
  "Edit task: Change due date",
  "Delete task: Gym workout"
];

export default function SuggestedCommands({ onCommandClick }) {
  return (
    <section className="my-5">
      <h4 className="text-center mb-3">Try These Commands 👇</h4>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {suggestedCommands.map((cmd, index) => (
          <button
            key={index}
            className="btn btn-outline-secondary btn-sm"
            onClick={() => onCommandClick?.(cmd)}
          >
            {cmd}
          </button>
        ))}
      </div>
    </section>
  );
}
