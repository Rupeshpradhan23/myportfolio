import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Car Rental Platform",
    description: "A comprehensive car rental system with user authentication, secure bookings, admin dashboard, and payment integration. Features an intuitive UI for seamless reservations.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=720&auto=format&fit=crop",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    category: "MERN",
    github: "https://github.com/Rupeshpradhan23/carYatra",
    live: "https://github.com/Rupeshpradhan23/carYatra",
    featured: true
  },
  {
    id: 2,
    title: "CampusStride Educational Dashboard",
    description: "An interactive dashboard for students and educators to track academic progress, manage courses, and facilitate campus communication in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=720&auto=format&fit=crop",
    tech: ["React", "CSS", "Firebase", "Chart.js"],
    category: "Frontend",
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Course Management System",
    description: "A robust backend system built with PHP and MySQL to manage student enrollments, instructor assignments, and course catalogs dynamically.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=720&auto=format&fit=crop",
    tech: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
    category: "Backend",
    github: "https://github.com/Rupeshpradhan23/CampusCore",
    live: "https://github.com/Rupeshpradhan23/CampusCore"
  },
  {
    id: 4,
    title: "AI Virtual Physical Therapy App",
    description: "A proof-of-concept application utilizing machine learning algorithms to assist users with physical therapy exercises through their webcam.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=720&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "React", "OpenCV"],
    category: "AI/ML",
    github: "https://github.com/Rupeshpradhan23/Ai_virtual_physical_therapy",
    live: "https://github.com/Rupeshpradhan23/Ai_virtual_physical_therapy"
  }
];

const categories = ["All", "MERN", "Frontend", "Backend", "AI/ML"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
       {/* Background gradient */}
       <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-slate-900/80 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Works</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-3 p-2 glass rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                {/* Project Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Floating Tech Stack badges on image */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white shadow-sm border border-white/10">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full text-xs font-medium text-white shadow-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content Area */}
                <div className="p-8 relative">
                  {/* Glowing gradient line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                        <Github size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors bg-white/5 p-2 rounded-full hover:bg-primary/20">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
