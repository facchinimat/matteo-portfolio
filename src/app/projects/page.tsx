import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore ForgeCI, a GitHub webhook and build-state system, and CourseLens AI, a source-grounded question-answering system for course PDFs.",
  alternates: { canonical: "/projects" },
};

const forgeTech = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "pytest",
  "GitHub Actions",
];

const courseLensTech = [
  "Python",
  "FastAPI",
  "OpenAI API",
  "ChromaDB",
  "Streamlit",
  "PyMuPDF",
  "Pydantic",
];

export default function ProjectsPage() {
  return (
    <main>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-20 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Projects
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-6xl">
          Building systems to understand how they work.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          My current work is focused on backend engineering, developer
          infrastructure, and AI systems. These are the two projects that best
          represent what I&apos;m building and learning right now.
        </p>

        {/* QUICK NAVIGATION */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#forgeci"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            ForgeCI
          </a>

          <a
            href="#courselens"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            CourseLens AI
          </a>
        </div>
      </section>

      {/* =========================================================
          FORGECI
      ========================================================= */}
      <section
        id="forgeci"
        className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  Developer Infrastructure
                </p>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-950/40 dark:text-green-400">
                  In Development
                </span>
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                ForgeCI
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                ForgeCI is a CI/CD testing platform I&apos;m building to
                understand the infrastructure behind tools like GitHub Actions
                and CircleCI.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
                The system currently receives authenticated GitHub push events,
                extracts repository and commit metadata, persists build state in
                PostgreSQL, and automatically tests its API and webhook
                security behavior.
              </p>

              {/* TECH */}
              <div className="mt-7 flex flex-wrap gap-2">
                {forgeTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-8">
                <a
                  href="https://github.com/facchinimat/ForgeCI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  View Repository
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                Implemented Architecture
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    GitHub Push Event
                  </p>
                </div>

                <div className="pl-4 text-zinc-400">↓</div>

                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    HMAC-SHA256 Verification
                  </p>
                </div>

                <div className="pl-4 text-zinc-400">↓</div>

                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    FastAPI Processing
                  </p>
                </div>

                <div className="pl-4 text-zinc-400">↓</div>

                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    PostgreSQL Build State
                  </p>
                </div>

                <div className="pl-4 text-zinc-400">↓</div>

                <div className="rounded-lg border border-dashed border-blue-300 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-500">
                    Next
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
                    Queue → Workers → Docker Execution
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IMPLEMENTED FEATURES */}
          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
              What I&apos;ve implemented
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "GitHub push webhook handling",
                "HMAC-SHA256 signature verification",
                "Repository, branch, and commit extraction",
                "PostgreSQL build persistence with SQLAlchemy",
                "Automated API and webhook tests with pytest",
                "GitHub Actions CI workflow",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSELENS AI
      ========================================================= */}
      <section
        id="courselens"
        className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                AI Systems / Backend
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                CourseLens AI
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                CourseLens AI is a retrieval-augmented generation system built
                around course documents.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
                Users can upload PDFs, index their content, retrieve relevant
                sections using semantic search, and ask questions that generate
                answers grounded in the source documents.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
                The system preserves filename and page metadata so answers can
                point back to the material used during retrieval.
              </p>

              {/* TECH */}
              <div className="mt-7 flex flex-wrap gap-2">
                {courseLensTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-8">
                <a
                  href="https://github.com/facchinimat/CourseLens_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  View Repository
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                RAG Pipeline
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "PDF Upload",
                  "Text Extraction",
                  "Chunking",
                  "Embeddings",
                  "ChromaDB Vector Search",
                  "Source-Grounded Generation",
                  "Page-Level Citations",
                ].map((step, index) => (
                  <div key={step}>
                    <div className="flex items-center gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                      <span className="text-xs font-semibold text-zinc-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {step}
                      </p>
                    </div>

                    {index !== 6 && (
                      <div className="py-1 pl-5 text-zinc-400">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMPLEMENTED FEATURES */}
          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
              What I built
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "RAG document-processing pipeline",
                "10+ FastAPI REST endpoints",
                "Semantic retrieval with ChromaDB",
                "OpenAI-powered question answering",
                "Filename and page metadata preservation",
                "Streamlit document upload and Q&A interface",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                More Code
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Explore my GitHub.
              </h2>

              <p className="mt-3 max-w-lg leading-7 text-zinc-600 dark:text-zinc-400">
                You can follow the implementation, commit history, tests, and
                ongoing development of both projects directly on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/facchinimat"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-zinc-300 px-5 py-3 text-center text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}