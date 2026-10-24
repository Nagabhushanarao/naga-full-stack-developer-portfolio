import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Server, 
  Database, 
  Workflow, 
  ShieldCheck, 
  Activity, 
  CheckCircle2,
  Lock
} from 'lucide-react';

export const Architecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Frontend Client Layer',
      tech: 'React.js / Angular (ES6+)',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      desc: 'Modular, decoupled single-page application. Handles responsive UI layouts, client-side validation, component state management, and async HTTP API calls.',
      patterns: ['Component Reusability', 'Strict State Boundaries', 'Optimistic UI Updates', 'Accessible HTML5/CSS3']
    },
    {
      num: '02',
      title: 'RESTful API & Gateway',
      tech: 'JSON over HTTPS / Postman Verified',
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      desc: 'Standardized REST contract with robust request payloads, pagination, and unified HTTP status responses for enterprise EMEA consumers.',
      patterns: ['Idempotent REST Methods', 'Standardized DTOs', 'CORS & Auth Validation', 'Comprehensive API Test Suites']
    },
    {
      num: '03',
      title: 'Java Spring Boot Core',
      tech: 'Controllers • Services • Spring Data',
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      desc: 'Separation of concerns across layered architecture. Handles transaction boundaries, complex business rules, input sanitization, and enterprise exception handling.',
      patterns: ['Layered Architecture', 'Transaction Management', 'Input Sanitization', 'Centralized Error Handling']
    },
    {
      num: '04',
      title: 'Archibus / Eptura Engine',
      tech: 'Workflow Rules & Event Handlers',
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
      desc: 'Custom IWMS business logic, space allocation metrics, asset tracking workflows, and background scheduled maintenance calculations.',
      patterns: ['Custom Event Handlers', 'Enterprise Workflows', 'Multi-tenant Space Rules', 'Role-Based Workplace Data']
    },
    {
      num: '05',
      title: 'SQL Database & Migration',
      tech: 'SQL Server • Schema Comparison',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      desc: 'Parameterized SQL, indexed data structures, and automated schema comparison and validation scripts that guarantee 100% data fidelity with zero downtime.',
      patterns: ['Parameterized Queries', 'Schema Comparison Delts', 'Automated Data Validation', 'Zero-Downtime Rollbacks']
    }
  ];

  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            System Design & Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Enterprise Architecture Flow
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            How enterprise web applications are structured for high velocity, data integrity, and zero production disruption.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="inline-flex min-w-full items-center justify-between gap-1.5 sm:gap-2.5 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 min-w-[165px] lg:min-w-0 p-3 rounded-xl text-left transition-all duration-200 flex items-center gap-2.5 ${
                    activeStep === idx
                      ? 'bg-slate-900 text-white dark:bg-slate-800 ring-2 ring-brand-500 shadow-md'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${activeStep === idx ? 'bg-slate-800 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'}`}>
                    {step.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider opacity-60 block">Step {step.num}</span>
                    <h4 className="text-xs font-bold truncate">{step.title}</h4>
                  </div>
                </button>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mx-0.5" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-500/20 text-brand-500 dark:text-brand-400">
                  LAYER {steps[activeStep].num} OF 05
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {steps[activeStep].tech}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              {/* Design patterns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {steps[activeStep].patterns.map((pattern, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{pattern}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Code Flow / Mini Schematic */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                <span>Architecture Execution Flow</span>
                <span className="text-emerald-400">● 200 OK</span>
              </div>
              
              <div className="space-y-2 text-slate-400">
                <div className="text-slate-500">// Execution path for Layer {steps[activeStep].num}</div>
                <div className="text-brand-400 font-semibold">{steps[activeStep].tech}</div>
                <div className="pl-3 border-l-2 border-slate-800 space-y-1">
                  <div>↳ Request / Event Received</div>
                  <div>↳ Payload Validation & Auth Guard</div>
                  <div>↳ Business Rule Execution</div>
                  <div>↳ SQL Execution & Integrity Check</div>
                  <div className="text-emerald-400">↳ State Synchronized (100% Fidelity)</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Engineering Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-brand-500" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Separation of Concerns</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Decoupling UI layers from backend services allows independent testing, reusable React components, and zero business logic pollution on the frontend.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-5 h-5 text-accent-500" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Zero-Downtime Data Integrity</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Automated schema validation and incremental data migration scripts ensure multi-tenant enterprise upgrades execute with 100% data fidelity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-5 h-5 text-purple-500" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Strict Input & Error Handling</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Parameterized queries protect against SQL injection, while structured exception controllers provide clear, safe error responses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
