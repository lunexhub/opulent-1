import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import logo from '@/assets/logo.png';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: ThumbsUp, value: '100%', label: 'Satisfaction' },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-sage-light py-24">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      </div>
      
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/50 px-4 py-1.5 font-body text-sm font-medium text-sage-dark backdrop-blur-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Crafting Excellence 
              <span className="text-sage-dark"> Since Day One</span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              At Opulent Auto Trimming Interiors, we believe every piece of furniture 
              and every vehicle interior tells a story. Our master craftsmen combine 
              traditional techniques with modern innovation to deliver exceptional results.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
              Whether you're looking to restore a cherished family heirloom, design 
              a custom couch, or transform your car's interior, our team brings decades 
              of expertise and an unwavering commitment to quality.
            </p>
            
            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-sage-dark" />
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Content - Logo Feature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -inset-8 animate-pulse-slow rounded-full border border-primary/20" />
              <div className="absolute -inset-16 rounded-full border border-primary/10" />
              <div className="absolute -inset-24 rounded-full border border-primary/5" />
              
              {/* Logo Container */}
              <div className="relative rounded-3xl bg-white p-12 shadow-elegant">
                <img 
                  src={logo} 
                  alt="Opulent Logo" 
                  className="h-48 w-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
