import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-sm hover:border-brand-500/50 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-ping inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-brand-500 -ml-3.5"></span>
            <span className="font-semibold text-brand-600 dark:text-brand-400">Available:</span>
            <span>Senior Full Stack & Enterprise Engineering Roles</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hi, I'm <span className="text-gradient-emerald">{portfolioData.personal.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4 tracking-tight">
            Senior Full Stack Developer
            <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-1">
              React.js • Java Spring Boot • Archibus / Eptura IWMS • Angular • SQL
            </span>
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-500" />
              {portfolioData.personal.location}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              {portfolioData.personal.experienceYears} Years Specialized Enterprise Experience
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              EMEA Enterprise Deployments
            </span>
          </div>

          {/* Summary snippet */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-3xl">
            {portfolioData.personal.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Enterprise Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download="Patta_Naga_Bhushana_Rao_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileDown className="w-4 h-4 text-brand-500" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all duration-200"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Direct links */}
          <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              aria-label="Call Phone"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Enterprise Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {portfolioData.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-brand-500/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
