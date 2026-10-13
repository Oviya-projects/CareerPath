import React from 'react';
import { useApp } from '../../context/AppContext';
import { LayoutGrid, Compass, Map, FileText, User } from 'lucide-react';
import { PageView } from '../../types';

export const BottomNav: React.FC = () => {
  const { currentView, navigate, isLoggedIn } = useApp();

  const isPublicPage = currentView === 'landing' || currentView === 'login' || currentView === 'signup';

  if (!isLoggedIn && isPublicPage) {
    return (
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 py-2 px-6 flex justify-around items-center shadow-lg">
        <button
          id="public-mobile-nav-home"
          onClick={() => navigate('landing')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition ${
            currentView === 'landing' ? 'text-blue-600 font-bold' : 'text-slate-500'
          }`}
        >
          <LayoutGrid className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Home</span>
        </button>
        <button
          id="public-mobile-nav-explore"
          onClick={() => navigate('domains')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition ${
            currentView === 'domains' ? 'text-blue-600 font-bold' : 'text-slate-500'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Explore</span>
        </button>
        <button
          id="public-mobile-nav-login"
          onClick={() => navigate('login')}
          className="flex flex-col items-center justify-center py-1 px-3 text-slate-500 hover:text-blue-600 rounded-xl transition"
        >
          <User className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Sign In</span>
        </button>
      </nav>
    );
  }

  const isHomeActive = currentView === 'dashboard';
  const isExploreActive = currentView === 'domains' || currentView === 'roles' || currentView === 'role-details' || currentView === 'recommendations';
  const isRoadmapActive = currentView === 'roadmap' || currentView === 'skill-gap';
  const isResourcesActive = currentView === 'resources' || currentView === 'certifications' || currentView === 'projects' || currentView === 'resume-builder' || currentView === 'internships' || currentView === 'jobs' || currentView === 'saved';
  const isProfileActive = currentView === 'profile' || currentView === 'settings';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 py-1.5 px-3 flex justify-between items-center shadow-lg">
      {/* Home */}
      <button
        id="mobile-bottom-nav-home"
        onClick={() => navigate('dashboard')}
        className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all ${
          isHomeActive
            ? 'bg-blue-600 text-white font-bold shadow-sm scale-105'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <LayoutGrid className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Home</span>
      </button>

      {/* Explore */}
      <button
        id="mobile-bottom-nav-explore"
        onClick={() => navigate('domains')}
        className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all ${
          isExploreActive
            ? 'bg-blue-600 text-white font-bold shadow-sm scale-105'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <Compass className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Explore</span>
      </button>

      {/* Roadmap */}
      <button
        id="mobile-bottom-nav-roadmap"
        onClick={() => navigate('roadmap')}
        className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all ${
          isRoadmapActive
            ? 'bg-blue-600 text-white font-bold shadow-sm scale-105'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <Map className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Roadmap</span>
      </button>

      {/* Resources */}
      <button
        id="mobile-bottom-nav-resources"
        onClick={() => navigate('resources')}
        className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all ${
          isResourcesActive
            ? 'bg-blue-600 text-white font-bold shadow-sm scale-105'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <FileText className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Resources</span>
      </button>

      {/* Profile */}
      <button
        id="mobile-bottom-nav-profile"
        onClick={() => navigate('profile')}
        className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all ${
          isProfileActive
            ? 'bg-blue-600 text-white font-bold shadow-sm scale-105'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <User className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Profile</span>
      </button>
    </nav>
  );
};
