import React from 'react';
import { resumeData } from '../data/resumeData';
import { Sparkles, Code2, Terminal } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* AI & GenAI Skills - Highlighted */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl border border-primary/20 shadow-lg md:col-span-3 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
            <Sparkles size={24} />
            AI & GenAI
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.ai_ml.map((skill, i) => (
              <div key={i} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-primary/10 font-semibold text-sm hover:border-primary transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Code2 size={24} className="text-slate-500" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.languages.map((skill, i) => (
              <div key={i} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 font-medium hover:scale-105 transition-transform text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Terminal size={24} className="text-slate-500" />
            Backend & DevOps
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.technologies.map((skill, i) => (
              <div key={i} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 font-medium hover:scale-105 transition-transform text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
