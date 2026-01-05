// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Left: logo/name */}
        <Link href="/" className="text-lg hover:underline underline-offset-4 transition-all font-semibold tracking-tight">
          Matteo
        </Link>

        {/* Right: links */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/skills" className="hover:underline">
            Skills
          </Link>
          <Link href="/experience" className="hover:underline">
            Experience
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
