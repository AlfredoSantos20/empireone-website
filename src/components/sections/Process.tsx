import { motion } from "framer-motion";
import { PROCESS } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="process" className="relative py-14 sm:py-20">
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

        <div className="relative mt-8 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-5 lg:left-1/2 lg:-translate-x-px" />

          <ol className="space-y-5 sm:space-y-6 lg:space-y-10">
            {PROCESS.map((p, i) => {
              const isEven = i % 2 === 0;

              const card = (
                <div
                  className={cn(
                    "w-full rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-xl sm:p-6",
                    "lg:max-w-md lg:w-full",
                    isEven ? "lg:text-right" : "lg:text-left",
                  )}
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-gradient">
                    STEP {p.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold sm:text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              );

              return (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-12 sm:pl-14 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:pl-0 xl:gap-x-20"
                >
                  <span
                    className={cn(
                      "absolute top-6 z-10 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-gradient sm:h-9 sm:w-9",
                      "left-4 -translate-x-1/2 sm:left-5",
                      "lg:left-1/2 lg:-translate-x-1/2",
                    )}
                  >
                    {i + 1}
                  </span>

                  {isEven ? (
                    <>
                      <div className="lg:flex lg:justify-end">{card}</div>
                      <div className="hidden lg:block" aria-hidden />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" aria-hidden />
                      <div className="lg:flex lg:justify-start">{card}</div>
                    </>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
