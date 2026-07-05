import { site, marquee, capabilities, work, process, experience } from "@/lib/site";
import { Nav, Footer, Chip, SectionHead, Arrow, CtaBand, WorkCard } from "@/components/ui";
import { StatsRow, NerDemo, Waveform } from "@/components/client";

function Hero() {
  return (
    <section className="wrap pt-4">
      <div className="panel p-8 md:p-12 grid gap-10 md:grid-cols-[3fr_2fr] items-center relative overflow-hidden">
        <div>
          <Chip>
            <span className="dot" /> {site.availability}
          </Chip>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mt-6 rise">
            {site.tagline}
          </h1>
          <p className="mt-6 text-muted max-w-lg text-lg rise rise-1">
            Corpus design, annotation methodology, and speech processing for underrepresented
            languages. {site.role}, {site.scholar}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 rise rise-2">
            <a href="/projects/" className="btn">
              View projects <Arrow />
            </a>
            <a href="/contact/" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end rise rise-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photo.jpg"
            alt={`Portrait of ${site.name}`}
            width={340}
            height={453}
            className="portrait rounded-2xl border border-line"
          />
        </div>
      </div>
      <div className="mt-4">
        <StatsRow />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <section className="wrap py-14">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((m, i) => (
            <span key={i} className="font-mono text-sm text-muted whitespace-nowrap">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="wrap py-14">
      <SectionHead
        chip="What I do"
        title="Three fronts, one goal"
        sub="Every capability serves the same purpose: making language technology work where the data is scarce."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.title} className="panel panel-hover p-7 flex flex-col">
            <div className="min-h-[96px] flex items-end mb-6">
              {c.demo === "ner" && <NerDemo />}
              {c.demo === "wave" && <Waveform />}
              {c.demo === "stack" && (
                <pre className="font-mono text-[11px] leading-5 text-muted">
{`$ dvc repro
stage 1/5: extract   ok
stage 2/5: features  ok
stage 3/5: train     ok`}
                </pre>
              )}
            </div>
            <h3 className="font-display text-2xl">{c.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SelectedWork() {
  const featured = work.filter((w) => w.kind === "Research");
  return (
    <section className="wrap py-14">
      <SectionHead
        chip="Selected work"
        title="Research with honest metrics"
        sub="Numbers reported the way I would want to read them: with baselines and uncertainty."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((w) => (
          <WorkCard key={w.title} item={w} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/projects/" className="btn btn-ghost">
          All projects <Arrow />
        </a>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="wrap py-14">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div>
          <SectionHead
            chip="Method"
            title="How a corpus gets built"
            sub="The process behind HazNERC, and the one I bring to every dataset."
          />
        </div>
        <div className="tl space-y-8">
          {process.map((p) => (
            <div key={p.step} className="flex gap-5">
              <div className="tl-dot">{p.step}</div>
              <div className="pt-1.5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed max-w-md">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceList() {
  return (
    <section className="wrap py-14">
      <SectionHead chip="Experience" title="Where the discipline comes from" />
      <div className="panel divide-y divide-line">
        {experience.map((e) => (
          <div key={e.org} className="p-7 grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline">
            <div>
              <h3 className="font-display text-2xl">
                {e.role} · {e.org}
              </h3>
              <p className="mt-1 text-sm text-muted leading-relaxed max-w-2xl">{e.line}</p>
              <p className="mt-2 font-mono text-xs text-muted">{e.meta}</p>
            </div>
            <p className="font-mono text-xs text-muted md:text-right">{e.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Capabilities />
      <SelectedWork />
      <Process />
      <ExperienceList />
      <CtaBand />
      <Footer />
    </main>
  );
}
