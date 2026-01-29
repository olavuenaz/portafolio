// app/data/portfolio-data.ts

export const portfolioData = {
  // --- INFORMACIÓN PERSONAL ---
  personal: {
    name: "Eduardo",
    role: "Ingeniero Civil en Computación e Informática",
    email: "eduardourbinavergara@gmail.com", 
    github: "https://github.com/olavuenaz",
    linkedin: "https://www.linkedin.com/in/eduardo-urbina-212001228/", 
    location: "Santiago, Chile",
    phone: "+56 9 XXXX XXXX", 
    resume: "/cv.pdf" 
  },

  // --- HABILIDADES ---
skills: [
    { name: "Next.js", level: "intermediate", type: "Frontend", color: "bg-black text-white border-gray-800" },
    { name: "TypeScript", level: "intermediate", type: "Frontend", color: "bg-blue-600 text-white border-blue-500" },
    { name: "React", level: "intermediate", type: "Frontend", color: "bg-cyan-500 text-white border-cyan-400" },
    { name: "Tailwind", level: "intermediate", type: "Frontend", color: "bg-teal-500 text-white border-teal-400" },
    { name: "Python", level: "Intermediate", type: "Backend/AI", color: "bg-yellow-500 text-black border-yellow-400" },
    { name: "PostgreSQL", level: "Intermediate", type: "Database", color: "bg-blue-400 text-white border-blue-300" },
    { name: "Node.js", level: "Intermediate", type: "Backend", color: "bg-green-600 text-white border-green-500" },
    { name: "System Design", level: "Basic", type: "Architecture", color: "bg-purple-600 text-white border-purple-500" },
  ],

  // --- PROYECTOS (Ahora bilingües) ---
  /*
{
  slug: "mi-nuevo-proyecto", // <--- ID ÚNICO 
  title: "Nombre del Proyecto",
  description: {
    es: "Descripción corta en español para la tarjeta.",
    en: "Short description in English for the card."
  },
  tags: ["Python", "IA", "SQL"], // Tus etiquetas
  status: "En curso", // O "Finalizado"
  content: "..." // (Este campo no se usa mucho aquí, pero déjalo)
},
---> luego a page de projects
 ----> [slugs] page
const projectsDB: Record<string, any> = {
  // ... otros proyectos ...

  "mi-nuevo-proyecto": {  // <--- TIENE QUE SER EL MISMO ID (SLUG)
    title: "Nombre del Proyecto",
    subtitle: "Subtítulo impactante",
    content: "Aquí escribes TOOOODA la explicación larga de tu tesis o proyecto. Puedes escribir mucho texto.",
    stack: ["Python", "Pandas", "Recharts"], // Tecnologías usadas
    date: "2026"
  },
};

  */ 
  projects: [
    {
      slug: "mipa",
      title: "MIPA",

      description: {
        es: "Sistema de Gestión Integral para proyectos personales y bases de conocimiento.",
        en: "Comprehensive Management System for personal projects and knowledge bases."
      },
      tags: ["Next.js", "Productivity", "System Design"],
      status: "En curso",
      content: "..."
    },
    {
      slug: "tesis",
      title: "Tesis de Ingeniería",
      description: {
        es: "Investigación sobre la intersección entre IA y modelos psicológicos.",
        en: "Research on the intersection between AI and psychological models."
      },
      tags: ["AI", "Research", "Python"],
      status: "En curso",
      content: "..."
    },
    {
      slug: "primer-web-2017",
      title: "Mi Primer Web",
      description: {
        es: "Mi primer acercamiento al desarrollo web en 2017. Un sitio estático alojado en GitHub Pages.",
        en: "My first approach to web development in 2017. A static site hosted on GitHub Pages."
      },
      tags: ["HTML", "CSS", "GitHub Pages"],
      status: "Finalizado",
      content: "" 
    },
    
  ]
};