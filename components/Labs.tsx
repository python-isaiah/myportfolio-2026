"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ChevronRight, X, Search, Terminal, Coffee, Layers, Database, PieChart } from "lucide-react";

// Expanded Mock Data - Including Data & BI Architecture
const labData = [
  // --- JAVA LABS ---
  { id: 1, tech: "Java", level: "Intro", topic: "OOP Paradigm & Objects", details: "Memory references & instantiation.", sidebar: "Explored the fundamental shift from procedural execution to Object-Oriented design. Focused on Java architecture and memory management in the heap.", tags: ["Classes", "Memory"] },
  { id: 2, tech: "Java", level: "Intermediate", topic: "Inheritance & Polymorphism", details: "Method Overriding & Interfaces.", sidebar: "Built hierarchical class structures. Designed flexible systems using dynamic method invocation and contract-based programming.", tags: ["OOP", "Architecture"] },
  
  // --- PYTHON LABS ---
  { id: 5, tech: "Python", level: "Intermediate", topic: "Data Analysis Basics", details: "Pandas & NumPy data manipulation.", sidebar: "Imported, cleaned, and transformed large CSV datasets using Pandas DataFrames. Applied vectorized operations with NumPy.", tags: ["Data Science", "Pandas"] },
  { id: 6, tech: "Python", level: "Advanced", topic: "RESTful API & Automation", details: "Handling JSON requests & scripting.", sidebar: "Interfaced with external REST APIs, parsed complex JSON responses, and handled HTTP status codes and error timeouts.", tags: ["APIs", "Networking"] },

  // --- SQL & NOSQL LABS ---
  { id: 9, tech: "SQL", level: "Intermediate", topic: "Relational Architecture", details: "Normalization & Complex Joins.", sidebar: "Designed normalized database schemas (3NF) to ensure data integrity. Wrote complex queries utilizing INNER, LEFT, and sub-queries to extract targeted datasets.", tags: ["RDBMS", "Architecture"] },
  { id: 10, tech: "NoSQL", level: "Advanced", topic: "Document Databases", details: "MongoDB & Unstructured Data.", sidebar: "Implemented flexible data models using MongoDB. Handled JSON-like document storage, indexing for performance, and aggregation pipelines.", tags: ["MongoDB", "Scalability"] },

  // --- TABLEAU / BI LABS ---
  { id: 11, tech: "Tableau", level: "Intermediate", topic: "Business Intelligence", details: "Interactive Dashboards & KPIs.", sidebar: "Connected live data sources to construct interactive, highly visual dashboards. Engineered calculated fields to track corporate KPIs and business metrics.", tags: ["Analytics", "Visualization"] },
];

export default function Labs() {
  const [selectedLab, setSelectedLab] = useState<typeof labData[0] | null>(null);
  const [search, setSearch] = useState("");
  const [filterTech, setFilterTech] = useState<"All" | "Java" | "Python" | "SQL" | "NoSQL" | "Tableau">("All");
  const [filterLevel, setFilterLevel] = useState<"All" | "Intro" | "Intermediate" | "Advanced">("All");

  // Filtering Logic
  const filteredLabs = useMemo(() => {
    return labData.filter((lab) => {
      const matchesSearch = lab.topic.toLowerCase().includes(search.toLowerCase()) || lab.details.toLowerCase().includes(search.toLowerCase());
      const matchesTech = filterTech === "All" || lab.tech === filterTech;
      const matchesLevel = filterLevel === "All" || lab.level === filterLevel;
      return matchesSearch && matchesTech && matchesLevel;
    });
  }, [search, filterTech, filterLevel, labData]);

  // Dynamic Icon Renderer
  const getTechIcon = (tech: string) => {
    switch(tech) {
      case "Java": return <Coffee size={14} className="text-orange-400" />;
      case "Python": return <Terminal size={14} className="text-blue-400" />;
      case "SQL": 
      case "NoSQL": return <Database size={14} className="text-green-400" />;
      case "Tableau": return <PieChart size={14} className="text-fuchsia-400" />;
      default: return <Code2 size={14} className="text-gray-400" />;
    }
  };

  // Dynamic Badge Color Renderer
  const getTechColor = (tech: string) => {
    switch(tech) {
      case "Java": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "Python": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "SQL": 
      case "NoSQL": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Tableau": return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section className="py-24 px-6 lg:px-24 bg-background border-t border-white/5 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl">
              <Layers className="text-purple-500" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Technical Curriculum</h2>
              <p className="text-gray-500 text-sm font-mono mt-1 uppercase tracking-widest">50+ Completed Labs</p>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search concepts..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 bg-surface/50 border border-border rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all"
              />
            </div>
            
            {/* Technology Filter */}
            <select 
              value={filterTech} 
              onChange={(e) => setFilterTech(e.target.value as any)}
              className="bg-surface/50 border border-border rounded-xl py-2 px-4 text-sm text-gray-300 focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer"
            >
              <option value="All">All Tech</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="SQL">SQL</option>
              <option value="NoSQL">NoSQL</option>
              <option value="Tableau">Tableau</option>
            </select>

            {/* Level Filter */}
            <select 
              value={filterLevel} 
              onChange={(e) => setFilterLevel(e.target.value as any)}
              className="bg-surface/50 border border-border rounded-xl py-2 px-4 text-sm text-gray-300 focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Intro">Intro</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Compact Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredLabs.map((lab) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={lab.id}
                onClick={() => setSelectedLab(lab)}
                className="group p-5 bg-surface/30 border border-border rounded-2xl hover:bg-surface/50 hover:border-purple-500/30 cursor-pointer transition-all flex flex-col justify-between h-36"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {getTechIcon(lab.tech)}
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{lab.tech} • {lab.level}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base truncate">{lab.topic}</h3>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{lab.details}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[10px] text-purple-500 font-bold uppercase tracking-tighter">View Details</span>
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {filteredLabs.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <Code2 className="mx-auto text-gray-600 mb-4" size={32} />
              <p className="text-gray-400">No labs found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lab Detail Sidebar */}
      <AnimatePresence>
        {selectedLab && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedLab(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" 
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l border-border z-50 p-8 shadow-2xl overflow-y-auto"
            >
              <button onClick={() => setSelectedLab(null)} className="mb-8 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 transition-colors">
                <X size={20}/>
              </button>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2 py-1 border rounded text-[10px] font-bold uppercase tracking-widest ${getTechColor(selectedLab.tech)}`}>
                      {selectedLab.tech}
                    </span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {selectedLab.level}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedLab.topic}</h3>
                </div>
                
                <div className="p-5 bg-background rounded-2xl border border-border">
                  <p className="italic text-gray-300 text-sm leading-relaxed">
                    "{selectedLab.sidebar}"
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-bold text-xs uppercase mb-4 tracking-widest">Core Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLab.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] font-bold text-purple-400 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}