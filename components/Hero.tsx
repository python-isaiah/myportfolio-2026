"use client";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react"; // Removed Code2 since it wasn't being used

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 lg:px-24 overflow-hidden">
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            Building digital <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 bg-[length:200%_auto] animate-text-gradient">experiences</span>.
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Informatics & Computer Science student at UAlbany focusing on front-end excellence and high-fidelity interfaces and applications.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            {/* View Resume Button */}
            <a 
              href="/Isaiah_Allen_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              <FileText size={18} /> View Resume
            </a>
            
            {/* Download Resume Button */}
            <a 
              href="/Isaiah_Allen_Resume.pdf" 
              download 
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-border text-white font-bold rounded-full hover:border-purple-500 hover:text-purple-400 transition-all"
            >
              <Download size={18} /> Download
            </a>

            <div className="flex gap-5 ml-4">
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/zayscript" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              
              {/* GitHub Link */}
              <a 
                href="https://github.com/python-isaiah" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </motion.div>

       {/* Headshot Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="w-full aspect-[4/5] max-w-md bg-surface/40 backdrop-blur-xl border border-border rounded-3xl overflow-hidden relative shadow-2xl group">
             <img 
               src="/logos/headshot.png" 
               alt="Isaiah Joseph Allen" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
             {/* Gradient overlay for a premium blend */}
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}