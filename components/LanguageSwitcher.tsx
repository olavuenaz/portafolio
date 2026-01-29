'use client';

import { usePathname, useRouter, useParams } from 'next/navigation'; 
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams(); 
  const currentLocale = (params?.locale as string) || 'es';

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {

      let cleanPath = pathname.replace(/^\/(es|en)/, '');
      
      if (!cleanPath) cleanPath = '/';

      router.replace(`/${nextLocale}${cleanPath}`);
    });
  };

  return (
    <div className="relative">
      <select
        value={currentLocale} 
        onChange={handleChange}
        disabled={isPending}
        className="
          bg-transparent 
          text-sm font-medium 
          text-gray-600 dark:text-gray-300 
          hover:text-black dark:hover:text-white
          py-1 pr-6 pl-2 
          border-none 
          focus:ring-0 
          cursor-pointer 
          appearance-none 
          outline-none
        "
      >
        <option value="es" className="text-black bg-white">ES</option>
        <option value="en" className="text-black bg-white">EN</option>
      </select>
      
      {/* Flechita decorativa */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px]">▼</span>
    </div>
  );
}