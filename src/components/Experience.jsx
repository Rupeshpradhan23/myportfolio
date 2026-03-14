import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    year: "Aug’ 23 – Present",
    title: "Bachelor of Technology - CSE",
    subtitle: "Lovely Professional University",
    description: "CGPA: 7.34 \nLocation: Phagwara, Punjab\nCurrently focusing on core computer science subjects, data structures, and building full-stack applications.",
    icon: "🎓"
  },
  {
    id: 2,
    year: "May’ 22 – Mar’ 23",
    title: "Higher Secondary Education",
    subtitle: "Vikash Residential School",
    description: "Percentage: 80.8% \nLocation: Bargarh, Odisha\nFocused on science and mathematics, developing strong analytical and problem-solving skills.",
    icon: "🏫"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 md:border-transparent">
          {/* Animated vertical line for desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2"
          ></motion.div>

          {timelineData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#0ea5e9] z-10 border-2 border-slate-900"></div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Content Box */}
              <div className="w-full md:w-5/12 pl-6 md:pl-0">
                <div className={`glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 relative group ${
                  index % 2 !== 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  {/* Decorative glowing gradient inside box */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all pointer-events-none"></div>

                  <span className="inline-block px-4 py-1 rounded-full bg-white/5 text-primary text-sm font-semibold mb-4 border border-primary/20 shadow-inner">
                    {item.year}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-3 justify-start md:justify-end">
                    {index % 2 === 0 && <span className="md:hidden text-2xl">{item.icon}</span>}
                    {item.title}
                    {index % 2 !== 0 && <span className="hidden md:inline-block text-2xl">{item.icon}</span>}
                    {index % 2 === 0 && <span className="hidden md:inline-block text-2xl">{item.icon}</span>}
                  </h3>
                  
                  <h4 className="text-secondary font-medium mb-4">{item.subtitle}</h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
