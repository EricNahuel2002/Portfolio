"use client"

import { useState } from "react"
import Image from "next/image"

type CarouselProps = {
  images: string[]
  title: string
  alt: string
}

export function Carousel({ images, title, alt }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  if (total === 0) return null

  function goTo(index: number) {
    setCurrent((index + total) % total)
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
          {title}
        </h2>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-lg shadow-emerald-500/5 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-none">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={src} className="w-full shrink-0">
<Image
  src={src}
  alt={`${alt} ${index + 1}`}
  width={1536}
  height={1024}
  className="aspect-video w-full object-contain"
/>
              </div>
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md transition-colors hover:bg-white dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                aria-label="Imagen siguiente"
                className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md transition-colors hover:bg-white dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === current
                    ? "bg-indigo-500"
                    : "bg-zinc-300 hover:bg-zinc-400 dark:bg-white/20 dark:hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
