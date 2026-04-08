import { Link } from "react-router-dom";
import { Scissors, Flower2, Beef, Monitor, Clock, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { HandHelping, Users, Lightbulb, TreePine } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const courses = [
  { key: "sewing", icon: Scissors, duration: "6", color: "bg-college-gold-light text-college-gold" },
  { key: "horticulture", icon: Flower2, duration: "12", color: "bg-college-green-light text-primary" },
  { key: "animal", icon: Beef, duration: "12", color: "bg-college-blue-light text-secondary" },
  { key: "computer", icon: Monitor, duration: "6", color: "bg-college-gold-light text-college-gold" },
];

const stats = [
  { key: "stats.graduates", value: 500, suffix: "+" },
  { key: "stats.courses", value: 4 },
  { key: "stats.years", value: 10, suffix: "+" },
  { key: "stats.placement", value: 85, suffix: "%" },
];

const whyItems = [
  { key: "handson", icon: HandHelping },
  { key: "teachers", icon: Users },
  { key: "opportunities", icon: Lightbulb },
  { key: "environment", icon: TreePine },
];

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Students learning agriculture" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative section-container py-24 lg:py-32">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-accent font-heading font-bold text-sm tracking-widest uppercase mb-4">
                NACTVET REG/0999P
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
                Pamoja Ebenezer<br />
                <span className="text-accent">College of Agriculture</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg lg:text-xl text-primary-foreground/90 font-body mb-2 italic">
                {t("hero.tagline")}
              </p>
              <p className="text-base text-primary-foreground/70 font-body mb-8">
                {t("hero.description")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/admissions">
                  <Button variant="hero" size="xl">{t("hero.apply")}</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">{t("hero.contact")}</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted section-padding">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center space-y-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground font-medium">{t(stat.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground mb-3">{t("courses.title")}</h2>
              <p className="text-muted-foreground">{t("courses.subtitle")}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <ScrollReveal key={course.key} delay={i * 100}>
                <div className="group bg-card rounded-xl border border-border p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 touch-feedback h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center mb-4`}>
                    <course.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{t(`courses.${course.key}`)}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{t(`courses.${course.key}Desc`)}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration} {t("courses.months")}</span>
                    <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" />{t("courses.std7")}</span>
                  </div>
                  <Link to="/courses">
                    <Button variant="outline" size="sm" className="w-full">{t("courses.learnMore")}</Button>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses">
              <Button variant="default" size="lg">{t("courses.viewAll")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground mb-3">{t("why.title")}</h2>
              <p className="text-muted-foreground">{t("why.subtitle")}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-college-green-light flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2 text-foreground">{t(`why.${item.key}`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`why.${item.key}Desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              {t("hero.tagline")}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/admissions">
                <Button variant="hero" size="xl">{t("hero.apply")}</Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">{t("hero.contact")}</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
