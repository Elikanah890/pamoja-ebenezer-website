import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, Download, FileText } from "lucide-react";

const steps = [
  { en: "Get application form (online or download PDF)", sw: "Pata fomu ya maombi (mtandaoni au pakua PDF)" },
  { en: "Fill with personal details and course choice", sw: "Jaza na taarifa binafsi na chaguo la kozi" },
  { en: "Attach academic certificates", sw: "Ambatisha vyeti vya masomo" },
  { en: "Submit to college office or online", sw: "Wasilisha kwenye ofisi ya chuo au mtandaoni" },
  { en: "Wait for confirmation", sw: "Subiri uthibitisho" },
];

const fees = [
  { course: "Sewing (Ushonaji)", duration: "6 months", tuition: "TZS 300,000" },
  { course: "Horticulture", duration: "1 year", tuition: "TZS 500,000" },
  { course: "Animal Husbandry", duration: "1 year", tuition: "TZS 500,000" },
  { course: "Computer Studies", duration: "6 months", tuition: "TZS 250,000" },
];

export default function AdmissionsPage() {
  const { t, lang } = useI18n();

  return (
    <main className="pt-20 lg:pt-24">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
            {t("nav.admissions")}
          </h1>
          <p className="text-primary-foreground/70 text-base max-w-xl mx-auto">
            {lang === "en" ? "Your journey to a brighter future starts here." : "Safari yako ya mustakabali bora inaanza hapa."}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              {lang === "en" ? "How to Apply" : "Jinsi ya Kujisajili"}
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 bg-card rounded-xl p-5 card-shadow">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-foreground font-medium pt-1">{lang === "en" ? step.en : step.sw}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              {lang === "en" ? "Fee Structure" : "Muundo wa Ada"}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-card rounded-xl overflow-hidden card-shadow">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="text-left p-4 font-heading font-bold text-foreground">{lang === "en" ? "Course" : "Kozi"}</th>
                      <th className="text-left p-4 font-heading font-bold text-foreground">{t("courses.duration")}</th>
                      <th className="text-left p-4 font-heading font-bold text-foreground">{lang === "en" ? "Tuition" : "Ada"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((fee) => (
                      <tr key={fee.course} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium text-foreground">{fee.course}</td>
                        <td className="p-4 text-muted-foreground">{fee.duration}</td>
                        <td className="p-4 font-bold text-primary">{fee.tuition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          <p className="text-xs text-muted-foreground text-center mt-4">
            * {lang === "en" ? "Fees are subject to change. Contact us for the latest information." : "Ada zinaweza kubadilika. Wasiliana nasi kwa taarifa za hivi karibuni."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              {lang === "en" ? "Ready to Start?" : "Uko Tayari Kuanza?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {lang === "en"
                ? "Contact us to get your application form or visit our campus in Babati, Manyara."
                : "Wasiliana nasi kupata fomu ya maombi au tembelea chuo chetu Babati, Manyara."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button variant="default" size="lg">{t("hero.contact")}</Button>
              </Link>
              <a href="https://wa.me/255794820139?text=Hello%2C%20I%20need%20an%20application%20form" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  <FileText className="w-4 h-4" />
                  {lang === "en" ? "Request Form via WhatsApp" : "Omba Fomu kwa WhatsApp"}
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
