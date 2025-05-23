import React from "react";

const testimonials = [
  {
    name: "Alex G.",
    role: "Freelancer",
    quote: "TaskMaster AI helped me stay on track without feeling overwhelmed. The assistant feels like a real productivity buddy!",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Maria R.",
    role: "Project Manager",
    quote: "Being able to visualize my team's progress and export data easily is a game-changer. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Jordan T.",
    role: "Student",
    quote: "I love the floating chatbot! It's simple, fast, and keeps me focused on deadlines.",
    avatar: "https://i.pravatar.cc/100?img=3"
  }
];

export default function Testimonials() {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">What Users Are Saying</h2>
      <div className="row justify-content-center">
        {testimonials.map((t, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <blockquote className="blockquote">
                <p className="mb-3">“{t.quote}”</p>
              </blockquote>
              <footer className="blockquote-footer">
                {t.name} <cite className="d-block">{t.role}</cite>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
