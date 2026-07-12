import { site, stats, work, experience, about, process, marquee } from "@/lib/site";
import { SideNav, CopyEmail } from "@/components/client";
import { SectionHeading, ExternalTitleLink, ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:flex lg:gap-16">
      {/* ---------------- Sidebar ---------------- */}
      <header className="pt-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-20">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-body sm:text-5xl">
            <a href="/">
              {site.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="whitespace-nowrap">
                {site.name.split(" ").at(-1)}
                <span className="ner">PER</span>
              </span>
            </a>
          </h1>
          <h2 className="mt-4 text-lg text-body/90">{site.role}</h2>
          <p className="mt-1 font-mono text-xs tracking-wide text-faint">{site.scholar}</p>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">{site.tagline}</p>

          <SideNav />
        </div>

        <div className="mt-12 lg:mt-0">
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="dot" />
            {site.availability}
          </p>
          <p className="mt-2 text-sm text-faint">
            {site.location}
            <span className="ner ner-loc">LOC</span>
          </p>

          <ul className="mt-6 flex items-center gap-5 pb-4 lg:pb-0">
            <li>
              <a href={site.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-faint transition-colors hover:text-body">
                <GitHubIcon className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="text-faint transition-colors hover:text-body">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} aria-label="Email" className="text-faint transition-colors hover:text-body">
                <MailIcon className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* ---------------- Content ---------------- */}
      <main className="pb-24 pt-20 lg:w-[58%] lg:py-20">
        {/* About */}
        <section id="about" className="scroll-mt-20">
          <SectionHeading index="01" title="About" />
          <p className="text-lg leading-relaxed text-body/90">{about.intro}</p>
          {about.story.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-4 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-sm text-faint">{about.languages}</p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="order-last mt-1 text-xs text-faint">{s.label}</dt>
                <dd className="font-mono text-xl text-body sm:text-2xl">
                  {s.value.toLocaleString("en-US")}
                  <span className="text-accent">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
            {marquee.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-24 scroll-mt-20">
          <SectionHeading index="02" title="Experience" />
          <ol className="group/list space-y-2">
            {experience.map((job) => (
              <li
                key={job.org}
                className="-mx-4 grid gap-1 rounded-lg p-4 transition-colors hover:bg-panel sm:grid-cols-8 sm:gap-6 lg:group-hover/list:opacity-60 lg:hover:!opacity-100"
              >
                <p className="font-mono text-xs leading-6 text-faint sm:col-span-2">{job.years}</p>
                <div className="sm:col-span-6">
                  <h3 className="font-medium text-body">
                    {job.role} · <span className="text-muted">{job.org}</span>
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-faint">{job.meta}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.line}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">Education</h3>
          <ul className="space-y-3">
            {about.education.map((edu) => (
              <li key={edu.school} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3">
                <span className="text-sm text-body">
                  {edu.school} <span className="text-muted">— {edu.degree}</span>
                </span>
                <span className="font-mono text-xs text-faint">{edu.years}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24 scroll-mt-20">
          <SectionHeading index="03" title="Selected work" />
          <ul className="group/list space-y-2">
            {work.map((item) => (
              <li
                key={item.title}
                className="-mx-4 grid gap-1 rounded-lg p-4 transition-colors hover:bg-panel sm:grid-cols-8 sm:gap-6 lg:group-hover/list:opacity-60 lg:hover:!opacity-100"
              >
                <p className="font-mono text-[11px] leading-6 tracking-wider text-faint sm:col-span-2">
                  {item.tag}
                  <span className="mt-0.5 block text-faint/70">{item.kind}</span>
                </p>
                <div className="sm:col-span-6">
                  <h3 className="text-body">
                    {item.href ? (
                      <ExternalTitleLink href={item.href}>{item.title}</ExternalTitleLink>
                    ) : (
                      <span className="font-medium">{item.title}</span>
                    )}
                    {item.upcoming && (
                      <span className="ml-3 rounded-full border border-accent2/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent2">
                        in preparation
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                  {item.points && (
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                      {item.points.map((point) => (
                        <li key={point} className="font-mono text-xs text-accent/90">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Method */}
        <section id="method" className="mt-24 scroll-mt-20">
          <SectionHeading index="04" title="How I work" />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {process.map((step) => (
              <div key={step.step}>
                <h3 className="flex items-baseline gap-3 font-medium text-body">
                  <span className="font-mono text-xs text-accent">{step.step}</span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24 scroll-mt-20">
          <SectionHeading index="05" title="Contact" />
          <h3 className="max-w-md text-2xl font-semibold tracking-tight text-body sm:text-3xl">
            {about.headline}
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            If that resonates — research collaboration, a corpus or annotation project, speech and
            ASR, an M2 internship, or anything else — my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-md border border-accent/50 px-4 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <CopyEmail email={site.email} />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-line pt-8">
          <p className="font-mono text-xs leading-relaxed text-faint">
            Designed &amp; built by {site.name}. Next.js, Tailwind, GitHub Pages —{" "}
            <a href={site.github} target="_blank" rel="noreferrer noopener" className="underline decoration-line underline-offset-4 transition-colors hover:text-muted">
              source on GitHub
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
