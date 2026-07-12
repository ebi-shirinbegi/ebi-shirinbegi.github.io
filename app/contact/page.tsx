import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", robots: { index: false } };

// The site is a single page now; keep the old route alive as a redirect.
export default function ContactRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `location.replace("/#contact");` }} />
      <p className="p-8 font-mono text-sm text-muted">
        This page moved — <a href="/#contact" className="text-accent underline underline-offset-4">continue to Contact</a>.
      </p>
    </>
  );
}
