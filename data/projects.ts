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
      "Aplicación que conecta clientes con profesionales del hogar en pocos pasos, con publicaciones inteligentes y postulaciones y contrataciones ágiles.",
    stack: ["React", "Vite", "Node.js", "Express", "Prisma", "MySQL"],
    github: "https://github.com/CasanovaRamiro/HomeFix",
    gradient: "from-indigo-500 to-violet-500",
    featured: true,
    slug: "homefix",
    caseStudy: {
      tagline:
        "Plataforma que conecta clientes con profesionales de oficios del hogar.",
      overview:
        "HomeFix es una plataforma que conecta clientes con profesionales del hogar en pocos pasos, facilitando la publicación de trabajos, la postulación de trabajadores y el proceso de contratación. Integra un asistente de IA para ayudar en la creación de avisos, además de incorporar sistemas de licitaciones, subcontrataciones, reseñas bidireccionales y emergencias."
        ,
      highlights: [
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
          title: "Asistente con IA (Gemini)",
          description:
            "Chat que diagnostica el problema del cliente, recomienda categoría y autogenera el borrador del post",
        },
        {
          title: "KYC con Didit",
          description:
            "Verificación de identidad con Didit (foto del DNI y selfie) para trabajadores y con validación de documentos.",
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
      screenshots: [
        "/images/homefix/Homefix.jpeg",
        "/images/homefix/landing-cliente.png",
        "/images/homefix/inicio-cliente.png",
        "/images/homefix/publicacion_ia.png",
        "/images/homefix/detalle-publicacion-cliente.png",
        "/images/homefix/inicio-worker.png",
        "/images/homefix/detalle_postulacion-worker.png",
        "/images/homefix/mi_agenda.png",
      ],
    },
  },
  {
    title: "ServiceDesk",
    description:
      "Plataforma SaaS de gestión de incidencias y soporte técnico para empresas que combina aprendizaje con implementación de calidad profesional, aplicando Clean Architecture, .NET y Azure.",
    stack: [".NET 9", "C#", "Entity Framework Core", "SQL Server", "Azure", "React 19", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions", "SignalR"],
    github: "https://github.com/EricNahuel2002/ServiceDesk",
    gradient: "from-purple-500 to-pink-500",
    image: "/images/service-desk/logotipo.jpg",
    slug: "ServiceDesk",
    caseStudy: {
      tagline:
        "Plataforma SaaS de gestión de incidencias y soporte técnico",
      overview:
        "Desarrollo de una plataforma SaaS de gestión de incidencias y soporte técnico que combina aprendizaje con una implementación de calidad profesional, aplicando Clean Architecture, .NET y Azure.",
      highlights: [
        {
          title: "SLAs y prioridades",
          description:
            "Sistema de gestión de prioridades y acuerdos de nivel de servicio (SLAs) para garantizar tiempos de respuesta y resolución adecuados según la criticidad de las incidencias.",
        },
        {
          title: "Panel de control con métricas",
          description:
            "Panel con estadísticas y métricas de incidencias para el administrador, incluyendo gráficos de tickets resueltos, promedio de tiempos de resolución, entre otros con el fin de medir el rendimiento de los técnicos de la empresa.",
        },
        {
          title: "Notificaciones via mail",
          description:
            "Sistema de correo electrónico para notificaciones de estado de incidencias y asignaciones para técnicos, clientes y administradores.",
        },
        {
          title: "Roles y permisos",
          description:
            "Sistema de roles y permisos con políticas para controlar el acceso a funcionalidades y datos según el rol del usuario.",
        },
        {
          title: "Auditorías",
          description:
            "Registro detallado de todas las actividades llevadas a cabo en los tickets asignados a técnicos como cambios de estado, asignaciones, historial de chat y comentarios.",
        },
        {
          title: "Sistema de denuncias y reapertura de tickets",
          description:
            "Funcionalidad para que los usuarios puedan denunciar malas conductas, dejar comentarios sobre su experiencia con el técnico asignado y solicitar la reapertura de tickets cerrados.",
        }
      ],
      architecture: {
        intro:
          "Clean Architecture con separación en capas Domain, Application, Infrastructure y API, manteniendo la lógica de negocio independiente de Azure.",
        layers: [
          {
            name: "Domain",
            description:
              "Capa fundamental con entidades de negocio, value objects y enumeraciones. No tiene dependencias externas y contiene la lógica de negocio pura.",
          },
          {
            name: "Application",
            description:
              "Capa de casos de uso que orquesta la lógica de aplicación, maneja DTOs, validación de entradas y expone la funcionalidad a la API a través de Features y comandos/queries.",
          },
          {
            name: "Infrastructure",
            description:
              "Implementa abstracciones para interactuar con recursos externos: Entity Framework Core para persistencia SQL Server, Azure services (App Service, Azure Functions, Blob Storage, Queue Storage, Key Vault), y otros adaptadores.",
          },
          {
            name: "API",
            description:
              "Capa de presentación que expone endpoints RESTful, maneja autenticación JWT, políticas de autorización y coordina la ejecución de casos de uso Application.",
          },
        ],
        frontend:
          "React 19 con TypeScript, TanStack Router/Query y Tailwind CSS.",
      },
      features: [
        "Gestión completa de incidencias (crear, leer, actualizar, asignar, cerrar)",
        "Sistema de roles y permisos con políticas JWT",
        "Notificaciones via mail: Sistema de correo electrónico para notificaciones de estado de incidencias y asignaciones",
        "Panel de control con métricas y estadísticas",
        "Búsqueda y filtrado avanzado de incidencias",
        "Integración con Azure Services (SQL Database, App Service, Blob Storage, Key Vault, Queue Storage, Functions, Application Insights)",
        "Despliegue automático con GitHub Actions",
      ],
      quality: [
        "Testing: xUnit para tests de unidad, cobertura en funcionalidades relevantes",
        "CI/CD: GitHub Actions que construye y prueba tanto backend como frontend",
        "Backend: Despliegue a Azure App Service con configuración Release/Any CPU",
        "Frontend: Despliegue en Vercel usando Vite/build TypeScript",
        "Servicios Azure: Application Insights para monitoreo, Azure Key Vault para secretos, Azure SQL Database con migraciones EF Core, Azure Blob Storage para archivos, Azure Queue Storage para procesamiento en segundo plano",
      ],
      screenshots: [
        "/images/service-desk/logotipo.jpg",
        "/images/service-desk/metricas.png",
        "/images/service-desk/auditorias.png",
        "/images/service-desk/detalle-ticket.png",
        "/images/service-desk/cliente.png",
      ],
    },
  },
  {
    title: "LogiMatch",
    description:
      "Plataforma logística que recibe pedidos, planifica rutas y guía al conductor en tiempo real, centralizando flota, prioridades y entregas.",
    stack: [
      ".NET 9",
      "ASP.NET Core",
      "C#",
      "EF Core",
      "SQL Server",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "SignalR",
      "Google OR-Tools",
      "OpenRouteService",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/EricNahuel2002/LogiMatch",
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/logimatch/portada.png",
    featured: false,
    slug: "logimatch",
    caseStudy: {
      tagline:
        "Del pedido al mapa del conductor: rutas optimizadas, asignación inteligente y seguimiento en tiempo real.",
      overview:
        "Coordinar pedidos, flota y entregas con planillas y mensajes sueltos genera rutas ineficientes y entregas fuera de horario. LogiMatch centraliza el proceso: recibe pedidos, arma rutas según capacidad, prioridades y ventanas horarias, y sugiere el conductor más conveniente para cada entrega. El equipo sigue el avance desde un panel y el conductor recibe su recorrido en el móvil, con mapa y actualizaciones en tiempo real. Así se detectan demoras antes de que ocurran y se reprograma lo necesario sin perder trazabilidad.",
      highlights: [
        {
          title: "Planificación CVRPTW con OR-Tools",
          description:
            "El preview toma todos los envíos pendientes, arma el problema de ruteo con capacidad, ventanas horarias y un horizonte de 12 horas con OpenRouteService. Luego Google OR-Tools decide qué vehículo sirve cada envío y en qué orden, con un costo de arco ponderado por prioridad y sin descartar envíos de forma silenciosa ya que los envíos y conductores no viables aparecen apartados con su motivo.",
        },
        {
          title: "Asignación de conductores con scoring",
          description:
            "Cada candidato se filtra primero por factibilidad de ventana horaria y capacidad, y luego se rankea con siete métricas normalizadas: entregas exitosas del día, envíos pendientes, en progreso, distancia, duración, capacidad libre y costo estimado de operación. El costo combina salario, consumo, combustible, mantenimiento y peajes, y la política de elegibilidad evita que los umbrales recorten la flota por debajo de la carga a transportar. Cada descarte se explica con su motivo y su score.",
        },
        {
          title: "Riesgo de demora y prioridad automática",
          description:
            "Un job recurrente de Hangfire recalcula cada 10 minutos el riesgo de demora del envío actual de cada ruta activa combinando holgura de la ventana, velocidad implícita restante y envíos en cola, y lo expone como índice 0–100 en el dashboard. En paralelo, un scoring del dominio recalcula la prioridad de los envíos pendientes ante altas, cancelaciones de ruta y fallos de entrega. Así la operación prioriza por urgencia real y no por orden de carga.",
        },
        {
          title: "Panel del conductor en tiempo real",
          description:
            "La vista mobile-first usa React Leaflet con OpenStreetMap, geolocalización por `watchPosition` y SignalR para recibir rutas asignadas o canceladas sin recargar. Las paradas se ordenan con una política de secuencia del dominio y las acciones respetan la máquina de estados del envío (iniciar, detener, reanudar, llegar, registrar intento). Un bottom sheet con Vaul y modales accesibles mantienen los controles al alcance del pulgar.",
        },
      ],
      architecture: {
        intro:
          "LogiMatch implementa una variante de Clean Architecture con una regla de dependencia estricta: API → Application → Domain, mientras Infrastructure implementa las abstracciones que Application declara. El repositorio separa `src/Domain`, `src/Application`, `src/Infrastructure`, `src/API`, los proyectos de test y `front/`; Domain no conoce EF Core, ASP.NET ni JSON, y los controladores no contienen lógica de negocio. FluentValidation valida cada request y la inyección de dependencias se registra por capa.",
        layers: [
          {
            name: "src/Domain/",
            description:
              "Entidades ricas, value objects y enums. Concentra invariantes, la máquina de estados del envío, la política de secuencia de paradas, los cálculos puros de scoring, costos de operación y riesgo de demora, sin dependencias externas.",
          },
          {
            name: "src/Application/",
            description:
              "Casos de uso por agregado que orquestan validación, repositorios e IUnitOfWork. Declara los contratos de persistencia e integraciones externas, los DTOs y el modelo del problema de ruteo (CVRPTW).",
          },
          {
            name: "src/Infrastructure/",
            description:
              "Implementaciones EF Core (DbContext, configuraciones, repositorios, migraciones e interceptor de auditoría), clientes de OpenRouteService, email con MailKit, solver OR-Tools y seed de datos demo.",
          },
          {
            name: "src/API/",
            description:
              "Composición raíz y entrada HTTP: controladores REST, Identity + JWT, policies AdminOnly/DriverOnly, hub de SignalR, manejo global de excepciones, OpenAPI/Scalar, health checks y jobs de Hangfire.",
          },
        ],
        frontend:
          "React 19 + TypeScript + Vite con Tailwind CSS, React Router 7 con guards por rol, Zustand para la sesión y un cliente `fetch` tipado con `ApiError`. La organización es por features (`auth`, `admin/dashboard|orders|shipments|routes|route-planning`, `driver/home`), con `components/ui` como design system, `hooks`, `lib` (tipos, formato y realtime) y `config`. El panel del conductor suma Leaflet, SignalR, geolocalización y Vaul; el build verifica TypeScript y Oxlint.",
      },
      features: [
        "Pedidos y envíos: alta de pedidos con items, peso, precio y ventana horaria; cada pedido genera un envío con prioridad calculada automáticamente.",
        "Máquina de estados del envío: Pending → InProgress → Stopped → Arrived → Finalized/DeliveryFailed/Cancelled, con hasta 3 intentos separados por 5 minutos e historial de cada transición.",
        "Planificación de rutas: preview read-only de todos los pendientes con selección driver → vehículo y depósito opcional, propuesta óptima y commit que persiste las paradas en el orden planificado.",
        "Sugerencia y reasignación de conductores: ranking explicable por factibilidad, capacidad, distancia, carga y costo de operación, con soporte para cancelar y reprogramar una ruta completa.",
        "Panel del conductor: mapa con ubicación y paradas, pedido actual con acciones por estado, próximos envíos y cancelación de ruta con reprogramación automática y aviso por email a administradores.",
        "Monitoreo operativo: dashboard con envíos pendientes, prioridad urgente y riesgo de demora, más catálogos de clientes, vehículos y depósitos activos para la planificación.",
        "Seguridad y roles: Identity + JWT con claims y policies que separan la administración de la operación en terreno; secretos fuera del repositorio y CORS restringido por origen en producción.",
      ],
      quality: [
        "Testing con xUnit 2.9, Moq y coverlet: más de 550 casos sobre reglas de dominio, servicios, validadores, clientes ORS y solver. La suite de integración usa WebApplicationFactory contra SQL Server real, dobles de geocoding/routing/email y un servidor SMTP falso.",
        "C# con nullable e implicit usings, FluentValidation en cada request y un handler global que mapea excepciones a 400/404/409/500. El frontend usa TypeScript estricto y Oxlint (`pnpm lint`, `tsc -b` + Vite en `pnpm build`), aunque esa verificación todavía corre local y no en CI.",
        "CI en GitHub Actions con dos jobs: build-and-test (restore, build Release, unit tests e integration tests con SQL Server 2022 como service container, artefactos TRX) y docker-build (valida la imagen multi-stage de la API).",
        "Deploy: entorno reproducible con Docker Compose (API .NET en :8080 + SQL Server 2022 con volumen y healthcheck en `/health`). El workflow de despliegue a Oracle Cloud VM y Vercel está preparado pero deshabilitado a propósito; todavía no hay URL pública.",
      ],
      screenshots: [
        "/images/logimatch/portada.png",
        "/images/logimatch/img-1.png",
        "/images/logimatch/img-2.png",
        "/images/logimatch/img-3.png",
        "/images/logimatch/img-4.png",
        "/images/logimatch/img-5.png",
        "/images/logimatch/img-6.png",
      ],
    },
  },
  {
    title: "Adivina la palabra",
    description:
      "Juego multijugador de adivinar la palabra con sincronización en tiempo real entre jugadores mediante WebSocket, lógica de rondas, sistema de puntaje y animaciones visuales.",
    stack: [
      "Java",
      "Spring MVC",
      "Thymeleaf",
      "WebSocket + STOMP",
      "MySQL",
      "Google Gemini",
      "Bootstrap",
      "Docker",
    ],
    github: "https://github.com/EricNahuel2002/proyecto-adivina-la-palabra",
    gradient: "from-emerald-500 to-teal-500",
    image: "/images/adivina-palabra/adivina-palabra-portada.png",
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
      screenshots: ["/images/adivina-palabra/adivina-palabra-portada.png","/images/adivina-palabra/adivina-palabra-1.png" ,"/images/adivina-palabra/adivina-palabra-2.png", "/images/adivina-palabra/adivina-palabra-3.png","/images/adivina-palabra/adivina-palabra-4.png"],
    },
  },
]
