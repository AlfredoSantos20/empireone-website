import { motion } from "framer-motion";
import DomeGallery from "@/components/DomeGallery/DomeGallery";
import { SectionTitle } from "@/components/marketing/SectionTitle";
import { GradientText } from "@/components/marketing/GradientText";
import { TECHNOLOGIES } from "@/constants/site";

const TECH_ICON_SLUGS: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  Laravel: "laravel",
  NestJS: "nestjs",
  TypeScript: "typescript",
  Tailwind: "tailwindcss",
  Flutter: "flutter",
  "React Native": "react",
  Docker: "docker",
  Kubernetes: "kubernetes",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MongoDB: "mongodb",
  Redis: "redis",
};

const TECH_IMAGES = TECHNOLOGIES.map((name) => {
  const slug = TECH_ICON_SLUGS[name] ?? name.toLowerCase().replace(/\s+/g, "");
  return {
    src: `https://cdn.simpleicons.org/${slug}`,
    alt: name,
  };
});

const techIcons = TECH_IMAGES.map((image) => (
  <img
    key={image.alt}
    src={image.src}
    alt={image.alt}
    title={image.alt}
    className="h-10 w-10 object-contain"
  />
));

function MobileTechStack() {
  const chunkSize = Math.ceil(techIcons.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return techIcons.slice(start, start + chunkSize);
  });

  return (
    <div className="flex w-full items-center justify-center">
      <div className="max-w-[1100px] shrink-0">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {chunks.map((column, colIndex) => (
            <div
              key={colIndex}
              className="relative h-[300px] w-[68px] overflow-hidden sm:h-[340px] sm:w-[78px]"
            >
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="flex flex-col justify-center gap-5"
                style={{ willChange: "transform" }}
              >
                {[...column, ...column].map((icon, iconIndex) => (
                  <div
                    key={`${colIndex}-${iconIndex}`}
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-[2px] shadow-md shadow-black/20 sm:h-[66px] sm:w-[66px]"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-card ring-2 ring-border">
                      {icon}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our stack"
          title={
            <>
              Battle-tested <GradientText>modern technologies</GradientText>
            </>
          }
          description="We pick tools by fit — not fashion. Your architecture stays fast, secure and easy to hire for."
        />
      </div>

      <div className="mt-8 block w-full md:hidden">
        <MobileTechStack />
      </div>

      <div
        className="mt-6 hidden w-full md:block"
        style={{ height: "calc(100vh - 96px)", minHeight: "520px" }}
      >
        <DomeGallery
          images={TECH_IMAGES}
          grayscale={false}
          fitBasis="min"
          overlayBlurColor="transparent"
          autoRotateSpeed={2.0}
        />
      </div>
    </section>
  );
}
