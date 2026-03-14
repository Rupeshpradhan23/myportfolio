import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="glass p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Who I am</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 block relative z-10">
                I am a passionate Computer Science student and an aspiring Full Stack Web Developer. I specialize in the <span className="text-emerald-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) and love translating abstract ideas into tangible, responsive visual interfaces.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                Alongside web development, I am deeply invested in solving complex problems through <span className="text-cyan-400 font-semibold">Data Structures & Algorithms</span>. My goal is to build real-world applications that make life easier while preparing for exciting Software Engineering opportunities!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl border border-white/5 text-center group hover:border-primary/50 transition-all">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600 mb-2">MERN</div>
                <div className="text-slate-400 text-sm tracking-wider uppercase font-medium">Stack Expert</div>
              </div>
              <div className="glass p-6 rounded-xl border border-white/5 text-center group hover:border-secondary/50 transition-all">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-emerald-600 mb-2">DSA</div>
                <div className="text-slate-400 text-sm tracking-wider uppercase font-medium">Problem Solver</div>
              </div>
              <div className="glass p-6 rounded-xl border border-white/5 text-center group hover:border-primary/50 transition-all">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500 mb-2">3+</div>
                <div className="text-slate-400 text-sm tracking-wider uppercase font-medium">Projects Built</div>
              </div>
              <div className="glass p-6 rounded-xl border border-white/5 text-center group hover:border-secondary/50 transition-all">
                <div className="text-4xl font-bold text-white mb-2 ml-1 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500">CSE</div>
                <div className="text-slate-400 text-sm tracking-wider uppercase font-medium">Undergraduate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
