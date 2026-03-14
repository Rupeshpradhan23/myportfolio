import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: "Master Generative AI and Generative AI Tools including ChatGPT",
    issuer: "Udemy",
    date: "Aug’ 25",
    icon: "🤖",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157710267834368237/1-11ed36ca-04b4-4bd3-b05a-db2851ae1095.pdf"
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr’ 25",
    icon: "☁️",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730084704245548.pdf"
  },
  {
    id: 3,
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    date: "Nov’ 24",
    icon: "🌐",
    link: "https://www.coursera.org/account/accomplishments/verify/XD2LC273Q52B"
  },
  {
    id: 4,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep’ 24",
    icon: "🔌",
    link: "https://www.coursera.org/account/accomplishments/verify/G0YCSTNK69RE"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background blobs for aesthetics */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Achievements</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Continuous learning and official recognitions that validate my expertise across Generative AI, Cloud Computing, and Networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:bg-white/10 transition-all group flex items-start gap-4"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:border-primary/50 transition-all shadow-inner">
                {cert.icon}
              </div>
              
              {/* Content Container */}
              <div className="flex-1">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug no-underline active:no-underline visited:no-underline cursor-pointer"
                >
                  {cert.title}
                </a>
                <div className="flex flex-wrap items-center gap-4 text-sm mt-3">
                  <span className="flex items-center gap-1.5 text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                    <Award size={14} />
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
