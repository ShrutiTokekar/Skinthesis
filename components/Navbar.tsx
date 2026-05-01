'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { NavLink } from '@/types';

const NAV_LINKS: NavLink[] = [
  { href: '#tech', label: 'Technology' },
  { href: '#process', label: 'Process' },
  { href: '#results', label: 'Results' },
  { href: '#product', label: 'Product' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[999] flex items-center justify-between px-[5%] py-5 transition-all duration-400 ${scrolled ? 'nav-scrolled' : ''}`}
    >
      {/* Logo */}
      <div className={`nav-logo font-playfair text-2xl font-black tracking-tight flex items-center transition-colors duration-400 ${scrolled ? 'text-[#6994ca]' : 'text-white'}`}>
        <Image
          src="/images/logo.png"
          alt="Skinthesis Logo"
          width={40}
          height={40}
          className="mr-2.5 h-10 w-auto"
        />
        skinthesis
      </div>

      {/* Desktop links */}
      <ul className={`nav-links hidden md:flex gap-8 list-none`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`text-sm tracking-wide font-normal transition-colors duration-300 ${scrolled ? 'text-[#6994ca]' : 'text-white/85'}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`nav-hamburger md:hidden text-2xl cursor-pointer bg-transparent border-none z-[1000] transition-colors duration-400 ${scrolled ? 'text-[#1a1a2e]' : 'text-white'}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <ul className="nav-links open list-none">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-white text-2xl font-normal tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
