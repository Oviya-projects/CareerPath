import React from 'react';
import { useApp } from '../context/AppContext';
import { CAREER_DOMAINS } from '../data/careerData';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Briefcase,
  CheckCircle2,
  GitBranch,
  BarChart2,
  Sparkles,
  BookOpen,
  Award,
  Layers,
} from 'lucide-react';

export const RoleDetailsPage: React.FC = () => {
  const {
    selectedRole,
    selectedDomain,
    setSelectedRoleId,
    navigate,
    showToast,
    user,
  } = useApp();

  const isCurrentTarget = user.selectedRoleId === selectedRole.id;

  const handleSetTarget = () => {
    setSelectedRoleId(selectedRole.id);
    showToast('Target Goal Set!', `Active target career set to ${selectedRole.name}.`, 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Back button & Breadcrumbs */}
      <div className="flex items-center space-x-3">
        <button
          id="role-details-back-btn"
          onClick={() => navigate('roles')}
          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs text-slate-500">
          Domains › {selectedDomain.name} › <strong className="text-slate-800">{selectedRole.name}</strong>
        </span>
      </div>

      {/* Main Role Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                {selectedDomain.name}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {selectedRole.demandLevel} Demand
              </span>
              {selectedRole.onetCode && (
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200" title="O*NET Standard Occupational Classification">
                  O*NET {selectedRole.onetCode}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {selectedRole.name}
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {selectedRole.longDescription || selectedRole.shortDescription || selectedRole.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            {isCurrentTarget ? (
              <div className="px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Current Active Target</span>
              </div>
            ) : (
              <button
                id="role-details-set-target-btn"
                onClick={handleSetTarget}
                className="px-6 py-3 rounded-2xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 shadow-md transition flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Set as My Target Goal</span>
              </button>
            )}

            <button
              id="role-details-analyze-gap-btn"
              onClick={() => {
                setSelectedRoleId(selectedRole.id);
                navigate('skill-gap');
              }}
              className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center justify-center space-x-2"
            >
              <BarChart2 className="w-4 h-4 text-blue-600" />
              <span>Benchmark My Skill Gap</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400">Entry Salary</p>
            <p className="text-base font-extrabold text-slate-900 mt-0.5">{selectedRole.salaryRange}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">U.S. National Avg.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400">Experience Needed</p>
            <p className="text-base font-extrabold text-slate-900 mt-0.5">{selectedRole.experienceLevel}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">0-2 yrs / Internships</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400">Core Competencies</p>
            <p className="text-base font-extrabold text-slate-900 mt-0.5">{selectedRole.requiredSkills.length} Verified Skills</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Benchmarked</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-400">Learning Roadmap</p>
            <p className="text-base font-extrabold text-blue-600 mt-0.5">5 Step Milestones</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Curated Trajectory</p>
          </div>
        </div>
      </div>

      {/* Two Columns: Responsibilities & Required Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Responsibilities */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Day-in-the-Life Responsibilities</span>
          </div>

          <div className="space-y-3">
            {selectedRole.responsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{resp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Technical & Soft Skills */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Skill Matrix & Required Proficiency</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {selectedRole.requiredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-900">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium">({skill.category})</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Importance: <strong className="text-slate-700">{skill.importance}</strong>
                  </span>
                </div>

                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                  {skill.requiredLevel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Callout to Roadmap & Free Resources */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold">Ready to start mastering {selectedRole.name}?</h2>
          <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-xl">
            Follow our verified milestone roadmap, enroll in free verified certifications, and complete portfolio projects.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            id="role-details-start-roadmap-btn"
            onClick={() => {
              setSelectedRoleId(selectedRole.id);
              navigate('roadmap');
            }}
            className="px-5 py-3 rounded-2xl bg-white text-blue-900 font-extrabold text-xs hover:bg-blue-50 shadow-md transition flex items-center space-x-1.5"
          >
            <GitBranch className="w-4 h-4 text-blue-600" />
            <span>Open Learning Roadmap</span>
          </button>
        </div>
      </div>
    </div>
  );
};
