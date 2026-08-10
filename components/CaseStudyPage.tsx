import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Carousel } from "@/components/Carousel"
import type { Project } from "@/data/projects"

type CaseStudyPageProps = {
  project: Project
  showBadge?: boolean
  galleryVariant?: "stack" | "carousel"
  galleryTitle?: string
}

export function CaseStudyPage({
  project,
  showBadge = true,
  galleryVariant = "stack",
  galleryTitle = "Imágenes del proyecto",
}: CaseStudyPageProps) {
  const { caseStudy } = project

  if (!caseStudy) return null

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Volver a proyectos
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
              {caseStudy.screenshots[0] && (
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl dark:from-indigo-500/30 dark:to-violet-500/30"
                  />
                  <Image
                    src={caseStudy.screenshots[0]}
                    alt={`Captura de ${project.title}`}
                    width={1536}
                    height={1024}
                    className="relative aspect-[3/2] w-full rounded-2xl border border-zinc-200 object-cover shadow-lg shadow-indigo-500/5 dark:border-white/10 dark:shadow-none"
                  />
                </div>
              )}

              <div>
                {showBadge && (
                  <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Proyecto destacado
                  </span>
                )}
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                  {project.title}
                </h1>
                <p className="mt-3 text-xl font-medium text-zinc-700 dark:text-zinc-300">
                  {caseStudy.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {caseStudy.overview}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-indigo-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-400"
                  >
                    Ver código en GitHub
                  </a>
                </div>
              </div>
            </div>

            {caseStudy.screenshots.length > 1 &&
              (galleryVariant === "carousel" ? (
                <Carousel
                  images={caseStudy.screenshots.slice(1)}
                  title={galleryTitle}
                  alt={`Captura de ${project.title}`}
                />
              ) : (
                <div className="mx-auto mt-14 grid max-w-4xl gap-6">
                  {caseStudy.screenshots.slice(1).map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Captura de ${project.title}`}
                      width={1536}
                      height={1024}
                      className="h-auto w-full rounded-2xl border border-zinc-200 object-cover shadow-lg shadow-indigo-500/5 dark:border-white/10 dark:shadow-none"
                    />
                  ))}
                </div>
              ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              Qué lo hace interesante
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900/60"
                >
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              Arquitectura
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              {caseStudy.architecture.intro}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {caseStudy.architecture.layers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900/60"
                >
                  <code className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {layer.name}
                  </code>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900/60">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                Frontend
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {caseStudy.architecture.frontend}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              Características principales
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {caseStudy.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              Calidad y despliegue
            </h2>
            <ul className="mt-8 space-y-3">
              {caseStudy.quality.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 p-10 text-center dark:border-indigo-400/20">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                ¿Querés ver el resto?
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Explorá otros proyectos donde aplico buenas prácticas de
                arquitectura, rendimiento y experiencia de usuario.
              </p>
              <Link
                href="/#proyectos"
                className="mt-6 inline-flex rounded-full bg-indigo-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-400"
              >
                Ver todos los proyectos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
