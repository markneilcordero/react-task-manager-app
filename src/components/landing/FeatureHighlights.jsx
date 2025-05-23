import React from "react";

const features = [
  {
    icon: "🧠",
    title: "AI Assistant",
    description: "Get smart, actionable suggestions with our rule-based chatbot."
  },
  {
    icon: "📋",
    title: "Task Management",
    description: "Easily add, edit, complete, and prioritize tasks."
  },
  {
    icon: "📊",
    title: "Dashboard Analytics",
    description: "Visualize task trends and productivity using Chart.js."
  },
  {
    icon: "💾",
    title: "LocalStorage & Backup",
    description: "Data is stored locally and can be exported or imported as .json."
  }
];

export default function FeatureHighlights() {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Why TaskMaster AI?</h2>
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div className="col-sm-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <div className="display-4 mb-3">{feature.icon}</div>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
