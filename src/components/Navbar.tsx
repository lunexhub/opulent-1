import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <img 
              src={logo} 
              alt="Opulent" 
              className="h-12 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-foreground hover:text-sage-dark' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0787028285"
              className={`rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-sage-dark text-white hover:bg-sage-dark/90'
                  : 'bg-white text-charcoal hover:bg-primary'
              }`}
            >
              Call Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-50 md:hidden ${
              isScrolled || isMobileMenuOpen ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full bg-white shadow-lg md:hidden"
          >
            <div className="container py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-body text-lg font-medium text-foreground transition-colors hover:text-sage-dark"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:0787028285"
                  className="mt-2 inline-flex justify-center rounded-full bg-sage-dark px-6 py-3 font-body font-semibold text-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
