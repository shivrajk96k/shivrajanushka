import { openResources } from "@/lib/books-data";
import { ExternalLink } from "lucide-react";

export default function OpenResources() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="font-display font-bold text-2xl text-foreground mb-2 text-center">Free Open Resources</h2>
        <p className="text-muted-foreground text-sm text-center mb-8">Thousands of free educational materials from trusted platforms</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {openResources.map((res) => (
            <a
              key={res.name}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-glow transition-all group"
            >
              <span className="text-2xl block mb-2">{res.icon}</span>
              <p className="font-display font-semibold text-xs text-foreground">{res.name}</p>
              <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">{res.description}</p>
              <ExternalLink className="w-3 h-3 text-primary mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
