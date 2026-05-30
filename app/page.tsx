"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

const projects = [
  {
    title: "Web Nusantara",
    eyebrow: "Featured Project",
    description:
      "A multi-page ticketing web experience with destination details, login flow, ticket purchasing, and interactive client-side behavior.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/dehanjangkaru/web-nusantara",
    className: "md:col-span-2",
  },
  {
    title: "Flask Rest API",
    eyebrow: "Full-Stack System",
    description:
      "A focused product management application with a Python backend, database layer, API routes, and a lightweight browser interface.",
    technologies: ["Python", "JavaScript", "HTML"],
    href: "https://github.com/dehanjangkaru/database-crud",
    className: "",
  },
  {
    title: "Basic Kalkulator",
    eyebrow: "C++ Fundamentals",
    description:
      "A console-based calculator for basic arithmetic operations, built as a clear introduction to C++ program structure and control flow.",
    technologies: ["C++", "CMake", "CLI"],
    href: "https://github.com/dehanjangkaru/basic-kalkulator",
    className: "",
  },
];

const skillGroups = [
  {
    title: "Languages",
    description: "The foundations I use to solve problems clearly.",
    skills: ["C++", "JavaScript", "Python", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks",
    description: "Tools for building reliable product experiences.",
    skills: ["Next.js", "React", "Node.js", "Flask", "Tailwind CSS"],
  },
  {
    title: "Workflow",
    description: "Systems that keep each project deliberate and maintainable.",
    skills: ["Git", "GitHub", "MySQL", "Cursor"],
  },
];

const stats = [
  { value: "3", label: "Projects Showcased" },
  { value: "10+", label: "Technologies" },
  { value: "Active", label: "GitHub Activity" },
];

const education = [
  {
    period: "Present",
    title: "Software Engineering Student",
    organization: "Independent Study & Academic Projects",
    description:
      "Building a strong foundation in software architecture, web development, data structures, and collaborative engineering practices.",
  },
  {
    period: "Current Focus",
    title: "Full-Stack Product Development",
    organization: "Project-Based Learning",
    description:
      "Designing and shipping practical applications with thoughtful interfaces, maintainable APIs, and reliable data models.",
  },
];

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
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
    <svg aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.4 11.4 0 0 1 12 6.3c1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 3h-17A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 20.5 3ZM8.3 18H5.2V9.7h3.1V18ZM6.8 8.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM19 18h-3v-4.5c0-1.2-.5-1.8-1.5-1.8-1.1 0-1.7.7-1.7 2.1V18h-3V9.7h2.9v1.1c.6-.9 1.6-1.4 2.7-1.4 2.2 0 3.6 1.4 3.6 4.2V18Z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />
    </svg>
  );
}

function Badge({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-emerald-300">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: Readonly<{ eyebrow: string; title: string; description: string }>) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-100 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function updateSpotlight(event: MouseEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
}

function SpotlightCard({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      onMouseMove={updateSpotlight}
      className={`spotlight-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-400/25 ${className}`}
    >
      <div className="spotlight-layer" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-8 lg:px-12">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/[0.06] bg-slate-950/75 py-5 backdrop-blur-xl">
        <a href="#" className="font-mono text-sm font-bold tracking-[0.2em] text-slate-100">
          DEHAN<span className="text-emerald-400">.</span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href="#experience"
            className="hidden text-sm font-medium text-slate-400 transition hover:text-emerald-300 sm:block"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:scale-[1.02] hover:border-emerald-400/35 hover:text-emerald-300"
          >
            View my work
          </a>
        </div>
      </nav>

      <motion.section
        initial={initial}
        animate="visible"
        variants={revealContainer}
        className="grid min-h-[82vh] items-center gap-12 py-24 lg:grid-cols-[1fr_18rem] lg:py-32"
      >
        <div className="max-w-4xl space-y-8">
          <motion.p
            variants={revealItem}
            className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400"
          >
            Software Engineering Student
          </motion.p>
          <motion.h1
            variants={revealItem}
            className="text-balance text-5xl font-bold leading-[1.04] tracking-[-0.065em] text-slate-100 sm:text-7xl lg:text-[5.4rem]"
          >
            I build software with
            <span className="block text-slate-400">clarity and intention.</span>
          </motion.h1>
          <motion.p variants={revealItem} className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Dehan, a software engineering student focused on shaping
            reliable systems and polished digital products. I care about the
            details that make software useful, maintainable, and easy to trust.
          </motion.p>
          <motion.div variants={revealItem} className="flex flex-wrap gap-3">
            <a
              href="https://github.com/dehanjangkaru"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-emerald-300"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dehan-jangkaru"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:scale-[1.02] hover:border-emerald-400/35 hover:text-emerald-300"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div variants={revealItem} className="hidden lg:block">
          <SpotlightCard className="p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
              <CodeIcon />
            </div>
            <p className="mt-16 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Currently Exploring
            </p>
            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
              Better systems through thoughtful engineering.
            </p>
          </SpotlightCard>
        </motion.div>
      </motion.section>

      <motion.section
        initial={initial}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={revealContainer}
        aria-label="Quick stats"
        className="grid divide-y divide-white/[0.08] rounded-3xl border border-white/10 bg-slate-900/40 px-6 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={revealItem} className="space-y-2 py-6 sm:px-8">
            <p className="text-2xl font-bold tracking-tight text-slate-100">{stat.value}</p>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.section>

      <section id="projects" className="scroll-mt-24 space-y-12 py-28 sm:py-36">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects with a product mindset."
          description="A selection of work shaped around useful outcomes, clear interfaces, and engineering fundamentals."
        />
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={revealContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={revealItem} className={project.className}>
              <SpotlightCard className="h-full min-h-80 p-7">
                <div className="flex h-full flex-col">
                  <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-slate-100">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                  >
                    View source
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="space-y-12 py-28 sm:py-36">
        <SectionHeading
          eyebrow="Technical Toolbox"
          title="A practical, growing toolkit."
          description="I choose tools based on the problem, while continuing to strengthen the fundamentals beneath them."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SpotlightCard key={group.title} className="p-7">
              <h3 className="text-xl font-bold tracking-[-0.03em] text-slate-100">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 space-y-12 py-28 sm:py-36">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Learning by building."
          description="A focused path toward becoming an engineer who can move comfortably from idea to implementation."
        />
        <SpotlightCard className="p-7 sm:p-10">
          <ol className="space-y-10">
            {education.map((item, index) => (
              <li key={item.title} className="relative grid gap-3 pl-7 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-9">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-emerald-300 bg-slate-950 shadow-[0_0_0_5px_rgba(52,211,153,0.08)]" />
                {index < education.length - 1 ? (
                  <span className="absolute bottom-[-2.75rem] left-[0.34rem] top-5 w-px bg-white/10" />
                ) : null}
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-emerald-400">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-100">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">{item.organization}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </SpotlightCard>
      </section>

      <footer className="flex flex-col gap-3 border-t border-white/[0.08] py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Dehan. Built with Next.js.</p>
        <a href="#" className="font-medium transition hover:text-emerald-300">
          Back to top
        </a>
      </footer>
    </main>
  );
}
