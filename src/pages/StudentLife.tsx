import { Users, Trophy, Music, Compass, Heart, BookOpen } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";

const clubs = [
  { key: "farming", icon: Compass, color: "bg-college-green-light text-primary" },
  { key: "fashion", icon: Users, color: "bg-college-gold-light text-college-gold" },
  { key: "tech", icon: BookOpen, color: "bg-college-blue-light text-secondary" },
  { key: "sports", icon: Trophy, color: "bg-college-green-light text-primary" },
  { key: "music", icon: Music, color: "bg-college-gold-light text-college-gold" },
  { key: "community", icon: Heart, color: "bg-college-blue-light text-secondary" },
];

const schedule = [
  { time: "6:00 AM", en: "Wake up & morning exercise", sw: "Amka na mazoezi ya asubuhi" },
  { time: "7:00 AM", en: "Breakfast", sw: "Chai ya asubuhi" },
  { time: "8:00 AM", en: "Morning classes / practical sessions", sw: "Masomo ya asubuhi / vitendo" },
  { time: "12:30 PM", en: "Lunch break", sw: "Mapumziko ya mchana" },
  { time: "1:30 PM", en: "Afternoon classes / field work", sw: "Masomo ya mchana / kazi shambani" },
  { time: "4:00 PM", en: "Clubs & sports", sw: "Vilabu na michezo" },
  { time: "6:00 PM", en: "Evening study / free time", sw: "Kusoma jioni / mapumziko" },
  { time: "9:30 PM", en: "Lights out", sw: "Kulala" },
];

export default function StudentLife() {
  const { t, lang } = useI18n();

  return (
    <main className="pt-20 lg:pt-24 pb-20 lg:pb-0">
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              {t("studentLife.title")}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              {t("studentLife.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Clubs */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-3">
              {t("studentLife.clubsTitle")}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              {t("studentLife.clubsSubtitle")}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, i) => (
              <ScrollReveal key={club.key} delay={i * 80}>
                <div className="bg-card rounded-xl border border-border p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 touch-feedback h-full">
                  <div className={`w-12 h-12 rounded-lg ${club.color} flex items-center justify-center mb-4`}>
                    <club.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {t(`studentLife.club.${club.key}`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`studentLife.club.${club.key}Desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-3">
              {t("studentLife.scheduleTitle")}
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
              {t("studentLife.scheduleSubtitle")}
            </p>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            {schedule.map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                  <span className="font-heading font-bold text-primary min-w-[80px] text-sm">{item.time}</span>
                  <span className="text-foreground">{lang === "sw" ? item.sw : item.en}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-3">
              {t("studentLife.supportTitle")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {["counseling", "career", "academic"].map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <div className="bg-card rounded-xl border border-border p-6 text-center card-shadow h-full">
                  <h3 className="font-heading font-bold text-base mb-2 text-foreground">{t(`studentLife.support.${key}`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`studentLife.support.${key}Desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
