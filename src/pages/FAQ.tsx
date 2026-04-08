import { useState } from "react";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

interface FaqItem {
  q_en: string;
  q_sw: string;
  a_en: string;
  a_sw: string;
  category: string;
}

const faqs: FaqItem[] = [
  { category: "admissions", q_en: "How do I apply to the college?", q_sw: "Ninajisajilije chuoni?", a_en: "You can apply online through our Admissions page, download the application form, or visit our campus in Babati to get a physical form.", a_sw: "Unaweza kuomba mtandaoni kupitia ukurasa wetu wa Uandikishaji, kupakua fomu ya maombi, au kutembelea chuo chetu Babati kupata fomu." },
  { category: "admissions", q_en: "What are the entry requirements?", q_sw: "Sifa za kujiunga ni zipi?", a_en: "Minimum Standard 7 (primary school) completion. Some courses may accept Form 4 leavers. No age limit.", a_sw: "Kiwango cha chini ni kumaliza Darasa la 7. Baadhi ya kozi zinaweza kukubali waliomaliza Kidato cha 4. Hakuna kikomo cha umri." },
  { category: "admissions", q_en: "When does the next intake start?", q_sw: "Ulaji ujao unaanza lini?", a_en: "We have two intakes per year: January and July. Check our News & Events page for exact dates.", a_sw: "Tuna ulaji mara mbili kwa mwaka: Januari na Julai. Angalia ukurasa wetu wa Habari kwa tarehe sahihi." },
  { category: "fees", q_en: "How much are the tuition fees?", q_sw: "Ada za masomo ni kiasi gani?", a_en: "Fees vary by course. Sewing and Computer courses (6 months) start from TZS 300,000. Horticulture and Animal Husbandry (1 year) start from TZS 500,000. See the Admissions page for full details.", a_sw: "Ada hutofautiana kwa kozi. Kozi za Ushonaji na Kompyuta (miezi 6) zinaanzia TZS 300,000. Kilimo na Ufugaji (mwaka 1) vinaanzia TZS 500,000." },
  { category: "fees", q_en: "Are there scholarships available?", q_sw: "Kuna udhamini unapatikana?", a_en: "Yes! We offer merit-based and need-based scholarships. Contact our admissions office for more information.", a_sw: "Ndiyo! Tunatoa udhamini kwa msingi wa ufaulu na uhitaji. Wasiliana na ofisi yetu ya uandikishaji." },
  { category: "fees", q_en: "Can I pay fees in installments?", q_sw: "Ninaweza kulipa ada kwa awamu?", a_en: "Yes, we offer flexible payment plans. You can pay termly or make arrangements with the finance office.", a_sw: "Ndiyo, tunatoa mipango ya malipo rahisi. Unaweza kulipa kwa muhula au kupanga na ofisi ya fedha." },
  { category: "courses", q_en: "What courses do you offer?", q_sw: "Mnatoa kozi gani?", a_en: "We offer four main courses: Sewing (Ushonaji), Horticulture, Animal Husbandry (Ufugaji), and Computer Studies.", a_sw: "Tunatoa kozi nne kuu: Ushonaji, Kilimo cha Bustani, Ufugaji, na Kompyuta." },
  { category: "courses", q_en: "Are the courses accredited?", q_sw: "Kozi zimeidhinishwa?", a_en: "Yes, all our courses are registered and accredited by NACTVET (National Council for Technical and Vocational Education and Training). REG/0999P.", a_sw: "Ndiyo, kozi zetu zote zimesajiliwa na kuidhinishwa na NACTVET. REG/0999P." },
  { category: "campus", q_en: "Is accommodation available?", q_sw: "Kuna malazi?", a_en: "Yes, we have student dormitories on campus. Both male and female hostels are available at affordable rates.", a_sw: "Ndiyo, tuna hosteli za wanafunzi chuoni. Hosteli za wanaume na wanawake zinapatikana kwa bei nafuu." },
  { category: "campus", q_en: "Where is the college located?", q_sw: "Chuo kiko wapi?", a_en: "We are located in Babati, Manyara Region, Tanzania. P.O. Box 460, Babati.", a_sw: "Tuko Babati, Mkoa wa Manyara, Tanzania. S.L.P 460, Babati." },
  { category: "campus", q_en: "What facilities are available?", q_sw: "Kuna vifaa gani?", a_en: "Our campus has modern classrooms, a sewing workshop, computer lab, agricultural farm, library, and student dormitories.", a_sw: "Chuo chetu kina madarasa ya kisasa, karakana ya ushonaji, maabara ya kompyuta, shamba la kilimo, maktaba, na hosteli." },
];

const categories = ["all", "admissions", "fees", "courses", "campus"];

export default function FAQ() {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const q = lang === "sw" ? faq.q_sw : faq.q_en;
    const a = lang === "sw" ? faq.a_sw : faq.a_en;
    const matchesSearch = !search || q.toLowerCase().includes(search.toLowerCase()) || a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20 lg:pt-24 pb-20 lg:pb-0">
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              {t("faq.title")}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              {t("faq.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("faq.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors touch-feedback ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {t(`faq.cat.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 card-shadow">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground">
                    {lang === "sw" ? faq.q_sw : faq.q_en}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {lang === "sw" ? faq.a_sw : faq.a_en}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t("faq.noResults")}</p>
          )}
        </div>
      </section>
    </main>
  );
}
