"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  significance: string;
  tech: string[];
  media: string;
  type: "video" | "image";
}

const projects: Project[] = [
  {
    id: 1,
    title: "ShortlistAI",
    description: "Automated job matching using a custom resume parser and scoring engine.",
    significance: "Demonstrates high-level technical positioning and data-driven logic for career tech.",
    tech: ["Next.js", "AI Integration", "Tailwind CSS", "Parser API"],
    media: "/projects/shortlist.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "RentMe",
    description: "A peer-to-peer rental marketplace mockup for buying or renting any listed item.",
    significance: "Showcases complex state management and marketplace architecture.",
    tech: ["React", "Framer Motion", "Marketplace UI"],
    media: "/projects/rentme.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "Shopify Frontend",
    description: "Visually pleasing storefront integrated with an Alibaba API middleware.",
    significance: "Highlights experience with e-commerce UX and API-driven content delivery.",
    tech: ["React", "Shopify API", "Alibaba API", "Middleware"],
    media: "/projects/shopify.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "EzEats Revamp",
    description: "Modernizing restaurant digital presence for better retention and convenience.",
    significance: "Direct application of technical revamp skills to solve business retention issues.",
    tech: ["React", "UX Research", "Performance Optimization"],
    media: "/projects/ezeats.png",
    type: "image",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 lg:px-24 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 bg-[length:200%_auto] animate-text-gradient">
              Work
            </span>
          </h2>
          
          {/* Scroll Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")} 
              className="p-3 bg-surface/50 border border-border rounded-full hover:border-purple-500 hover:text-purple-400 text-gray-400 transition-all"
            >
              <Icons.ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="p-3 bg-surface/50 border border-border rounded-full hover:border-purple-500 hover:text-purple-400 text-gray-400 transition-all"
            >
              <Icons.ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              layoutId={`card-${p.id}`}
              onClick={() => setSelected(p)}
              // Smaller, fixed width cards (384px) that snap into place
              className="group relative w-[85vw] sm:w-[384px] shrink-0 aspect-[3/4] snap-start bg-surface border border-border rounded-3xl overflow-hidden cursor-pointer hover:border-purple-500/50 transition-all"
            >
              <div className="absolute inset-0 z-0">
                {p.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                  >
                    <source src={p.media} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={p.media}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">
                    {p.title}
                  </h3>
                  <Icons.ArrowUpRight
                    size={20}
                    className="text-white group-hover:text-purple-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="text-gray-300 text-sm drop-shadow-md">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-out Panel (Remains identical) */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l border-border z-50 p-10 overflow-y-auto"
            >
              <button
                onClick={() => setSelected(null)}
                className="mb-8 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-all"
              >
                <Icons.X size={24} />
              </button>

              <h3 className="text-4xl font-bold text-white mb-4 tracking-tighter">
                {selected.title}
              </h3>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                {selected.description}
              </p>

              <div className="mb-10">
                <h4 className="text-purple-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Significance
                </h4>
                <div className="p-5 bg-background rounded-2xl border border-border">
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    {selected.significance}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-purple-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}