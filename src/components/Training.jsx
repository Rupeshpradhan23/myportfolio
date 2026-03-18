import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, BookOpen, Star } from 'lucide-react';
import trainingImg from '../assets/Training.png';

const trainingData = [
  {
    id: 1,
    title: "Fundamentals of Data Structures using C++",
    issuer: "Centre for Professional Enhancement, Lovely Professional University",
    type: "Skill Development Course",
    duration: "June 12, 2025 – July 17, 2025",
    grade: "A",
    description: "Successfully completed a certified training program focused on core Data Structures and Algorithms concepts using C++. Gained hands-on experience in implementing efficient algorithms and problem-solving techniques.",
    link: trainingImg,
  }
];

const Training = () => {
  return (
    <section id="training" className="py-24 relative bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Training</span> & Internship</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center">
          {trainingData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl border border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-500 w-full flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-3">
                  <BookOpen size={16} />
                  <span>{item.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <div className="text-secondary font-medium text-sm md:text-base mb-4 flex items-center gap-2">
                  <Award size={18} className="shrink-0" />
                  <span>{item.issuer}</span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                
                <div className="mt-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-5 border-t border-white/10 text-sm text-slate-300">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar size={16} className="text-primary" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Star size={16} className="text-yellow-500" />
                      <span>Grade: <strong className="text-white text-base">{item.grade}</strong></span>
                    </div>
                  </div>
                  
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white px-5 py-2 rounded-lg font-medium transition-all duration-300"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
