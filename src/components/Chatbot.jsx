import { useState, useRef, useEffect } from "react";

const MAX_MESSAGES = 5;
const GREETING =
  "Hi! I'm Ekene's AI assistant. Ask me anything about her skills, projects, or experience. I have " +
  MAX_MESSAGES +
  " responses available per session.";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMsgCount, setUserMsgCount] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading || userMsgCount >= MAX_MESSAGES) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setUserMsgCount((c) => c + 1);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages
            .filter((m) => m.role !== "system")
            .slice(-6) // Keep last 6 messages for context window
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        throw new Error(`API returned ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, the chat service isn't available right now. You can reach Ekene directly at ekene.ndubueze@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const remaining = MAX_MESSAGES - userMsgCount;

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? "bg-base-700 border border-base-600 rotate-0"
            : "bg-accent hover:bg-accent-light animate-pulse-glow"
        }`}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg
            className="w-5 h-5 text-text-secondary"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-base-950"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-base-800 border border-base-600/40 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-up">
          {/* Header */}
          <div className="px-4 py-3 bg-base-700/50 border-b border-base-600/30">
            <div className="flex items-center gap-2">
              <div className="glow-dot" />
              <div>
                <p className="text-sm font-heading font-semibold text-text-primary">
                  Ask About Ekene
                </p>
                <p className="text-[0.65rem] text-text-muted font-mono">
                  Powered by OpenAI GPT-4o-mini
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="chatbot-container flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-[350px] min-h-[200px]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent/15 text-text-primary border border-accent/20"
                      : "bg-base-700/50 text-text-secondary border border-base-600/20"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-base-700/50 border border-base-600/20 px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="px-4 py-3 border-t border-base-600/30 bg-base-800">
            {remaining > 0 ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me something..."
                  disabled={loading}
                  className="flex-1 bg-base-700/50 border border-base-600/30 rounded-lg px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 transition-colors disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="p-2 text-accent hover:text-accent-light disabled:text-text-muted disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            ) : (
              <p className="text-xs text-text-muted text-center py-1">
                Session limit reached. Email{" "}
                <a
                  href="mailto:ekene.ndubueze@gmail.com"
                  className="text-accent hover:underline"
                >
                  ekene.ndubueze@gmail.com
                </a>{" "}
                for more info.
              </p>
            )}
            {remaining > 0 && remaining <= MAX_MESSAGES && (
              <p className="text-[0.6rem] text-text-muted text-center mt-1.5 font-mono">
                {remaining} message{remaining !== 1 ? "s" : ""} remaining this
                session
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
