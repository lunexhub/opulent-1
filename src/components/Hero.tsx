import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Luxury upholstery workshop" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-body text-sm font-medium tracking-wide text-white/90">
              Premium Craftsmanship Since Day One
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Transforming Spaces,
            <br />
            <span className="text-primary">Elevating Interiors</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/80 md:text-xl"
          >
            Expert upholstery, bespoke furniture design, precision repairs, 
            and luxury automotive interior trimming.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body font-semibold text-charcoal shadow-lg transition-all duration-300 hover:bg-primary-glow hover:shadow-xl"
            >
              Explore Our Services
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-body font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-white/10"
            >
              Get a Quote
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-xs uppercase tracking-widest text-white/60">Scroll</span>
            <ArrowDown className="h-5 w-5 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
