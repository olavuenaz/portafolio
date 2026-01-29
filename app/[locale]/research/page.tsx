import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Container from '../../../components/Container'; 

export default function Research() {
  const t = useTranslations('Research');
  const locale = useLocale();

  const articles = [
    {
      id: "analisis-normativo-ia",
      title: { es: "Análisis Normativo: Ética en Modelos de Lenguaje", en: "Normative Analysis: Ethics in Language Models" },
      category: "Análisis Normativo",
      date: "20 Enero 2026",
      summary: {
        es: "Una exploración sobre las regulaciones actuales en Chile respecto a la implementación de IA generativa.",
        en: "An exploration of current regulations in Chile regarding the implementation of generative AI."
      }
    },
    {
      id: "psicologia-computacional",
      title: { es: "Integración de Modelos Gestalt en Redes Neuronales", en: "Integration of Gestalt Models in Neural Networks" },
      category: "Documento Conceptual",
      date: "15 Diciembre 2025",
      summary: {
        es: "Propuesta teórica para mejorar la percepción de contexto en agentes de IA.",
        en: "Theoretical proposal to improve context perception in AI agents."
      }
    },
    {
      id: "mundo-narrativo",
      title: { es: "Estructuras de Datos para Mundos de Ficción", en: "Data Structures for Fictional Worlds" },
      category: "Ensayo",
      date: "10 Noviembre 2025",
      summary: {
        es: "Reflexión sobre cómo las bases de datos relacionales pueden servir como herramienta creativa.",
        en: "Reflection on how relational databases can serve as a creative tool."
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Container className="py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </header>

        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer bg-white dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <time>{article.date}</time>
                <span>•</span>
                <span className="font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{article.category}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link href={`/research/${article.id}`}>{article.title[locale as 'es' | 'en']}</Link>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{article.summary[locale as 'es' | 'en']}</p>
              <div>
                <Link href={`/research/${article.id}`} className="text-sm font-bold text-black dark:text-white underline underline-offset-4 decoration-gray-300 hover:decoration-black dark:hover:decoration-white">
                  {t('read_more')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}