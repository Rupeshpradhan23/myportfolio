import React from 'react';
import { motion } from 'framer-motion';

const trainingData = [
  {
    id: 1,
    year: "Jun’ 25 – Jul’ 25",
    title: "Trainee - Data Structures & Algorithms | C++",
    university: "Lovely Professional University",
    certificateLink: "https://drive.google.com/drive/u/0/folders/1-gzDe-SL9NJnRGRnnZIzLeNe1etr81VB?ths=true",
    description: "• Devised core concepts ofdata structures & algorithms in C++ and Dynamic Programming.\n• Improve time and space complexity strengthening core problem-solving and logical thinking.\n• Optimized algorithmic solutions to achieve up to 40% improvement in time and space complexity.",
    icon: "💻"
  }
];

const Training = () => {
  return (
    <section id="training" className="py-24 relative bg-slate-900">
      <div className="container mx-auto px-6 max-w-4xl relative">
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

        {/* Content Container */}
        <div className="flex justify-center">
          {trainingData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 relative group text-center">
                {/* Decorative glowing gradient inside box */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all pointer-events-none"></div>

                <span className="inline-block px-4 py-1 rounded-full bg-white/5 text-primary text-sm font-semibold mb-4 border border-primary/20 shadow-inner">
                  {item.year}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  {item.title}
                </h3>
                
                <h4 className="text-secondary font-medium mb-6 text-lg">
                  <a href={item.certificateLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer underline underline-offset-4">{item.university}</a>
                </h4>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed whitespace-pre-line text-left inline-block space-y-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
