import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: 'En curso' | 'Finalizado' | 'Experimental';
  link: string;
}

export default function ProjectCard({ title, description, tags, status, link }: ProjectCardProps) {
  const statusColor = {
    'En curso': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Finalizado': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Experimental': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  return (
    // CAMBIO AQUÍ: bg-white -> dark:bg-[#111] (gris muy oscuro)
    // Agregamos dark:border-gray-800 para que el borde se vea sutil
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-[#111] flex flex-col h-full">
      
      {/* Encabezado */}
      <div className="mb-4">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${statusColor[status]}`}>
          {status}
        </span>
        {/* Título: Negro de día, Blanco de noche */}
        <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">{title}</h3>
      </div>

      {/* Descripción: Gris oscuro de día, Gris claro de noche */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 min-h-[60px]">
        {description}
      </p>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Enlace */}
      <Link 
        href={link}
        className="text-sm font-semibold text-black dark:text-white hover:underline mt-auto"
      >
        Ver detalles →
      </Link>
    </div>
  );
}