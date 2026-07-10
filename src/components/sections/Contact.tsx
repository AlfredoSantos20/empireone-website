import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";
import { Button } from "@/components/marketing/Button";

const details = [
  { icon: Mail, label: "Email", value: "info@empireone.ph" },
  { icon: Phone, label: "Phone", value: "12345678" },
  { icon: MapPin, label: "Location", value: "Philippines" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-14 sm:py-20">
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

        <div className="mt-8 grid gap-10 lg:grid-cols-5">
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
              <div className="aspect-4/3 w-full">
                <iframe
                  title="EmpireOne location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51560116.771685906!2d114.512439!3d12.879721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a35b1910656e29%3A0x47bcc8c7e71f31a1!2sPhilippines!4v1735689600000!5m1!1e4"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
              <Field label="Full name" name="name" placeholder="Fullname" />
              <Field label="Email" name="email" type="email" placeholder="email@example.com" />
            </div>
            <Field label="Company" name="company" placeholder="Company name" />
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your goals, timeline and budget…"
                className="w-full resize-none rounded-xl border border-border bg-white/3 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
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
        className="w-full rounded-xl border border-border bg-white/3 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
