import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const variants = {
  primary:
    "bg-gradient-primary text-primary-foreground shadow-[0_10px_40px_-10px_rgba(255,122,24,0.55)] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(255,122,24,0.75)]",
  secondary:
    "glass text-foreground hover:bg-white/10",
  ghost:
    "text-muted-foreground hover:text-foreground",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (as === "a") {
    return (
      <a href={href} onClick={onClick} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
