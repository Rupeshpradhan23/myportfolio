import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Code, Trophy, ExternalLink } from 'lucide-react';
import HackathonCert from '../assets/Hackathon.jpeg';

const certificatesData = [
  {
    id: 1,
    title: "Master Generative AI and Generative AI Tools including ChatGPT",
    issuer: "Udemy",
    date: "Aug’ 25",
    icon: "🤖",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157710267834368237/1-11ed36ca-04b4-4bd3-b05a-db2851ae1095.pdf",
    points: [
      "Acquired comprehensive knowledge of Generative AI principles and the architecture behind Large Language Models (LLMs).",
      "Gained hands-on experience utilizing ChatGPT for automated code generation, complex debugging, and workflow optimization."
    ]
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr’ 25",
    icon: "☁️", 
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730084704245548.pdf",
    points: [
      "Developed a solid foundation in core cloud computing concepts, including PaaS, IaaS, and SaaS deployment models.",
      "Explored the integration of cloud infrastructure with real-time applications, focusing on scalable and distributed architectures."
    ]
  },
  {
    id: 3,
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    date: "Nov’ 24",
    icon: "🌐",
    link: "https://www.coursera.org/account/accomplishments/verify/XD2LC273Q52B",
    points: [
      "Mastered the complexities of the TCP/IP suite, analyzing transport layer protocols and intricate routing mechanisms.",
      "Enhanced troubleshooting capabilities for resolving advanced network connectivity issues and managing data transmission."
    ]
  },
  {
    id: 4,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep’ 24",
    icon: "🔌",
    link: "https://www.coursera.org/account/accomplishments/verify/G0YCSTNK69RE",
    points: [
      "Explored the fundamental layers of networking, from physical hardware transmission to application layer interactions.",
      "Practiced configuring fundamental IP addressing schemas and grasping essential network security protocols."
    ]
  }
];

const activitiesData = [
  {
    id: 1,
    title: "Hack-IoT Event",
    type: "Hackathon / Technical Event",
    organization: "Lovely Professional University (School of Electronics and Electrical Engineering)",
    date: "February 16–17, 2024",
    icon: <Trophy size={28} />,
    description: "Participated in a 2-day Hack-IoT event where I collaborated in a team to explore and develop IoT-based solutions. Enhanced skills in problem-solving, teamwork, and real-world application development under time constraints.",
    skills: ["IoT", "Teamwork", "Problem Solving", "Innovation"],
    link: HackathonCert,
    linkText: "View Certificate",
  },
  {
    id: 2,
    title: "Problem Solving on LeetCode",
    type: "Competitive Coding",
    organization: "LeetCode",
    date: "Present",
    icon: <Code size={28} />,
    description: "Actively solving Data Structures and Algorithms problems on LeetCode to strengthen problem-solving skills and coding efficiency. Focused on topics like arrays, trees, recursion, and dynamic programming.",
    skills: ["DSA", "Algorithm Design", "Logical Thinking", "Optimization"],
    link: "https://leetcode.com/u/rupeshpradhan01/", 
    linkText: "View Profile",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Certifications <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"></span></h2>
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
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:border-primary/50 transition-all shadow-inner"
              >
                {cert.icon}
              </a>
              
              {/* Content Container */}
              <div className="flex-1">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug no-underline active:no-underline visited:no-underline cursor-pointer block"
                >
                  {cert.title}
                </a>
                
                <ul className="mt-3 mb-4 space-y-2">
                  {cert.points.map((point, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start leading-relaxed">
                      <span className="text-primary mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 text-sm mt-4 pt-4 border-t border-white/5">
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

        {/* --- Activities & Achievements Section --- */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Activities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Participation</span></h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activitiesData.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/40 hover:bg-white/10 transition-all group flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary/20"></div>
                
                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 text-primary">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{activity.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{activity.type}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-[15px] leading-relaxed mb-8 flex-1 relative z-10">
                  {activity.description}
                </p>

                <div className="mb-8 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, i) => (
                      <span key={i} className="text-xs font-semibold tracking-wide px-3 py-1.5 bg-primary/5 text-primary rounded-full border border-primary/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-sm pt-6 border-t border-white/10 mt-auto relative z-10">
                  <div className="flex flex-col gap-2.5">
                    <span className="flex items-center gap-2 text-secondary font-medium">
                      <Award size={16} className="shrink-0" />
                      <span className="truncate max-w-[200px] sm:max-w-[220px]" title={activity.organization}>{activity.organization}</span>
                    </span>
                    <span className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} className="shrink-0" />
                      {activity.date}
                    </span>
                  </div>
                  
                  <a 
                    href={activity.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-primary/20 text-white hover:text-primary border border-white/10 hover:border-primary/30 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 whitespace-nowrap"
                  >
                    <span>{activity.linkText}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
