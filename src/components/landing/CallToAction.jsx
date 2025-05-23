import React from "react";

export default function CallToAction() {
  return (
    <section className="text-center my-5 py-5 bg-primary text-white rounded shadow-sm">
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to boost your productivity?</h2>
        <p className="lead mb-4">
          Start managing your tasks with the help of an intelligent AI Assistant.
        </p>
        <a href="/tasks" className="btn btn-light btn-lg">
          Get Started Now
        </a>
      </div>
    </section>
  );
}
