import { Link } from '../../../../navigation'; 
import { useLocale } from 'next-intl'; 

type ProjectData = {
  title: string;
  subtitle: string;
  content: string;
  stack: string[];
  date: string;
  repo: string;
  demo: string;
};

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  const projectsDB: Record<string, ProjectData> = {
    "primer-web-2017": {
      title: "Mi Primer Sitio Web",
      subtitle: "El inicio del viaje (2017)",
      content: "Este proyecto representa mis primeros pasos en la programación. Es un sitio web estático creado en 2017 utilizando HTML, CSS y p5.js, alojado gratuitamente en GitHub Pages. Sirve como un recordatorio de dónde comencé.",
      stack: ["HTML", "CSS", "GitHub Pages"],
      date: "2017",
      repo: "https://github.com/olavuenaz/olavuenaz.github.io",
      demo: "https://olavuenaz.github.io/"   
    },
    "mipa": {
      title: "MIPA",
      subtitle: "Gestión Integral de Proyectos Personales",
      content: "Este proyecto busca centralizar la organización de tareas, bases de datos y archivos personales en una sola interfaz intuitiva y moderna.",
      stack: ["Next.js", "React", "Tailwind"],
      date: "Enero 2026",
      repo: "", 
      demo: "" 
    },
    "tesis": {
      title: "Tesis de Ingeniería",
      subtitle: "Intersección IA y Psicología",
      content: "Investigación académica profunda sobre cómo los modelos de lenguaje (LLMs) pueden interpretar y simular patrones de personalidad humana basados en el Big Five.",
      stack: ["Python", "PyTorch", "NLP"],
      date: "En curso",
      repo: "",
      demo: ""
    },
    "world-building": {
      title: "World Building Database",
      subtitle: "Base de datos narrativa",
      content: "Sistema estructurado para escritores y diseñadores de juegos que permite gestionar razas, clases y bestiarios de manera relacional.",
      stack: ["SQL", "System Design"],
      date: "Experimental",
      repo: "",
      demo: ""
    }
  };

  const project = projectsDB[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado 😕</h1>
        <p className="text-gray-400 mb-8">Parece que este proyecto no está en la base de datos.</p>
        <Link 
          href="/projects" 
          className="px-6 py-2 bg-white text-black rounded-full font-bold hover:opacity-80 transition-opacity"
        >
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-12">
      <article className="max-w-3xl mx-auto mt-10">
        
        {/* ENCABEZADO */}
        <header className="mb-10 border-b border-gray-800 pb-10">
          <div className="flex gap-2 mb-4">
             {project.stack.map(tech => (
               <span key={tech} className="text-xs font-mono bg-gray-900 text-gray-400 px-2 py-1 rounded">
                 {tech}
               </span>
             ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 font-light">{project.subtitle}</p>
          <p className="text-sm text-gray-500 mt-4">Fecha: {project.date}</p>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <div className="prose prose-lg prose-invert max-w-none text-gray-300 mb-12 leading-relaxed">
          <p>{project.content}</p>
        </div>

        {/* ZONA DE BOTONES (Demo y Código) */}
        <div className="flex flex-wrap gap-4">
          
          {/* BOTÓN 1: VER DEMO (Solo si existe 'demo') */}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span>🚀 Ver Proyecto en Vivo</span>
            </a>
          )}

          {/* BOTÓN 2: VER CÓDIGO (Solo si existe 'repo') */}
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded-full font-medium transition-colors hover:bg-gray-900 hover:border-gray-500"
            >
              {/* Icono GitHub SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Ver Código</span>
            </a>
          )}
        </div>

        {/* BOTÓN VOLVER */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link href="/projects" className="group text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            Volver a todos los proyectos
          </Link>
        </div>

      </article>
    </main>
  );
}