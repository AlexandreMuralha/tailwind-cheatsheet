'use client';

import { Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-end">
      <a
        href="https://github.com/AlexandreMuralha/tailwind-cheatsheet"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Github size={20} />
      </a>
    </header>
  );
}
