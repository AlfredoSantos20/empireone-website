import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Loved by teams"
          title={
            <>
              <GradientText>Kind words</GradientText> from operators we've partnered with
            </>
          }
        />

        <div className="relative mx-auto mt-8 max-w-3xl">
          <div className="glass rounded-3xl p-10 sm:p-12">
            <Quote className="h-8 w-8 text-primary" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="mt-6 text-xl leading-relaxed sm:text-2xl"
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setI((v) => (v - 1 + n) % n)}
                  aria-label="Previous testimonial"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setI((v) => (v + 1) % n)}
                  aria-label="Next testimonial"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
