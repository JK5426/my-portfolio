import React from 'react';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          JK.
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
