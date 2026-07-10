import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { COMPANY, NAV_LINKS } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-[#0f0f14] text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 0%, rgba(255, 122, 24, 0.25), transparent), radial-gradient(50% 50% at 10% 100%, rgba(255, 179, 71, 0.2), transparent)",
        }}
      />
      <div className="container-px relative mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light className="origin-left scale-125 md:scale-[1.35]" />
            <p className="mt-5 max-w-md text-sm text-white/70">
              {COMPANY.tagline}. Enterprise engineering, design and cloud craft — under one roof.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {COMPANY.address}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> {COMPANY.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> {COMPANY.email}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>AI Solutions</li>
              <li>DevOps & Infra</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {COMPANY.name} All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80">
              Privacy
            </a>
            <a href="#" className="hover:text-white/80">
              Terms
            </a>
            <a href="#" className="hover:text-white/80">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
