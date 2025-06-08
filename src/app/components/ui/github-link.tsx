import { Github } from "lucide-react";

export default function GithubLink() {
  return (
    <a
      href="https://github.com/AlexandreMuralha/tailwind-cheatsheet"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2  text-secondary-light text-secondary-dark hover-light hover-dark transition-colors"
    >
      <Github size={20} />
    </a>
  );
}