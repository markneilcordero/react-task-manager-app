import React, { useState, useEffect, useRef } from "react";
import { handleCommand } from "../../utils/commandInterpreter";
import { defaultSuggestedCommands } from "../../constants/commands";
import SuggestedCommands from "./SuggestedCommands";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newCommand, setNewCommand] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAddCommand = () => {
    const trimmed = newCommand.trim();
    if (!trimmed) return;

    const userMessage = { type: "user", text: trimmed };
    const response = handleCommand(trimmed);
    const botMessage = { type: "bot", text: `🤖 ${response}` };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setNewCommand("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleAddCommand();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          fontSize: "24px",
          zIndex: 1050,
        }}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div
          className="card position-fixed shadow-lg"
          style={{
            bottom: "80px",
            right: "20px",
            width: "300px",
            maxHeight: "400px",
            zIndex: 1051,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="card-header p-2 d-flex justify-content-between align-items-center">
            <strong>AI Assistant</strong>
            <button
              className="btn-close btn-sm"
              onClick={() => setOpen(false)}
            ></button>
          </div>

          <div
            className="card-body overflow-auto px-3"
            style={{ flex: 1 }}
            ref={scrollRef}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 text-${msg.type === "user" ? "end" : "start"}`}
              >
                <span
                  className={`badge bg-${msg.type === "user" ? "secondary" : "light text-dark"}`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="card-footer p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Type a command..."
                value={newCommand}
                onChange={(e) => setNewCommand(e.target.value)}
                onKeyDown={handleEnter}
              />
              <button
                className="btn btn-sm btn-primary"
                onClick={handleAddCommand}
              >
                Send
              </button>
            </div>
            <SuggestedCommands
              onCommandClick={(cmd) => setNewCommand(cmd)}
            />
          </div>
        </div>
      )}
    </>
  );
}
