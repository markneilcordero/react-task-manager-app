import React from "react";

const steps = [
  {
    step: 1,
    title: "Add Your First Task",
    description: "Use the AI Assistant or task form to create a new task instantly.",
    icon: "📝"
  },
  {
    step: 2,
    title: "Organize & Prioritize",
    description: "Group tasks by category and set their priority and due dates.",
    icon: "📂"
  },
  {
    step: 3,
    title: "Visualize Progress",
    description: "Check your productivity using charts and insights on the dashboard.",
    icon: "📊"
  },
  {
    step: 4,
    title: "Backup & Restore",
    description: "Export your tasks as a .json file or import them on another device.",
    icon: "💾"
  }
];

export default function OnboardingSteps() {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <div className="row">
        {steps.map(({ step, title, description, icon }) => (
          <div className="col-md-6 col-lg-3 mb-4" key={step}>
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <div className="display-5">{icon}</div>
                <h5 className="card-title mt-3">Step {step}: {title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
