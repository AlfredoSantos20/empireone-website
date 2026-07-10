import { motion } from "framer-motion";
import { PORTFOLIO } from "@/constants/site";import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What we build"
          title={
            <>
              Confidential work, <GradientText>proven at scale</GradientText>
            </>
          }
          description="Most of our engagements are protected by NDAs. We can't share client names or product details — but we can show the types of websites and applications we deliver."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <motion.article
              key={p.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-6 backdrop-blur-xl transition-colors hover:border-primary/35"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${p.accent} opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90`}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <span className="text-xs font-semibold tabular-nums text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gradient">
                {p.category}
              </h3>
              <p className="relative mt-3 min-h-[3.25rem] text-sm leading-relaxed text-muted-foreground">
                {p.scope}
              </p>

              <div className="relative mt-6 h-px w-full bg-gradient-to-r from-primary/60 to-transparent" />            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
