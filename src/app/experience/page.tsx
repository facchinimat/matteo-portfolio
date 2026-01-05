export default function ExperiencePage() {
  const experiences = [
    {
      title: "Computer Science Student",
      organization: "Stony Brook University",
      period: "2024 - Present",
      description: "Pursuing a degree in Computer Science with a focus on full-stack development and software engineering. Completed coursework in data structures, algorithms, databases, and web development.",
      skills: ["Algorithms", "Data Structures", "Databases", "Web Development"],
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-12">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Experience</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">My academic journey and skills acquired</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">{exp.title}</h2>
              <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">{exp.organization}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">{exp.period}</p>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">{exp.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
