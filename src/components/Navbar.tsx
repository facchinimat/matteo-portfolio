"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const resumeUrl = "/Matteo_Facchini_Resume.pdf";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-black/80">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        {/* =====================================================
            LOGO
        ===================================================== */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-sm font-bold text-white transition group-hover:bg-blue-600 dark:bg-white dark:text-black dark:group-hover:bg-blue-500 dark:group-hover:text-white">
            MF
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none text-zinc-950 dark:text-white">
              Matteo Facchini
            </p>

            <p className="mt-1 text-xs text-zinc-500">CS @ Stony Brook</p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAV
        ===================================================== */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${active
                    ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="ml-3 h-5 w-px bg-zinc-200 dark:bg-zinc-800" />

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white"
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* =====================================================
            MOBILE BUTTON
        ===================================================== */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 lg:hidden"
        >
          {menuOpen ? (
            /* CLOSE ICON */
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* MENU ICON */
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black lg:hidden">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition ${active
                        ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white"
              >
                View Resume
                <span aria-hidden="true">↗</span>
              </a>

              <div className="mt-4 flex items-center justify-center gap-6">
                <a
                  href="https://github.com/facchinimat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/matteo-facchini-b14667352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}