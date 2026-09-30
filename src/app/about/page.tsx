import Link from "next/link";

const coursework = [
  "Analysis of Algorithms",
  "Data Structures & Algorithms",
  "Systems Programming",
  "Discrete Mathematics",
  "Object-Oriented Programming",
  "Probability & Statistics",
  "Linear Algebra",
];

const interests = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Designing APIs, data models, services, and application logic that remain understandable as systems grow.",
  },
  {
    number: "02",
    title: "Infrastructure",
    description:
      "Learning how developer platforms, CI/CD systems, containers, databases, queues, and distributed workers operate behind the scenes.",
  },
  {
    number: "03",
    title: "Systems & Performance",
    description:
      "Understanding how software interacts with compute resources and how architectural decisions affect latency, throughput, and reliability.",
  },
  {
    number: "04",
    title: "AI Systems",
    description:
      "Building useful AI applications around retrieval, APIs, data pipelines, and the infrastructure required to make models usable in real products.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* LEFT LABEL */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              About
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              More than a list of technologies.
            </h1>
          </div>

          {/* RIGHT STORY */}
          <div className="space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Matteo Facchini, a Computer Science student at Stony
              Brook University interested in backend engineering,
              infrastructure, distributed systems, and AI systems.
            </p>

            <p>
              I like understanding what happens after someone clicks a button:
              how a request moves through an API, how data is stored, how work
              gets scheduled, how services communicate, and what happens when
              something fails.
            </p>

            <p>
              That curiosity has pushed me toward projects like{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                ForgeCI
              </span>
              , where I&apos;m exploring CI/CD infrastructure, and{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                CourseLens AI
              </span>
              , where I built a retrieval-augmented generation pipeline around
              course documents.
            </p>

            <p>
              I&apos;m also an undergraduate researcher in Stony Brook&apos;s
              PACE Lab, where I&apos;m studying GPU resource sharing and
              workload co-location. That experience has made me increasingly
              interested in systems performance and the infrastructure behind
              large-scale software.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK OVERVIEW
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-12 sm:grid-cols-4">
          <div className="py-5">
            <p className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              2028
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Expected graduation
            </p>
          </div>

          <div className="py-5">
            <p className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              3.55
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Current GPA
            </p>
          </div>

          <div className="py-5">
            <p className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              PACE
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Systems research lab
            </p>
          </div>

          <div className="py-5">
            <p className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              NY
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Based in New York
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING INTERESTS
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Engineering Interests
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            The problems I want to get better at solving.
          </h2>

          <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
            I&apos;m still early in my career, so I&apos;m deliberately
            building across several connected areas instead of locking myself
            into one narrow technology.
          </p>
        </div>

        <div className="grid gap-x-10 border-t border-zinc-200 dark:border-zinc-800 md:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.number}
              className="group border-b border-zinc-200 py-8 dark:border-zinc-800"
            >
              <div className="flex gap-5">
                <span className="pt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {interest.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-zinc-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {interest.title}
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-zinc-600 dark:text-zinc-400">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          RESEARCH
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-white dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Currently Researching
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                GPU resource sharing
              </h2>
            </div>

            <div>
              <p className="text-xl leading-8 text-zinc-300">
                At Stony Brook University&apos;s PACE Lab, I&apos;m
                investigating how multiple GPU workloads behave when they share
                hardware resources.
              </p>

              <p className="mt-5 leading-7 text-zinc-400">
                My work involves NVIDIA MPS and CUDA Green Contexts, benchmarking
                workload pairs under different resource allocations, and
                measuring latency and throughput to understand performance
                isolation and resource partitioning.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "GPU Systems",
                  "NVIDIA MPS",
                  "CUDA",
                  "Performance Isolation",
                  "Latency",
                  "Throughput",
                  "Benchmarking",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Link
                href="/experience"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
              >
                View research experience
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Education
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Stony Brook University
            </h2>
          </div>

          <div>
            <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-7 dark:border-zinc-800 sm:flex-row">
              <div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                  B.S. in Computer Science
                </h3>

                <p className="mt-1 text-zinc-500">
                  College of Engineering and Applied Sciences
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="font-semibold text-zinc-900 dark:text-zinc-200">
                  Expected May 2028
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  GPA: 3.55 / 4.0
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                Relevant Coursework
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW I WORK
      ========================================================= */}
      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                How I Learn
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Build it. Break it. Understand it.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                I learn best by taking a concept and turning it into something
                real. Instead of only reading about webhooks, databases,
                retrieval systems, or CI pipelines, I try to build a smaller
                version myself and understand each layer.
              </p>

              <p>
                I&apos;m especially drawn to projects where I can start with a
                simple working system and gradually add persistence, testing,
                reliability, concurrency, and infrastructure as I learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Next
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              See what I&apos;ve been building.
            </h2>

            <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              Explore my backend, infrastructure, and AI projects in more
              detail.
            </p>
          </div>

          <Link
            href="/projects"
            className="shrink-0 rounded-lg bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            View Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}