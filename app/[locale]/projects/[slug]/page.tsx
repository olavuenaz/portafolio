import { Link } from '../../../../navigation'; 

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  // 1. AQUÍ AGREGAMOS EL CAMPO "demo" A TUS PROYECTOS
  const projectsDB: Record<string, any> = {
    "primer-web-2017": {
      title: "Mi Primer Sitio Web",
      subtitle: "El inicio del viaje (2017)",
      content: "Este proyecto representa mis primeros pasos en la programación. Es un sitio web estático creado en 2017 utilizando HTML, CSS y p5.js, alojado gratuitamente en GitHub Pages.",
      stack: ["HTML", "CSS", "GitHub Pages"],
      date: "2017",
      repo: "https://github.com/olavuenaz/olavuenaz.github.io", // Link al código
      demo: "https://olavuenaz.github.io/"   
    },
    "mipa": {
      title: "MIPA",
      subtitle: "Gestión Integral de Proyectos Personales",
      content: "Este proyecto busca centralizar la organización de tareas, bases de datos y archivos personales.",
      stack: ["Next.js", "React", "Tailwind"],
      date: "Enero 2026",
      repo: "", 
      demo: "" 
    },
    "tesis": {
      title: "Tesis de Ingeniería",
      subtitle: "Intersección IA y Psicología",
      content: "Investigación académica sobre cómo los modelos de lenguaje pueden interpretar patrones de personalidad.",
      stack: ["Python", "PyTorch", "NLP"],
      date: "En curso",
      repo: "",
      demo: ""
    },
    "world-building": {
      title: "World Building Database",
      subtitle: "Base de datos narrativa",
      content: "Sistema estructurado para escritores y diseñadores de juegos.",
      stack: ["SQL", "System Design"],
      date: "Experimental",
      repo: "",
      demo: ""
    }
  };

  const project = projectsDB[slug];

  if (!project) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-2xl font-bold">Proyecto no encontrado 😕</h1>
        <Link href="/projects" className="text-blue-400 hover:underline mt-4 block">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <article className="max-w-3xl mx-auto mt-10">
        
        {/* Encabezado */}
        <header className="mb-10 border-b border-gray-800 pb-10">
          <p className="text-sm text-gray-400 mb-2">{project.date} — {project.stack.join(", ")}</p>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-gray-300">{project.subtitle}</p>
        </header>

        {/* Contenido */}
        <div className="prose prose-lg prose-invert text-gray-300 mb-12">
          <p>{project.content}</p>
        </div>

        {/* 2. ZONA DE BOTONES (Demo y Código) */}
        <div className="flex flex-wrap gap-4">
          
          {/* BOTÓN 1: VER DEMO EN VIVO (Solo si existe el link demo) */}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span>🚀 Ver Proyecto en Vivo</span>
            </a>
          )}

          {/* BOTÓN 2: VER CÓDIGO (Repositorio) */}
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded-full font-medium transition-colors hover:bg-gray-900"
            >
              {/* Icono GitHub */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Ver Código</span>
            </a>
          )}
        </div>

        {/* Botón Volver */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link href="/projects" className="text-gray-500 hover:text-white transition-colors">
            ← Volver a todos los proyectos
          </Link>
        </div>
      </article>
    </main>
  );
}