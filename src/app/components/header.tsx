'use client';

import { ThemeToggle } from './ui/theme-toggle';
import GithubLink from './ui/github-link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center background-light dark:background-dark">
      <ThemeToggle />
      <GithubLink />
    </header>
  );
}
