"use client";

import { useEffect, useRef, useState } from "react";
import { stats, work, WorkItem } from "@/lib/site";
import { WorkCard } from "@/components/ui";

/* ---------- Count-up stats ---------- */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!seen) return;
    if (reduced) {
      setN(value);
      return;
    }
    const dur = 1300;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value, reduced]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl">
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function StatsRow() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="panel p-6">
          <Counter value={s.value} suffix={s.suffix} />
          <p className="mt-2 font-medium text-sm">{s.label}</p>
          <p className="text-xs text-muted mt-0.5">{s.detail}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- NER demo ---------- */

type Tok = { t: string; tag?: string };

const SENTENCES: Tok[][] = [
  [
    { t: "Ferdowsi", tag: "PER" },
    { t: " completed the " },
    { t: "Shahnameh", tag: "MISC" },
    { t: " near " },
    { t: "Tus", tag: "LOC" },
    { t: " in " },
    { t: "1010", tag: "DATE" },
    { t: "." },
  ],
  [
    { t: "Ibn Sina", tag: "PER" },
    { t: " taught medicine in " },
    { t: "Hamadan", tag: "LOC" },
    { t: " until " },
    { t: "1037", tag: "DATE" },
    { t: "." },
  ],
  [
    { t: "Rumi", tag: "PER" },
    { t: " wrote in " },
    { t: "Konya", tag: "LOC" },
    { t: " through the " },
    { t: "13th century", tag: "DATE" },
    { t: "." },
  ],
];

export function NerDemo() {
  const [idx, setIdx] = useState(0);
  const [tagged, setTagged] = useState(0);
  const [staticMode, setStaticMode] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sentence = SENTENCES[idx];
  const entityCount = sentence.filter((p) => p.tag).length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStaticMode(true);
      setTagged(99);
    }
  }, []);

  useEffect(() => {
    if (staticMode) return;
    if (tagged < entityCount) {
      timer.current = setTimeout(() => setTagged((n) => n + 1), 850);
    } else {
      timer.current = setTimeout(() => {
        setIdx((i) => (i + 1) % SENTENCES.length);
        setTagged(0);
      }, 2400);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [tagged, entityCount, idx, staticMode]);

  let seen = 0;
  return (
    <div className="ner-demo" aria-hidden="true">
      <div className="flex justify-between font-mono text-[10px] tracking-wider text-muted mb-1">
        <span>[ ner demo ]</span>
        <span>
          {String(idx + 1).padStart(3, "0")}/{String(SENTENCES.length).padStart(3, "0")}
        </span>
      </div>
      <p key={idx} className="rise text-sm">
        {sentence.map((part, i) => {
          if (!part.tag) return <span key={i}>{part.t}</span>;
          seen += 1;
          const on = seen <= tagged;
          return (
            <span key={i} className={"tok" + (on ? " tagged" : "")}>
              {part.t}
              <span className="tchip">{part.tag}</span>
            </span>
          );
        })}
      </p>
    </div>
  );
}

/* ---------- Waveform ---------- */

export function Waveform() {
  const bars = [0.5, 0.9, 0.3, 1, 0.6, 0.8, 0.4, 1, 0.7, 0.35, 0.85, 0.55, 0.95, 0.45, 0.75, 0.6];
  return (
    <div className="wave" aria-hidden="true">
      {bars.map((b, i) => (
        <span key={i} style={{ animationDelay: `${i * 70}ms`, animationDuration: `${900 + b * 500}ms` }} />
      ))}
    </div>
  );
}

/* ---------- Filterable projects grid ---------- */

export function ProjectsGrid() {
  const kinds = ["All", "Research", "Engineering"] as const;
  const [kind, setKind] = useState<(typeof kinds)[number]>("All");
  const items = work.filter((w: WorkItem) => kind === "All" || w.kind === kind);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {kinds.map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={`chip transition-colors ${kind === k ? "!bg-ink !text-canvas !border-ink" : "hover:border-ink"}`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((w) => (
          <WorkCard key={w.title} item={w} />
        ))}
      </div>
    </div>
  );
}
