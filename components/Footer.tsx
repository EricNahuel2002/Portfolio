import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}.
        </p>
        <Link
          href="/#inicio"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          Volver arriba
        </Link>
      </div>
    </footer>
  )
}
