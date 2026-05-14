"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, MapPin } from "lucide-react"; 

export default function Contact() {
  return (
    <section className="relative py-32 px-6 lg:px-24 bg-black overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-purple-400 text-xs font-mono uppercase tracking-widest font-bold">
            Available for Deployment • Post-June 2026
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Let's build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
              something scalable.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Targeting corporate Software Engineering roles. Open to relocation across major tech hubs.
          </p>
        </motion.div>

        {/* Target Markets */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 text-sm font-mono text-gray-500 uppercase tracking-widest"
        >
          <span className="flex items-center gap-1"><MapPin size={16} /> NYC / Long Island</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1"><MapPin size={16} /> West Coast</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1"><MapPin size={16} /> Southern US</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a 
            href="mailto:isaiahallen.py@gmail.com"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} />
            Initialize Contact
            <ArrowRight size={20} />
          </a>
          
          <a 
            href="/Isaiah_Allen_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-surface border border-border text-white font-bold rounded-full hover:border-purple-500/50 hover:bg-surface/50 transition-all group"
          >
            <Download size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links (Using Raw SVGs) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-8 mt-24 pt-8 border-t border-white/10 w-full max-w-2xl justify-center"
        >
          <a 
            href="https://github.com/python-isaiah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors"
          >
            {/* Native GitHub SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/zayscript" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-[#0A66C2] transition-colors"
          >
            {/* Native LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}