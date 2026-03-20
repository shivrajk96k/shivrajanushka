import { Book } from "@/lib/books-data";
import { BookOpen, IndianRupee } from "lucide-react";

interface BookCardProps {
  book: Book;
  onBuy: (book: Book) => void;
}

export default function BookCard({ book, onBuy }: BookCardProps) {
  return (
    <div className="group gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
      {/* Cover */}
      <div className={`h-40 bg-gradient-to-br ${book.coverColor} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        <BookOpen className="w-12 h-12 text-foreground/80 relative z-10 group-hover:scale-110 transition-transform" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-display font-semibold text-sm text-foreground line-clamp-2 leading-tight">{book.title}</h3>
        <p className="text-xs text-muted-foreground">{book.author}</p>
        <p className="text-xs text-muted-foreground/70 line-clamp-2">{book.description}</p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="flex items-center text-primary font-display font-bold text-lg">
              <IndianRupee className="w-4 h-4" />
              {book.price}
            </div>
            <span className="text-[10px] text-muted-foreground">{book.pages} pages</span>
          </div>
          <button
            onClick={() => onBuy(book)}
            className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Buy PDF
          </button>
        </div>
      </div>
    </div>
  );
}
