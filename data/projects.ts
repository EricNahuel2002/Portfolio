export type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
  github: string
  gradient: string
  featured?: boolean
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
