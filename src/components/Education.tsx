import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Academic & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Professional Credentials
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Strong foundation in mathematical modeling, computational science, and continuous software engineering training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Degree Card */}
          {portfolioData.education.map((edu, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {edu.period}
                  </span>
                </div>

                <div className="inline-block text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 mb-1">
                  Osmania University • Grade: {edu.grade}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {edu.institution}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>Verified Degree Credential (83% Distinction)</span>
              </div>
            </div>
          ))}

          {/* Professional Certification Card */}
          {portfolioData.certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    Continuous Career Building
                  </span>
                </div>

                <div className="inline-block text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {cert.provider}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>Completed Intensive Software Curriculum</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
