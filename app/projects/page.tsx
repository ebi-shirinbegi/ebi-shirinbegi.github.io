import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects", robots: { index: false } };

// The site is a single page now; keep the old route alive as a redirect.
export default function ProjectsRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `location.replace("/#projects");` }} />
      <p className="p-8 font-mono text-sm text-muted">
        This page moved — <a href="/#projects" className="text-accent underline underline-offset-4">continue to Projects</a>.
      </p>
    </>
  );
}
