import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Selected work"
          title={
            <>
              Products we've engineered <GradientText>from zero to scale</GradientText>
            </>
          }
          description="A glimpse into recent engagements — from fintech dashboards to healthcare platforms."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute inset-6 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur">
                  <div className="mb-2 flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 6 }).map((_, k) => (
                      <div key={k} className="h-8 rounded bg-white/[0.06]" />
                    ))}
                  </div>
                  <div className="mt-2 h-10 rounded bg-white/[0.06]" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gradient">{p.category}</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:-rotate-45 group-hover:border-primary group-hover:text-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
