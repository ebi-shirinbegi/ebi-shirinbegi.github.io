import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", robots: { index: false } };

// The site is a single page now; keep the old route alive as a redirect.
export default function AboutRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `location.replace("/#about");` }} />
      <p className="p-8 font-mono text-sm text-muted">
        This page moved — <a href="/#about" className="text-accent underline underline-offset-4">continue to About</a>.
      </p>
    </>
  );
}
