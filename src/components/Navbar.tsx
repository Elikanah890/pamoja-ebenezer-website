import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.courses", path: "/courses" },
  { key: "nav.admissions", path: "/admissions" },
  { key: "nav.studentLife", path: "/student-life" },
  { key: "nav.impact", path: "/impact" },
  { key: "nav.news", path: "/news" },
  { key: "nav.gallery", path: "/gallery" },
  { key: "nav.contact", path: "/contact" },
  { key: "nav.faq", path: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  const location = useLocation();

  const toggleLang = () => setLang(lang === "en" ? "sw" : "en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 touch-feedback">
          <img src={logo} alt="Pamoja Ebenezer College Logo" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" width={48} height={48} />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-sm lg:text-base text-foreground leading-tight">Pamoja Ebenezer</p>
            <p className="text-xs text-muted-foreground leading-tight">College of Agriculture</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-2.5 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname === item.path
                  ? "text-primary bg-college-green-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Switch language"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "SW" : "EN"}
          </button>
          <Link to="/admissions">
            <Button variant="hero" size="default">{t("nav.applyNow")}</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-muted touch-feedback"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-background shadow-xl animate-slide-in-left">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" width={32} height={32} />
                <span className="font-heading font-bold text-sm">Pamoja Ebenezer</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-muted touch-feedback" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[80vh] py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 text-base font-medium transition-colors touch-feedback ${
                    location.pathname === item.path
                      ? "text-primary bg-college-green-light"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="px-6 pt-4 space-y-3 border-t border-border mt-4">
                <Link to="/admissions" onClick={() => setOpen(false)}>
                  <Button variant="hero" className="w-full">{t("nav.applyNow")}</Button>
                </Link>
                <button
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium border border-border hover:bg-muted touch-feedback"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "en" ? "Badili kwa Kiswahili" : "Switch to English"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
