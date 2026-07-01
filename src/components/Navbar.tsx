'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`relative h-[72px] w-[234px] md:w-[260px] transition-transform duration-300 group-hover:scale-105 ${isScrolled ? '' : 'brightness-0 invert'}`}>
            <Image
              src="/logosemfundo.png"
              alt="Cconect Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-text-main hover:text-primary'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#cobertura"
            className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5'
                : 'bg-white text-primary hover:bg-white/95 hover:-translate-y-0.5 shadow-lg shadow-white/5'
            }`}
          >
            Consultar disponibilidade
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-text-main' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-text-main' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[88px] md:hidden bg-white z-40 flex flex-col px-6 py-8 gap-6 border-t border-black/5 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-text-main hover:text-primary transition-colors border-b border-black/5 pb-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cobertura"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full text-center py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/15"
        >
          Consultar disponibilidade
        </a>
      </div>
    </header>
  );
}
