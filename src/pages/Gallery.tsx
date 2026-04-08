import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";

const categories = ["All", "Campus", "Classroom", "Farm", "Workshop", "Events", "Graduation"];

const placeholderImages = [
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop", category: "Campus", caption: "Our beautiful campus" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", category: "Classroom", caption: "Interactive learning sessions" },
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop", category: "Farm", caption: "Hands-on farming practice" },
  { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop", category: "Farm", caption: "Horticulture training" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", category: "Workshop", caption: "Sewing workshop" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop", category: "Classroom", caption: "Computer lab" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", category: "Events", caption: "Annual college event" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=600&h=400&fit=crop", category: "Graduation", caption: "Graduation ceremony" },
];

export default function GalleryPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? placeholderImages : placeholderImages.filter((img) => img.category === filter);

  return (
    <main className="pt-20 lg:pt-24">
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">{t("nav.gallery")}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors touch-feedback ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.src}-${filter}`} delay={i * 50}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 touch-feedback break-inside-avoid"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-card">
                    <p className="text-sm text-muted-foreground">{img.caption}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 touch-feedback" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <img
            src={filtered[lightbox]?.src.replace("w=600&h=400", "w=1200&h=800")}
            alt={filtered[lightbox]?.caption}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
