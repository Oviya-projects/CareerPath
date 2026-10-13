import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Filter,
  DollarSign,
  Briefcase,
  Layers,
} from 'lucide-react';
import { CAREER_DOMAINS } from '../data/careerData';

export const CareerRecommendationPage: React.FC = () => {
  const {
    careerRecommendations,
    setSelectedRoleId,
    setSelectedDomainId,
    navigate,
    showToast,
    selectedRole,
  } = useApp();

  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('all');

  const filteredRecommendations = careerRecommendations.filter((item) => {
    if (selectedDomainFilter === 'all') return true;
    return item.domain.id === selectedDomainFilter;
  });

  const handleSelectRole = (roleId: string, domainId: string) => {
    setSelectedRoleId(roleId);
    setSelectedDomainId(domainId);
    showToast('Goal Updated', 'Target career updated from recommendations.', 'success');
    navigate('skill-gap');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Matching Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Personalized Career Recommendations
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Calculated based on your verified skill proficiencies, academic background, and industry trajectory.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              id="recommendations-domain-filter"
              value={selectedDomainFilter}
              onChange={(e) => setSelectedDomainFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">All Domains</option>
              {CAREER_DOMAINS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top 3 High-Alignment Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRecommendations.slice(0, 3).map((item, index) => {
          const isTarget = selectedRole.id === item.role.id;
          return (
            <div
              key={item.role.id}
              className={`rounded-3xl p-6 border transition flex flex-col justify-between ${
                index === 0
                  ? 'bg-gradient-to-b from-blue-50/80 via-white to-white border-blue-300 shadow-md ring-2 ring-blue-600/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.domain.name}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
                    <span>{item.matchPercentage}% Fit</span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mt-1">{item.role.name}</h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">{item.role.avgSalary || item.role.salaryRange}</p>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {item.reason}
                </p>

                {/* Matched Skills */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">
                    Matching Strengths ({item.matchingSkillsCount}/{item.totalSkillsCount})
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(item.topMatchingSkills || []).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => handleSelectRole(item.role.id, item.domain.id)}
                  className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-1.5 ${
                    isTarget
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm'
                  }`}
                >
                  <span>{isTarget ? 'Active Target Goal ✓' : 'Set as Target & Benchmark'}</span>
                  {!isTarget && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Complete Recommendations List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900 mb-4">
          All Ranked Matches ({filteredRecommendations.length} Roles)
        </h2>

        <div className="divide-y divide-slate-100">
          {filteredRecommendations.map((item) => {
            const isTarget = selectedRole.id === item.role.id;
            return (
              <div
                key={item.role.id}
                className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 px-2 rounded-2xl transition"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-extrabold text-slate-900">{item.role.name}</h3>
                    <span className="text-xs text-slate-500">• {item.domain.name}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {item.role.avgSalary || item.role.salaryRange}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-1">{item.reason}</p>

                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Top Skills:</span>
                    {(item.topMatchingSkills || []).slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        ✓ {s}
                      </span>
                    ))}
                    {(item.missingSkills || []).slice(0, 2).map((s) => (
                      <span key={s} className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        + {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 shrink-0">
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-slate-900">{item.matchPercentage}%</p>
                    <p className="text-[10px] text-slate-400 font-medium">Match Fit</p>
                  </div>

                  <button
                    onClick={() => handleSelectRole(item.role.id, item.domain.id)}
                    className="px-4 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-bold rounded-xl transition"
                  >
                    Select Role
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
