import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  FileDown, 
  Send, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [subject, setSubject] = useState('Senior Full Stack Developer Opportunity');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Initiate Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Discuss Enterprise Solutions
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Available for Senior Full Stack, Lead Developer, and Enterprise IWMS modernization opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-500" />
                  Primary Email
                </span>
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                  className="text-xs font-mono text-slate-500 hover:text-brand-500 flex items-center gap-1 transition-colors"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-500" />
                      <span className="text-brand-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 break-all transition-colors"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-500" />
                  Direct Phone
                </span>
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                  className="text-xs font-mono text-slate-500 hover:text-brand-500 flex items-center gap-1 transition-colors"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-500" />
                      <span className="text-brand-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a 
                href={`tel:${portfolioData.personal.phone}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>

            {/* Location & Social */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                Current Location
              </span>
              <p className="text-base font-bold text-slate-900 dark:text-white mb-4">
                {portfolioData.personal.location}
              </p>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Public Repositories</span>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Download Resume Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg">
              <h4 className="text-base font-bold mb-1">Need a Copy of the Resume?</h4>
              <p className="text-xs text-brand-100 mb-4">
                Download the verified enterprise PDF directly to review full credentials and background.
              </p>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Patta_Naga_Bhushana_Rao_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white text-brand-900 hover:bg-brand-50 transition-colors"
              >
                <FileDown className="w-4 h-4 text-brand-600" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Direct Email Form Card */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-500" />
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Clicking send will open your default email client with your message pre-formatted directly to Patta Naga Bhushana Rao.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                  Discussion Topic / Role
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    'Senior Full Stack Opportunity',
                    'Archibus / IWMS Modernization',
                    'Technical Interview Request'
                  ].map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSubject(topic)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                        subject === topic
                          ? 'bg-brand-500 text-white border-brand-500'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-brand-500/50'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Subject line"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                  Message / Invitation Details
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Naga, we reviewed your enterprise background in React and Spring Boot and would like to connect..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-600/30 hover:shadow-brand-600/50 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
