import React from 'react';
import { useApp } from '../context/AppContext';
import { CircularProgress } from '../components/common/CircularProgress';
import {
  ArrowRight,
  TrendingUp,
  Award,
  GitPullRequest,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  AlertCircle,
  FolderGit2,
} from 'lucide-react';
import { INTERNSHIPS_DATA, JOBS_DATA } from '../data/careerData';

export const DashboardPage: React.FC = () => {
  const {
    user,
    selectedDomain,
    selectedRole,
    skillGapResult,
    milestones,
    roadmapProgressPercent,
    navigate,
    applyToOpportunity,
    isApplied,
  } = useApp();

  const currentMilestone = milestones.find(m => m.status === 'in_progress') || milestones[0];
  const activeSkillsCount = user.currentSkills.filter(s => s.level !== 'None').length;

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner / Student Greeting */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
            <span>{user.education.college}</span>
            <span>•</span>
            <span>{user.education.currentYear}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-1.5 flex-wrap">
            <span>Targeting:</span>
            <strong className="text-slate-900 font-bold">{selectedRole.name}</strong>
            <span className="text-slate-400">in</span>
            <span className="text-blue-600 font-semibold">{selectedDomain.name}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="dashboard-change-role-btn"
            onClick={() => navigate('domains')}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Change Goal
          </button>
          <button
            id="dashboard-view-recommendations-btn"
            onClick={() => navigate('recommendations')}
            className="px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-sm transition flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Career Match</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Gauge Score + Current Milestone + Skill Gap Priority */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Readiness Score Gauge (Matching Stitch Image 5) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-between text-center">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
              Career Readiness
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              {skillGapResult.matchScoreLabel}
            </span>
          </div>

          <div className="my-2">
            <CircularProgress
              percentage={skillGapResult.matchPercentage}
              sublabel="Market Fit"
              color="#10B981"
              size={150}
              strokeWidth={14}
            />
          </div>

          <div className="w-full mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              Target: <strong className="text-slate-800">{selectedRole.name}</strong>
            </span>
            <button
              id="dashboard-inspect-gap-btn"
              onClick={() => navigate('skill-gap')}
              className="text-blue-600 font-bold hover:underline inline-flex items-center"
            >
              Analyze Gap <ArrowRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Card 2: Current Roadmap Milestone */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">
                Active Milestone
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {roadmapProgressPercent}% Total Progress
              </span>
            </div>

            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 mt-0.5">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {currentMilestone?.title || 'Foundations & Tooling'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentMilestone?.durationLabel || currentMilestone?.duration || currentMilestone?.subtitle || '2-3 Weeks'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 line-clamp-2 mb-4">
              {currentMilestone?.description}
            </p>

            {/* Checklist preview */}
            <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              {(currentMilestone?.tasks || currentMilestone?.skills || []).slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0" />
                  <span className="truncate">{typeof item === 'string' ? item : ''}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Next step on path</span>
            <button
              id="dashboard-continue-roadmap-btn"
              onClick={() => navigate('roadmap')}
              className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center space-x-1"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 3: Priority Action / Skill ROI */}
        <div className="bg-gradient-to-br from-indigo-900 to-blue-950 text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Highest ROI Skill Focus</span>
            </div>

            <h3 className="text-lg font-extrabold text-white mb-2">
              {skillGapResult.priorityFocusSkill?.name || 'SQL & Query Optimization'}
            </h3>

            <p className="text-xs text-indigo-100 leading-relaxed mb-4">
              {skillGapResult.priorityFocusSkill?.description ||
                `Strengthen your proficiency in key tools to increase your overall market alignment.`}
            </p>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-indigo-200">Projected Fit</p>
                <p className="text-base font-extrabold text-emerald-400">
                  {skillGapResult.priorityFocusSkill?.targetScore || 95}% Match
                </p>
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-lg">
                +14% Increase
              </span>
            </div>
          </div>

          <button
            id="dashboard-focus-skill-btn"
            onClick={() => navigate('resources')}
            className="mt-6 w-full py-2.5 bg-white text-indigo-950 hover:bg-indigo-50 text-xs font-extrabold rounded-xl shadow transition flex items-center justify-center space-x-2"
          >
            <span>Access Verified Practice Resources</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Access Action Hub */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          id="hub-certifications"
          onClick={() => navigate('certifications')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition cursor-pointer flex items-center space-x-3"
        >
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-slate-900">Free Certifications</p>
            <p className="text-[11px] text-slate-500">Google, IBM, freeCodeCamp</p>
          </div>
        </div>

        <div
          id="hub-projects"
          onClick={() => navigate('projects')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition cursor-pointer flex items-center space-x-3"
        >
          <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-slate-900">Portfolio Projects</p>
            <p className="text-[11px] text-slate-500">Industry-ready capstones</p>
          </div>
        </div>

        <div
          id="hub-resume"
          onClick={() => navigate('resume-builder')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition cursor-pointer flex items-center space-x-3"
        >
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-slate-900">ATS Resume</p>
            <p className="text-[11px] text-slate-500">Instant PDF Builder</p>
          </div>
        </div>

        <div
          id="hub-internships"
          onClick={() => navigate('internships')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition cursor-pointer flex items-center space-x-3"
        >
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-slate-900">Internships</p>
            <p className="text-[11px] text-slate-500">Fresh grad postings</p>
          </div>
        </div>
      </div>

      {/* Opportunities Section: Internships & Jobs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Internship Openings */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                Top Student Internships
              </span>
            </div>
            <button
              id="dashboard-all-internships-btn"
              onClick={() => navigate('internships')}
              className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center"
            >
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>

          <div className="space-y-3">
            {INTERNSHIPS_DATA.slice(0, 3).map((item) => {
              const applied = isApplied(item.id);
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-700 font-extrabold flex items-center justify-center text-xs border border-blue-200">
                      {item.logoText}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.role}</h4>
                      <p className="text-[11px] text-slate-500">
                        {item.company} • {item.location}
                      </p>
                      <span className="inline-block text-[10px] font-semibold text-emerald-600 mt-1">
                        {item.stipend}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => applyToOpportunity(item.id, item.role, item.company)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      applied
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-[#2563EB] text-white hover:bg-blue-700'
                    }`}
                  >
                    {applied ? 'Applied ✓' : 'Apply'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Entry Level Jobs */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                Entry-Level & Associate Jobs
              </span>
            </div>
            <button
              id="dashboard-all-jobs-btn"
              onClick={() => navigate('jobs')}
              className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center"
            >
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>

          <div className="space-y-3">
            {JOBS_DATA.slice(0, 3).map((job) => {
              const applied = isApplied(job.id);
              return (
                <div
                  key={job.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white font-extrabold flex items-center justify-center text-xs">
                      {job.logoText}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{job.title}</h4>
                      <p className="text-[11px] text-slate-500">
                        {job.company} • {job.location}
                      </p>
                      <span className="inline-block text-[10px] font-semibold text-blue-600 mt-1">
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => applyToOpportunity(job.id, job.title, job.company)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      applied
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-[#2563EB] text-white hover:bg-blue-700'
                    }`}
                  >
                    {applied ? 'Applied ✓' : 'Apply'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
