import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center">
        
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
          Rupesh Pradhan
        </div>

        <div className="flex gap-6 mb-8">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0a66c2]/80 hover:text-white hover:-translate-y-1 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rupesh@example.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500/80 hover:text-white hover:-translate-y-1 transition-all">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center text-slate-500 text-sm">
          {/* <p className="mb-2">Built with <span className="text-primary font-medium">React</span> & <span className="text-blue-400 font-medium">Tailwind CSS</span></p> */}
          <p>&copy; {currentYear} Rupesh Pradhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
