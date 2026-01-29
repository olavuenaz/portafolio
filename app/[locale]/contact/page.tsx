import { useTranslations } from 'next-intl'; // <--- 1. Importar
import { portfolioData } from '../data/portafolio-data'; 
import Container from '../../../components/Container'; 

export default function Contact() {
  const t = useTranslations('Contact'); // <--- 2. Cargar traducciones

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white py-24 transition-colors duration-300">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-black dark:text-white">
            {t('title')} {/* "Hablemos" / "Let's Talk" */}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {/* Tarjeta Email */}
          <div className="bg-white dark:bg-[#111] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
            <h3 className="font-bold text-gray-400 dark:text-gray-500 uppercase text-xs tracking-wider mb-2">
              {t('email_label')} {/* "Correo Principal" */}
            </h3>
            <a href={`mailto:${portfolioData.personal.email}`} className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 break-all">
              {portfolioData.personal.email}
            </a>
          </div>

          {/* Tarjeta Redes */}
          <div className="bg-white dark:bg-[#111] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
            <h3 className="font-bold text-gray-400 dark:text-gray-500 uppercase text-xs tracking-wider mb-6">
               {t('social_label')} {/* "Encuéntrame en" */}
            </h3>
            <div className="space-y-4">
              <a href={portfolioData.personal.github} target="_blank" className="flex items-center justify-between group border-b border-gray-50 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                <span className="font-medium text-lg text-black dark:text-white">GitHub</span>
                <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">↗</span>
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" className="flex items-center justify-between group">
                <span className="font-medium text-lg text-black dark:text-white">LinkedIn</span>
                <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">↗</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}