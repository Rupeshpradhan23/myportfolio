import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

import profilePic from '../assets/rupeshprofile.jpeg';
import reactLogo from '../assets/react.svg'; // logo to improve floating element
import resume from '../assets/RupeshResume.pdf'; // import resume for download

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 flex flex-col gap-6 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-medium tracking-wider mb-2 block">Welcome, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Rupesh Pradhan
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold mb-2">
              Full Stack Developer & Tech Enthusiast
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Crafting innovative digital solutions with clean code and user-first design. I transform ideas into powerful web experiences that make an impact. Let's build something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mt-4"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all active:scale-95">
                Contact Me
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 justify-center md:justify-start mt-6"
          >
            <a href="https://github.com/Rupeshpradhan23" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rupeshpradhan01/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] hover:-translate-y-1 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pradhanrupesh8989@gmail.com" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all">
              <Mail size={24} />
            </a>
            <a href={resume} download="Rupesh_Pradhan_Resume.pdf" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-all">
              <Download size={20} />
              <span className="text-sm font-medium border-b border-transparent hover:border-primary">Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Image/Graphic side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 mt-16 md:mt-0 relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-tr from-primary to-secondary p-1 relative z-10 shadow-[0_0_50px_rgba(14,165,233,0.3)]">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-900">
               {/* Place your image here - update the import path if you use a different filename */}
               <img
                 src={profilePic}
                 alt="Rupesh Profile"
                 className="w-full h-full object-cover scale-150 object-top"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
