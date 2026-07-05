import type { Metadata } from "next";
import { site, about } from "@/lib/site";
import { Nav, Footer, Chip, SectionHead, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="wrap pt-4">
        <div className="panel p-8 md:p-12 grid gap-10 md:grid-cols-[3fr_2fr] items-center">
          <div>
            <Chip>About me</Chip>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.04] mt-5 rise">
              {about.headline}
            </h1>
            <p className="mt-5 text-muted max-w-lg text-lg rise rise-1">{about.intro}</p>
          </div>
          <div className="justify-self-center md:justify-self-end rise rise-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo.jpg"
              alt={`Portrait of ${site.name}`}
              width={300}
              height={400}
              className="portrait rounded-2xl border border-line"
            />
          </div>
        </div>
      </section>

      <section className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <SectionHead
            chip="My approach"
            title="Research is more than results"
            sub="A clear workflow that moves each dataset from first idea to defensible numbers."
          />
          <div className="tl space-y-8">
            {about.approach.map((a, i) => (
              <div key={a.title} className="flex gap-5">
                <div className="tl-dot">{String(i + 1).padStart(2, "0")}</div>
                <div className="pt-1.5">
                  <h3 className="font-medium">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed max-w-md">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-4">
        <SectionHead
          chip="Principles"
          title="The values behind the work"
          sub="A few rules that survive contact with every project."
          center
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.principles.map((p) => (
            <div
              key={p.n}
              className={
                p.dark
                  ? "smoke p-6 lg:-rotate-1 lg:translate-y-1"
                  : "panel panel-hover p-6"
              }
            >
              <p className="font-mono text-xs opacity-60">{p.n}</p>
              <h3 className="font-medium mt-3">{p.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${p.dark ? "text-ondarkmuted" : "text-muted"}`}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <SectionHead
            chip="Tools"
            title="The tools behind the work"
            sub="The stack I use to build corpora, train models, and keep everything reproducible."
          />
          <div className="panel divide-y divide-line">
            {about.tools.map((t) => (
              <div key={t.n} className="p-6 flex items-baseline gap-6">
                <span className="font-mono text-xs text-muted">{t.n}</span>
                <div>
                  <h3 className="font-medium">{t.area}</h3>
                  <p className="mt-1 text-sm text-muted">{t.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-4">
        <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
          <div className="panel p-9">
            <Chip>My story</Chip>
            <h2 className="font-display text-4xl mt-4">From curiosity to method</h2>
            <div className="mt-5 space-y-4 text-muted leading-relaxed">
              {about.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 pt-5 border-t border-line text-sm">
              <span className="font-medium">{site.name}</span>
              <span className="text-muted"> · {site.role}</span>
            </p>
          </div>
          <div className="panel p-9">
            <Chip>Education</Chip>
            <ul className="mt-6 space-y-5">
              {about.education.map((e) => (
                <li key={e.school} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-muted">{e.degree}</p>
                  <p className="font-mono text-xs text-muted mt-1">{e.years}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-line font-mono text-xs text-muted">
              {about.languages}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
