import { Link } from '../navigation'; 
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: 'En curso' | 'Finalizado' | 'Experimental';
  link: string;
}

export default function ProjectCard({ title, description, tags, status, link }: ProjectCardProps) {
  const isExternal = link.startsWith('http');

  return (
    <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium 
          ${status === 'En curso' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
          ${status === 'Finalizado' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
          ${status === 'Experimental' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : ''}
        `}>
          {status}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        {isExternal ? (
           // externo, usar <a> normal
           <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium hover:opacity-80 transition-opacity text-sm">
             Ver Proyecto ↗
           </a>
        ) : (
           //interno, usar el Link inteligente (Agrega /es o /en solo)
           <Link href={link} className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium hover:opacity-80 transition-opacity text-sm">
             Ver Detalles
           </Link>
        )}
      </div>
    </div>
  );
}