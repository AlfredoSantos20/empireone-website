import { motion } from "framer-motion";
import { Badge } from "./Badge";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "center" }: Props) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignCls}`}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
