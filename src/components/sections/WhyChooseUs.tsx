import { motion } from "framer-motion";
import { Rocket, Code2, ShieldCheck, Layers, Cpu, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WHY_US } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

const WHY_US_ICONS: LucideIcon[] = [Rocket, Code2, ShieldCheck, Layers, Cpu, Handshake];

export function WhyChooseUs() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why EmpireOne"
          title={
            <>
              The details other agencies <GradientText>skip</GradientText>
            </>
          }
          description="Speed without shortcuts. Craft without ego. Enterprise practices from day one."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((f, i) => {
            const Icon = WHY_US_ICONS[i];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-xl transition-colors hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="relative inline-flex shrink-0">
                    <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.45),transparent_68%)] opacity-80 blur-md transition-opacity group-hover:opacity-100" />
                    <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_10px_28px_-10px_rgba(255,122,24,0.75)] ring-1 ring-white/15">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/50 via-border to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
