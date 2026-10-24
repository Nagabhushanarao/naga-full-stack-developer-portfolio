import React from 'react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Building2 
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Enterprise Experience
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Rapid career advancement and consistent delivery of mission-critical systems at Crestere Technologies LLP.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="max-w-4xl mx-auto space-y-10 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          
          {portfolioData.experiences.map((exp: ExperienceItem, idx: number) => (
            <div 
              key={idx} 
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Timeline marker icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500 flex items-center justify-center text-brand-500 shadow-md z-10">
                {exp.isCurrent ? (
                  <TrendingUp className="w-4 h-4 animate-pulse text-brand-500" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10'
              } w-full`}>
                <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">
                  
                  {/* Header badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        ● Current Role
                      </span>
                    )}
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 mb-4 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlight callout */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-5 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <p className="font-medium italic leading-relaxed">{exp.highlightSummary}</p>
                  </div>

                  {/* Bullet achievements */}
                  <ul className="space-y-3 mb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
