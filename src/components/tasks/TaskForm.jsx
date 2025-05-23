import React, { useState } from "react";
import { generateId } from "../../utils/uuidGenerator";
import { getLocalData, saveLocalData } from "../../utils/localStorageHelpers";

const STORAGE_KEY = "task-manager-app-data";
const defaultForm = {
  id: "",
  name: "",
  priority: "Medium",
  dueDate: "",
  completed: false,
};

export default function TaskForm({ onSave }) {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Task name is required.");
      return;
    }

    const task = {
      ...form,
      id: form.id || generateId(),
      createdAt: form.createdAt || new Date().toISOString(),
    };

    const tasks = getLocalData(STORAGE_KEY, []);
    const updatedTasks = form.id
      ? tasks.map((t) => (t.id === task.id ? task : t))
      : [...tasks, task];

    saveLocalData(STORAGE_KEY, updatedTasks);
    alert(form.id ? "Task updated!" : "Task added!");

    setForm(defaultForm);
    if (onSave) onSave(); // Optional callback
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter task..."
          />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Priority</label>
          <select
            name="priority"
            className="form-select"
            value={form.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          {form.id ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
}
