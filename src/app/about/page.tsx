export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
          <p className="mt-2 text-lg text-zinc-600">Full-Stack Developer | Software Engineer | CS Student</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Who I Am</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I'm Matteo Facchini, a Computer Science student at Stony Brook University passionate about building products that solve real problems. Right now I'm building an Internship Tracker to understand how real applications handle data storage, authentication, and scaling. I'm particularly excited about building features end-to-end—from crafting clean user interfaces to architecting robust backend systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Achievements & Certificates</h2>
            <div className="mt-4 text-medium text-zinc-700 dark:text-zinc-300 ">
              <ul className="list-disc pl-5 space-y-2">
                <li>N/A</li>
                
              </ul>
            </div>
          </div>

          

          <div>
            <h2 className="text-2xl font-bold">Education | Coursework</h2>
            <div>
              <h3 className="text-medium font-medium mt-3">Stony Brook University | Bachelor of Science in Computer Science | Expected Graduation date: May 2028</h3>
              <ul className="list-disc pl-5 py-5 space-y-4 text-zinc-700 dark:text-zinc-300">
                <li>
                  Data Structures and Algorithms
                </li>
                <li>
                  Foundations of Computer Science | Discrete Mathematics
                </li>
                <li>
                  Applied Linear Algebra
                </li>
                <li>
                  Digital Intelligence
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}