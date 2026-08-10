import { siteConfig } from "@/lib/site"

export function MoreProjects() {
  return (
    <section className="scroll-mt-20 pb-16 pt-0">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
          Para ver más de mis proyectos
        </p>
        <div className="mt-8">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
            github.com/EricNahuel2002
          </a>
        </div>
      </div>
    </section>
  )
}
