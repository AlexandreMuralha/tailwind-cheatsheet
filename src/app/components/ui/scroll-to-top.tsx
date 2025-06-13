'use client';

import { ChevronsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-50 fixed bottom-6 right-6 p-2 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-1000 hover:bg-primary/90 ${
        isVisible ? 'translate-y-0 opacity-60' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronsUp size={20} />
    </button>
  );
}
