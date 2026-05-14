"use client";
import { motion } from "framer-motion";

const tech = [
  // Languages
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "Java", logo: "/logos/java.png" }, // Referencing your Lab work
  // Frameworks/Libraries
  { name: "React", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/nextjs.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
  { name: "Framer Motion", logo: "/logos/framer.svg" },
  // Tools/Deployment
  { name: "Vercel", logo: "/logos/vercel.png" },
  { name: "GitHub", logo: "/logos/github.png" },
  { name: "PHP", logo: "/logos/php.png" }, // Referencing SPEED internship
];

export default function TechStack() {
  return (
    <section className="py-20 bg-background overflow-hidden border-t border-white/5">
      <div className="px-6 lg:px-24 mb-10">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em]">
          Technical Ecosystem
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex relative items-center">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap" /* Changed gap-12 to gap-8 for tighter spacing with fixed widths */
        >
          {/* We double the array to create the seamless loop */}
          {[...tech, ...tech].map((item, index) => (
            <div
              key={index}
              // Added w-56 (fixed width) and justify-start to align content left
              className="flex items-center justify-start gap-4 w-56 px-6 py-4 bg-surface/30 border border-border rounded-2xl group hover:border-purple-500/50 transition-all"
            >
              <img
                src={item.logo}
                alt={item.name}
                // Added shrink-0 so the logo doesn't compress
                className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all shrink-0"
              />
              {/* Added truncate so long text gets cut off with "..." instead of breaking the box */}
              <span className="text-white font-bold tracking-tight text-lg truncate">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}