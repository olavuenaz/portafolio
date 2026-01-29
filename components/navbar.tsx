'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../navigation'; 
import LanguageSwitcher from './LanguageSwitcher';
import Container from './Container'; 
import Image from 'next/image'; 

export default function Navbar() {
  const t = useTranslations('Navbar'); 
  const [isOpen, setIsOpen] = useState(false); 

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('projects'), path: '/projects' },
    { name: t('research'), path: '/research' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <nav className="w-full border-b border-gray-800 bg-black sticky top-0 z-50">
      <Container className="h-16 flex items-center justify-between">
        
        <div className="z-50 flex items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
            <Image 
              src="/favicon.svg" 
              alt="Logo Eduardo" 
              width={32} 
              height={32} 
            />
          </Link>
        </div>

        {/* 2. Menú de Escritorio */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-gray-700 mx-2"></div>
          <LanguageSwitcher />
        </div>

        {/* 3. Botón Hamburguesa (Móvil) */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <LanguageSwitcher /> 
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* 4. Menú Desplegable (Overlay Móvil) */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-in fade-in slide-in-from-top-5 duration-200">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className="text-2xl font-bold text-white hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

      </Container>
    </nav>
  );
}