import { motion } from "framer-motion";
import { Target, Eye, Trophy } from "lucide-react";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

const pillars = [
  { icon: Target, title: "Mission", body: "Empower ambitious teams with software that compounds their advantage." },
  { icon: Eye, title: "Vision", body: "A world where every business ships category-defining digital products." },
  { icon: Trophy, title: "Experience", body: "12+ years shipping mission-critical platforms across 5 continents." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-xl"
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle,rgba(255,122,24,0.18),transparent_70%)]" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
