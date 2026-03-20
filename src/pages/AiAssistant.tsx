import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const allMsgs = [...messages, userMsg];
    setMessages(allMsgs);
    setInput("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("ai-chat", {
        body: { messages: allMsgs },
      });

      if (error) throw error;
      setMessages([...allMsgs, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...allMsgs, { role: "assistant", content: "Sorry, something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col container mx-auto max-w-3xl px-4 py-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs text-primary font-medium">AI-Powered</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Book Assistant</h1>
          <p className="text-sm text-muted-foreground mt-1">Ask about any topic in Math, Physics or Chemistry</p>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-[60vh]">
          {messages.length === 0 && (
            <div className="text-center py-16">
              <Bot className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">Ask me anything about Mathematics, Physics or Chemistry!</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["Explain quantum mechanics", "What is calculus?", "Periodic table basics"].map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs hover:bg-muted transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <div className={`max-w-[75%] rounded-xl px-4 py-3 text-sm ${msg.role === "user" ? "gradient-primary text-primary-foreground" : "glass text-foreground"}`}>
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <span className="animate-pulse text-muted-foreground text-sm">Thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about Math, Physics or Chemistry..."
            className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-4 py-3 rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
