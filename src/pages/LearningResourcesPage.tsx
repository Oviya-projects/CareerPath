import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LEARNING_RESOURCES_DATA } from '../data/careerData';
import {
  BookOpen,
  Search,
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Video,
  FileCode,
  Globe,
  Layers,
  Sparkles,
} from 'lucide-react';

export const LearningResourcesPage: React.FC = () => {
  const { selectedDomain, selectedRole, toggleSaveItem, isItemSaved } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const types = ['All', 'Course', 'Documentation', 'Practice', 'Cheatsheet'];

  const filteredResources = LEARNING_RESOURCES_DATA.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.provider.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || res.type.toLowerCase().includes(selectedType.toLowerCase());

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Verified Open Courseware</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Learning Resources
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curated free resources, interactive sandboxes, and documentation for <strong className="text-slate-800">{selectedRole.name}</strong>.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="resources-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tutorials, platforms, or documentation (e.g. SQL, Python, Pandas)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedType === t
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => {
          const saved = isItemSaved(res.id);

          return (
            <div
              key={res.id}
              id={`resource-card-${res.id}`}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    {res.provider}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {res.type}
                    </span>
                    <button
                      onClick={() =>
                        toggleSaveItem('resource', {
                          id: res.id,
                          title: res.title,
                          subtitle: `${res.provider} • ${res.type}`,
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
                </div>

                <h3 className="text-base font-extrabold text-slate-900">{res.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Level: <strong className="text-slate-700">{res.difficulty}</strong></span>
                  <span>Est. Time: <strong className="text-slate-700">{res.duration}</strong></span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center space-x-1.5"
                >
                  <span>Start Learning Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
