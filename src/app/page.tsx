import Image from "next/image";
import Link from "next/link";

const techStack = [
  "Python",
  "C",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "Linux",
  "pytest",
  "GitHub Actions",
  "React",
  "Next.js",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        {/* subtle background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT */}
          <div>
            {/* availability badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Seeking Summer 2027 Software Engineering opportunities
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              Computer Science · Stony Brook University
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
              I build backend systems,
              <span className="text-zinc-400 dark:text-zinc-600">
                {" "}
                developer infrastructure,
              </span>{" "}
              and AI-powered software.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I&apos;m Matteo Facchini, a Computer Science student and
              undergraduate researcher interested in backend engineering,
              distributed systems, infrastructure, and AI systems.
            </p>

            {/* actions */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Explore my work
              </Link>

              <a
                href="https://github.com/facchinimat"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/matteo-facchini-b14667352/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* small recruiter facts */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
              <span>New York</span>
              <span>Graduating May 2028</span>
              <span>U.S. Permanent Resident</span>
            </div>
          </div>

          {/* RIGHT / PROFILE */}
          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-zinc-500/10 blur-2xl" />

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/sbu.jpg"
                  alt="Matteo Facchini"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="px-2 pb-2 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-zinc-950 dark:text-white">
                      Matteo Facchini
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      Backend & Infrastructure SWE
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                    CS @ SBU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}
      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Selected Work
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Things I&apos;m building & researching
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-sm font-semibold text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              All projects →
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid gap-5 lg:grid-cols-2">
            {/* FORGECI */}
            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
              <div className="absolute right-6 top-5 text-7xl font-bold text-zinc-100 transition group-hover:text-blue-50 dark:text-zinc-900 dark:group-hover:text-blue-950/30">
                01
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Infrastructure
                  </p>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-950/40 dark:text-green-400">
                    Active
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-bold tracking-tight">
                  ForgeCI
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
                  A CI/CD testing platform exploring the systems behind modern
                  developer infrastructure. It currently handles authenticated
                  GitHub push webhooks, build-state persistence, automated
                  testing, and CI workflows.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "FastAPI",
                    "PostgreSQL",
                    "SQLAlchemy",
                    "pytest",
                    "GitHub Actions",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/facchinimat/ForgeCI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
                >
                  View repository
                  <span>↗</span>
                </a>
              </div>
            </article>

            {/* PACE LAB */}
            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
              <div className="absolute right-6 top-5 text-7xl font-bold text-zinc-100 transition group-hover:text-blue-50 dark:text-zinc-900 dark:group-hover:text-blue-950/30">
                02
              </div>

              <div className="relative">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Systems Research
                </p>

                <h3 className="mt-5 text-3xl font-bold tracking-tight">
                  PACE Lab
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
                  Investigating GPU resource sharing and workload co-location
                  using NVIDIA MPS and CUDA Green Contexts, with a focus on
                  performance isolation, resource partitioning, latency, and
                  throughput.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "GPU Systems",
                    "CUDA",
                    "NVIDIA MPS",
                    "Benchmarking",
                    "Performance",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/experience"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
                >
                  Research experience
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* COURSE LENS - FULL WIDTH */}
            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-8 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2 dark:border-zinc-800">
              {/* subtle glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-blue-400">
                      AI + Backend
                    </p>

                    <span className="text-xs text-zinc-500">03</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight">
                    CourseLens AI
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                    A retrieval-augmented generation system that turns course
                    PDFs into searchable knowledge. Documents move through text
                    extraction, chunking, embeddings, vector retrieval, and
                    source-grounded LLM generation with page-level citations.
                  </p>

                  <Link
                    href="/projects"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
                  >
                    Explore project
                    <span>→</span>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {[
                    "Python",
                    "FastAPI",
                    "OpenAI API",
                    "ChromaDB",
                    "Streamlit",
                    "PyMuPDF",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL FOCUS
      ========================================================= */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Technical Focus
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Learning by building real systems.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-zinc-600 dark:text-zinc-400">
                I&apos;m most interested in understanding what happens behind
                the interface: APIs, databases, infrastructure, execution,
                reliability, performance, and the systems that connect
                everything together.
              </p>
            </div>

            <div className="flex content-start flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl bg-zinc-950 px-8 py-14 text-center text-white sm:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s Connect
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Looking for a software engineer who likes understanding how
              things work?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
              I&apos;m currently exploring Summer 2027 software engineering
              opportunities in backend, infrastructure, systems, and related
              areas.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Get in touch
              </Link>

              <a
                href="/Matteo_Facchini_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900"
              >
                View Resume ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}