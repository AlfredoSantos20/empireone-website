import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion, useInView } from "framer-motion";
import CountUpImport from "react-countup";
import { STATS } from "@/constants/site";

type CountUpProps = { end: number; duration?: number; separator?: string };

const CountUp =
  typeof CountUpImport === "function"
    ? CountUpImport
    : (CountUpImport as { default: ComponentType<CountUpProps> }).default;

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [start, setStart] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (inView) setStart(true);
  }, [inView]);

  return (
    <section aria-label="Statistics" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="glass grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-5"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient">
                  {mounted && start ? (
                    <CountUp end={s.end} duration={2.2} separator="," />
                  ) : (
                    0
                  )}
                  {s.suffix}
                </span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
