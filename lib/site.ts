// ============================================================
// SINGLE SOURCE OF TRUTH for all site content.
// TODO(ebi): items marked VERIFY need exact repo URLs.
// ============================================================

export const site = {
  url: "https://ebi-shirinbegi.github.io",
  name: "Mohammad Ebrahim Sharifi",
  shortName: "es.",
  role: "M1 Computational Linguistics, Universit\u00e9 Paris Cit\u00e9",
  scholar: "SMARTS-UP scholar",
  tagline: "Language technology for the languages mainstream NLP overlooks.",
  description:
    "Mohammad Ebrahim Sharifi. Computational linguistics student at Universit\u00e9 Paris Cit\u00e9 building NLP resources, corpora, and speech tools for underrepresented languages.",
  email: "mohammad-ebrahim.sharifi@etu.u-paris.fr", // TODO(ebi): swap later
  github: "https://github.com/ebi-shirinbegi",
  linkedin: "https://www.linkedin.com/in/mohammad-ebrahim-sharifi",
  location: "Paris, France",
  availability: "Available for research collaboration",
};

export const stats = [
  { value: 100000, suffix: "+", label: "Tokens annotated", detail: "First NER corpus of its kind" },
  { value: 83, suffix: "% F1", label: "Best model score", detail: "Custom BERT-based models" },
  { value: 8, suffix: " yrs", label: "Software engineering", detail: "Production systems since 2017" },
];

export const marquee = [
  "Python", "PyTorch", "Hugging Face", "Whisper", "XLS-R", "spaCy",
  "BERT", "DVC", "Docker", "PostgreSQL", "Laravel", "Git",
];

export const capabilities = [
  {
    title: "Corpus and annotation",
    body: "Designing datasets for languages with almost no digital resources: guidelines, annotation methodology, quality control.",
    demo: "ner" as const,
  },
  {
    title: "Speech processing",
    body: "Acoustic features and self-supervised representations, from Whisper and XLS-R embeddings to statistical evaluation.",
    demo: "wave" as const,
  },
  {
    title: "NLP engineering",
    body: "Reproducible pipelines, model fine-tuning, and the production discipline of eight years shipping software.",
    demo: "stack" as const,
  },
];

export type WorkItem = {
  tag: string;
  kind: "Research" | "Engineering";
  title: string;
  summary: string;
  points?: string[];
  href?: string;
  upcoming?: boolean;
};

export const work: WorkItem[] = [
  {
    tag: "CORPUS",
    kind: "Research",
    title: "HazNERC",
    summary:
      "The first named entity recognition corpus for an underrepresented language of Afghanistan, built end to end: design, annotation methodology, and evaluation.",
    points: ["100,000+ annotated tokens", "83% F1, custom BERT-based models", "+23% over multilingual baselines"],
    href: "https://github.com/ebi-shirinbegi", // VERIFY
  },
  {
    tag: "SPEECH",
    kind: "Research",
    title: "Acoustic vs. Neural Speech Representations",
    summary:
      "Precision and stability of classical acoustic features against self-supervised representations (Whisper, XLS-R) on L2 speech from the ru-fr_interference corpus (ORTOLANG).",
    points: ["Mixed-effects modeling, bootstrap CIs", "ROPE-based equivalence testing", "Reproducible 5-stage DVC pipeline"],
    href: "https://github.com/ebi-shirinbegi", // VERIFY
  },
  {
    tag: "EDUCATION",
    kind: "Engineering",
    title: "EBA Online School",
    summary: "An online school keeping education available to Afghan girls barred from classrooms.",
    href: "https://eba.ac/",
  },
  {
    tag: "NLP",
    kind: "Engineering",
    title: "PersianQ&A",
    summary: "Question answering resources and models for Persian.",
    href: "https://github.com/ebi-shirinbegi", // VERIFY
  },
  {
    tag: "RAG",
    kind: "Engineering",
    title: "PDFChat-RAG",
    summary: "Retrieval-augmented chat over PDF documents.",
    href: "https://github.com/ebi-shirinbegi", // VERIFY
  },
  {
    tag: "LLM",
    kind: "Engineering",
    title: "Llama Local Chat",
    summary: "A local-first chat interface for LLaMA models.",
    href: "https://github.com/ebi-shirinbegi", // VERIFY
  },
  {
    tag: "NEXT",
    kind: "Research",
    title: "Speech data and ASR for underrepresented languages",
    summary: "Documentation-driven data collection and speech recognition work, currently in preparation. Details soon.",
    upcoming: true,
  },
];

