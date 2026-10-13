import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INTERNSHIPS_DATA, CAREER_DOMAINS } from '../data/careerData';
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  CheckCircle2,
  Filter,
  Building,
  Sparkles,
} from 'lucide-react';

export const InternshipsPage: React.FC = () => {
  const {
    toggleSaveItem,
    isItemSaved,
    applyToOpportunity,
    isApplied,
    selectedDomain,
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [locationType, setLocationType] = useState('All');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState('all');

  const filteredInternships = INTERNSHIPS_DATA.filter((item) => {
    const matchesSearch =
      item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLocation =
      locationType === 'All' || item.location.toLowerCase().includes(locationType.toLowerCase());

    const matchesDomain =
      selectedDomainFilter === 'all' || item.domainId === selectedDomainFilter;

    return matchesSearch && matchesLocation && matchesDomain;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Campus & Early Career</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Internships
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curated benchmark internship roles for salary planning and application practice. Direct links connect to official corporate graduate recruitment portals.
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
              id="internships-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search internships by title, company, or tech..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white"
            >
              <option value="All">All Work Modes</option>
              <option value="Remote">Remote Only</option>
              <option value="Hybrid">Hybrid</option>
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
              <option value="Seattle">Seattle</option>
            </select>
          </div>
        </div>
      </div>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInternships.map((item) => {
          const saved = isItemSaved(item.id);
          const applied = isApplied(item.id);

          return (
            <div
              key={item.id}
              id={`internship-card-${item.id}`}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 font-extrabold flex items-center justify-center text-sm border border-blue-200 shadow-sm">
                      {item.logoText}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">{item.role}</h3>
                      <p className="text-xs text-slate-500">{item.company}</p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      toggleSaveItem('internship', {
                        id: item.id,
                        title: item.role,
                        subtitle: `${item.company} • ${item.stipend}`,
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
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                    <span>Duration: {item.duration}</span>
                  </div>
                  <div className="flex items-center text-emerald-700 font-bold">
                    <DollarSign className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" />
                    <span>{item.stipend}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                  {item.skills.map((s) => (
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
                  {item.careerPortalUrl && (
                    <a
                      href={item.careerPortalUrl}
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
                  {item.deadline}
                </span>

                <button
                  id={`apply-internship-${item.id}`}
                  onClick={() => applyToOpportunity(item.id, item.role, item.company)}
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
