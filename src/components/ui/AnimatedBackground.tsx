export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-[#ff7a18]/25 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-[#ffb347]/20 blur-[120px] animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#f97316]/15 blur-[120px] animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px] opacity-40" />
    </div>
  );
}
