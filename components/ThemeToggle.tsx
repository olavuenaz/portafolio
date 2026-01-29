'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evitamos errores de hidratación esperando a que monte el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Espacio vacío para evitar saltos
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        // Luna (para modo oscuro)
        <span className="text-xl">🌙</span>
      ) : (
        // Sol (para modo claro)
        <span className="text-xl">☀️</span>
      )}
    </button>
  );
}