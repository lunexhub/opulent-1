import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import workBed from '@/assets/work-bed-1.jpg';
import workHeadboard from '@/assets/work-headboard.jpg';
import workChairs from '@/assets/work-chairs.jpg';
import workOutdoor from '@/assets/work-outdoor.jpg';
import workSofas from '@/assets/work-sofas.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import whatsappImage from '@/assets/WhatsApp Image 2026-01-15 at 07.11.49.jpeg';
import whatsappImage2 from '@/assets/WhatsApp Image 2026-01-15 at 07.11.49 (1).jpeg';
import whatsappImage3 from '@/assets/WhatsApp Image 2026-01-15 at 07.20.05.jpeg';

const galleryImages = [
  { src: heroBg, alt: 'Elegant grey sectional sofa', category: 'Sofas' },
  { src: workBed, alt: 'Custom upholstered bed frame', category: 'Beds' },
  { src: workHeadboard, alt: 'Tufted headboard design', category: 'Beds' },
  { src: workChairs, alt: 'Patterned accent chairs', category: 'Chairs' },
  { src: workOutdoor, alt: 'Branded outdoor furniture', category: 'Commercial' },
  { src: workSofas, alt: 'Re-upholstered couches', category: 'Sofas' },
  { src: whatsappImage, alt: 'Upholstery work sample', category: 'Upholstery' },
  { src: whatsappImage2, alt: 'Upholstery work sample', category: 'Upholstery' },
  { src: whatsappImage3, alt: 'Upholstery work sample', category: 'Upholstery' },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-cream py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 font-body text-sm font-medium text-primary-dark">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl font-bold text-charcoal md:text-5xl">
            Recent Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-charcoal/70">
            Browse through our latest upholstery projects and furniture transformations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1 inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-charcoal">
                  {image.category}
                </span>
                <p className="font-body text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};
