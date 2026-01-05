export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-6">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Get In Touch</h1>
          
        </div>

        <div className="space-y-8">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Feel free to reach out! I'm always open to discussing new projects, opportunities, and ideas. You can contact me through any of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:mfacchini@stonybrook.edu"
              className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">Email</h3>
              <p className="text-zinc-600 dark:text-zinc-400 break-all">matteodfac12@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/matteo-facchini-b14667352/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-zinc-600 dark:text-zinc-400">matteo-facchini</p>
            </a>

            <a
              href="https://github.com/facchinimat"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-zinc-600 dark:text-zinc-400">facchinimat</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
