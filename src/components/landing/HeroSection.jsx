import React from "react";

export default function HeroSection() {
  return (
    <section className="text-center py-5 bg-light rounded shadow-sm">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">TaskMaster AI</h1>
        <p className="lead mb-4">
          A Smart Task Manager with a Built-in AI Assistant — No backend required.
        </p>
        <a href="/tasks" className="btn btn-primary btn-lg px-4">
          Start Managing Tasks
        </a>
        <div className="mt-4">
          <img
            src="/online-organizer.svg"
            alt="Hero Illustration"
            className="img-fluid mt-4"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </section>
  );
}
