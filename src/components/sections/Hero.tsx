import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Code2, Cloud, Cpu, Smartphone, LineChart, ShieldCheck } from "lucide-react";import { Button } from "@/components/marketing/Button";
import { Badge } from "@/components/marketing/Badge";
import { GradientText } from "@/components/marketing/GradientText";
import { AnimatedBackground } from "@/components/marketing/AnimatedBackground";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HERO_LINE1_PLAIN = "Building ";
const HERO_LINE1_GRADIENT = "Digital Products";
const HERO_LINE2_PLAIN = "That Transform ";
const HERO_LINE2_GRADIENT = "Businesses.";
const HERO_LINE1_LENGTH = HERO_LINE1_PLAIN.length + HERO_LINE1_GRADIENT.length;

function HeroTypewriter() {
  const totalLength =
    HERO_LINE1_PLAIN.length +
    HERO_LINE1_GRADIENT.length +
    HERO_LINE2_PLAIN.length +
    HERO_LINE2_GRADIENT.length;
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && count === totalLength) {
      timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (deleting && count === 0) {
      timeout = setTimeout(() => setDeleting(false), 500);
      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(
      () => setCount((c) => (deleting ? c - 1 : c + 1)),
      deleting ? 35 : 70,
    );

    return () => clearTimeout(timeout);
  }, [count, deleting, totalLength]);

  let remaining = count;
  const n1 = Math.min(remaining, HERO_LINE1_PLAIN.length);
  remaining -= n1;
  const n2 = Math.min(remaining, HERO_LINE1_GRADIENT.length);
  remaining -= n2;
  const n3 = Math.min(remaining, HERO_LINE2_PLAIN.length);
  remaining -= n3;
  const n4 = Math.min(remaining, HERO_LINE2_GRADIENT.length);

  return (
    <>
      <span aria-hidden className="invisible select-none">
        Building <GradientText>Digital Products</GradientText>
        <br />
        That Transform <GradientText>Businesses.</GradientText>
      </span>
      <span className="absolute left-0 top-0 w-full">
        {n1 > 0 && <span>{HERO_LINE1_PLAIN.slice(0, n1)}</span>}
        {n2 > 0 && <GradientText>{HERO_LINE1_GRADIENT.slice(0, n2)}</GradientText>}
        {count > HERO_LINE1_LENGTH && <br />}
        {n3 > 0 && <span>{HERO_LINE2_PLAIN.slice(0, n3)}</span>}
        {n4 > 0 && <GradientText>{HERO_LINE2_GRADIENT.slice(0, n4)}</GradientText>}
        <span className="ml-0.5 inline-block w-[3px] animate-pulse text-gradient">|</span>
      </span>
    </>
  );
}

export function Hero() {  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 md:pt-40">
      <AnimatedBackground />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start gap-6">
          <motion.div variants={item}>
            <Badge>Enterprise digital product studio</Badge>
          </motion.div>
          <motion.h1
            variants={item}
            className="relative text-left text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            <HeroTypewriter />
          </motion.h1>          <motion.p variants={item} className="max-w-xl text-base text-muted-foreground sm:text-lg">
            We architect, design and engineer premium software for ambitious teams — from
            custom platforms and mobile apps to AI, cloud and cybersecurity.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#contact">
              <Button size="lg">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            {/* <a href="#portfolio">
              <Button size="lg" variant="secondary">
                <Play className="h-4 w-4" /> See Our Work
              </Button>
            </a> */}
          </motion.div>
          {/* <motion.div variants={item} className="flex flex-wrap items-center gap-6 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#ff7a18", "#ffb347", "#f97316", "#fca55f"].map((c) => (
                  <span key={c} className="h-7 w-7 rounded-full border-2 border-background" style={{ background: c }} />
                ))}
              </div>
              <span>260+ teams shipping with EmpireOne</span>
            </div>
          </motion.div> */}
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto h-[520px] w-full max-w-xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(255,122,24,0.35),transparent_60%)] blur-2xl" />

      {/* Dashboard mock */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-1/2 top-8 w-[92%] -translate-x-1/2 rounded-2xl border border-border p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-xs text-muted-foreground">empireone / dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "MRR", value: "$284K", up: "+18%" },
            { label: "Users", value: "42.9K", up: "+7%" },
            { label: "Uptime", value: "99.99%", up: "+0.02%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-white/[0.03] p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-lg font-semibold">{s.value}</div>
              <div className="text-[10px] text-emerald-400">{s.up}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 h-24 w-full overflow-hidden rounded-xl border border-border bg-black/40">
          <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ff7a18" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ff7a18" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C40,60 60,30 100,40 C140,50 160,80 200,60 C240,40 260,20 300,30 C340,40 370,60 400,45 L400,100 L0,100 Z"
              fill="url(#g)"
            />
            <path
              d="M0,70 C40,60 60,30 100,40 C140,50 160,80 200,60 C240,40 260,20 300,30 C340,40 370,60 400,45"
              fill="none"
              stroke="#ff7a18"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[Code2, Cloud, Cpu, ShieldCheck].map((Icon, i) => (
            <div key={i} className="grid h-9 place-items-center rounded-lg border border-border bg-white/[0.03] text-muted-foreground">
              <Icon className="h-4 w-4" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating mobile */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [-4, -6, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 bottom-0 w-40 rounded-3xl border border-border bg-card/80 p-3 shadow-[0_30px_60px_-20px_rgba(255,122,24,0.35)] backdrop-blur-xl sm:-left-8"
      >
        <div className="rounded-2xl bg-gradient-primary p-3 text-primary-foreground">
          <Smartphone className="h-4 w-4" />
          <div className="mt-6 text-[10px] uppercase tracking-wider opacity-80">Balance</div>
          <div className="text-lg font-semibold">$18,420.51</div>
        </div>
        <div className="mt-3 space-y-2">
          {["Payroll", "Stripe payout", "AWS invoice"].map((t) => (
            <div key={t} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-2.5 py-2 text-[11px]">
              <span className="text-muted-foreground">{t}</span>
              <span className="font-medium">$—</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating API card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-2 top-1/2 w-56 rounded-2xl p-4 sm:-right-6"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> API · 200 OK
        </div>
        <pre className="mt-3 overflow-hidden text-[11px] leading-relaxed text-muted-foreground">
{`POST /v1/deploy
{
  "region": "us-east-1",
  "status": "shipped"
}`}
        </pre>
      </motion.div>

      {/* Floating analytics pill */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -left-2 top-24 flex items-center gap-3 rounded-2xl p-3 sm:-left-6"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
          <LineChart className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conversions</div>
          <div className="text-sm font-semibold">+42.8%</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
