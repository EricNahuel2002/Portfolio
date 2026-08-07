import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

const featured = projects.find((project) => project.featured)
const rest = projects.filter((project) => !project.featured)

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
            Proyectos
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Trabajos destacados
          </p>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            Una selección de proyectos donde aplico buenas prácticas de
            arquitectura, rendimiento y experiencia de usuario.
          </p>
        </div>

        {featured && (
          <article className="group mt-12 overflow-hidden rounded-2xl border border-indigo-500/30 bg-white shadow-lg shadow-indigo-500/5 transition-colors hover:border-indigo-500/60 dark:border-indigo-400/20 dark:bg-zinc-900/60 dark:shadow-none dark:hover:border-indigo-400/40 lg:grid lg:grid-cols-2">
            <div className="relative aspect-video h-full w-full">
              <Image
                src="/images/Homefix.jpeg"
                alt={`Captura de ${featured.title}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Destacado
              </span>
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                {featured.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {featured.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                {featured.slug && (
                  <Link
                    href={`/proyectos/${featured.slug}`}
                    className="rounded-full bg-indigo-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-400"
                  >
                    Ver detalle
                  </Link>
                )}
                {featured.link && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-indigo-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-400"
                  >
                    Ver demo
                  </a>
                )}
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Código
                </a>
              </div>
            </div>
          </article>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-indigo-400/60 dark:border-white/10 dark:bg-zinc-900/60 dark:hover:border-indigo-400/40"
            >
              <div
                className={`flex aspect-video items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <svg
                  className="h-10 w-10 text-white/80 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21z"
                  />
                </svg>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Ver demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-indigo-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-indigo-400"
                  >
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
