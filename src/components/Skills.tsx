import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Check 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Verified Skills', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', label: 'Database & Migration', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools & Methodologies', icon: <Wrench className="w-4 h-4" /> }
  ];

  // Grouped skills mapping strictly from Resume
  const categoryDetails = {
    frontend: {
      title: "Frontend Engineering",
      subtitle: "Component architecture, dynamic state synchronization, and enterprise UX",
      items: portfolioData.skills.frontend,
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      accent: "from-emerald-500 to-teal-500"
    },
    backend: {
      title: "Backend & Microservices",
      subtitle: "Java Spring Boot architectures, secure RESTful APIs, and business workflows",
      items: portfolioData.skills.backend,
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      accent: "from-blue-500 to-indigo-500"
    },
    database: {
      title: "Database & Migration",
      subtitle: "SQL schema optimization, zero-downtime data validation and comparison",
      items: portfolioData.skills.database,
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      accent: "from-amber-500 to-orange-500"
    },
    tools: {
      title: "Tools & Methodologies",
      subtitle: "Archibus/Eptura IWMS ecosystem, Agile SDLC, Git, and automated testing",
      items: portfolioData.skills.tools,
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      accent: "from-purple-500 to-pink-500"
    }
  };

  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return Object.entries(categoryDetails);
    }
    return Object.entries(categoryDetails).filter(([key]) => key === activeTab);
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Enterprise Technical Skills
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Directly from verified enterprise production experience across Archibus, React.js, and Java Spring Boot.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFilteredCategories().map(([key, category]) => (
            <div
              key={key}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-lg border ${category.badgeColor}`}>
                    {category.items.length} Skills
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {category.items.map((skill, idx: number) => (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 ${
                        skill.highlight
                          ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-white border border-slate-700 shadow-sm font-semibold'
                          : 'bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50 hover:border-brand-500/50'
                      }`}
                    >
                      <Check className={`w-3.5 h-3.5 ${skill.highlight ? 'text-brand-400' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Enterprise Verified</span>
                <span className="text-brand-600 dark:text-brand-400 font-semibold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            * All listed technologies reflect hands-on experience verified across 4+ years of professional enterprise delivery.
          </p>
        </div>

      </div>
    </section>
  );
};
