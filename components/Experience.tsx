"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "React / Framer Motion", level: 90 },
  { name: "UI/UX Design", level: 85 },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 lg:px-24 border-y border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Mastery Bars */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
            Technical Mastery
          </h2>
          {skills.map((s) => (
            <div key={s.name} className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2 font-mono">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="h-2 bg-surface rounded-full border border-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Education with Real Logos */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
            Education
          </h2>

          {/* UAlbany */}
          <div className="p-6 bg-surface border border-border rounded-2xl flex items-center gap-6 group hover:border-accent/30 transition-all">
            <div className="w-16 h-16 bg-background rounded-xl border border-border flex items-center justify-center p-2 flex-shrink-0">
              <img
                src="/logos/ualbany.png"
                alt="UAlbany"
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">
                University at Albany
              </h4>
              <p className="text-gray-400 text-sm">
                B.S. Informatics, Minor in CS
              </p>
            </div>
          </div>

          {/* Westbury HS */}
          <div className="p-6 bg-surface border border-border rounded-2xl flex items-center gap-6 group hover:border-accent/30 transition-all">
            <div className="w-16 h-16 bg-background rounded-xl border border-border flex items-center justify-center p-2 flex-shrink-0">
              <img
                src="/logos/westbury.png"
                alt="Westbury HS"
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">
                Westbury High School
              </h4>
              <p className="text-gray-400 text-sm">Advanced Regents Diploma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
