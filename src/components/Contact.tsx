import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '078 702 8285',
    href: 'tel:0787028285',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '078 702 8285',
    href: 'https://wa.me/27787028285',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@opulent.co.za',
    href: 'mailto:info@opulent.co.za',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 8AM - 6PM',
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative bg-charcoal py-24 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-primary backdrop-blur-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Let's Bring Your 
              <span className="text-primary"> Vision to Life</span>
            </h2>
            <p className="mt-6 max-w-lg font-body text-lg text-white/70">
              Ready to transform your furniture or vehicle interior? Contact us today 
              for a free consultation and quote. Our team is here to help you every 
              step of the way.
            </p>
            
            {/* Contact Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('https') ? '_blank' : undefined}
                      rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-white/50">{info.title}</p>
                        <p className="font-body font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-white/50">{info.title}</p>
                        <p className="font-body font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-md">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold">
                  Request a Free Quote
                </h3>
                <p className="mt-2 font-body text-white/70">
                  Describe your project and we'll get back to you within 24 hours.
                </p>
                
                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/27787028285?text=Hi, I would like to request a quote for..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-body font-semibold text-white transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:0787028285"
                    className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-primary bg-transparent px-6 py-4 font-body font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-charcoal"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
