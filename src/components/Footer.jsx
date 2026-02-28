import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/rd-logo.jpg";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-neutral-800 overflow-x-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
      >

        {/* Logo + Name Section */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src={Logo}
            alt="RD Logo"
            className="w-16 h-16 rounded-full border border-neutral-700 hover:scale-110 transition duration-300"
          />
          <h2 className="text-lg font-semibold text-white">
            Rahul Dagdi
          </h2>
          <p className="text-sm text-neutral-400 text-center md:text-left max-w-xs">
            MERN Stack Developer building modern & scalable web applications.
          </p>
        </div>

        {/* Creative Center Line */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-center"
        >
          <p className="text-purple-400 font-medium text-lg">
            Let’s Build Something Amazing 🚀
          </p>
          <p className="text-neutral-500 text-sm mt-2">
            Open for opportunities & collaborations
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl text-neutral-400">
          <a
            href="https://www.linkedin.com/in/rahul-dagdi-001888214/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            <IoLogoLinkedin />
          </a>

          <a
            href="https://github.com/RahulDagdi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            <IoLogoGithub />
          </a>

          <a
            href="https://x.com/RAHULDAGDI1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            <IoLogoTwitter />
          </a>

          <a
            href="https://www.instagram.com/rahul._.dagdi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            <IoLogoInstagram />
          </a>
        </div>

      </motion.div>

      {/* Bottom Copyright */}
      <div className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Rahul Dagdi. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;