import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREER_DOMAINS, CAREER_ROLES } from '../data/careerData';
import {
  Search,
  ArrowRight,
  Target,
  DollarSign,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';

export const CareerRolesPage: React.FC = () => {
  const {
    selectedDomain,
    setSelectedDomainId,
    selectedRole,
    setSelectedRoleId,
    navigate,
    showToast,
  } = useApp();

  const [filterDomainId, setFilterDomainId] = useState<string>(selectedDomain.id);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const rolesToDisplay = CAREER_ROLES.filter((role) => {
    const matchesDomain = filterDomainId === 'all' || role.domainId === filterDomainId;
    const matchesSearch =
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.requiredSkills.some((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  const handleSelectRole = (roleId: string) => {
    setSelectedRoleId(roleId);
    navigate('role-details');
  };

  const handleSetAsTarget = (roleId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRoleId(roleId);
    showToast('Target Career Set', 'Your dashboard and skill benchmarks have updated.', 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Career Catalog</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Job-Ready Career Roles
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Showing roles tailored for fresh graduates & junior professionals with market compensation data.
            </p>
          </div>

          <button
            id="roles-view-domains-btn"
            onClick={() => navigate('domains')}
            className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            ← All Domains
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="roles-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search roles by title or skill (e.g. SQL, React, AWS)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          <div>
            <select
              id="roles-domain-filter-select"
              value={filterDomainId}
              onChange={(e) => {
                setFilterDomainId(e.target.value);
                if (e.target.value !== 'all') {
                  setSelectedDomainId(e.target.value);
                }
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-semibold text-slate-700 bg-white"
            >
              <option value="all">All 15 Career Domains</option>
              {CAREER_DOMAINS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rolesToDisplay.map((role) => {
          const isTarget = selectedRole.id === role.id;
          const domainObj = CAREER_DOMAINS.find((d) => d.id === role.domainId);

          return (
            <div
              key={role.id}
              id={`role-card-${role.id}`}
              onClick={() => handleSelectRole(role.id)}
              className={`bg-white rounded-3xl p-6 border transition cursor-pointer flex flex-col justify-between ${
                isTarget
                  ? 'border-blue-600 shadow-md ring-2 ring-blue-600/20'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {domainObj?.name || 'Tech'}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {role.avgSalary}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900">{role.name}</h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">{role.tagline || role.description}</p>

                {/* Demand & Experience */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Growth: <strong className="text-slate-700">{role.jobGrowth}</strong></span>
                  <span className="flex items-center text-blue-600 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 mr-1" />
                    {role.demandLevel} Demand
                  </span>
                </div>

                {/* Core skills preview */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {(role.requiredSkills || []).slice(0, 4).map((s) => (
                    <span
                      key={s.name}
                      className="text-[10px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                    >
                      {s.name}
                    </span>
                  ))}
                  {(role.requiredSkills || []).length > 4 && (
                    <span className="text-[10px] font-medium text-slate-400 px-1 py-0.5">
                      +{(role.requiredSkills || []).length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  id={`view-details-${role.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectRole(role.id);
                  }}
                  className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
                >
                  View Details
                </button>

                {isTarget ? (
                  <span className="py-2 px-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Target Set
                  </span>
                ) : (
                  <button
                    id={`set-target-${role.id}`}
                    onClick={(e) => handleSetAsTarget(role.id, e)}
                    className="py-2 px-3 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition"
                  >
                    Set as Goal
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
