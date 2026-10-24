import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Description */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block leading-none">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Senior Full Stack Developer • Enterprise IWMS Specialist
              </span>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-brand-500 transition-colors">Skills</a>
            <span>•</span>
            <a href="#experience" className="hover:text-brand-500 transition-colors">Experience</a>
            <span>•</span>
            <a href="#projects" className="hover:text-brand-500 transition-colors">Projects</a>
            <span>•</span>
            <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
          </div>

          {/* Social icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
          <p>Engineered with React.js, TypeScript, Tailwind CSS & Vite</p>
        </div>
      </div>
    </footer>
  );
};
