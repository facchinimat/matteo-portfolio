import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* LEFT: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm Matteo
          </h1>

          <p className="mt-4 text-lg dark:text-zinc-400 max-w-xl">
            I’m a Computer Science student at Stony Brook University focused on full-stack software engineering and building scalable web applications.

          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm: justify-center md:justify-center">
            <a
              href="https://github.com/facchinimat"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-bold hover:bg-zinc-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/matteo-facchini-b14667352/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-bold hover:bg-zinc-500 transition"
            >
              LinkedIn
            </a>
            <a href="https://docs.google.com/document/d/1Yy_HzBAVffGw26fzhY1JvFpJVEUirGs64H4yz9gLz8g/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-bold hover:bg-zinc-500 transition">Resume</a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/sbu.jpg"
            alt="Photo of Matteo"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

      </section>
    </main>
  );
}
