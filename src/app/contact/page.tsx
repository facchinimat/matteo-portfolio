import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Matteo Facchini about Summer 2027 software engineering opportunities, systems research, or projects.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Contact
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-6xl">
          Let&apos;s build something interesting.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I&apos;m currently interested in Summer 2027 software engineering
          opportunities, especially roles involving backend systems,
          infrastructure, distributed systems, or AI infrastructure.
        </p>
      </section>

      {/* =========================================================
          PRIMARY CONTACT
      ========================================================= */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                Best way to reach me
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Email
              </h2>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                For recruiting, engineering opportunities, research, or project
                conversations, email is the easiest way to reach me.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
              <p className="text-sm text-zinc-500">
                Email
              </p>

              <a
                href="mailto:matteofac12@gmail.com"
                className="mt-2 block break-all text-2xl font-bold tracking-tight text-zinc-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400 sm:text-3xl"
              >
                matteofac12@gmail.com
              </a>

              <a
                href="mailto:matteofac12@gmail.com"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Send me an email
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OTHER LINKS
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Elsewhere
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Find me online.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/matteo-facchini-b14667352/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 py-6"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  LinkedIn
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Professional profile and experience
                </p>
              </div>

              <span className="text-xl text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                ↗
              </span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/facchinimat"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 py-6"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  GitHub
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Projects, source code, tests, and ongoing work
                </p>
              </div>

              <span className="text-xl text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">
              Location
            </p>

            <p className="mt-2 font-semibold text-zinc-950 dark:text-white">
              New York
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Graduation
            </p>

            <p className="mt-2 font-semibold text-zinc-950 dark:text-white">
              May 2028
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Work Authorization
            </p>

            <p className="mt-2 font-semibold text-zinc-950 dark:text-white">
              U.S. Permanent Resident
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-zinc-950 px-8 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Open to Opportunities
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Backend, infrastructure, systems, and AI engineering.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
            If you&apos;re working on systems where I could contribute and
            learn, I&apos;d be glad to connect.
          </p>

          <a
            href="mailto:matteofac12@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Contact Me
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}