import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '0787028285';
const WHATSAPP_NUMBER = '27787028285';

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-current text-white" />
      </motion.a>
      
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-sage-dark shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
};
