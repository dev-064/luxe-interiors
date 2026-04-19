"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { Home, Building2, Palette, Sofa, Lightbulb, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Transform your home into a sanctuary that reflects your personality. From cozy apartments to luxury villas, we create spaces you'll love coming home to.",
    features: ["Space Planning", "Custom Furniture", "Color Consultation"],
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description:
      "Elevate your business environment with designs that inspire productivity and impress clients. Offices, retail spaces, and hospitality venues.",
    features: ["Office Design", "Retail Layouts", "Hospitality"],
  },
  {
    icon: Palette,
    title: "Interior Styling",
    description:
      "The finishing touches that make all the difference. Our styling service brings together textures, colors, and accessories for a cohesive look.",
    features: ["Art Curation", "Accessory Selection", "Styling"],
  },
  {
    icon: Sofa,
    title: "Furniture Design",
    description:
      "Custom furniture pieces designed and crafted to fit your space perfectly. From statement sofas to bespoke storage solutions.",
    features: ["Custom Pieces", "Upholstery", "Restoration"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description:
      "Create the perfect ambiance with expertly designed lighting schemes. We balance natural and artificial light for every mood and function.",
    features: ["Ambient Lighting", "Task Lighting", "Smart Systems"],
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description:
      "Maximize your space potential with intelligent layout planning. We optimize flow, functionality, and comfort for any room size.",
    features: ["Floor Plans", "3D Visualization", "Flow Analysis"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-amber-500" />
            <span className="text-amber-600 font-sans text-sm tracking-[0.3em] uppercase">
              Our Services
            </span>
            <span className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            What We <span className="text-amber-600">Offer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 font-sans text-lg leading-relaxed">
            From concept to completion, we offer comprehensive interior design services
            tailored to your unique needs and vision.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <service.icon
                      size={28}
                      className="text-amber-400 group-hover:text-neutral-900 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-neutral-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-sans px-3 py-1 bg-white border border-neutral-200 rounded-full text-neutral-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-amber-500"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
