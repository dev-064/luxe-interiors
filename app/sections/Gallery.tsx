"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    title: "Modern Living Room",
    category: "Residential",
    description: "A contemporary living space with warm neutral tones",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    title: "Minimalist Bedroom",
    category: "Residential",
    description: "Serene bedroom design with natural materials",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Luxury Kitchen",
    category: "Residential",
    description: "Open-concept kitchen with premium finishes",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Executive Office",
    category: "Commercial",
    description: "Sophisticated workspace design",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    title: "Dining Experience",
    category: "Residential",
    description: "Elegant dining room with statement lighting",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    description: "Welcoming hospitality space design",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    title: "Bathroom Retreat",
    category: "Residential",
    description: "Spa-like bathroom with marble accents",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    title: "Retail Showroom",
    category: "Commercial",
    description: "Modern retail space design",
  },
];

const categories = ["All", "Residential", "Commercial"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-amber-500" />
            <span className="text-amber-600 font-sans text-sm tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <span className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 font-sans text-lg leading-relaxed">
            Explore our collection of completed projects, showcasing our commitment
            to exceptional design and attention to detail.
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.1} className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-sans text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <motion.div
                layoutId={`gallery-${item.id}`}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-amber-400 font-sans text-xs tracking-wider uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-neutral-900/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[80vh] mx-6"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <h3 className="font-serif text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="font-sans text-neutral-400">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
