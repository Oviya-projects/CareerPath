import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREER_DOMAINS, CAREER_ROLES } from '../data/careerData';
import { DomainIcon } from '../components/common/DomainIcon';
import {
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export const CareerDomainsPage: React.FC = () => {
  const { setSelectedDomainId, navigate, selectedDomain } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Data & AI', 'Software & Cloud', 'Design & Product', 'Security & Ops'];

  const filteredDomains = CAREER_DOMAINS.filter((domain) => {
    const matchesSearch =
      domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeCategory === 'All') return matchesSearch;
    if (activeCategory === 'Data & AI') {
      return matchesSearch && (domain.id.includes('data') || domain.id.includes('ai') || domain.id.includes('machine'));
    }
    if (activeCategory === 'Software & Cloud') {
      return (
        matchesSearch &&
        (domain.id.includes('software') ||
          domain.id.includes('web') ||
          domain.id.includes('mobile') ||
          domain.id.includes('cloud') ||
          domain.id.includes('devops'))
      );
    }
    if (activeCategory === 'Design & Product') {
      return matchesSearch && (domain.id.includes('ui-ux') || domain.id.includes('product') || domain.id.includes('game'));
    }
    if (activeCategory === 'Security & Ops') {
      return (
        matchesSearch &&
        (domain.id.includes('cyber') || domain.id.includes('blockchain') || domain.id.includes('qa') || domain.id.includes('iot'))
      );
    }
    return matchesSearch;
  });

  const handleSelectDomain = (domainId: string) => {
    setSelectedDomainId(domainId);
    navigate('roles');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 mb-2 block">
            Industry Taxonomy
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore 15 Career Domains
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Select an industry sector to inspect specialized roles, compensation benchmarks, skill requirements, and custom roadmaps.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="domains-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search domains by keyword (e.g. AI, Cloud, Cybersecurity)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Domains Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDomains.map((domain) => {
          const isCurrentActive = selectedDomain.id === domain.id;
          const rolesForDomain = CAREER_ROLES.filter((r) => r.domainId === domain.id);

          return (
            <div
              key={domain.id}
              id={`career-domain-card-${domain.id}`}
              className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                isCurrentActive
                  ? 'border-blue-600 shadow-md ring-2 ring-blue-600/20'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl">
                    <DomainIcon iconName={domain.iconName} size={24} />
                  </div>
                  <div className="flex items-center space-x-1.5">
                    {isCurrentActive && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        Current Focus
                      </span>
                    )}
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {domain.rolesCount} Roles
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-slate-900">{domain.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {domain.description}
                </p>

                {/* Sample Roles Badges */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Sample Roles</p>
                  <div className="flex flex-wrap gap-1">
                    {rolesForDomain.slice(0, 3).map((r) => (
                      <span
                        key={r.id}
                        className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {r.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`select-domain-btn-${domain.id}`}
                  onClick={() => handleSelectDomain(domain.id)}
                  className="w-full py-2.5 px-4 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center space-x-1.5"
                >
                  <span>Explore Roles & Roadmaps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
