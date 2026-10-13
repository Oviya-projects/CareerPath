import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Settings,
  Bell,
  Database,
  Lock,
  LogOut,
  Trash2,
  CheckCircle2,
  Shield,
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { logout, showToast, resetResumeToDefault } = useApp();

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [internshipAlerts, setInternshipAlerts] = useState(true);
  const [milestoneReminders, setMilestoneReminders] = useState(true);

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset your local progress to initial demo values?')) {
      localStorage.clear();
      resetResumeToDefault();
      showToast('Cache Reset', 'Application state reset to factory defaults.', 'info');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <Settings className="w-3.5 h-3.5" />
          <span>App Preferences</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Settings & Privacy
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Manage your alerts, local storage persistence, and career preferences.
        </p>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          <Bell className="w-4 h-4 text-blue-600" />
          <span>Notification & Alert Settings</span>
        </div>

        <div className="space-y-3 divide-y divide-slate-100">
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Skill Gap Action Alerts</p>
              <p className="text-xs text-slate-500">Receive alerts when new learning resources boost your target score.</p>
            </div>
            <button
              onClick={() => {
                setEmailAlerts(!emailAlerts);
                showToast('Preference Saved', 'Skill gap notification setting updated.', 'info');
              }}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                emailAlerts ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-md transform" />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Internship & Job Postings</p>
              <p className="text-xs text-slate-500">Instant alerts for new graduate positions matching your target domain.</p>
            </div>
            <button
              onClick={() => {
                setInternshipAlerts(!internshipAlerts);
                showToast('Preference Saved', 'Internship notification setting updated.', 'info');
              }}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                internshipAlerts ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-md transform" />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Roadmap Milestone Reminders</p>
              <p className="text-xs text-slate-500">Weekly progress check-in reminders for ongoing roadmap steps.</p>
            </div>
            <button
              onClick={() => {
                setMilestoneReminders(!milestoneReminders);
                showToast('Preference Saved', 'Roadmap reminders updated.', 'info');
              }}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                milestoneReminders ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-md transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Data & Cache Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          <Database className="w-4 h-4 text-blue-600" />
          <span>Local Storage & Cache Management</span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Your skill evaluations, roadmap progress, resume content, and saved jobs are securely stored in your local browser cache.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            id="settings-reset-cache-btn"
            onClick={handleResetData}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-bold transition flex items-center justify-center space-x-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Reset Local Progress Cache</span>
          </button>
        </div>
      </div>

      {/* Account Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900">Sign Out of Account</h3>
          <p className="text-xs text-slate-500">Safely terminate your current session on this device.</p>
        </div>

        <button
          id="settings-logout-btn"
          onClick={logout}
          className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 text-xs font-bold transition flex items-center space-x-1.5"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
