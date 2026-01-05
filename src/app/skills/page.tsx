export default function SkillsPage() {
  // Function to get color classes based on proficiency level
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
      case "Intermediate":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
      case "Learning":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300";
      default:
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
    }
  };

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "HTML/CSS"],
      level: "Advanced"
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      level: "Learning"
    },
    {
      category: "Tools & Platforms",
      skills: ["VS Code", "Git/GitHub", "npm", "Vercel"],
      level: "Intermediate"
    },
    {
      category: "Backend Development",
      skills: ["n/a"],
      level: "Learning"
    }
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Skills & Expertise</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">Technical proficiencies and areas of expertise</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              {/* Category Title & Level */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {skillGroup.category}
                </h2>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${getLevelColor(skillGroup.level)}`}>
                  {skillGroup.level}
                </span>
              </div>

              {/* Individual Skills */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h3 className="text-lg font-semibold mb-4">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="font-medium">Advanced</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Expert level proficiency</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="font-medium">Intermediate</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Strong understanding</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="font-medium">Learning</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Currently learning or exploring</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6">
          <h3 className="text-zinc-700 dark:text-zinc-300">
            Note: This skills section is continuously evolving as I learn new technologies and tools. Stay tuned for updates!
          </h3>
        </div>
      </div>
    </main>
  );
}
