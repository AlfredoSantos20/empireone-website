import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/marketing/Button";
export function CTA() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1a0f08] via-background to-[#180a04] p-10 sm:p-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff7a18]/30 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ffb347]/20 blur-[100px]" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Ready to build your next{" "}
                <span className="text-gradient">digital product?</span>
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Book a discovery call. We'll map your vision into a phased roadmap within 48 hours.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <a href="#contact">
                <Button size="lg">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="secondary">
                  Explore services
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
