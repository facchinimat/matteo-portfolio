const skillGroups = [
  {
    title: "Languages",
    description: "Languages I use across coursework, projects, and systems work.",
    skills: [
      "Python",
      "C",
      "Java",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend Engineering",
    description: "Tools I use to build APIs, services, and persistent applications.",
    skills: [
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    title: "Infrastructure & Systems",
    description:
      "Technologies I use for development environments, testing, CI, and systems-oriented projects.",
    skills: [
      "Linux",
      "Docker",
      "Git",
      "GitHub",
      "pytest",
      "GitHub Actions",
      "Webhooks",
    ],
  },
  {
    title: "AI & Data",
    description:
      "Tools I use for retrieval systems, embeddings, LLM applications, and document processing.",
    skills: [
      "OpenAI API",
      "ChromaDB",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Streamlit",
      "PyMuPDF",
    ],
  },
  {
    title: "Frontend",
    description:
      "Frontend technologies I use when building complete applications and this portfolio.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

const currentlyDeepening = [
  {
    title: "Distributed Systems",
    text: "Learning how queues, workers, concurrency, failure recovery, and distributed execution fit together through ForgeCI.",
  },
  {
    title: "Systems Performance",
    text: "Exploring latency, throughput, resource sharing, and workload behavior through GPU systems research.",
  },
  {
    title: "Infrastructure Engineering",
    text: "Building a stronger understanding of CI/CD systems, containers, databases, job execution, and backend reliability.",
  },
];

export default function SkillsPage() {
  return (
    <main>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Skills
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-6xl">
          The tools I use to build and understand systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          My strongest experience is currently in Python backend development,
          databases, developer tooling, and AI systems. I&apos;m continuing to
          deepen my systems and infrastructure knowledge through projects,
          research, and coursework.
        </p>
      </section>

      {/* =========================================================
          SKILL GROUPS
      ========================================================= */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="grid gap-6 py-8 md:grid-cols-[0.75fr_1.25fr]"
              >
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                      {group.title}
                    </h2>
                  </div>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-wrap content-start gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE STACK
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-white dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Core Stack
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-2xl font-bold">
                Python
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Backend services, APIs, automation, testing, and AI systems.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                FastAPI
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                REST APIs, validation, webhooks, and backend application logic.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                PostgreSQL
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Relational persistence, application state, and backend data.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                Linux
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Development environments, systems coursework, and tooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENTLY DEEPENING
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Currently Deepening
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Areas I&apos;m actively working on.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            I don&apos;t treat skills as a finished checklist. These are the
            areas I&apos;m intentionally spending more time understanding at a
            deeper level.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {currentlyDeepening.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CONNECTION TO PROJECTS
      ========================================================= */}
      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {/* FORGECI */}
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                ForgeCI
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Infrastructure in practice
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                FastAPI, PostgreSQL, SQLAlchemy, pytest, GitHub webhooks, and
                GitHub Actions come together in one backend-focused system.
              </p>
            </div>

            {/* COURSELENS */}
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                CourseLens AI
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                AI systems in practice
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                FastAPI, OpenAI, ChromaDB, embeddings, vector search, document
                processing, and source-grounded generation form the RAG
                pipeline.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              See the projects behind these skills
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}