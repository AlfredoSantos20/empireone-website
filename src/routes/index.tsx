import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layouts/site-layout";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Statistics } from "@/components/sections/Statistics";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Clients />
      <About />
      <Process />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Portfolio />
      <Technologies />
      {/* <Testimonials /> */}
      <Contact />
      <CTA />
    </SiteLayout>
  );
}
