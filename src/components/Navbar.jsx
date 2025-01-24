import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'AI Hub', href: '/ai-hub' }, // New AI Hub section
    { label: 'About', href: 'AiHubLayout' },
    { label: 'Services', href: '#services' },
    { label: 'Researches', href: '#researches' },
    { label: 'Partners', href: '#partners' },
    { label: 'Team', href: '#team' },
    { label: 'Pages', href: '#pages' },
    { label: 'Contact', href: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer">
            <Brain className="h-8 w-8 text-blue-500 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-purple-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
              NeureX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group
                  ${
                    activeItem === item.label
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100
                  ${activeItem === item.label ? 'scale-x-100' : ''}`} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 animate-spin-once" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-blue-500/20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveItem(item.label);
                setIsMobileMenuOpen(false);
              }}
              className={`block px-4 py-2 text-base font-medium rounded-md transition-all duration-300
                ${
                  activeItem === item.label
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-gray-300 hover:bg-blue-500/5 hover:text-blue-400'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
