import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import PaymentDialog from "@/components/PaymentDialog";
import OpenResources from "@/components/OpenResources";
import { allBooks, categoryInfo, type Book, type BookCategory } from "@/lib/books-data";
import { Search } from "lucide-react";

export default function Index() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [paymentBook, setPaymentBook] = useState<Book | null>(null);

  const filtered = allBooks.filter((b) => {
    const matchCat = selectedCategory === "all" || b.category === selectedCategory;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Filters */}
      <section className="px-4 pb-4">
        <div className="container mx-auto">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search books by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === "all" ? "gradient-primary text-primary-foreground shadow-glow" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}
            >
              All Books
            </button>
            {(Object.keys(categoryInfo) as BookCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${selectedCategory === cat ? "gradient-primary text-primary-foreground shadow-glow" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}
              >
                <span>{categoryInfo[cat].icon}</span>
                {categoryInfo[cat].label}
              </button>
            ))}
          </div>

          {/* Book grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} onBuy={setPaymentBook} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No books found. Try a different search.</p>
          )}
        </div>
      </section>

      <OpenResources />

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        <p>© 2025 BookversePro. Pricing: ₹0.50 per page.</p>
      </footer>

      {paymentBook && <PaymentDialog book={paymentBook} onClose={() => setPaymentBook(null)} />}
    </div>
  );
}
