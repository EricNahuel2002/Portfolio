export type ArchitectureLayer = {
  name: string
  description: string
}

export type CaseStudy = {
  tagline: string
  overview: string
  highlights: { title: string; description: string }[]
  architecture: { intro: string; layers: ArchitectureLayer[]; frontend: string }
  features: string[]
  quality: string[]
  screenshots: string[]
}

export type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
  github: string
  gradient: string
  featured?: boolean
  slug?: string
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    title: "HomeFix",
    description:
      "Aplicación web full stack para servicios del hogar, con frontend React + Vite y backend Node.js + Express + Prisma + MySQL, subida de imágenes a Cloudinary y autenticación JWT.",
    stack: ["React", "Vite", "Node.js", "Express", "Prisma", "MySQL"],
    github: "https://github.com/CasanovaRamiro/HomeFix",
    gradient: "from-indigo-500 to-violet-500",
    featured: true,
    slug: "homefix",
    caseStudy: {
      tagline:
        "Plataforma full-stack que conecta clientes con profesionales de oficios del hogar.",
      overview:
        "HomeFix es un proyecto final de carrera realizado con tecnologías frontend con React + Vite y backend con Node.js + Express + Prisma + MySQL, con toda la UI en español para el mercado argentino. Un proyecto de alta complejidad que integra autenticación con Auth0, verificación de identidad KYC (Didit), asistente con IA generativa (Gemini), notificaciones en tiempo real por Telegram, sistema de licitaciones, subcontratación y reseñas bidireccionales.",
      highlights: [
        {
          title: "Arquitectura limpia",
          description:
            "Backend con capas estrictas tipo Domain Driven Design (presentation/domain/infrastructure), dependencia invertida: los servicios de dominio nunca tocan el ORM.",
        },
        {
          title: "Asistente con IA (Gemini)",
          description:
            "Chat que diagnostica el problema del cliente, recomienda categoría y autogenera el borrador del post, devolviendo JSON estructurado.",
        },
        {
          title: "KYC con Didit",
          description:
            "Verificación de identidad con webhooks firmados, mapeo de estados y polling de decisión.",
        },
        {
          title: "Búsqueda por distancia y emergencias",
          description:
            "Radio en km, filtros por categoría y paginación. Publicaciones de emergencia que expiran a las 24h y se difunden por Telegram.",
        },
        {
          title: "Licitaciones y subcontratos",
          description:
            "Licitaciones con ponderaciones de criterios y presupuesto máximo. Subcontratos con múltiples puestos agrupados por rubro.",
        },
        {
          title: "Reseñas bidireccionales",
          description:
            "Clientes y trabajadores se califican mutuamente (1-5, con fotos) solo tras completar o cancelar el trabajo.",
        },
      ],
      architecture: {
        intro:
          "Backend con capas estrictas documentadas en ARCHITECTURE.md y una regla dura: cada capa solo importa hacia abajo. En la práctica es una arquitectura Domain Driven Design simplificada sin use cases con dependencia invertida.",
        layers: [
          {
            name: "presentation/",
            description:
              "Routes Express, middleware (JWT de Auth0, manejo de errores), DTOs y transformers (Date → ISO). Swagger en /api-docs.",
          },
          {
            name: "domain/",
            description:
              "Servicios con la lógica de negocio y reglas (guards 404/403, validaciones). Tipos de dominio con Date.",
          },
          {
            name: "infrastructure/",
            description:
              "Acceso a datos (queries Prisma), transformers (Prisma → dominio) y providers externos: Auth0, Gemini, Cloudinary, Telegram, Didit.",
          },
          {
            name: "lib/",
            description:
              "Utilidades compartidas: cliente Prisma, env, logger pino y errores.",
          },
        ],
        frontend:
          "React 19 + Vite + TypeScript con Tailwind CSS 4, React Router 7, Leaflet para mapas y PWA (vite-plugin-pwa). Organizado en views/, components/, hooks/ por feature (useCreatePost, useDiagnosisChat), services/ (clientes axios tipados) y types/.",
      },
      features: [
        "Publicación de trabajos por categoría con imágenes, rango de fechas y dirección con lat/long.",
        "Postulaciones de trabajadores con mensaje, disponibilidad de días, costo de visita y estimación.",
        "Flujo de contratación con estados (Active → InProgress → Completed/Cancelled), pausa y cancelación.",
        "Token de inicio de 4 dígitos (TTL 5 min, 5 intentos) que el trabajador genera y el cliente valida.",
        "Autenticación Auth0 con verificación de email, recuperación de contraseña y roles por claim.",
        "Notificaciones en tiempo real por Telegram y dashboard con estadísticas de trabajo.",
        "Perfiles públicos con rating, subida de imágenes a Cloudinary y calendario del trabajador.",
      ],
      quality: [
        "Testing por capas con Vitest + Supertest (service, data, routes) y Testing Library en el cliente.",
        "TypeScript estricto con ESLint; typecheck, lint y build verificados en CI.",
        "CI/CD con GitHub Actions (3 jobs: lint, build, test) con MySQL en contenedor.",
        "Producción: backend en Railway, frontend en Vercel y base de datos en Aiven con MySQL 8.",
      ],
      screenshots: ["/images/Homefix.jpeg"],
    },
  },
  {
    title: "Adivina la palabra",
    description:
      "Juego multijugador de adivinar la palabra con sincronización en tiempo real entre jugadores mediante WebSocket, lógica de rondas, sistema de puntaje y animaciones visuales.",
    stack: ["Java", "Spring", "WebSocket", "Thymeleaf", "MySQL"],
    github: "https://github.com/EricNahuel2002/proyecto-adivina-la-palabra",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "App-pedidos",
    description:
      "Plataforma de delivery tipo Rappi con patrón de API Gateway y microservicios en C#/.NET (autenticación, menú, pedidos) y frontend en Angular.",
    stack: ["C#", ".NET", "Angular", "API Gateway", "Microservicios"],
    github: "https://github.com/EricNahuel2002/app-pedidos",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Sistema de reserva de turnos",
    description:
      "Sistema de reserva de turnos para consultorio médico con roles de cliente y administrador, agenda por especialidad y gestión de turnos. Frontend React + TypeScript con Supabase (PostgreSQL) como backend como servicio.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL"],
    github: "https://github.com/EricNahuel2002/Sistema-Reserva-de-turnos",
    gradient: "from-sky-500 to-blue-500",
  },
]
