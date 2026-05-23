import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div className="flex gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary h-fit">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{edu.institution}</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">{edu.degree}</p>
                  <p className="text-primary font-bold mt-2">{edu.score}</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {edu.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
