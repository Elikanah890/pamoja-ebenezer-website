import { Star, MapPin, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";

const alumni = [
  { name: "Grace D", year: 2019, course: "Sewing", job: "Fashion Designer, Arusha", testimonial_en: "Pamoja Ebenezer gave me the practical skills to start my own tailoring business. Today I employ 3 people!", testimonial_sw: "Pamoja Ebenezer ilinipa ujuzi wa vitendo kuanzisha biashara yangu ya ushonaji. Leo naajiri watu 3!" },
  { name: "Jerry  D", year: 2020, course: "Horticulture", job: "Farm Manager, Babati", testimonial_en: "The hands-on training in modern farming techniques transformed my family's farm. We now export vegetables!", testimonial_sw: "Mafunzo ya vitendo ya kilimo cha kisasa yalibadilisha shamba la familia yangu. Sasa tunauza mboga nje ya nchi!" },
  { name: "Cecy", year: 2021, course: "Computer Studies", job: "IT Assistant, Dodoma", testimonial_en: "I came with zero computer knowledge. Now I work in a government office managing databases.", testimonial_sw: "Nilikuja bila ujuzi wa kompyuta. Sasa nafanya kazi ofisini nikisimamia hifadhidata." },
  { name: "Elkana karera", year: 2018, course: "Animal Husbandry", job: "Livestock Officer, Manyara", testimonial_en: "The college connected me with NGOs who helped me start a poultry project. I'm now a community leader.", testimonial_sw: "Chuo kiliniunganisha na mashirika yaliyonisaidia kuanza mradi wa kuku. Sasa ni kiongozi wa jamii." },
];

const communityProjects = [
  { key: "freeTraining", icon: "🧵" },
  { key: "farmDemo", icon: "🌱" },
  { key: "computerLit", icon: "💻" },
  { key: "youthEmp", icon: "🤝" },
];

export default function Impact() {
  const { t, lang } = useI18n();

  return (
    <main className="pt-20 lg:pt-24 pb-20 lg:pb-0">
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              {t("impact.title")}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              {t("impact.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-3">
              {t("impact.alumniTitle")}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              {t("impact.alumniSubtitle")}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumni.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 100}>
                <div className="bg-card rounded-xl border border-border p-6 card-shadow hover:card-shadow-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4 flex-1">
                    "{lang === "sw" ? person.testimonial_sw : person.testimonial_en}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-heading font-bold text-foreground">{person.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{person.job}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{person.course} — Class of {person.year}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-foreground text-center mb-3">
              {t("impact.communityTitle")}
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
              {t("impact.communitySubtitle")}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityProjects.map((proj, i) => (
              <ScrollReveal key={proj.key} delay={i * 100}>
                <div className="bg-card rounded-xl border border-border p-6 text-center card-shadow h-full">
                  <span className="text-4xl mb-4 block">{proj.icon}</span>
                  <h3 className="font-heading font-bold text-base mb-2 text-foreground">{t(`impact.project.${proj.key}`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`impact.project.${proj.key}Desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
