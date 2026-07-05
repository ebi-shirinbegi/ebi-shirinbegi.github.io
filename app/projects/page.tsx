import type { Metadata } from "next";
import { Nav, Footer, Chip, CtaBand } from "@/components/ui";
import { ProjectsGrid } from "@/components/client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research corpora, speech studies, and engineering projects for underrepresented languages.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Nav />
      <section className="wrap pt-8 pb-4">
        <Chip>Projects</Chip>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.04] mt-5 rise max-w-2xl">
          Selected work with honest metrics
        </h1>
        <p className="mt-4 text-muted max-w-xl rise rise-1">
          Research corpora, speech studies, and the engineering projects underneath them.
        </p>
      </section>
      <section className="wrap py-10">
        <ProjectsGrid />
      </section>
      <CtaBand />
      <Footer />
    </main>
  );
}
