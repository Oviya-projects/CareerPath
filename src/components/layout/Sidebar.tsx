import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Layers,
  Sparkles,
  BarChart2,
  GitPullRequest,
  BookOpen,
  Award,
  FolderGit2,
  FileCheck2,
  Briefcase,
  Building2,
  Bookmark,
  User,
  Settings,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { PageView } from '../../types';

export const Sidebar: React.FC = () => {
  const { currentView, navigate, selectedDomain, selectedRole, savedItems, skillGapResult } = useApp();

  const navSections: {
    title: string;
    items: {
      id: PageView;
      label: string;
      icon: React.ElementType;
      badge?: string | number;
    }[];
  }[] = [
    {
      title: 'OVERVIEW',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'domains', label: 'Career Domains', icon: Layers },
        { id: 'recommendations', label: 'Career Match', icon: Sparkles },
      ],
    },
    {
      title: 'SKILLS & ROADMAP',
      items: [
        { id: 'skill-gap', label: 'Skill Gap Analysis', icon: BarChart2, badge: `${skillGapResult.matchPercentage}%` },
        { id: 'roadmap', label: 'Career Roadmap', icon: GitPullRequest },
      ],
    },
    {
      title: 'LEARNING & PORTFOLIO',
      items: [
        { id: 'resources', label: 'Learning Resources', icon: BookOpen },
        { id: 'certifications', label: 'Free Certifications', icon: Award },
        { id: 'projects', label: 'Portfolio Projects', icon: FolderGit2 },
        { id: 'resume-builder', label: 'Resume Builder', icon: FileCheck2 },
      ],
    },
    {
      title: 'OPPORTUNITIES',
      items: [
        { id: 'internships', label: 'Internships', icon: Briefcase },
        { id: 'jobs', label: 'Jobs', icon: Building2 },
        { id: 'saved', label: 'Saved Items', icon: Bookmark, badge: savedItems.length > 0 ? savedItems.length : undefined },
      ],
    },
    {
      title: 'ACCOUNT',
      items: [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
      ],
    },
  ];

  return (
    <aside className="hidden xl:flex flex-col w-64 bg-white border-r border-slate-200 shrink-0 min-h-[calc(100vh-4rem)] p-4">
      {/* Current Career Target Mini Card */}
      <div className="mb-6 p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100">
        <div className="flex items-center justify-between text-[11px] font-bold text-blue-700 uppercase tracking-wider">
          <span>Target Career</span>
          <span className="flex items-center text-emerald-600 font-semibold">
            <TrendingUp className="w-3 h-3 mr-1" />
            {skillGapResult.matchPercentage}% Fit
          </span>
        </div>
        <p className="text-sm font-extrabold text-slate-900 mt-1">{selectedRole.name}</p>
        <p className="text-xs text-slate-500 truncate">{selectedDomain.name}</p>
        <button
          id="sidebar-change-career-btn"
          onClick={() => navigate('domains')}
          className="mt-2.5 inline-flex items-center text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition"
        >
          Change Role <ArrowRight className="w-3 h-3 ml-1" />
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 space-y-6 overflow-y-auto pr-1">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    id={`sidebar-nav-${item.id}`}
                    onClick={() => navigate(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
