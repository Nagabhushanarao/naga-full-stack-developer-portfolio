import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Layers, 
  Database, 
  Workflow, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-brand-500" />,
      title: "Modular Full-Stack Engineering",
      desc: "Proven expertise engineering responsive web applications with React.js and Angular, backed by robust Java Spring Boot RESTful services and Spring Data."
    },
    {
      icon: <Workflow className="w-6 h-6 text-accent-500" />,
      title: "Archibus / Eptura IWMS Customization",
      desc: "Deep domain proficiency customizing enterprise facilities infrastructure, asset tracking, space management, and mission-critical business workflow rules."
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      title: "Zero-Downtime Database Migration",
      desc: "Specialized in large-scale database schema comparisons, automated data validation, and migration scripts ensuring 100% data fidelity with zero downtime."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-indigo-500" />,
      title: "Global Enterprise Delivery",
      desc: "Collaborating directly with international Product Owners, QA teams, and enterprise clients across EMEA delivering high-velocity, scalable solutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Architecting Scalable Enterprise Systems with High Fidelity
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Dedicated to modernizing complex legacy architectures into clean, maintainable, high-throughput web applications.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Executive narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-500" />
                Senior Technical Background
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                With over <strong className="text-slate-900 dark:text-white font-semibold">4+ years of specialized enterprise experience</strong> at Crestere Technologies LLP, I have driven the modernizing and scaling of critical enterprise applications for clients spanning Europe, the Middle East, and Africa (EMEA).
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                My core strength lies at the intersection of <strong className="text-slate-900 dark:text-white font-semibold">React.js, Java Spring Boot, and enterprise SQL databases</strong>, combined with deep technical customization of the Archibus/Eptura Integrated Workplace Management System (IWMS).
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether spearheading automated database schema comparisons with zero data loss or architecting decoupled RESTful endpoints that replace monolithic views, I prioritize long-term maintainability, code quality, and exceptional performance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Full SDLC & Agile/Scrum
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Peer Reviews & Mentoring
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Zero-Downtime Deployments
              </span>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-brand-500/20 text-brand-400 text-xs font-mono font-medium mb-4">
                Enterprise Profile Snapshot
              </div>
              <h4 className="text-2xl font-bold mb-4">Patta Naga Bhushana Rao</h4>
              
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">Role:</strong> Senior Full Stack Developer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">Current Org:</strong> Crestere Technologies LLP (Promoted in 3 yrs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">Domain:</strong> Workplace & Asset Management / IWMS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">Education:</strong> B.Sc. (M.S.CS) | Osmania University (83%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">Certification:</strong> CCBP 4.0 Intensive (NxtWave)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Patta_Naga_Bhushana_Rao_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors"
              >
                <span>Download Verified Resume</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/50 shadow-sm transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
