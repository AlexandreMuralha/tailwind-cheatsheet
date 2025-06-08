import { Github } from "lucide-react";

export default function GithubLink() {
  return (
    <a
      href="https://github.com/AlexandreMuralha/tailwind-cheatsheet"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
    >
      <Github size={20} />
    </a>
  );
}