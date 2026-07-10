import { motion } from "framer-motion";
import { Rocket, Lightbulb, Medal } from "lucide-react";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

const pillars = [
  { icon: Rocket, title: "Mission", body: "Empower ambitious teams with software that compounds their advantage." },
  { icon: Lightbulb, title: "Vision", body: "A world where every business ships category-defining digital products." },
  { icon: Medal, title: "Experience", body: "12+ years shipping mission-critical platforms across 5 continents." },
];

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About EmpireOne"
          title={
            <>
              A studio of <GradientText>engineers, designers</GradientText> and cloud architects.
            </>
          }
          description="We partner with founders, product leaders and enterprises to design and build the software that powers their next chapter."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-8 backdrop-blur-xl transition-colors hover:border-primary/30"
            >
              <div className="relative inline-flex">
                <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.45),transparent_68%)] opacity-80 blur-md transition-opacity group-hover:opacity-100" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_10px_28px_-10px_rgba(255,122,24,0.75)] ring-1 ring-white/15">
                  <p.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-border to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
