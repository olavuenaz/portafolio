import { useTranslations, useLocale } from 'next-intl';
import ProjectCard from '../../../components/ProjectCard';
import Container from '../../../components/Container'; 

export default function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale();

  const projects = [
    {
      title: "MIPA",
      description: {
        es: "Software en desarrollo para la gestión integral de proyectos personales.",
        en: "Software under development for comprehensive personal project management."
      },
      tags: ["Next.js", "System Design", "Productivity"],
      status: "En curso" as const,
      link: "/projects/mipa"
    },
    {
      title: "Tesis de Ingeniería",
      description: {
        es: "Investigación sobre la intersección entre IA y modelos psicológicos.",
        en: "Research on the intersection between AI and psychological models."
      },
      tags: ["AI", "Psychology", "Research"],
      status: "En curso" as const,
      link: "/projects/tesis"
    },
    {
      title: "World Building Database",
      description: {
        es: "Base de datos estructurada para razas, clases y bestiario.",
        en: "Structured database for races, classes, and bestiary."
      },
      tags: ["Database", "Creative Writing", "SQL"],
      status: "Experimental" as const,
      link: "/projects/world-building"
    },
    {
      title: "Mi Primer Sitio Web",
      description: {
        es: "Mi primer acercamiento al desarrollo web en 2017.",
        en: "My first approach to web development in 2017."
      },
      tags: ["HTML", "CSS", "GitHub Pages"],
      status: "Finalizado" as const,
      link: "/projects/primer-web-2017" 
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 py-8 transition-colors duration-300">
      <Container className="mt-10"> 
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">{t('title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">{t('subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title}
              description={project.description[locale as 'es' | 'en']} 
              tags={project.tags}
              status={project.status}
              link={project.link}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}