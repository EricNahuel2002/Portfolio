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
  image?: string
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
    stack: [
      "Java 11",
      "Spring MVC 5",
      "Thymeleaf",
      "Hibernate",
      "WebSocket + STOMP",
      "MySQL",
      "Google Gemini",
      "Mercado Pago",
      "Bootstrap 5",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/EricNahuel2002/proyecto-adivina-la-palabra",
    gradient: "from-emerald-500 to-teal-500",
    image: "/images/adivina-palabra-portada.png",
    slug: "adivina-la-palabra",
    caseStudy: {
      tagline:
        "Juego web multijugador en tiempo real de adivinar palabras por definición, con salas configurables, comodines y un bot con IA.",
      overview:
        "Adivina la palabra es un juego web multijugador de adivinar palabras por definición, desarrollado como trabajo universitario en el que los jugadores crean salas configurables (idioma, cantidad de rondas, jugadores y comodines), entran a una sala de espera con estado 'listo' y en cada ronda de 60 segundos reciben una definición y deben escribir la palabra correcta. El juego es en tiempo real: los aciertos, el ranking y el chat se sincronizan entre todos los jugadores.",
      highlights: [
        {
          title: "Multijugador en tiempo real",
          description:
            "Chat, ranking en vivo, sala de espera sincronizada, expulsión de jugadores y cuenta regresiva entre rondas, todo con WebSockets/STOMP.",
        },
        {
          title: "Bot con IA (Google Gemini)",
          description:
            "El bot recibe la definición, la procesa con Gemini 2.5 y responde intentos como un jugador humano más dentro de la partida.",
        },
        {
          title: "Palabras dinámicas reales",
          description:
            "Las palabras y definiciones se obtienen de la API de la RAE (español) y Wikidata (inglés), no de listas estáticas.",
        },
        {
          title: "Economía con pagos reales",
          description:
            "Monedas que se gastan en comodines (75 revelar letra, 100 bloquear rival 10s), comprables con Mercado Pago en sandbox + webhook.",
        },
        
      ],
      architecture: {
        intro:
          "Aplicación Java con patrón Spring MVC + Thymeleaf organizada en capas: config, presentación, dominio, infraestructura y helpers para integraciones externas. El flujo de rondas se controla con un scheduler (RondaTimerManager) que fuerza el fin de ronda a los 60s, y la sincronización en tiempo real usa Spring WebSocket + STOMP.",
        layers: [
          {
            name: "config/",
            description:
              "Configuración Spring: MVC + Thymeleaf, Hibernate (MySQL), WebSocket/STOMP, interceptores de sesión/auth y executor de rondas.",
          },
          {
            name: "presentacion/",
            description:
              "Controllers MVC + handlers WebSocket (Login, Registro, Lobby, SalaDeEspera, Juego, Market, Perfil, Ranking, VistaFinal).",
          },
          {
            name: "dominio/",
            description:
              "Núcleo de negocio: entidades JPA (Usuario, Partida, Ronda, Palabra, Acierto...), DTOs, enums de estados, excepciones, interfaces de servicio y repositorio, y el RondaTimerManager.",
          },
          {
            name: "infraestructura/",
            description:
              "Implementaciones de repositorios (Hibernate DAOs).",
          },
          {
            name: "helpers/",
            description:
              "Integraciones externas: API RAE, Wikidata y Mercado Pago.",
          },
        ],
        frontend:
          "Bootstrap 5 (webjars) con CSS propio y JavaScript con cliente StompJs para la sala de espera y el juego. Vistas Thymeleaf (15 pantallas) en WEB-INF/views/thymeleaf y recursos estáticos en resources/core.",
      },
      features: [
        "Lobby de partidas: crear sala configurable (idioma español/inglés, nº rondas, min/max jugadores, comodines, bot), unirse a sala o partida aleatoria.",
        "Sala de espera en tiempo real: estado 'listo', chat, expulsión por el creador y validación de mínimos para iniciar.",
        "Rondas multijugador en vivo: definición + temporizador de 60s, aciertos publicados en tiempo real, avance/cierres automáticos y puntaje por acierto.",
        "Comodines con costo de monedas: revelar letra (75) y bloquear a un oponente 10 segundos (100).",
        "Bot rival con IA Gemini que juega dentro de la partida.",
        "Monedas y tienda con pagos Mercado Pago (sandbox) y ranking global histórico.",
      ],
      quality: [
        "Testing multicapa: servicios (JUnit 5 + Mockito + Hamcrest), repositorios con HSQLDB/TestConfig (Hibernate real en memoria) y controllers.",
        "E2E WebSocket: SalaDeEsperaControllerE2ETest conecta clientes STOMP reales (Tyrus) contra ws://localhost:8080 verificando flujos de sala (listo, expulsión, inicio de partida).",
        "JavaScript con Jasmine (main.test.js, npm test); Playwright y Selenium declarados para E2E de vistas.",
        "CI/CD con GitHub Actions: ejecuta mvn clean test en cada push/PR a main.",
        "Deploy: WAR con Maven e imágenes Docker para Jetty y Tomcat + contenedor MySQL; dev local con mvn jetty:run → http://localhost:8080/spring.",
      ],
      screenshots: ["/images/adivina-palabra-portada.png","/images/adivina-palabra-1.png" ,"/images/adivina-palabra-2.png", "/images/adivina-palabra-3.png","/images/adivina-palabra-4.png"],
    },
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
