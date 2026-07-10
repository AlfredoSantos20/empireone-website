import { motion } from "framer-motion";
import { PROCESS } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How we work"
          title={
            <>
              A proven <GradientText>7-step</GradientText> delivery process
            </>
          }
          description="Transparent milestones, weekly demos and continuous delivery from kickoff to long-term support."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:block" />
          <ol className="space-y-8">
            {PROCESS.map((p, i) => (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className={`rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="text-xs font-semibold tracking-[0.2em] text-gradient">STEP {p.step}</span>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-gradient md:left-1/2">
                  {i + 1}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
