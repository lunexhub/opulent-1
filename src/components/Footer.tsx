import { MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Address */}
          <div className="flex flex-col gap-4">
            <a href="#" className="inline-block">
              <img 
                src={logo} 
                alt="Opulent Auto Trimming Interiors" 
                className="h-12 w-auto transition-opacity hover:opacity-80"
              />
            </a>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <address className="font-body text-sm not-italic">
                48 Monument Road<br />
                Kempton Park<br />
                Gauteng, 1619
              </address>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-semibold text-foreground">Quick Links</h4>
            <a href="#services" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#gallery" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              Gallery
            </a>
            <a href="#about" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-semibold text-foreground">Contact Us</h4>
            <a href="tel:0787028285" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              078 702 8285
            </a>
            <a href="https://wa.me/27787028285" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              WhatsApp Us
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Opulent Auto Trimming Interiors. All rights reserved.
          </p>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Coded by{' '}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-2 underline-offset-2 transition-colors hover:opacity-80"
            >
              lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
