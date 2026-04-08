import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";
import { History, Eye, Target, Heart, Award, Users, Lightbulb, Handshake, Building } from "lucide-react";

const values = [
  { key: "value1", icon: Award },
  { key: "value2", icon: Heart },
  { key: "value3", icon: Users },
  { key: "value4", icon: Lightbulb },
  { key: "value5", icon: Handshake },
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">{t("about.title")}</h1>
          <p className="text-primary-foreground/70 text-base max-w-xl mx-auto">NACTVET REG/0999P — Babati, Manyara, Tanzania</p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-college-green-light flex items-center justify-center">
                  <History className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{t("about.historyTitle")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("about.history")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.history2")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-xl p-8 card-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-college-green-light flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground">{t("about.visionTitle")}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t("about.vision")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-card rounded-xl p-8 card-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-college-blue-light flex items-center justify-center">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground">{t("about.missionTitle")}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t("about.mission")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground text-center mb-10">{t("about.valuesTitle")}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.key} delay={i * 80}>
                <div className="text-center p-4 rounded-xl bg-muted hover:bg-college-green-light transition-colors">
                  <v.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{t(`about.${v.key}`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex items-center gap-3 justify-center mb-6">
              <Building className="w-6 h-6 text-primary" />
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{t("about.facilitiesTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("about.facilities")}</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
