import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/common/logo";
import { BrandButton } from "@/components/ui/brand-button";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { motion, LayoutGroup } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || "#home");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const showBg = scrolled;

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 overflow-x-hidden transition-all duration-300",
        showBg && "backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        showBg
          ? scrolled
            ? "border-b border-border/60 bg-background/70"
            : "bg-background/40"
          : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Logo className="origin-left scale-125 md:scale-[1.35]" />

        <LayoutGroup id="main-nav-desktop">
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => {
              const isActive = activeHash === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="hidden md:block">
          <a href="#contact" onClick={() => handleNavClick("#contact")}>
            <BrandButton variant="gradient" size="lg">
              Start Your Project
            </BrandButton>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          <LayoutGroup id="main-nav-mobile">
            {NAV_LINKS.map((l) => {
              const isActive = activeHash === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className={cn(
                    "relative rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-xl bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              );
            })}
          </LayoutGroup>
          <a href="#contact" className="mt-2" onClick={() => handleNavClick("#contact")}>
            <BrandButton variant="gradient" className="w-full">
              Start Your Project
            </BrandButton>
          </a>
        </div>
      </div>
    </header>
  );
}
