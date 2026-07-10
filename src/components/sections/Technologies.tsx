import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/constants/site";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";

export function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our stack"
          title={
            <>
              Battle-tested <GradientText>modern technologies</GradientText>
            </>
          }
          description="We pick tools by fit — not fashion. Your architecture stays fast, secure and easy to hire for."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {TECHNOLOGIES.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="cursor-default rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
