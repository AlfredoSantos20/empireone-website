import { motion } from "framer-motion";
import { SERVICES } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What we do"
          title={
            <>
              End-to-end services for <GradientText>modern software teams</GradientText>
            </>
          }
          description="Ten disciplines. One integrated team. Every capability you need to design, build, ship and scale."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl transition-colors hover:border-primary/40"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="mt-4 flex items-center text-xs text-muted-foreground">
                <span className="transition-colors group-hover:text-foreground">Learn more →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
