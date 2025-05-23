import React, { useEffect, useState } from "react";
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

export default function TaskForm({ onSave, taskToEdit }) {
  const [form, setForm] = useState(defaultForm);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setForm(taskToEdit);
    }
  }, [taskToEdit]);

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
      setModalMessage("Task name is required.");
      setShowModal(true);
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

    setModalMessage(form.id ? "Task updated successfully!" : "Task added successfully!");
    setShowModal(true);

    setForm(defaultForm);
    onSave?.(); // refresh task list
  };

  return (
    <>
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

      {/* ✅ Success Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">✅ Success</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
