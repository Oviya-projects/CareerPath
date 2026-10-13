import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREER_DOMAINS, CAREER_ROLES } from '../data/careerData';
import { DomainIcon } from '../components/common/DomainIcon';
import { SkillLevel } from '../types';
import {
  GraduationCap,
  Layers,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Award,
} from 'lucide-react';

export const OnboardingPage: React.FC = () => {
  const {
    user,
    updateUserProfile,
    updateUserSkill,
    setSelectedDomainId,
    setSelectedRoleId,
    navigate,
    showToast,
  } = useApp();

  const [step, setStep] = useState<number>(1);

  // Form State
  const [college, setCollege] = useState(user.education.college || 'UC Berkeley');
  const [degree, setDegree] = useState(user.education.degree || 'Bachelor of Science in Information Science');
  const [currentYear, setCurrentYear] = useState(user.education.currentYear || 'Senior');
  const [graduationYear, setGraduationYear] = useState(user.education.graduationYear || '2026');
  const [cgpa, setCgpa] = useState(user.education.cgpa || '3.82');

  const [selectedDomain, setSelectedDomain] = useState<string>(user.selectedDomainId || 'data-analytics');
  const [selectedRole, setSelectedRole] = useState<string>(user.selectedRoleId || 'data-analyst');

  // Filter roles for the chosen domain
  const availableRoles = CAREER_ROLES.filter(r => r.domainId === selectedDomain);
  const targetRoleObj = CAREER_ROLES.find(r => r.id === selectedRole) || availableRoles[0] || CAREER_ROLES[0];

  const handleFinish = () => {
    updateUserProfile({
      education: {
        college,
        degree,
        department: 'School of Information & Technology',
        currentYear,
        graduationYear,
        cgpa,
      },
      selectedDomainId: selectedDomain,
      selectedRoleId: selectedRole,
      isOnboarded: true,
    });
    setSelectedDomainId(selectedDomain);
    setSelectedRoleId(selectedRole);
    showToast('Onboarding Completed!', 'Your personalized career trajectory is ready.', 'success');
    navigate('dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-10 px-4 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl flex flex-col justify-between">
        {/* Step Indicator Header */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600">
              Step {step} of 4
            </span>
            <span className="text-xs font-semibold text-slate-400">CareerPath Onboarding</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-[#2563EB] h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* Step 1: Academic Background */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Academic Background</h2>
                  <p className="text-xs text-slate-500">Tell us where you are in your collegiate journey</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    College / University Name
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                    placeholder="e.g. Stanford University"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Degree / Major
                  </label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                    placeholder="e.g. B.S. in Computer Science & Data"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current Year
                  </label>
                  <select
                    value={currentYear}
                    onChange={(e) => setCurrentYear(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium bg-white"
                  >
                    <option value="Freshman">Freshman (1st Year)</option>
                    <option value="Sophomore">Sophomore (2nd Year)</option>
                    <option value="Junior">Junior (3rd Year)</option>
                    <option value="Senior">Senior (Final Year)</option>
                    <option value="Recent Graduate">Recent Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Graduation Year
                  </label>
                  <input
                    type="text"
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                    placeholder="2026"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Domain Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Select Career Domain</h2>
                  <p className="text-xs text-slate-500">Pick the primary industry field you want to target</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                {CAREER_DOMAINS.map((domain) => {
                  const isSelected = selectedDomain === domain.id;
                  return (
                    <div
                      key={domain.id}
                      onClick={() => {
                        setSelectedDomain(domain.id);
                        const firstRole = CAREER_ROLES.find(r => r.domainId === domain.id);
                        if (firstRole) setSelectedRole(firstRole.id);
                      }}
                      className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 ring-2 ring-blue-600/30'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                          <DomainIcon iconName={domain.iconName} size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{domain.name}</p>
                          <p className="text-[11px] text-slate-500">{domain.rolesCount} roles</p>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Target Role Selection */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Choose Target Role</h2>
                  <p className="text-xs text-slate-500">Select the specific job title you are aiming for</p>
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {availableRoles.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <div
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-4 rounded-2xl border transition cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 ring-2 ring-blue-600/30'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-extrabold text-slate-900">{role.name}</h3>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {role.avgSalary}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">{role.tagline || role.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {(role.requiredSkills || []).slice(0, 4).map(s => (
                          <span key={s.name} className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Quick Self-Assessment */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Self-Rate Core Skills</h2>
                  <p className="text-xs text-slate-500">Benchmark your baseline against {targetRoleObj.name}</p>
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {targetRoleObj.requiredSkills.map((skill) => {
                  const currentSkill = user.currentSkills.find(
                    s => s.name.toLowerCase() === skill.name.toLowerCase()
                  );
                  const currentLevel = currentSkill ? currentSkill.level : 'None';

                  return (
                    <div key={skill.name} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-slate-900">{skill.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium">({skill.category})</span>
                        </div>
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          Req: {skill.requiredLevel}
                        </span>
                      </div>

                      {/* Level selector buttons */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {(['None', 'Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => updateUserSkill(skill.name, lvl)}
                            className={`py-1.5 text-xs font-semibold rounded-lg border transition ${
                              currentLevel === lvl
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Controls */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
          {step > 1 ? (
            <button
              id="onboarding-prev-step-btn"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition flex items-center space-x-1"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              id="onboarding-next-step-btn"
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 shadow-md transition flex items-center space-x-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              id="onboarding-finish-btn"
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-md transition flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate My Dashboard</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
