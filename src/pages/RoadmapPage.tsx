import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  GitPullRequest,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  Sparkles,
} from 'lucide-react';

export const RoadmapPage: React.FC = () => {
  const {
    selectedRole,
    selectedDomain,
    milestones,
    toggleMilestone,
    roadmapProgressPercent,
    navigate,
  } = useApp();

  const [expandedId, setExpandedId] = useState<string>(
    milestones.find((m) => m.status === 'in_progress')?.id || milestones[0]?.id || ''
  );

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Structured Learning Trajectory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {selectedRole.name} Roadmap
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Complete sequential milestones designed for university semester schedules and interview cycles.
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-center space-x-4 shrink-0">
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="text-slate-700">Milestone Progress</span>
              <span className="text-blue-600 font-extrabold">{roadmapProgressPercent}%</span>
            </div>
            <div className="w-36 bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#2563EB] h-full rounded-full transition-all duration-500"
                style={{ width: `${roadmapProgressPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              {milestones.filter((m) => m.isCompleted).length} of {milestones.length} Completed
            </p>
          </div>
        </div>
      </div>

      {/* Stepped Milestones List (Matching Stitch Image 7 & 11) */}
      <div className="relative space-y-4">
        {milestones.map((milestone, idx) => {
          const isExpanded = expandedId === milestone.id;
          const isCompleted = milestone.isCompleted;
          const isInProgress = milestone.status === 'in_progress';

          return (
            <div
              key={milestone.id}
              id={`milestone-card-${milestone.id}`}
              className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                isCompleted
                  ? 'border-emerald-200 shadow-sm'
                  : isInProgress
                  ? 'border-blue-600 shadow-md ring-2 ring-blue-600/20'
                  : 'border-slate-200 opacity-90'
              }`}
            >
              {/* Header clickable row */}
              <div
                onClick={() => setExpandedId(isExpanded ? '' : milestone.id)}
                className="p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition"
              >
                <div className="flex items-start space-x-4">
                  {/* Step Number Circle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMilestone(milestone.id);
                    }}
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center font-extrabold text-sm transition shrink-0 mt-0.5 ${
                      isCompleted
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : isInProgress
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                    title={isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </button>

                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Milestone {idx + 1}
                      </span>
                      {isCompleted && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          Completed ✓
                        </span>
                      )}
                      {isInProgress && (
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">{milestone.title}</h3>
                    <p className="text-xs text-slate-500 flex items-center mt-1">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {milestone.durationLabel || milestone.duration || milestone.subtitle || '3-4 Weeks'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMilestone(milestone.id);
                    }}
                    className={`hidden sm:inline-flex px-3 py-1.5 text-xs font-bold rounded-xl transition ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isCompleted ? 'Mark as Incomplete' : 'Mark as Done'}
                  </button>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {/* Expandable Details Body */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Tasks / Skills List */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Core Action Items & Key Skills
                    </h4>
                    <div className="space-y-2">
                      {(milestone.tasks || milestone.skills || []).map((task, taskIdx) => (
                        <div
                          key={taskIdx}
                          className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-800"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${
                              isCompleted ? 'text-emerald-600' : 'text-slate-300'
                            }`}
                          />
                          <span>{typeof task === 'string' ? task : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Resources link */}
                  {milestone.recommendedResources && milestone.recommendedResources.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Recommended Free Learning Resources
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {milestone.recommendedResources.map((res, rIdx) => (
                          <button
                            key={rIdx}
                            onClick={() => navigate('resources')}
                            className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-blue-700 hover:bg-blue-50 transition"
                          >
                            <BookOpen className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                            <span>{res}</span>
                            <ArrowRight className="w-3 h-3 ml-1 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
