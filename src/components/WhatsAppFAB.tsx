import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const message = encodeURIComponent("Hello, I need information about courses at Pamoja Ebenezer College");

  return (
    <a
      href={`https://wa.me/255794820139?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center fab-shadow hover:scale-110 transition-transform touch-feedback"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
}
