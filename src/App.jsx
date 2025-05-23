import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import TasksPage from "./pages/TasksPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

// Shared layout
import ChatWidget from "./components/chat/ChatWidget";

function App() {
  return (
    <Router>
      <div>

        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <ChatWidget />
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default App;
