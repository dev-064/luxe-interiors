"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["SHILPARAMAM, 3rd, near Cyber Towers", "above nilakamal, Surya Enclave", "HITEC City, Hyderabad, Telangana 500081"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["096180 37772", "Mon - Sat, 9am - 5:30pm"],
  },
  {
    icon: Mail,
    title: "Website",
    details: ["www.icraftdesignz.com", "Book FREE consultation"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "Closes 5:30 pm"],
  },
];

const services = [
  "Premium living room & double-height designs",
  "Modular kitchen with high-end finishes",
  "Designer bedrooms & walk-in wardrobes",
  "Staircase design & space optimization",
  "False ceiling with advanced lighting",
  "Customized furniture & décor",
  "Complete turnkey interior solutions",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-amber-500" />
            <span className="text-amber-400 font-sans text-sm tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <span className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Start Your <span className="text-amber-400">Project</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 font-sans text-lg leading-relaxed">
            Ready to transform your space? Contact us for a free consultation
            and let&apos;s bring your vision to life.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-white rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl text-neutral-900 mb-6">
                Request a Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-sm text-neutral-600 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-sans text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-sm text-neutral-600 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-sans text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-sm text-neutral-600 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-sans text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="096180 37772"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block font-sans text-sm text-neutral-600 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-sans text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm text-neutral-600 mb-2"
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg font-sans text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Describe your project, budget, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-sans font-medium transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail) => (
                    <p
                      key={detail}
                      className="font-sans text-neutral-400 text-sm"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden bg-neutral-800 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
