import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#ff7a18] to-transparent" />
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,rgba(255,122,24,0.15),transparent_60%)]" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
