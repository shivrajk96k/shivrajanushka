import { Book } from "@/lib/books-data";
import { X, IndianRupee, ExternalLink, Smartphone } from "lucide-react";

interface PaymentDialogProps {
  book: Book;
  onClose: () => void;
}

const UPI_ID = "8421137348@ybl";
const PHONE = "+918421137348";

const paymentApps = [
  { name: "PhonePe", color: "from-purple-600 to-indigo-700", scheme: `phonepe://pay?pa=${UPI_ID}&pn=BookversePro&am=`, icon: "📱" },
  { name: "Google Pay", color: "from-blue-500 to-cyan-600", scheme: `gpay://upi/pay?pa=${UPI_ID}&pn=BookversePro&am=`, icon: "💳" },
  { name: "Paytm", color: "from-blue-600 to-sky-700", scheme: `paytmmp://pay?pa=${UPI_ID}&pn=BookversePro&am=`, icon: "🔵" },
  { name: "BHIM UPI", color: "from-orange-500 to-red-600", scheme: `upi://pay?pa=${UPI_ID}&pn=BookversePro&am=`, icon: "🇮🇳" },
  { name: "Any UPI App", color: "from-emerald-500 to-teal-600", scheme: `upi://pay?pa=${UPI_ID}&pn=BookversePro&am=`, icon: "💰" },
];

export default function PaymentDialog({ book, onClose }: PaymentDialogProps) {
  const handlePay = (scheme: string) => {
    window.location.href = `${scheme}${book.price}&cu=INR`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md" onClick={onClose}>
      <div className="w-full max-w-sm glass rounded-2xl p-6 shadow-card animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-bold text-lg text-foreground">Payment</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Book info */}
        <div className="bg-secondary rounded-xl p-4 mb-5">
          <p className="text-sm font-medium text-foreground line-clamp-1">{book.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{book.pages} pages • {book.author}</p>
          <div className="flex items-center mt-2 text-primary font-display font-bold text-xl">
            <IndianRupee className="w-5 h-5" />
            {book.price}
          </div>
        </div>

        {/* Payment options */}
        <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
          <Smartphone className="w-3 h-3" /> Choose payment method
        </p>
        <div className="space-y-2">
          {paymentApps.map((app) => (
            <button
              key={app.name}
              onClick={() => handlePay(app.scheme)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${app.color} text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity`}
            >
              <span className="text-lg">{app.icon}</span>
              {app.name}
              <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
            </button>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-4">
          UPI: {UPI_ID} • Phone: {PHONE}
        </p>
      </div>
    </div>
  );
}
