import { siteConfig } from "@/lib/site"

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Java",
  "ASP NET CORE",
  "Tailwind CSS",
  "MySQL",
  "Git",
]

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl dark:from-indigo-500/30 dark:to-violet-500/30"
            />
            {siteConfig.photo ? (
              <img
                src={siteConfig.photo}
                alt={`Foto de ${siteConfig.name}`}
                className="relative aspect-square w-full rounded-3xl border border-zinc-200 object-cover dark:border-white/10"
              />
            ) : (
              <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:border-white/10 dark:from-zinc-800 dark:to-zinc-900">
                <span className="text-6xl font-bold text-zinc-900/10 dark:text-white/10">
                  {siteConfig.initials}
                </span>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              Sobre mí
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Transformo ideas en productos digitales
            </p>
            <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Soy un {siteConfig.role.toLowerCase()} recientemente graduado de la Tecnicatura Universitaria en Desarrollo Web en la Universidad Nacional de La Matanza. Me muevo con facilidad entre tecnologías modernas tales como React, Node.js, TypeScript, asi como también ASP NET CORE y Java, sin una preferencia específica.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Durante la carrera, colaboré con equipos en diseño,
              desarrollo, testing y mantenimiento de proyectos. Me encanta aprender
              tecnologías nuevas y aplicarlas para resolver problemas reales.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Tecnologías que uso
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
