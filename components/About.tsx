"use client";
import { motion } from "framer-motion";
import { Dumbbell, Car, Music, Wind, Zap, Trophy } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-24 bg-background border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">
          Beyond the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 bg-[length:200%_auto] animate-text-gradient">
            Code
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* D1 Athlete Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 p-8 bg-surface border border-border rounded-3xl flex flex-col justify-between group hover:border-purple-500/30 transition-all"
          >
            <div className="flex justify-between items-start">
              <Trophy className="text-purple-500" size={32} />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]"></span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Who is Isaiah?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                In all that I do, I am a man of God - but away from the
                keyboard, I competed as a horizontal jumper at the Division I
                level for the University at Albany's track and field team. I
                love to cook and listen to music. I enjoy new experiences and am
                always looking to grow and learn in all aspects of my life.
              </p>
            </div>
          </motion.div>

          {/* Music Card - Multi-Instrumentalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-surface border border-border rounded-3xl flex flex-col justify-center text-center items-center"
          >
            <Music className="text-purple-500 mb-4" size={28} />
            <h3 className="text-white font-bold text-lg">Classical</h3>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
              Piano • Violin
            </p>
            <div className="w-full h-px bg-white/5 my-4" />
            <p className="text-xs text-gray-400 italic">
              Precision & Composition
            </p>
          </motion.div>

          {/* Fragrance Card - Cologne Collector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-gradient-to-b from-surface to-purple-950/20 border border-border rounded-3xl flex flex-col justify-between"
          >
            <Wind className="text-purple-400" size={24} />
            <div>
              <h3 className="text-white font-bold text-lg">Aesthetics</h3>
              <p className="text-gray-400 text-xs mt-1">
                Avid Cologne Collector
              </p>
            </div>
          </motion.div>

          {/* Lifting Card - 315 Bench */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-surface border border-border rounded-3xl flex flex-col justify-between group hover:border-purple-500/50 transition-all"
          >
            <Dumbbell
              className="text-gray-500 group-hover:text-purple-400 transition-colors"
              size={28}
            />
            <div>
              <p className="text-3xl font-black text-white italic">315</p>
              <p className="text-[10px] uppercase tracking-tighter text-purple-500 font-bold">
                Bench PR (1 rep max)
              </p>
            </div>
          </motion.div>

          {/* Automotive Card - AMG C43 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 p-8 bg-surface border border-border rounded-3xl flex items-center justify-between overflow-hidden relative"
          >
            <div className="relative z-10">
              <Car className="text-purple-500 mb-4" size={28} />
              <h3 className="text-white font-bold text-xl tracking-tighter">
                Car Enthusiast
              </h3>
              <p className="text-gray-400 text-sm max-w-[200px]">
                Obsessed with the building cars.
              </p>
            </div>
            <div className="text-7xl font-black text-white/5 absolute -right-4 -bottom-4 select-none italic">
              W205
            </div>
          </motion.div>

          {/* Discipline/Relocation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-purple-600 rounded-3xl flex flex-col justify-between shadow-[0_0_30px_rgba(147,51,234,0.3)]"
          >
            <Zap className="text-white" size={24} />
            <p className="text-white font-bold leading-tight">
              Mobile & Ready to Deploy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
