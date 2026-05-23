import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-4 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-950"></div>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-end text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 font-medium">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
