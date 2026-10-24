import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  ShieldCheck 
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(portfolioData.projects[0]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Featured Engineering Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Enterprise Projects & Architectures
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            High-impact solutions delivered across Archibus/Eptura IWMS, React.js, and Java Spring Boot.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className={`p-7 sm:p-8 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                selectedProject.id === proj.id
                  ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-xl ring-2 ring-brand-500/30'
                  : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    {proj.category}
                  </span>
                  {proj.metrics && (
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      {proj.metrics[0].label}: {proj.metrics[0].value}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {proj.title}
                </h3>
                <h4 className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-4 font-semibold">
                  {proj.subtitle}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Problem & Solution Mini Blocks */}
                <div className="space-y-3 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      The Challenge
                    </span>
                    <p className="line-clamp-2 leading-relaxed">{proj.problem}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      Engineering Solution
                    </span>
                    <p className="line-clamp-2 leading-relaxed">{proj.solution}</p>
                  </div>
                </div>

                {/* Key Impact Items */}
                <div className="space-y-2 mb-6">
                  {proj.impact.map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                    selectedProject.id === proj.id
                      ? 'bg-slate-900 text-white dark:bg-brand-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {selectedProject.id === proj.id ? 'Viewing Details' : 'Inspect Architecture'}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Selected Project Full Architecture Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-400">
                Deep Dive Technical Overview
              </span>
              <h3 className="text-2xl font-bold mt-1 text-white">
                {selectedProject.title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>GitHub Repos</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}?subject=Inquiry regarding ${encodeURIComponent(selectedProject.title)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors"
              >
                <span>Request Technical Walkthrough</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Problem & Technical Bottlenecks
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.problem}
              </p>

              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Engineered Solution
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Measurable Enterprise Impact
              </h4>
              <div className="space-y-3">
                {selectedProject.impact.map((imp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>

              {selectedProject.metrics && (
                <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <span className="text-xs text-slate-400 block">{m.label}</span>
                      <span className="text-xl font-bold font-mono text-brand-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
