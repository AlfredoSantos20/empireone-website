import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";
import { Button } from "@/components/marketing/Button";

const details = [
  { icon: Mail, label: "Email", value: "hello@empireone.inc" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0128" },
  { icon: MapPin, label: "HQ", value: "San Francisco · Remote-first" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get in touch"
          title={
            <>
              Let's build something <GradientText>remarkable</GradientText>
            </>
          }
          description="Share a few details about your project. We'll reply within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <d.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{d.label}</div>
                  <div className="text-sm font-medium">{d.value}</div>
                </div>
              </div>
            ))}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40">
              <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#1a1a1f_25%,#0f0f14_25%,#0f0f14_50%,#1a1a1f_50%,#1a1a1f_75%,#0f0f14_75%,#0f0f14_100%)] bg-[length:24px_24px] opacity-70">
                <div className="grid h-full place-items-center">
                  <div className="glass rounded-2xl px-4 py-3 text-sm text-muted-foreground">
                    <MapPin className="mr-2 inline h-4 w-4 text-primary" /> Interactive map coming soon
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="glass grid gap-4 rounded-3xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Ada Lovelace" />
              <Field label="Email" name="email" type="email" placeholder="ada@company.com" />
            </div>
            <Field label="Company" name="company" placeholder="Acme Inc." />
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your goals, timeline and budget…"
                className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our privacy policy.
              </p>
              <Button type="submit" size="lg">
                {sent ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
