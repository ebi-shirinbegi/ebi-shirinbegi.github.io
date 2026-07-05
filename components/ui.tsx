import { site, WorkItem } from "@/lib/site";

export function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`chip ${dark ? "chip-dark" : ""}`}>{children}</span>;
}

export function Nav() {
  const links = [
    ["Home", "/"],
    ["About", "/about/"],
    ["Projects", "/projects/"],
    ["Contact", "/contact/"],
  ];
  return (
    <header>
      <nav className="wrap flex items-center justify-between py-5">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <span className="font-display text-2xl leading-none">{site.shortName}</span>
          <span className="hidden sm:inline text-sm">Ebrahim Sharifi</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-ink transition-colors">
              {label}
            </a>
          ))}
        </div>
        <a href="/contact/" className="btn">
          Get in touch
        </a>
      </nav>
    </header>
  );
}

export function SectionHead({
  chip,
  title,
  sub,
  center = false,
}: {
  chip: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <Chip>{chip}</Chip>
      <h2 className="font-display text-4xl md:text-5xl mt-4">{title}</h2>
      {sub && <p className={`mt-3 text-muted max-w-xl ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

export function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AvailabilityCard() {
  return (
    <div className="smoke p-7">
      <div className="orb mb-6">
        <Arrow />
      </div>
      <div className="flex items-center gap-2.5">
        <span className="dot" />
        <p className="font-medium text-lg">{site.availability}</p>
      </div>
      <p className="text-sm text-ondarkmuted mt-1">Based in {site.location}, working anywhere</p>
      <div className="mt-7 space-y-4 text-sm">
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <span className="text-ondarkmuted">Email</span>
          <a href={`mailto:${site.email}`} className="hover:underline underline-offset-4 break-all text-right">
            {site.email}
          </a>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <span className="text-ondarkmuted">GitHub</span>
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
            ebi-shirinbegi
          </a>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <span className="text-ondarkmuted">LinkedIn</span>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
            mohammad-ebrahim-sharifi
          </a>
        </div>
      </div>
    </div>
  );
}

export function WorkCard({ item }: { item: WorkItem }) {
  const inner = (
    <>
      <div className={`rounded-t-[1.2rem] p-7 pb-6 ${item.upcoming ? "bg-dark text-ondark" : "bg-canvas"}`}>
        <p className="font-mono text-xs tracking-wider opacity-70">{item.tag}</p>
        <h3 className="font-display text-3xl mt-2">{item.title}</h3>
      </div>
      <div className="p-7 pt-5">
        <p className="text-sm text-muted leading-relaxed">{item.summary}</p>
        {item.points && (
          <ul className="mt-4 space-y-1.5 font-mono text-xs">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {item.href && (
          <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
            {item.href.includes("github") ? "View on GitHub" : "Visit"} <Arrow />
          </p>
        )}
        {item.upcoming && (
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
            <span className="dot" /> In preparation
          </p>
        )}
      </div>
    </>
  );
  const cls = "panel panel-hover overflow-hidden block";
  return item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export function CtaBand() {
  return (
    <section className="wrap py-20">
      <div className="grid gap-6 md:grid-cols-[3fr_2fr] items-stretch">
        <div className="panel p-9 flex flex-col justify-center">
          <Chip>
            <span className="dot" /> Open to collaborate
          </Chip>
          <h2 className="font-display text-4xl md:text-5xl mt-5">
            Working on something for the languages the datasets forgot?
          </h2>
          <p className="mt-4 text-muted max-w-lg">
            Research collaboration, low-resource NLP, speech, corpora, or just an interesting
            problem. My inbox is open.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/contact/" className="btn">
              Get in touch
            </a>
            <a href="/projects/" className="btn btn-ghost">
              View projects
            </a>
          </div>
        </div>
        <AvailabilityCard />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wrap pb-6">
      <div className="panel overflow-hidden">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr] p-9">
          <div>
            <p className="font-display text-2xl">{site.shortName}</p>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
              Corpora, speech, and NLP engineering for underrepresented languages.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Pages</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="/" className="hover:text-ink">Home</a></li>
              <li><a href="/about/" className="hover:text-ink">About</a></li>
              <li><a href="/projects/" className="hover:text-ink">Projects</a></li>
              <li><a href="/contact/" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Elsewhere</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href={site.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-ink">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="px-6 overflow-hidden select-none" aria-hidden="true">
          <p className="watermark text-center">SHARIFI</p>
        </div>
        <div className="bg-dark text-ondarkmuted text-xs px-9 py-4 flex flex-col sm:flex-row justify-between gap-2">
          <span>{site.name} · {site.location}</span>
          <span>Built with Next.js, no trackers</span>
        </div>
      </div>
    </footer>
  );
}
