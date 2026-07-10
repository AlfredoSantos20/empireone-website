import { CLIENTS } from "@/constants/site";

export function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Trusted by" className="relative border-y border-border/70 bg-background/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Trusted by teams at forward-thinking companies
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-14">
            {doubled.map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-lg font-semibold tracking-[0.2em] text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
