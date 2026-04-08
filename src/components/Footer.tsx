import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-secondary text-secondary-foreground pb-20 lg:pb-0">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">PE</span>
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Pamoja Ebenezer</p>
                <p className="text-xs text-secondary-foreground/70">College of Agriculture</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 italic">"{t("footer.tagline")}"</p>
            <p className="text-xs text-secondary-foreground/60">NACTVET REG/0999P</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { label: t("nav.about"), path: "/about" },
                { label: t("nav.courses"), path: "/courses" },
                { label: t("nav.admissions"), path: "/admissions" },
                { label: t("nav.gallery"), path: "/gallery" },
                { label: t("nav.contact"), path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {t("footer.address")}
              </li>
              <li>
                <a href="tel:+255794820139" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  0794 820 139
                </a>
              </li>
              <li>
                <a href="mailto:pamojaebenezervtc@gmail.com" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  pamojaebenezervtc@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4">{t("footer.followUs")}</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/pamoja_ebenezer_college/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors touch-feedback" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/pamojaebenezer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors touch-feedback" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@pamojaebenezer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors touch-feedback" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary-foreground/10 text-center">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Pamoja Ebenezer College of Agriculture. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
