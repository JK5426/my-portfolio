import React from 'react';
import { Mail, Phone, GitHub, LinkedIn, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  const { personalInfo, summary } = resumeData;

  return (
    <section id="hero" className="py-20 lg:py-32 flex flex-col items-center text-center">
      <div className="animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{personalInfo.name}</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-8">
          Software Engineer | Java & Spring Boot Specialist
        </h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          {summary}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition-opacity">
            <Mail size={18} /> Contact Me
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
            <GitHub size={18} /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
            <LinkedIn size={18} /> LinkedIn
          </a>
        </div>


        <div className="flex justify-center gap-8 text-slate-500 dark:text-slate-500">
           <div className="flex flex-col items-center gap-1">
             <span className="text-xs uppercase tracking-widest">Phone</span>
             <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{personalInfo.phone}</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
