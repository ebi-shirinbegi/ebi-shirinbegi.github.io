import type { Metadata } from "next";
import { site, contactTopics } from "@/lib/site";
import { Nav, Footer, Chip, AvailabilityCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about research collaboration, corpora, speech, and NLP.",
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="wrap pt-8 pb-4">
        <Chip>Contact</Chip>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.04] mt-5 rise max-w-2xl">
          Let&apos;s talk about the languages the datasets forgot
        </h1>
        <p className="mt-4 text-muted max-w-xl rise rise-1">
          Research collaboration, corpora, speech, or an interesting problem. Share a few
          details and I&apos;ll get back to you.
        </p>
      </section>

      <section className="wrap py-10">
        <div className="grid gap-6 md:grid-cols-[3fr_2fr] items-start">
          <form
            action={`https://formsubmit.co/${site.email}`}
            method="POST"
            className="panel p-8 space-y-5"
          >
            <input type="hidden" name="_subject" value="Portfolio contact" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" name="name" required placeholder="Your name" className="field mt-1.5" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className="field mt-1.5" />
            </div>
            <div>
              <label htmlFor="topic" className="text-sm font-medium">Topic</label>
              <select id="topic" name="topic" className="field mt-1.5" defaultValue={contactTopics[0]}>
                {contactTopics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me about it..." className="field mt-1.5" />
            </div>
            <button type="submit" className="btn w-full justify-center">Send message</button>
            <p className="text-xs text-muted text-center">
              Or email directly: <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a>
            </p>
          </form>
          <AvailabilityCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
