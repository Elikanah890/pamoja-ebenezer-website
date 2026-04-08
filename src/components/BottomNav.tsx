import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Image, Phone, HelpCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  { key: "nav.home", path: "/", icon: Home },
  { key: "nav.courses", path: "/courses", icon: BookOpen },
  { key: "nav.gallery", path: "/gallery", icon: Image },
  { key: "nav.contact", path: "/contact", icon: Phone },
  { key: "nav.faq", path: "/faq", icon: HelpCircle },
];

export default function BottomNav() {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] rounded-lg px-2 py-1 transition-colors touch-feedback ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-tight">{t(item.key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
