import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const Contact = () => {
  return (
    <section className="relative py-28 px-6 border-b border-neutral-800 overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06),transparent_60%)]" />

      {/* Heading - Slow From Top */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          mass: 1.2,
        }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-semibold">
          Let’s Work Together
        </h1>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          Open to full-time roles, freelance projects, and collaborations.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Location - From Right Slow */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 20,
            mass: 1.3,
          }}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 120, damping: 14 },
          }}
          className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <IoLocationOutline className="text-purple-400 text-2xl" />
            <h3 className="text-white font-medium text-lg">Location</h3>
          </div>

          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-purple-400 transition text-sm"
          >
            {CONTACT.address}
          </a>
        </motion.div>

        {/* Phone - From Bottom Slow */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 20,
            mass: 1.3,
          }}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 120, damping: 14 },
          }}
          className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <IoCallOutline className="text-purple-400 text-2xl" />
            <h3 className="text-white font-medium text-lg">Phone</h3>
          </div>

          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-neutral-400 hover:text-purple-400 transition text-sm"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.div>

        {/* Email - From Right Slow */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 20,
            mass: 1.3,
          }}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 120, damping: 14 },
          }}
          className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <IoMailOutline className="text-purple-400 text-2xl" />
            <h3 className="text-white font-medium text-lg">Email</h3>
          </div>

          <a
            href={`mailto:${CONTACT.email}`}
            className="text-neutral-400 hover:text-purple-400 transition text-sm"
          >
            {CONTACT.email}
          </a>
        </motion.div>

      </div>

      {/* CTA - Very Smooth Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="text-center mt-16"
      >
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 180, damping: 15 },
          }}
          whileTap={{ scale: 0.96 }}
          href={`mailto:${CONTACT.email}`}
          className="inline-block px-10 py-4 rounded-full bg-purple-500 text-white font-medium shadow-lg hover:bg-purple-600 transition"
        >
          Send Me a Message
        </motion.a>
      </motion.div>

    </section>
  );
};

export default Contact;