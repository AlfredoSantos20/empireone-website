import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
      {children}
    </span>
  );
}
