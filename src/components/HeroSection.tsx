import { BookOpen, Sparkles, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">World's Largest Book Collection</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Every Book You Need,{" "}
          <span className="text-gradient">One Platform</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Access world-class textbooks in Mathematics, Physics & Chemistry.
          Priced at just ₹0.50 per page.
        </p>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {[
            { icon: "∑", label: "Mathematics", count: "12+ Books" },
            { icon: "⚛", label: "Physics", count: "12+ Books" },
            { icon: "🧪", label: "Chemistry", count: "12+ Books" },
          ].map((cat) => (
            <div key={cat.label} className="glass rounded-xl px-6 py-4 text-center hover:shadow-glow transition-shadow">
              <span className="text-2xl">{cat.icon}</span>
              <p className="font-display font-semibold text-foreground text-sm mt-1">{cat.label}</p>
              <p className="text-xs text-muted-foreground">{cat.count}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Globe className="w-3.5 h-3.5" />
          Powered by BookversePro • AI-Enhanced Learning
        </div>
      </div>
    </section>
  );
}
