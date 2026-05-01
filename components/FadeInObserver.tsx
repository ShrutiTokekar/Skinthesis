'use client';

import { useEffect } from 'react';

export default function FadeInObserver() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll<HTMLElement>('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
