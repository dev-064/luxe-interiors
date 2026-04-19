"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Debajit Saikia",
    time: "2 months ago",
    content: "One of the best interior designing company in Hyderabad Loced their designs",
    rating: 5,
  },
  {
    name: "Pradeep Thanniru",
    time: "2 years ago",
    content: "Their designs are very well . They were sharing lot good ideas during the design and well support to their customers. The cost is affordable compared to other high range cost interiors.",
    rating: 5,
  },
  {
    name: "Anil Enaganti",
    time: "8 years ago",
    content: "icraft designz and interiors team is wonderfull team !! they will provide u the best quality of the work !! i have seen their work in kompally its looking great !!!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-amber-500" />
            <span className="text-amber-600 font-sans text-sm tracking-[0.3em] uppercase">
              Testimonials
            </span>
            <span className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            What Our <span className="text-amber-600">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 font-sans text-lg leading-relaxed">
            Don't just take our word for it. Read what our satisfied clients have to say about our interior design services.
          </p>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="font-sans text-neutral-600 leading-relaxed mb-6 flex-grow italic">
                  "{review.content}"
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                  <span className="font-serif text-neutral-900 font-medium">{review.name}</span>
                  <span className="font-sans text-sm text-neutral-400">{review.time}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