export const process = [
  { step: "01", title: "Design", body: "Define the language variety, the entity or signal inventory, and guidelines grounded in how speakers actually write and talk." },
  { step: "02", title: "Annotation", body: "Train annotators, measure agreement, and iterate on the guidelines until the labels mean the same thing to everyone." },
  { step: "03", title: "Modeling", body: "Fine-tune multilingual baselines, then build custom models that respect the data instead of overfitting the benchmark." },
  { step: "04", title: "Evaluation", body: "Honest splits, confidence intervals, and error analysis. A number without uncertainty is marketing, not science." },
];

export type Experience = {
  role: string;
  org: string;
  meta: string;
  years: string;
  line: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Pamika Trading Company",
    meta: "Freelance \u00b7 Remote",
    years: "2024 - 2026",
    line: "Odoo ERP modules and Python automation for supply chain operations; cut manual data entry by roughly 60%.",
  },
  {
    role: "Master's Thesis Researcher",
    org: "CWNU Computer Science Laboratory",
    meta: "Internship \u00b7 Sichuan, China",
    years: "2023 - 2024",
    line: "Built HazNERC end to end and trained custom BERT-based models for low-resource NER.",
  },
  {
    role: "Software Developer",
    org: "ADRAS LLC",
    meta: "Full-time \u00b7 Kabul, Afghanistan",
    years: "2017 - 2021",
    line: "National-scale government information systems used daily by thousands of people across 34 provinces.",
  },
];

export const about = {
  headline: "Serious language technology should reach every language.",
  intro:
    "I'm an M1 student in Computational Linguistics at Universit\u00e9 Paris Cit\u00e9 and a SMARTS-UP scholar, working on NLP and speech for languages that today's datasets leave out.",
  approach: [
    { title: "Speakers first", body: "Resources are built with communities, not extracted from them. The data has to make sense to the people it describes." },
    { title: "Methodology over volume", body: "A smaller corpus with real annotation guidelines beats a large one nobody can trust or reproduce." },
    { title: "Honest evaluation", body: "Baselines, uncertainty, error analysis. Results are reported the way I would want to read them." },
  ],
  principles: [
    { n: "01", title: "Underrepresented is not unimportant", body: "Millions of speakers without digital resources is a gap, not a niche." },
    { n: "02", title: "Annotation is design", body: "Every label scheme is a theory of the language. Bad guidelines produce confident nonsense.", dark: true },
    { n: "03", title: "Reproducible by default", body: "Pipelines, versioned data, and seeds. If it cannot be rerun, it is an anecdote." },
    { n: "04", title: "Evaluation before hype", body: "The field moves fast; careful measurement is how you know it moves forward." },
  ],
  tools: [
    { area: "NLP and ML", n: "01", items: "PyTorch, Hugging Face Transformers, spaCy, scikit-learn" },
    { area: "Speech", n: "02", items: "Whisper, XLS-R, acoustic feature pipelines" },
    { area: "Engineering", n: "03", items: "Python, DVC, Docker, SQL, Git" },
  ],
  story: [
    "My work started with a simple observation: the language I grew up with barely exists in the digital world, and most languages on earth share that fate. Software engineering gave me the tools; computational linguistics gave me the method.",
    "Over eight years I shipped production systems in Afghanistan and China: national-scale government information platforms used across 34 provinces, then ERP customization and Python automation for supply chain operations. In 2023 I moved into research and built HazNERC, the first NER corpus for an underrepresented language of Afghanistan. Since 2025 I've been in Paris, adding speech processing and rigorous statistical evaluation to the toolkit.",
  ],
  education: [
    { school: "Universit\u00e9 Paris Cit\u00e9", degree: "MSc Computational Linguistics", years: "2025 - 2027" },
    { school: "China West Normal University", degree: "MEng Software Engineering", years: "2021 - 2024" },
    { school: "Kabul University", degree: "BSc Computer Science", years: "2013 - 2016" },
  ],
  languages: "Persian (native) \u00b7 English \u00b7 French",
};

export const contactTopics = [
  "Research collaboration",
  "Corpus or annotation project",
  "Speech and ASR",
  "M2 internship or lab opportunity",
  "Something else",
];
