import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  Compass,
  Map,
  BookOpen,
  Briefcase,
  Award,
  FileText,
  User,
  Settings,
  LogOut,
  Sparkles,
  Layers,
  BookmarkCheck,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentView,
    navigate,
    user,
    isLoggedIn,
    isDemoMode,
    logout,
    selectedDomain,
    selectedRole,
    savedItems,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const isPublicPage = currentView === 'landing' || currentView === 'login' || currentView === 'signup';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Avatar / Logo */}
          <div className="flex items-center space-x-3">
            {isLoggedIn && !isPublicPage && (
              <button
                id="header-user-avatar-btn"
                onClick={() => navigate('profile')}
                className="relative flex-shrink-0 group cursor-pointer focus:outline-none"
                title="View Profile"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-600/20 group-hover:ring-blue-600 transition"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
              </button>
            )}

            {/* Brand Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => navigate(isLoggedIn ? 'dashboard' : 'landing')}
              className="flex items-center space-x-1.5 text-left focus:outline-none group"
            >
              <span className="text-2xl font-extrabold text-[#2563EB] tracking-tight group-hover:opacity-90 transition">
                CareerPath
              </span>
            </button>

            {/* Current Path Badge (Desktop) */}
            {isLoggedIn && !isPublicPage && (
              <div className="hidden lg:flex items-center pl-4 border-l border-slate-200 text-xs">
                <button
                  id="navbar-domain-badge"
                  onClick={() => navigate('domains')}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition mr-2"
                >
                  <Layers className="w-3 h-3 mr-1" />
                  {selectedDomain.name}
                </button>
                <span className="text-slate-400 mr-2">›</span>
                <button
                  id="navbar-role-badge"
                  onClick={() => navigate('role-details')}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition"
                >
                  {selectedRole.name}
                </button>
                {isDemoMode && (
                  <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    Demo Mode
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Center Navigation Links (Desktop - for logged in) */}
          {isLoggedIn && !isPublicPage && (
            <nav className="hidden md:flex items-center space-x-1">
              <button
                id="nav-link-dashboard"
                onClick={() => navigate('dashboard')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'dashboard'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Dashboard
              </button>

              <button
                id="nav-link-domains"
                onClick={() => navigate('domains')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'domains' || currentView === 'roles' || currentView === 'role-details'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Domains
              </button>

              <button
                id="nav-link-skill-gap"
                onClick={() => navigate('skill-gap')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'skill-gap'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Skill Gap
              </button>

              <button
                id="nav-link-roadmap"
                onClick={() => navigate('roadmap')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'roadmap'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Roadmap
              </button>

              <button
                id="nav-link-resources"
                onClick={() => navigate('resources')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'resources' || currentView === 'certifications' || currentView === 'projects'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Learn
              </button>

              <button
                id="nav-link-opportunities"
                onClick={() => navigate('internships')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'internships' || currentView === 'jobs'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Jobs & Internships
              </button>

              <button
                id="nav-link-resume"
                onClick={() => navigate('resume-builder')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentView === 'resume-builder'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Resume
              </button>
            </nav>
          )}

          {/* Right Action Icons & Auth Controls */}
          <div className="flex items-center space-x-3">
            {isLoggedIn && !isPublicPage ? (
              <>
                {/* Saved Items Link */}
                <button
                  id="header-saved-btn"
                  onClick={() => navigate('saved')}
                  className="relative p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition"
                  title="Saved Opportunities"
                >
                  <BookmarkCheck className="w-5 h-5" />
                  {savedItems.length > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {savedItems.length}
                    </span>
                  )}
                </button>

                {/* Notifications Bell */}
                <div className="relative">
                  <button
                    id="header-notifications-btn"
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="relative p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition focus:outline-none"
                    title="Notifications"
                  >
                    <Bell className="w-5 h-5 text-blue-600" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
                  </button>

                  {notificationsOpen && (
                    <div
                      id="notifications-dropdown-menu"
                      className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">Notifications</span>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          2 New
                        </span>
                      </div>
                      <div className="divide-y divide-slate-50 max-h-64 overflow-y-auto">
                        <div className="p-3 hover:bg-slate-50 transition cursor-pointer" onClick={() => { setNotificationsOpen(false); navigate('skill-gap'); }}>
                          <p className="text-xs font-semibold text-slate-900">Skill Gap Action Required</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">Mastering SQL will boost your Data Analyst match score to 95%.</p>
                          <span className="text-[10px] text-blue-600 mt-1 inline-block font-medium">10 mins ago</span>
                        </div>
                        <div className="p-3 hover:bg-slate-50 transition cursor-pointer" onClick={() => { setNotificationsOpen(false); navigate('internships'); }}>
                          <p className="text-xs font-semibold text-slate-900">New Internship Posted</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">Nexus Analytics added 3 new Data Analyst Intern openings.</p>
                          <span className="text-[10px] text-slate-400 mt-1 inline-block">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile menu dropdown (Desktop) */}
                <div className="relative hidden md:block">
                  <button
                    id="header-profile-menu-btn"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center space-x-2 pl-2 pr-1 py-1 rounded-full hover:bg-slate-100 transition focus:outline-none"
                  >
                    <span className="text-xs font-bold text-slate-700">{user.name.split(' ')[0]}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {profileDropdownOpen && (
                    <div
                      id="profile-dropdown-menu"
                      className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in duration-150"
                    >
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-xs font-bold text-slate-900">{user.name}</p>
                        <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                      </div>
                      <button
                        id="dropdown-profile-link"
                        onClick={() => { setProfileDropdownOpen(false); navigate('profile'); }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                      >
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        <span>My Profile</span>
                      </button>
                      <button
                        id="dropdown-settings-link"
                        onClick={() => { setProfileDropdownOpen(false); navigate('settings'); }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                      >
                        <Settings className="w-3.5 h-3.5 text-slate-500" />
                        <span>Settings</span>
                      </button>
                      <div className="border-t border-slate-100 my-1" />
                      <button
                        id="dropdown-logout-btn"
                        onClick={() => { setProfileDropdownOpen(false); logout(); }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center space-x-2"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Hamburger menu toggle */}
                <button
                  id="mobile-menu-toggle-btn"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </>
            ) : (
              /* Public / Logged Out Controls */
              <div className="flex items-center space-x-3">
                <button
                  id="header-login-btn"
                  onClick={() => navigate('login')}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
                >
                  Sign In
                </button>
                <button
                  id="header-get-started-btn"
                  onClick={() => navigate('signup')}
                  className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700 shadow-sm transition"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (When hamburger clicked) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          <div className="py-2 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-xs font-bold text-slate-900">{user.name}</p>
                <p className="text-[10px] text-slate-500">{selectedRole.name}</p>
              </div>
            </div>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('profile'); }}
              className="text-xs text-blue-600 font-semibold"
            >
              View Profile
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('dashboard'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('domains'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              🧭 Career Domains
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('recommendations'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              ✨ Recommendations
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('skill-gap'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              📈 Skill Gap Analysis
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('roadmap'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              🗺️ Roadmap
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('resources'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              📚 Learning Resources
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('certifications'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              🎖️ Free Certifications
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('projects'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              💻 Portfolio Projects
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('resume-builder'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              📄 Resume Builder
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('internships'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              💼 Internships
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('jobs'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              🚀 Jobs
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('saved'); }}
              className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 text-xs font-semibold"
            >
              🔖 Saved Items ({savedItems.length})
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('settings'); }}
              className="text-xs text-slate-600 font-medium"
            >
              ⚙️ Settings
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); logout(); }}
              className="text-xs text-rose-600 font-semibold"
            >
              🚪 Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
