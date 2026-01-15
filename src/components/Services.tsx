import { motion } from 'framer-motion';
import { Sofa, Scissors, Wrench, Car, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sofa,
    title: 'Upholstery',
    description: 'Premium fabric and leather upholstery services for sofas, chairs, and all types of furniture with meticulous attention to detail.',
    features: ['Custom Fabrics', 'Leather Work', 'Pattern Matching'],
  },
  {
    icon: Scissors,
    title: 'Couch Design',
    description: 'Bespoke couch and sofa design tailored to your space, style, and comfort preferences. From concept to creation.',
    features: ['Custom Sizing', 'Unique Styles', 'Premium Materials'],
  },
  {
    icon: Wrench,
    title: 'Furniture Repair',
    description: 'Expert restoration and repair services for antique and modern furniture. We bring worn pieces back to life.',
    features: ['Frame Repair', 'Restoration', 'Refinishing'],
  },
  {
    icon: Car,
    title: 'Car Trimming',
    description: 'Luxury automotive interior trimming and restoration. Transform your vehicle\'s interior into a work of art.',
    features: ['Seat Covers', 'Dashboard Trim', 'Custom Interiors'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="services" className="relative bg-background py-24">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-sage-light px-4 py-1.5 font-body text-sm font-medium text-sage-dark">
            What We Offer
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Our Expert Services
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            From home furniture to luxury vehicles, we deliver unparalleled craftsmanship 
            and attention to detail in every project.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="hover-lift group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sage-light transition-colors duration-300 group-hover:bg-primary">
                <service.icon className="h-7 w-7 text-sage-dark transition-colors duration-300 group-hover:text-charcoal" />
              </div>
              
              {/* Title */}
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="mb-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-sage-dark transition-colors hover:text-primary-dark"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
