import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";
import { Button } from "@/components/marketing/Button";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Pricing"
          title={
            <>
              Transparent plans, <GradientText>enterprise-grade outcomes</GradientText>
            </>
          }
          description="Simple engagement models. Fixed scope, dedicated squads or long-term retainers."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl ${
                p.highlighted
                  ? "border-primary/50 bg-gradient-to-b from-[#ff7a18]/10 to-transparent shadow-[0_20px_60px_-20px_rgba(255,122,24,0.4)]"
                  : "border-border bg-card/50"
              }`}
            >
              {p.highlighted ? (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  as="a"
                  href="#contact"
                  variant={p.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
