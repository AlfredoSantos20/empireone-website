import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Logo({ className }: { className?: string; light?: boolean }) {
  return (
    <a
      href="#home"
      className={cn("flex items-center", className)}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <motion.img
        src="/empireone.jpg"
        alt="EmpireOne Inc."
        className="h-12 w-auto object-contain md:h-14"
        initial={{ opacity: 0, y: 6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </a>
  );
}
