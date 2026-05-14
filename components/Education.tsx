"use client";
import { motion } from "framer-motion";

const educationHistory = [
  {
    id: 1,
    school: "University at Albany, SUNY",
    location: "Albany, NY",
    degree: "B.S. in Informatics",
    subtext: "Minor in Computer Science",
    date: "Expected June 2026",
    logo: "/logos/ualbany.png",
    details: [
      "Participating in May 2026 Commencement Ceremony",
      "Focus on Front-End Engineering and modern web architectures",
      "Transitioning legacy systems to React-based frameworks"
    ]
  },
  {
    id: 2,
    school: "Westbury High School",
    location: "Nassau County / Old Westbury, NY",
    degree: "Advanced Regents Diploma",
    date: "Completed 2020",
    logo: "/logos/westbury.png",
    details: [
      "Foundational coursework in IT and systems management",
      "Transitioned to UAlbany for advanced Computer Science focus"
    ]
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-background border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">
          Education
        </h2>

        <div className="space-y-12">
          {educationHistory.map((edu) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 p-8 bg-surface/30 border border-border rounded-3xl hover:bg-surface/50 transition-all"
            >
              {/* Logo Column */}
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl p-2 overflow-hidden">
                <img 
                  src={edu.logo} 
                  alt={`${edu.school} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Column */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {edu.school}
                    </h3>
                    <p className="text-purple-400 font-mono text-sm uppercase tracking-wider mt-1">
                      {edu.degree} {edu.subtext && `— ${edu.subtext}`}
                    </p>
                  </div>
                  <div className="text-gray-500 text-sm font-medium mt-2 md:mt-0 md:text-right">
                    <p>{edu.date}</p>
                    <p className="flex items-center md:justify-end gap-1 mt-1 text-gray-600">
                      {edu.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.details.map((detail, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-purple-500/50 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}