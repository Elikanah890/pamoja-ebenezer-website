import { Link } from "react-router-dom";
import { Scissors, Flower2, Beef, Monitor, Clock, GraduationCap, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const courses = [
  {
    key: "sewing",
    icon: Scissors,
    duration: "6",
    topics: ["Machine use", "Pattern making", "Fashion design", "Garment repair"],
    career: ["Self-employment", "Tailor shop", "Fashion designer"],
    color: "border-college-gold",
    iconBg: "bg-college-gold-light text-college-gold",
  },
  {
    key: "horticulture",
    icon: Flower2,
    duration: "12",
    topics: ["Vegetable & fruit production", "Modern farming tech", "Pest control", "Irrigation"],
    career: ["Farm manager", "Agribusiness", "NGO work"],
    color: "border-primary",
    iconBg: "bg-college-green-light text-primary",
  },
  {
    key: "animal",
    icon: Beef,
    duration: "12",
    topics: ["Livestock & poultry care", "Nutrition", "Breeding", "Project management"],
    career: ["Livestock officer", "Farm owner", "Animal health assistant"],
    color: "border-secondary",
    iconBg: "bg-college-blue-light text-secondary",
  },
  {
    key: "computer",
    icon: Monitor,
    duration: "6",
    topics: ["Basic computer skills", "Internet & email", "Microsoft Office", "Typing"],
    career: ["Data entry", "Office assistant", "IT support"],
    color: "border-college-gold",
    iconBg: "bg-college-gold-light text-college-gold",
  },
];

export default function CoursesPage() {
  const { t } = useI18n();

  return (
    <main className="pt-20 lg:pt-24">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">{t("courses.title")}</h1>
          <p className="text-primary-foreground/70 text-base max-w-xl mx-auto">{t("courses.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-8 max-w-4xl mx-auto">
            {courses.map((course, i) => (
              <ScrollReveal key={course.key} delay={i * 100}>
                <div className={`bg-card rounded-xl border-l-4 ${course.color} p-6 lg:p-8 card-shadow`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className={`w-14 h-14 rounded-xl ${course.iconBg} flex items-center justify-center shrink-0`}>
                      <course.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-2">{t(`courses.${course.key}`)}</h2>
                      <p className="text-muted-foreground mb-4">{t(`courses.${course.key}Desc`)}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{t("courses.duration")}: {course.duration} {t("courses.months")}</span>
                        <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-primary" />{t("courses.eligibility")}: {t("courses.std7")}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-sm font-heading font-bold text-foreground mb-2">Topics</h4>
                          <ul className="space-y-1">
                            {course.topics.map((topic) => (
                              <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-heading font-bold text-foreground mb-2 flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" /> Career Paths
                          </h4>
                          <ul className="space-y-1">
                            {course.career.map((c) => (
                              <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link to="/admissions">
                        <Button variant="default" size="default">{t("nav.applyNow")}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
