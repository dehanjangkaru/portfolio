const projects = [
  {
    title: "Campus Connect",
    description:
      "A collaborative platform that helps students discover events, join communities, and stay connected on campus.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/dehanjangkaru/campus-connect",
  },
  {
    title: "Taskflow API",
    description:
      "A RESTful task management service with secure authentication, project workspaces, and clear API documentation.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    href: "https://github.com/dehanjangkaru/taskflow-api",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive forecast dashboard with location search, accessible data visualizations, and saved preferences.",
    technologies: ["React", "REST API", "CSS"],
    href: "https://github.com/dehanjangkaru/weather-dashboard",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "PostgreSQL", "Figma", "VS Code"],
  },
];

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.4 11.4 0 0 1 12 6.3c1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 3h-17A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 20.5 3ZM8.3 18H5.2V9.7h3.1V18ZM6.8 8.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM19 18h-3v-4.5c0-1.2-.5-1.8-1.5-1.8-1.1 0-1.7.7-1.7 2.1V18h-3V9.7h2.9v1.1c.6-.9 1.6-1.4 2.7-1.4 2.2 0 3.6 1.4 3.6 4.2V18Z" />
    </svg>
  );
}

function Badge({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: Readonly<{ eyebrow: string; title: string }>) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
      <nav className="flex items-center justify-between py-3">
        <a href="#" className="text-sm font-bold tracking-[0.18em] text-white">
          DEHAN<span className="text-cyan-400">.</span>
        </a>
        <a
          href="#projects"
          className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          View my work
        </a>
      </nav>

      <section className="flex min-h-[78vh] items-center py-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Software Engineering Student
          </p>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-7xl">
            Hi, I&apos;m Dehan.
            <span className="block text-slate-400">I build thoughtful software.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m a software engineering student who enjoys turning ideas into
            reliable, user-friendly products. I&apos;m currently focused on web
            development, backend systems, and learning by building.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://github.com/dehanjangkaru"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dehanjangkaru"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-10 py-24">
        <SectionHeading eyebrow="Selected Work" title="Projects I have built" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-72 flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/70 hover:bg-slate-900"
            >
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
              <div className="my-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                View source
                <ArrowUpRightIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <SectionHeading eyebrow="Toolbox" title="Skills I am growing" />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-slate-800 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Dehan. Built with Next.js.</p>
        <a href="#" className="transition hover:text-cyan-300">
          Back to top
        </a>
      </footer>
    </main>
  );
}
