"use client";

import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
  };

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
    >
  

      {/* content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-400 mt-2">{description}</p>

        {/* tech */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-3 mt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-xs px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="text-xs px-3 py-1 rounded-full bg-[#96e8ff] text-black font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* glow border */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#96e8ff]/10 to-[#fff996]/10 blur-2xl" />
      </div>
    </motion.div>
  );
}