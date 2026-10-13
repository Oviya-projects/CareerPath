import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JOBS_DATA, CAREER_DOMAINS } from '../data/careerData';
import {
  Building2,
  Search,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  CheckCircle2,
  Filter,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export const JobsPage: React.FC = () => {
  const {
    toggleSaveItem,
    isItemSaved,
    applyToOpportunity,
    isApplied,
    selectedDomain,
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState('all');

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesExp =
      experienceFilter === 'All' || job.experience.toLowerCase().includes(experienceFilter.toLowerCase());

    const matchesDomain =
      selectedDomainFilter === 'all' || job.domainId === selectedDomainFilter;

    return matchesSearch && matchesExp && matchesDomain;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Graduate & Entry-Level</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Full-Time Career Opportunities
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curated entry-level and associate benchmark roles (0-2 yrs) with authentic corporate career portal pathways.
            </p>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <span>ℹ Curated Benchmarks (Not Live Vacancy Feeds)</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="jobs-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jobs by title, company, or tech stack..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white"
            >
              <option value="All">All Experience</option>
              <option value="Entry Level">Entry Level (0-1 yrs)</option>
              <option value="Associate">Associate (1-2 yrs)</option>
              <option value="Junior">Junior (0-2 yrs)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => {
          const saved = isItemSaved(job.id);
          const applied = isApplied(job.id);

          return (
            <div
              key={job.id}
              id={`job-card-${job.id}`}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                      {job.logoText}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">{job.title}</h3>
                      <p className="text-xs text-slate-500">{job.company}</p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      toggleSaveItem('job', {
                        id: job.id,
                        title: job.title,
                        subtitle: `${job.company} • ${job.salary}`,
                      })
                    }
                    className={`p-1.5 rounded-lg border transition ${
                      saved
                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                        : 'border-slate-200 text-slate-400 hover:text-slate-600'
                    }`}
                    title={saved ? 'Remove Bookmark' : 'Save Bookmark'}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                    <span>Experience: {job.experience}</span>
                  </div>
                  <div className="flex items-center text-blue-700 font-extrabold">
                    <DollarSign className="w-3.5 h-3.5 mr-1.5 text-blue-600 shrink-0" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Benchmark status and portal link */}
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    Benchmark Profile
                  </span>
                  {job.careerPortalUrl && (
                    <a
                      href={job.careerPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                    >
                      Company Portal ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">
                  {job.postedDate}
                </span>

                <button
                  id={`apply-job-${job.id}`}
                  onClick={() => applyToOpportunity(job.id, job.title, job.company)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                    applied
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm'
                  }`}
                  title="Track application in your local CareerPath portfolio"
                >
                  {applied ? 'Application Sent ✓' : 'Simulate Apply'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
