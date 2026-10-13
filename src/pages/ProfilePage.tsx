import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  Edit2,
  Save,
  CheckCircle2,
  FileText,
  TrendingUp,
} from 'lucide-react';
import { SkillLevel } from '../types';

export const ProfilePage: React.FC = () => {
  const {
    user,
    updateUserProfile,
    selectedDomain,
    selectedRole,
    skillGapResult,
    updateUserSkill,
    navigate,
    showToast,
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [college, setCollege] = useState(user.education.college);
  const [degree, setDegree] = useState(user.education.degree);
  const [currentYear, setCurrentYear] = useState(user.education.currentYear);
  const [graduationYear, setGraduationYear] = useState(user.education.graduationYear);
  const [cgpa, setCgpa] = useState(user.education.cgpa);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name,
      email,
      bio,
      education: {
        ...user.education,
        college,
        degree,
        currentYear,
        graduationYear,
        cgpa,
      },
    });
    setIsEditing(false);
    showToast('Profile Saved', 'Personal details updated successfully!', 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Profile Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 rounded-full ring-4 ring-white" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">{user.name}</h1>
            <p className="text-xs sm:text-sm text-slate-500">{user.email}</p>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                {selectedRole.name}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {skillGapResult.matchPercentage}% Career Readiness
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="profile-toggle-edit-btn"
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center space-x-1.5"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
          </button>

          <button
            id="profile-view-resume-btn"
            onClick={() => navigate('resume-builder')}
            className="px-4 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 shadow-sm transition flex items-center space-x-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open ATS Resume</span>
          </button>
        </div>
      </div>

      {/* Main Details & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Academic Background & Personal Bio */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Collegiate Education</span>
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">University / College</label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Degree & Major</label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Current Year</label>
                    <input
                      type="text"
                      value={currentYear}
                      onChange={(e) => setCurrentYear(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Grad Year</label>
                    <input
                      type="text"
                      value={graduationYear}
                      onChange={(e) => setGraduationYear(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">CGPA</label>
                    <input
                      type="text"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Professional Bio</label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center space-x-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <p className="font-extrabold text-slate-900 text-base">{user.education.college}</p>
                  <p className="text-slate-600 font-medium">{user.education.degree}</p>
                  <div className="flex items-center space-x-4 text-slate-500 pt-1">
                    <span>Year: <strong>{user.education.currentYear}</strong></span>
                    <span>•</span>
                    <span>Graduation: <strong>{user.education.graduationYear}</strong></span>
                    <span>•</span>
                    <span>GPA: <strong>{user.education.cgpa}</strong></span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Bio</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{user.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Verified Skills Matrix */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Verified Skills Profile</span>
              </div>
              <button
                onClick={() => navigate('skill-gap')}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Benchmark Skill Gap →
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Update your proficiency levels to adjust your real-time career alignment.
            </p>

            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              {user.currentSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                >
                  <span className="text-xs font-extrabold text-slate-900">{skill.name}</span>

                  <div className="flex items-center space-x-1">
                    {(['None', 'Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => updateUserSkill(skill.name, lvl)}
                        className={`px-2 py-1 text-[10px] font-bold rounded-lg border transition ${
                          skill.level === lvl
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
