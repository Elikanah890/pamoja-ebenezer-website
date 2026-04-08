import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const upcomingEvents = [
  { date: "2026-05-15", title_en: "Open Day & Campus Tour", title_sw: "Siku ya Wazi na Ziara ya Chuo", desc_en: "Visit our campus, meet faculty, and explore our programs. Free entry for all!", desc_sw: "Tembelea chuo chetu, kutana na walimu, na kuchunguza programu zetu. Kuingia bure!", category: "event" },
  { date: "2026-06-01", title_en: "New Intake Registration Opens", title_sw: "Usajili wa Wanafunzi Wapya Unaanza", desc_en: "Applications for the July 2026 intake are now open. Apply early!", desc_sw: "Maombi ya ulaji wa Julai 2026 yamefunguliwa. Omba mapema!", category: "admission" },
  { date: "2026-07-20", title_en: "Agricultural Innovation Fair", title_sw: "Maonyesho ya Ubunifu wa Kilimo", desc_en: "Students showcase their farming innovations and projects to the community.", desc_sw: "Wanafunzi wanaonyesha ubunifu wao wa kilimo na miradi kwa jamii.", category: "event" },
];

const pastEvents = [
  { date: "2025-12-10", title_en: "Graduation Ceremony 2025", title_sw: "Sherehe ya Kuhitimu 2025", desc_en: "Over 120 students graduated with certificates in various vocational courses.", desc_sw: "Zaidi ya wanafunzi 120 walihitimu na vyeti katika kozi mbalimbali za ufundi." },
  { date: "2025-09-05", title_en: "Sports Day & Cultural Festival", title_sw: "Siku ya Michezo na Tamasha la Utamaduni", desc_en: "A day of sports, music, dance, and cultural celebrations.", desc_sw: "Siku ya michezo, muziki, ngoma, na sherehe za kitamaduni." },
  { date: "2025-06-15", title_en: "Community Farm Training", title_sw: "Mafunzo ya Kilimo kwa Jamii", desc_en: "Free farming training workshop for local community members.", desc_sw: "Warsha ya mafunzo ya kilimo bure kwa wanajamii." },
];

const announcements = [
  { date: "2026-04-01", title_en: "New Computer Lab Opened", title_sw: "Maabara Mpya ya Kompyuta Imefunguliwa", desc_en: "We are proud to announce our new state-of-the-art computer lab with 30 workstations.", desc_sw: "Tunajivunia kutangaza maabara yetu mpya ya kompyuta ya kisasa yenye vituo 30 vya kazi." },
  { date: "2026-03-15", title_en: "Partnership with Manyara Region", title_sw: "Ushirikiano na Mkoa wa Manyara", desc_en: "We have signed an MOU with the Manyara Regional Commissioner's Office.", desc_sw: "Tumesaini MOU na Ofisi ya Mkuu wa Mkoa wa Manyara." },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function NewsEvents() {
  const { t, lang } = useI18n();

  return (
    <main className="pt-20 lg:pt-24 pb-20 lg:pb-0">
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              {t("news.title")}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              {t("news.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-12">
              {t("news.upcoming")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl border border-border overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="gradient-hero p-4">
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                      {lang === "sw" ? event.title_sw : event.title_en}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      {lang === "sw" ? event.desc_sw : event.desc_en}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-12">
              {t("news.announcements")}
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {announcements.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl border border-border p-6 card-shadow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="w-4 h-4" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {lang === "sw" ? item.title_sw : item.title_en}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "sw" ? item.desc_sw : item.desc_en}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-12">
              {t("news.past")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl border border-border p-6 card-shadow h-full">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.date)}
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2 text-foreground">
                    {lang === "sw" ? event.title_sw : event.title_en}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "sw" ? event.desc_sw : event.desc_en}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
