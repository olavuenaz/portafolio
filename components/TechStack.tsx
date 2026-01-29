'use client';

import { portfolioData } from '../app/[locale]/data/portafolio-data';

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {portfolioData.skills.map((skill) => (
        <div 
          key={skill.name}
          // Usamos el color que definimos en los datos, o un gris por defecto si no existe
          className={`
            ${skill.color || 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'}
            p-6 rounded-lg border transition-all hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center text-center
          `}
        >
          <h4 className="font-bold text-lg mb-1">{skill.name}</h4>
          <span className="text-xs uppercase tracking-wider opacity-80 font-medium">
            {skill.level}
          </span>
        </div>
      ))}
    </div>
  );
}