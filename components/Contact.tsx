import { siteConfig } from "@/lib/site"

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
          Contacto
        </h2>
        <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          ¿Tenés algún proyecto en mente?
        </p>
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Contame tu idea y te voy a responder lo antes posible. Estoy disponible
          para proyectos freelance y oportunidades laborales.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 sm:w-auto"
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5 sm:w-auto"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5 sm:w-auto"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
