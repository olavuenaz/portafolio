import { useTranslations } from 'next-intl'; // <--- 1. Importar
import { portfolioData } from '../data/portafolio-data'; 
import Container from '../../../components/Container'; 

export default function About() {
  const t = useTranslations('About'); // <--- 2. Cargar traducciones

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Container className="py-16">
        
        {/* ENCABEZADO */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
            {t('title')}
          </h1>
          <div className="prose prose-lg text-gray-700 dark:text-gray-300 dark:prose-invert">
            {/* t.raw permite renderizar las etiquetas <strong> y <em> del JSON */}
            <p dangerouslySetInnerHTML={{ __html: t.raw('bio_p1') }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.raw('bio_p2') }} />
          </div>
        </section>

        <hr className="border-gray-200 dark:border-gray-800 my-12" />

        {/* FORMACIÓN ACADÉMICA */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
            {t('education_title')}
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {t('education_degree')}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {t('education_status')}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {t('education_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* ENFOQUE DE TRABAJO */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
            {t('focus_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-lg transition-colors border border-transparent dark:border-gray-800">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                {t('focus_1_title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('focus_1_desc')}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-lg transition-colors border border-transparent dark:border-gray-800">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                {t('focus_2_title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('focus_2_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              {t('skills_title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {portfolioData.skills.map((skill) => (
                    <div key={skill.name} className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 p-4 rounded-lg text-center transition-colors">
                        <div className="font-bold text-gray-900 dark:text-white">{skill.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mt-1 tracking-wide">{skill.level}</div>
                    </div>
                ))}
            </div>
        </section>
      </Container>
    </main>
  );
}