import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Personal Projects</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="group bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Code size={24} />
                </div>
                {/* <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a> */}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full">
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

export default Projects;
