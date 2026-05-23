import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Awards = () => {
  return (
    <section id="awards" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Awards & Certifications</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
        {resumeData.awards.map((award, index) => (
          <div key={index} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-600 dark:text-yellow-500">
              {award.includes('Award') ? <Trophy size={24} /> : <Award size={24} />}
            </div>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              {award}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
