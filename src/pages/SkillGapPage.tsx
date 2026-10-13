import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CircularProgress } from '../components/common/CircularProgress';
import { SkillLevel } from '../types';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Plus,
  BookOpen,
  Filter,
  BarChart3,
  Layers,
} from 'lucide-react';

export const SkillGapPage: React.FC = () => {
  const {
    selectedRole,
    selectedDomain,
    skillGapResult,
    updateUserSkill,
    addCustomSkill,
    navigate,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'matching' | 'gaps'>('all');
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<SkillLevel>('Intermediate');
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);

  const displayedSkills = skillGapResult.allBreakdown.filter((item) => {
    if (activeTab === 'matching') return item.status === 'Completed';
    if (activeTab === 'gaps') return item.status === 'In Progress' || item.status === 'Missing';
    return true;
  });

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    addCustomSkill(newSkillName.trim(), newSkillLevel);
    setNewSkillName('');
    setShowAddSkillModal(false);
    showToast('Skill Added', `${newSkillName} added to your profile!`, 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Benchmark Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Skill Gap Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Targeting: <strong className="text-slate-900">{selectedRole.name}</strong> in{' '}
            <span className="text-blue-600 font-semibold">{selectedDomain.name}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="skill-gap-change-role-btn"
            onClick={() => navigate('roles')}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Switch Role
          </button>
          <button
            id="skill-gap-add-skill-modal-btn"
            onClick={() => setShowAddSkillModal(true)}
            className="px-4 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 shadow-sm transition flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Skill</span>
          </button>
        </div>
      </div>

      {/* Top Section: Alignment Gauge (Matching Stitch Image 9) & Priority Action */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alignment Gauge Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
              Overall Alignment
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {skillGapResult.matchScoreLabel}
            </span>
          </div>

          <div className="my-3">
            <CircularProgress
              percentage={skillGapResult.matchPercentage}
              sublabel="Match Score"
              color="#10B981"
              size={150}
              strokeWidth={14}
            />
          </div>

          <p className="text-xs text-slate-500">
            {skillGapResult.matchingSkills.length} of {skillGapResult.allBreakdown.length} competencies fully verified
          </p>
        </div>

        {/* Priority Focus Card (Matching Stitch Image 9) */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 text-blue-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Priority Focus Area</span>
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-400/30">
                Score Potential: {skillGapResult.priorityFocusSkill?.targetScore || 95}%
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Focus on {skillGapResult.priorityFocusSkill?.name || 'SQL & Query Optimization'}
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6">
              {skillGapResult.priorityFocusSkill?.description ||
                `Closing your skill gap will significantly boost your profile competitiveness for ${selectedRole.name} roles.`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              id="skill-gap-explore-courses-btn"
              onClick={() => navigate('resources')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-blue-900 font-extrabold text-xs hover:bg-blue-50 shadow-md transition flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Explore Verified Learning Resources</span>
            </button>
            <button
              id="skill-gap-view-certifications-btn"
              onClick={() => navigate('certifications')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-xs border border-blue-700 transition flex items-center justify-center space-x-2"
            >
              <span>View Free Certifications</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <button
              id="tab-all-skills"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Skills ({skillGapResult.allBreakdown.length})
            </button>
            <button
              id="tab-matching-skills"
              onClick={() => setActiveTab('matching')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'matching'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Matching ({skillGapResult.matchingSkills.length})
            </button>
            <button
              id="tab-gaps-skills"
              onClick={() => setActiveTab('gaps')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'gaps'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Gaps / In Progress ({skillGapResult.inProgressSkills.length + skillGapResult.missingSkills.length})
            </button>
          </div>

          <span className="hidden sm:inline-block text-xs text-slate-400">
            Click any level to update your score live
          </span>
        </div>

        {/* Skills Matrix Interactive Cards */}
        <div className="space-y-4">
          {displayedSkills.map((item) => {
            let statusBadge = (
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                Missing
              </span>
            );
            if (item.status === 'Completed') {
              statusBadge = (
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Proficient
                </span>
              );
            } else if (item.status === 'In Progress') {
              statusBadge = (
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                  In Progress
                </span>
              );
            }

            return (
              <div
                key={item.name}
                id={`skill-row-${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <h3 className="text-sm font-extrabold text-slate-900">{item.name}</h3>
                    <span className="text-xs text-slate-400 font-medium">({item.category})</span>
                    {statusBadge}
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-slate-500 mt-1">
                    <span>Required Level: <strong className="text-slate-700">{item.requiredLevel}</strong></span>
                    <span>•</span>
                    <span>Importance: <strong className="text-slate-700">{item.importance}</strong></span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 w-full max-w-md bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.status === 'Completed'
                          ? 'bg-emerald-500'
                          : item.status === 'In Progress'
                          ? 'bg-blue-600'
                          : 'bg-slate-300'
                      }`}
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Real-Time Interactive Level Selector */}
                <div className="shrink-0 flex flex-col items-start md:items-end">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">
                    Your Current Proficiency
                  </span>
                  <div className="grid grid-cols-4 gap-1 w-full sm:w-auto">
                    {(['None', 'Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => updateUserSkill(item.name, lvl)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition ${
                          item.userLevel === lvl
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Custom Skill Modal */}
      {showAddSkillModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl">
            <h2 className="text-lg font-extrabold text-slate-900 mb-1">Add Custom Skill</h2>
            <p className="text-xs text-slate-500 mb-6">Add any additional technical or domain skill you possess.</p>

            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="e.g. Snowflake, PyTorch, Figma, Docker..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Proficiency Level
                </label>
                <select
                  value={newSkillLevel}
                  onChange={(e) => setNewSkillLevel(e.target.value as SkillLevel)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium bg-white"
                >
                  <option value="Beginner">Beginner (Basics / Coursework)</option>
                  <option value="Intermediate">Intermediate (Project Experience)</option>
                  <option value="Advanced">Advanced (Production / Capstone)</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddSkillModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
