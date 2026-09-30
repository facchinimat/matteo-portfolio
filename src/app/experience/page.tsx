import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Matteo Facchini's PACE Lab GPU resource-sharing research and professional experience at Stellina Restaurant.",
  alternates: { canonical: "/experience" },
};

const researchTopics = [
  "GPU Systems",
  "NVIDIA MPS",
  "CUDA Green Contexts",
  "Performance Isolation",
  "Resource Partitioning",
  "Latency",
  "Throughput",
  "Benchmarking",
];

const researchHighlights = [
  "Investigating GPU resource sharing and workload co-location using NVIDIA MPS and CUDA Green Contexts.",
  "Benchmarking pairs of GPU workloads across different resource allocations.",
  "Measuring latency and throughput to understand how co-located workloads affect one another.",
  "Comparing GPU-sharing mechanisms and workload characteristics to study performance isolation.",
];

const restaurantSkills = [
  "Communication",
  "Teamwork",
  "Time Management",
  "Customer Service",
  "Working Under Pressure",
];

export default function ExperiencePage() {
  return (
    <main>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Experience
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-6xl">
          Researching systems and learning by doing.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          My experience spans systems research, software projects, and
          fast-paced team environments. Right now, my technical focus is GPU
          systems research at Stony Brook University.
        </p>
      </section>

      {/* =========================================================
          PACE LAB — FEATURED EXPERIENCE
      ========================================================= */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                Current Experience
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Undergraduate Researcher
              </h2>

              <p className="mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                PACE Lab
              </p>

              <p className="mt-1 text-zinc-500">
                Stony Brook University
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                September 2026 — Present
              </p>

              <div className="mt-6 border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
                <p className="text-sm text-zinc-500">
                  Advisor
                </p>

                <p className="mt-1 font-semibold text-zinc-900 dark:text-white">
                  Prof. Anshul Gandhi
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                GPU Resource Sharing & Workload Co-location
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I&apos;m investigating how GPU workloads behave when they share
                hardware resources, with a focus on performance isolation and
                resource partitioning.
              </p>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                The research involves NVIDIA MPS and CUDA Green Contexts,
                benchmarking workload pairs under different resource
                allocations, and measuring latency and throughput to understand
                how sharing decisions affect performance.
              </p>

              {/* TOPICS */}
              <div className="mt-7 flex flex-wrap gap-2">
                {researchTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* HIGHLIGHTS */}
              <div className="mt-10 border-t border-zinc-200 pt-7 dark:border-zinc-800">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                  What I&apos;m working on
                </p>

                <div className="mt-5 space-y-4">
                  {researchHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH FOCUS BREAK
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-white dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                Resource Sharing
              </p>

              <p className="mt-3 leading-7 text-zinc-400">
                Exploring how multiple workloads share GPU compute resources.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-400">
                Performance
              </p>

              <p className="mt-3 leading-7 text-zinc-400">
                Measuring latency and throughput under different resource
                allocations.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-400">
                Systems Thinking
              </p>

              <p className="mt-3 leading-7 text-zinc-400">
                Studying how resource-management decisions affect the behavior
                of a larger system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFESSIONAL EXPERIENCE
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Professional Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Stellina Restaurant
            </h2>

            <p className="mt-2 text-zinc-500">
              Oyster Bay, New York
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              June 2022 — September 2026
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">
              Restaurant Waiter
            </h3>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Worked in a fast-paced fine dining environment while balancing
              customer service, communication, coordination, and time-sensitive
              responsibilities.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                Responsibility
              </p>

              <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
                Managed up to{" "}
                <span className="font-semibold text-zinc-950 dark:text-white">
                  18 tables at once
                </span>{" "}
                while coordinating with kitchen staff, bartenders, and servers
                under time constraints.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {restaurantSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Next
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              See how I apply what I&apos;m learning.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
              Explore ForgeCI and CourseLens AI to see the backend and systems
              work I&apos;m building outside of research.
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