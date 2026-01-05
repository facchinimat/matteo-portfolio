export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built a fully responsive portfolio to showcase my work and practice Next.js fundamentals. Implemented dark mode support, SEO optimization with metadata, and responsive design using Tailwind CSS.",
      learnings: ["Next.js & React Components - File-based routing, dynamic .map() rendering, reusable components, and building full-stack applications with modern frameworks","Tailwind CSS & Responsive Design - Building professional UIs with utility classes, mobile-first breakpoints (sm:, md:, lg:), and dark mode support without writing custom CSS", "SEO & Web Standards - Metadata, Open Graph tags, semantic HTML, and how to make websites discoverable and shareable", "Production Workflow - Version control (Git/GitHub), package management (npm), deployment (Vercel), and build pipelines (npm run build)"],
      tech: ["Next.js", "React", "Tailwind CSS", "HTML/CSS", "Vercel"],
      github: "https://github.com/facchinimat/matteo-portfolio",
      live: null,
    },
    
    {
      title: "Flappy Bird Game",
      description: "A classic Flappy Bird game built with vanilla JavaScript and HTML5 Canvas. Implements physics-based gameplay with collision detection, dynamic obstacle generation, and scoring mechanics. Created during high school as a foundational game development project.",
      learnings: ["Canvas rendering and graphics", "Collision detection algorithms", "Game loop and frame-based animation", "Physics and gravity simulation"],
      tech: ["JavaScript", "HTML5 Canvas", "CSS"],
      github: "https://github.com/facchinimat/FlappyBirdGame",
      live: null,
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-7">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
          
        </div>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">{project.title}</h2>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.description}</p>
              
              <div className="mt-4">
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-white mb-2">Key Learnings</h3>
                <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1 mb-4">
                  {project.learnings.map((learning, i) => (
                    <li key={i}>• {learning}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}