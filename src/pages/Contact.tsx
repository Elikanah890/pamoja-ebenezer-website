import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <main className="pt-20 lg:pt-24">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">{t("contact.title")}</h1>
          <p className="text-primary-foreground/70 text-base max-w-xl mx-auto">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">{t("contact.name")}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">{t("contact.email")}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">{t("contact.message")}</label>
                  <textarea
                    id="message"
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  {sending ? "Sending..." : t("contact.send")}
                </Button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div className="bg-muted rounded-xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">P.O. Box 460, Babati, Manyara, Tanzania</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">Email</p>
                      <a href="mailto:pamojaebenezervtc@gmail.com" className="text-sm text-primary hover:underline">pamojaebenezervtc@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">Phone</p>
                      <div className="space-y-1">
                        <a href="tel:+255794820139" className="block text-sm text-primary hover:underline">0794 820 139</a>
                        <a href="tel:+255685748752" className="block text-sm text-primary hover:underline">0685 748 752</a>
                        <a href="tel:+255745273524" className="block text-sm text-primary hover:underline">0745 273 524</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">{t("contact.officeHours")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.officeHoursValue")}</p>
                      <p className="text-xs text-muted-foreground mt-1">{t("contact.responseTime")}</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-80">
                  <iframe
                    title="Pamoja Ebenezer College Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31896.35!2d35.74!3d-4.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18446e1a4d8c1b0b%3A0x6b8b0d6c3b6c!2sBabati%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
