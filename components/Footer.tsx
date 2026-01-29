import { useTranslations } from 'next-intl';
import { Link } from '../navigation';
import { portfolioData } from '../app/[locale]/data/portafolio-data';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <>
      <footer className="w-full border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-black py-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Eduardo. Todos los derechos reservados.</p>
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Desarrollado con Next.js, TypeScript y Tailwind CSS</p>
          </div>

          <div className="flex gap-6">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              className="hover:text-black dark:hover:text-white transition flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              className="hover:text-black dark:hover:text-white transition flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
              Contacto
            </Link>
          </div>
          
        </div>
      </footer>
    </>
  );
}