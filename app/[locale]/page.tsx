import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../navigation'; 
import ProjectCard from '../../components/ProjectCard';
import TechStack from '../../components/TechStack'; 
import Container from '../../components/Container';
import { portfolioData } from './data/portafolio-data'; 

export default function Home() {
  const t = useTranslations('Home');
  const locale = useLocale();
  const featuredProjects = portfolioData.projects.slice(0, 2);

  return (
    <main className="min-h-screen transition-colors duration-300">
      
      {/* 1. SECCIÓN HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-[#111] transition-colors duration-300">
        <Container className="py-24">

          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          
          <h2 className="text-2xl text-gray-700 dark:text-gray-300 font-medium mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            {t('description')}
          </p>
          
          {/* Botones */}
          <div className="mt-8 flex gap-4 items-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
            >
              {t('cta_contact')}
            </Link>
            
            <Link 
              href="/about" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition text-gray-900 dark:text-white"
            >
              {t('cta_about')}
            </Link>
            
            <a 
              href="/cv-eduardo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline cursor-pointer"
            >
              📄 Ver CV
            </a>
          </div>
        </Container>
      </section>

      {/* 2. MÉTRICAS */}
      <section className="bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">10+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">5</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Tecnologías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">2</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Años</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Dedicación</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. TECH STACK */}
      <section>
        <Container className="py-16">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6 text-center">
            Stack Principal
          </h3>
          <TechStack />
        </Container>
      </section>

      {/* 4. ÁREAS DE INTERÉS */}
      <section className="bg-white dark:bg-black py-16 transition-colors duration-300">
        <Container>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6">
            Líneas de Trabajo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:shadow-sm transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Desarrollo Full Stack</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Next.js, React, Node, Arquitectura Escalable, TypeScript.</p>
            </div>
            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:shadow-sm transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">IA & Psicología</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Modelos computacionales, NLP, Análisis de Personalidad, Sistemas Cognitivos.</p>
            </div>
            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:shadow-sm transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Sistemas de Conocimiento</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Second Brain, Bases de Datos, Gestión de Información, Productividad.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. PROYECTOS DESTACADOS */}
      <section className="bg-gray-50 dark:bg-[#0a0a0a] py-24 transition-colors duration-300">
        <Container>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('featured_title')}</h2>
            <Link href="/projects" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline">
              {t('view_all')} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.slug}
                title={project.title}
                description={project.description[locale as 'es' | 'en']} 
                tags={project.tags}
                status={project.status as any}
                link={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

    </main>
  );
}