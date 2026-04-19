"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { Award, Users, Clock, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, value: 255, suffix: "+", label: "Google Reviews" },
  { icon: Award, value: 50, suffix: "+", label: "Lakhs Project Range" },
  { icon: Clock, value: 15, suffix: "+", label: "Lakhs Starting Price" },
  { icon: Sparkles, value: 100, suffix: "%", label: "Turnkey Solutions" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl text-neutral-900">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                  alt="Interior design studio"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 md:bottom-12 md:-right-12 bg-white p-6 rounded-xl shadow-xl border border-neutral-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-neutral-900">15+</div>
                    <div className="font-sans text-sm text-neutral-600">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400/30 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-amber-500" />
                <span className="text-amber-600 font-sans text-sm tracking-[0.3em] uppercase">
                  Why Choose Us
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
                Luxury Duplex Interiors Designed to{" "}
                <span className="text-amber-600">Perfection ✨</span>
              </h2>

              <div className="space-y-4 font-sans text-neutral-600 leading-relaxed">
                <p>
                  We design spaces that reflect your lifestyle with a perfect balance of luxury, comfort, and smart planning. 🏡
                </p>
                <p>
                  From 2D planning and 3D visualization to final execution, we handle everything with precision and quality. We provide complete turnkey interior solutions for your duplex.
                </p>
                <p>
                  💰 Project Range: ₹15 Lakhs to ₹50 Lakhs+ (based on design & materials). Book your FREE consultation today to get started on your dream duplex!
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-amber-50 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <div className="font-sans text-sm text-neutral-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
