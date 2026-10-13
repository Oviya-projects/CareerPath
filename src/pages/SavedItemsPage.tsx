import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Bookmark,
  Trash2,
  ExternalLink,
  Briefcase,
  Award,
  FolderGit2,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SavedItem } from '../types';

export const SavedItemsPage: React.FC = () => {
  const { savedItems, toggleSaveItem, navigate } = useApp();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredItems = savedItems.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'opportunities') return item.type === 'job' || item.type === 'internship';
    return item.type === filterType;
  });

  const getIconForType = (type: SavedItem['type']) => {
    switch (type) {
      case 'job':
      case 'internship':
        return <Briefcase className="w-4 h-4 text-blue-600" />;
      case 'certification':
        return <Award className="w-4 h-4 text-amber-600" />;
      case 'project':
        return <FolderGit2 className="w-4 h-4 text-purple-600" />;
      case 'resource':
        return <BookOpen className="w-4 h-4 text-emerald-600" />;
      default:
        return <Bookmark className="w-4 h-4 text-blue-600" />;
    }
  };

  const handleNavigateToType = (type: SavedItem['type']) => {
    switch (type) {
      case 'job':
        navigate('jobs');
        break;
      case 'internship':
        navigate('internships');
        break;
      case 'certification':
        navigate('certifications');
        break;
      case 'project':
        navigate('projects');
        break;
      case 'resource':
        navigate('resources');
        break;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Personal Bookmarks</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Saved Collection ({savedItems.length})
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Your bookmarked jobs, internships, certifications, and portfolio projects in one place.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Saved' },
              { id: 'opportunities', label: 'Jobs & Internships' },
              { id: 'certification', label: 'Certifications' },
              { id: 'project', label: 'Projects' },
              { id: 'resource', label: 'Resources' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  filterType === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Saved Items List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">No saved items found</h3>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Bookmark certifications, jobs, and projects to keep track of your career targets.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate('certifications')}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-blue-700"
            >
              Explore Certifications
            </button>
            <button
              onClick={() => navigate('jobs')}
              className="px-4 py-2 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-200"
            >
              Explore Jobs
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-slate-100">
                      {getIconForType(item.type)}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      toggleSaveItem(item.type, {
                        id: item.itemId,
                        title: item.title,
                        subtitle: item.subtitle,
                      })
                    }
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-sm font-extrabold text-slate-900 line-clamp-2">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.subtitle}</p>
                <p className="text-[10px] text-slate-400 mt-2">Saved {item.savedAt}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleNavigateToType(item.type)}
                  className="w-full py-2 px-3 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-1"
                >
                  <span>View in {item.type}s</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
