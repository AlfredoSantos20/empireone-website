import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Building2,
  Cloud,
  Server,
  ShieldCheck,
  Sparkles,
  Palette,
  Workflow,
  Plug,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const CLIENTS = [
  "ACME CORP",
  "NORTHWIND",
  "STELLAR",
  "AURORA",
  "VERTEX",
  "NIMBUS",
  "OBSIDIAN",
  "HELIX",
  "QUANTUM",
  "MERIDIAN",
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  { icon: Code2, title: "Web Development", description: "Blazing-fast web apps built with modern React, Next.js and edge-native architectures." },
  { icon: Smartphone, title: "Mobile Apps", description: "Native-quality iOS & Android apps with Flutter and React Native." },
  { icon: Building2, title: "Enterprise Software", description: "Mission-critical platforms engineered for scale, compliance and reliability." },
  { icon: Cloud, title: "Cloud Solutions", description: "AWS, Azure and GCP architectures — resilient, observable and cost-optimized." },
  { icon: Server, title: "DevOps & Infra", description: "CI/CD, Kubernetes and IaC pipelines that ship code with confidence." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Zero-trust security, threat modeling and continuous compliance." },
  { icon: Sparkles, title: "AI Solutions", description: "LLM agents, RAG systems and computer vision built for production." },
  { icon: Palette, title: "UI / UX Design", description: "Design systems and product experiences that convert and delight." },
  { icon: Workflow, title: "Business Automation", description: "Streamline operations with intelligent workflows and integrations." },
  { icon: Plug, title: "API Development", description: "Type-safe REST and GraphQL APIs, versioned and documented." },
];

export const PROCESS = [
  { step: "01", title: "Discovery", description: "Deep-dive workshops to align on vision, users and success metrics." },
  { step: "02", title: "Planning", description: "Architecture, roadmap and milestones defined with your stakeholders." },
  { step: "03", title: "Design", description: "Design systems, prototypes and user flows validated end-to-end." },
  { step: "04", title: "Development", description: "Agile sprints with weekly demos and transparent progress." },
  { step: "05", title: "Testing", description: "Automated QA, load and security testing before every release." },
  { step: "06", title: "Deployment", description: "Zero-downtime rollouts on hardened cloud infrastructure." },
  { step: "07", title: "Support", description: "24/7 monitoring, SLAs and continuous improvement." },
];

export const TECHNOLOGIES = [
  "React", "Next.js", "Node.js", "Laravel", "NestJS", "TypeScript", "Tailwind",
  "Flutter", "React Native", "AWS", "Azure", "Docker", "Kubernetes",
  "PostgreSQL", "MySQL", "MongoDB", "Redis",
];

export const PORTFOLIO = [
  { title: "FinLedger Dashboard", category: "FinTech", accent: "from-orange-500/30 to-amber-300/10" },
  { title: "HealthPulse Mobile", category: "Healthcare", accent: "from-rose-500/30 to-orange-400/10" },
  { title: "EduSphere LMS", category: "Education", accent: "from-amber-400/30 to-yellow-300/10" },
  { title: "OrbitCRM Suite", category: "CRM", accent: "from-orange-400/30 to-red-400/10" },
  { title: "Nexus ERP", category: "Enterprise", accent: "from-orange-500/30 to-pink-400/10" },
  { title: "Vaultly Payments", category: "FinTech", accent: "from-amber-500/30 to-orange-300/10" },
];

export const STATS = [
  { end: 12, suffix: "+", label: "Years of Experience" },
  { end: 480, suffix: "+", label: "Projects Delivered" },
  { end: 260, suffix: "+", label: "Happy Clients" },
  { end: 38, suffix: "", label: "Countries Served" },
  { end: 99, suffix: "%", label: "Success Rate" },
];

export const WHY_US = [
  { title: "Fast Development", description: "Ship enterprise features in weeks, not quarters." },
  { title: "Clean Code", description: "Rigorous reviews, typed contracts and testing baked in." },
  { title: "Enterprise Security", description: "SOC2-ready practices from day one." },
  { title: "Scalable Architecture", description: "Systems designed to grow with your business." },
  { title: "Modern Technologies", description: "Battle-tested stacks aligned to your roadmap." },
  { title: "Long-term Support", description: "Partnership that continues far beyond launch." },
];

export const TESTIMONIALS = [
  {
    quote:
      "EmpireOne rebuilt our entire platform in under six months. Uptime, velocity and NPS have never been higher.",
    name: "Sofia Alvarez",
    role: "CTO, Northwind Financial",
  },
  {
    quote:
      "Their design and engineering craft is on par with the best product teams in the world. A true partner.",
    name: "Michael Chen",
    role: "VP Product, Aurora Health",
  },
  {
    quote:
      "From AI strategy to a shipped RAG system in production — flawless execution end to end.",
    name: "Priya Nair",
    role: "Head of Data, Vertex Labs",
  },
];

export const PRICING = [
  {
    name: "Starter",
    price: "$4,900",
    period: "/ project",
    description: "Perfect for MVPs and focused product launches.",
    features: ["Discovery workshop", "Up to 3 core modules", "UI/UX design", "Deployment on cloud", "30 days support"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$14,900",
    period: "/ project",
    description: "For growing teams that need scale and integrations.",
    features: ["Everything in Starter", "Custom integrations", "Advanced analytics", "CI/CD pipelines", "90 days support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Bespoke platforms with dedicated squads and SLAs.",
    features: ["Dedicated squad", "Security & compliance", "Multi-region cloud", "24/7 SLA support", "Roadmap partnership"],
    highlighted: false,
  },
];
