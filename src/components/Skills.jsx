import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ]
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    ]
  }
];

const SkillIcon = ({ name, icon, invert }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 group-hover:-translate-y-2 transition-transform duration-300">
        <img 
          src={icon} 
          alt={name} 
          className={`w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${invert ? 'invert opacity-80 group-hover:opacity-100' : ''}`}
        />
      </div>
      <span className="text-xs sm:text-sm font-medium text-slate-400 text-center tracking-wide group-hover:text-primary transition-colors">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technical Library</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical capabilities spanning frontend, backend, databases, and problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-secondary"></span>
                {category.category}
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-auto">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} invert={skill.invert} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
