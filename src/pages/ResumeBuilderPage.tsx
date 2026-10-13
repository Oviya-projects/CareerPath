import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Printer,
  Sparkles,
  Download,
  Plus,
  Trash2,
  RefreshCw,
  CheckCircle2,
  Linkedin,
  Github,
  Globe,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
} from 'lucide-react';

export const ResumeBuilderPage: React.FC = () => {
  const {
    resumeData,
    updateResumeData,
    resetResumeToDefault,
    user,
    selectedRole,
    showToast,
  } = useApp();

  const [activeSection, setActiveSection] = useState<'info' | 'summary' | 'education' | 'skills' | 'projects' | 'experience' | 'certifications'>('info');
  const [template, setTemplate] = useState<'modern' | 'classic' | 'minimal'>('modern');

  const [newSkillInput, setNewSkillInput] = useState('');
  const [newCertInput, setNewCertInput] = useState('');

  const handlePrint = () => {
    const originalTitle = document.title;
    const cleanName = resumeData.fullName.trim().replace(/[^a-zA-Z0-9_-]+/g, '_') || 'Student';
    document.title = `${cleanName}_ATS_Resume`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleAutoFillFromProfile = () => {
    const profSkills = user.currentSkills.filter(s => s.level !== 'None').map(s => s.name);
    updateResumeData({
      fullName: user.name,
      email: user.email,
      education: {
        college: user.education.college,
        degree: user.education.degree,
        department: user.education.department,
        currentYear: user.education.currentYear,
        graduationYear: user.education.graduationYear,
        cgpa: user.education.cgpa,
      },
      skills: profSkills.length > 0 ? profSkills : resumeData.skills,
    });
    showToast('Auto-Populated', 'Resume updated with your active profile & skills data.', 'success');
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillInput.trim()) return;
    if (resumeData.skills.includes(newSkillInput.trim())) return;
    updateResumeData({
      skills: [...resumeData.skills, newSkillInput.trim()],
    });
    setNewSkillInput('');
  };

  const handleRemoveSkill = (skill: string) => {
    updateResumeData({
      skills: resumeData.skills.filter((s) => s !== skill),
    });
  };

  const handleAddCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCertInput.trim()) return;
    updateResumeData({
      certifications: [...resumeData.certifications, newCertInput.trim()],
    });
    setNewCertInput('');
  };

  const handleRemoveCert = (index: number) => {
    updateResumeData({
      certifications: resumeData.certifications.filter((_, idx) => idx !== index),
    });
  };

  const handleAddProject = () => {
    updateResumeData({
      projects: [
        ...resumeData.projects,
        {
          title: 'New Analytical Portfolio Project',
          tech: 'SQL, Python, Visualization',
          description: 'Designed and implemented end-to-end data pipeline processing 10,000+ records to extract core performance metrics.',
          link: 'github.com/alexchen-dev/project',
        },
      ],
    });
  };

  const handleRemoveProject = (index: number) => {
    updateResumeData({
      projects: resumeData.projects.filter((_, idx) => idx !== index),
    });
  };

  const handleUpdateProject = (index: number, field: string, val: string) => {
    const updated = [...resumeData.projects];
    updated[index] = { ...updated[index], [field]: val };
    updateResumeData({ projects: updated });
  };

  const handleAddExperience = () => {
    updateResumeData({
      experience: [
        ...resumeData.experience,
        {
          role: 'Data / Analytics Intern',
          organization: 'Tech Solutions Inc.',
          duration: 'Summer 2025',
          description: 'Assisted senior data analysts in automated dashboard maintenance, ETL debugging, and daily reporting metrics.',
        },
      ],
    });
  };

  const handleRemoveExperience = (index: number) => {
    updateResumeData({
      experience: resumeData.experience.filter((_, idx) => idx !== index),
    });
  };

  const handleUpdateExperience = (index: number, field: string, val: string) => {
    const updated = [...resumeData.experience];
    updated[index] = { ...updated[index], [field]: val };
    updateResumeData({ experience: updated });
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Controls (Hidden on Print) */}
      <div className="print:hidden bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Recruiter ATS Optimized</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ATS Resume Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Build and export a single-page clean format guaranteed to pass Applicant Tracking Systems.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            id="resume-autofill-btn"
            onClick={handleAutoFillFromProfile}
            className="px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sync Profile Data</span>
          </button>

          <button
            id="resume-print-btn"
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-blue-700 text-xs font-extrabold shadow-md transition flex items-center space-x-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Form Editor (Hidden on Print) */}
        <div className="print:hidden lg:col-span-5 space-y-4">
          {/* Section Navigation Tabs */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200 flex flex-wrap gap-1">
            {[
              { id: 'info', label: 'Contact' },
              { id: 'summary', label: 'Summary' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'certifications', label: 'Certs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeSection === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Editor Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 max-h-[750px] overflow-y-auto pr-2">
            {/* Section 1: Contact Details */}
            {activeSection === 'info' && (
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">Personal & Contact Info</h3>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={resumeData.fullName}
                    onChange={(e) => updateResumeData({ fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={resumeData.email}
                    onChange={(e) => updateResumeData({ email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                    <input
                      type="text"
                      value={resumeData.phone}
                      onChange={(e) => updateResumeData({ phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={resumeData.location}
                      onChange={(e) => updateResumeData({ location: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={resumeData.linkedin}
                    onChange={(e) => updateResumeData({ linkedin: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">GitHub / Portfolio</label>
                  <input
                    type="text"
                    value={resumeData.github}
                    onChange={(e) => updateResumeData({ github: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>
            )}

            {/* Section 2: Summary */}
            {activeSection === 'summary' && (
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">Professional Summary</h3>
                <p className="text-xs text-slate-500">
                  A concise 2-3 sentence overview highlighting your degree, core skills, and passion for {selectedRole.name}.
                </p>
                <textarea
                  rows={6}
                  value={resumeData.summary}
                  onChange={(e) => updateResumeData({ summary: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium leading-relaxed"
                />
              </div>
            )}

            {/* Section 3: Education */}
            {activeSection === 'education' && (
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">Collegiate Education</h3>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">College / University</label>
                  <input
                    type="text"
                    value={resumeData.education.college}
                    onChange={(e) =>
                      updateResumeData({ education: { ...resumeData.education, college: e.target.value } })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Degree & Major</label>
                  <input
                    type="text"
                    value={resumeData.education.degree}
                    onChange={(e) =>
                      updateResumeData({ education: { ...resumeData.education, degree: e.target.value } })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Graduation Date</label>
                    <input
                      type="text"
                      value={resumeData.education.graduationYear}
                      onChange={(e) =>
                        updateResumeData({ education: { ...resumeData.education, graduationYear: e.target.value } })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">GPA / Honors</label>
                    <input
                      type="text"
                      value={resumeData.education.cgpa}
                      onChange={(e) =>
                        updateResumeData({ education: { ...resumeData.education, cgpa: e.target.value } })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Skills */}
            {activeSection === 'skills' && (
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900">Technical Competencies</h3>
                <form onSubmit={handleAddSkill} className="flex gap-2">
                  <input
                    type="text"
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    placeholder="Add skill (e.g. SQL, Python, Excel)..."
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {resumeData.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium"
                    >
                      <span>{s}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(s)}
                        className="ml-1.5 text-slate-400 hover:text-rose-600 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Section 5: Projects */}
            {activeSection === 'projects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900">Portfolio Projects</h3>
                  <button
                    onClick={handleAddProject}
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center"
                  >
                    <Plus className="w-3.5 h-3.5 mr-1" /> Add Project
                  </button>
                </div>

                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Project #{idx + 1}</span>
                      <button
                        onClick={() => handleRemoveProject(idx)}
                        className="text-rose-500 hover:text-rose-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => handleUpdateProject(idx, 'title', e.target.value)}
                      placeholder="Project Title"
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                    />
                    <input
                      type="text"
                      value={proj.tech}
                      onChange={(e) => handleUpdateProject(idx, 'tech', e.target.value)}
                      placeholder="Tech Stack (e.g. Python, SQL)"
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => handleUpdateProject(idx, 'description', e.target.value)}
                      placeholder="Quantified outcome bullet..."
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Section 6: Experience */}
            {activeSection === 'experience' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900">Work & Internship Experience</h3>
                  <button
                    onClick={handleAddExperience}
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center"
                  >
                    <Plus className="w-3.5 h-3.5 mr-1" /> Add Entry
                  </button>
                </div>

                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Role #{idx + 1}</span>
                      <button
                        onClick={() => handleRemoveExperience(idx)}
                        className="text-rose-500 hover:text-rose-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleUpdateExperience(idx, 'role', e.target.value)}
                        placeholder="Job Title"
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                      />
                      <input
                        type="text"
                        value={exp.organization}
                        onChange={(e) => handleUpdateExperience(idx, 'organization', e.target.value)}
                        placeholder="Company / University"
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                      />
                    </div>
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) => handleUpdateExperience(idx, 'duration', e.target.value)}
                      placeholder="Duration (e.g. Summer 2025)"
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => handleUpdateExperience(idx, 'description', e.target.value)}
                      placeholder="Bullet points describing responsibilities..."
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Section 7: Certifications */}
            {activeSection === 'certifications' && (
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900">Certifications & Badges</h3>
                <form onSubmit={handleAddCert} className="flex gap-2">
                  <input
                    type="text"
                    value={newCertInput}
                    onChange={(e) => setNewCertInput(e.target.value)}
                    placeholder="e.g. Google Data Analytics Professional..."
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>

                <div className="space-y-2">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
                      <span className="font-medium text-slate-800">{cert}</span>
                      <button
                        onClick={() => handleRemoveCert(idx)}
                        className="text-slate-400 hover:text-rose-600 font-bold ml-2"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Paper ATS Resume Preview */}
        <div className="lg:col-span-7 print:col-span-12 print:w-full">
          <div
            id="resume-preview-section"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-300 shadow-xl print:shadow-none print:border-none print:p-0 print:m-0 print:rounded-none min-h-[850px] print:min-h-0 text-slate-900"
          >
            {/* Header */}
            <div className="resume-section-block border-b-2 border-slate-900 pb-3 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight uppercase">
                {resumeData.fullName}
              </h1>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
                {resumeData.location && (
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                    {resumeData.location}
                  </span>
                )}
                {resumeData.email && (
                  <span className="flex items-center">
                    <Mail className="w-3 h-3 mr-1 text-slate-500" />
                    {resumeData.email}
                  </span>
                )}
                {resumeData.phone && (
                  <span className="flex items-center">
                    <Phone className="w-3 h-3 mr-1 text-slate-500" />
                    {resumeData.phone}
                  </span>
                )}
                {resumeData.linkedin && (
                  <span className="flex items-center text-blue-800 font-semibold">
                    <Linkedin className="w-3 h-3 mr-1 text-blue-600" />
                    {resumeData.linkedin}
                  </span>
                )}
                {resumeData.github && (
                  <span className="flex items-center text-slate-900 font-semibold">
                    <Github className="w-3 h-3 mr-1 text-slate-700" />
                    {resumeData.github}
                  </span>
                )}
              </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
              <div className="resume-section-block mt-3.5">
                <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                  Professional Summary
                </h2>
                <p className="text-xs text-slate-800 leading-relaxed text-justify">
                  {resumeData.summary}
                </p>
              </div>
            )}

            {/* Education */}
            <div className="resume-section-block mt-3.5">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <div className="flex items-start justify-between text-xs">
                <div>
                  <p className="font-extrabold text-slate-950">{resumeData.education.college}</p>
                  <p className="text-slate-700 italic font-medium">{resumeData.education.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{resumeData.education.graduationYear}</p>
                  <p className="text-slate-700 font-semibold">GPA: {resumeData.education.cgpa}</p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            {resumeData.skills.length > 0 && (
              <div className="resume-section-block mt-3.5">
                <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                  Technical Competencies
                </h2>
                <p className="text-xs text-slate-800 leading-relaxed">
                  <strong className="text-slate-950 font-bold">Skills & Tools: </strong>
                  {resumeData.skills.join(' • ')}
                </p>
              </div>
            )}

            {/* Portfolio Projects */}
            {resumeData.projects.length > 0 && (
              <div className="resume-section-block mt-3.5">
                <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Key Portfolio Projects
                </h2>
                <div className="space-y-2.5">
                  {resumeData.projects.map((proj, idx) => (
                    <div key={idx} className="resume-section-block text-xs">
                      <div className="flex items-center justify-between">
                        <p className="font-extrabold text-slate-950">
                          {proj.title}
                          <span className="font-normal text-slate-600 ml-1.5">| {proj.tech}</span>
                        </p>
                        {proj.link && (
                          <span className="text-[10px] text-blue-800 font-semibold">{proj.link}</span>
                        )}
                      </div>
                      <p className="text-slate-800 mt-0.5 leading-relaxed">• {proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Work & Internship Experience */}
            {resumeData.experience.length > 0 && (
              <div className="resume-section-block mt-3.5">
                <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Experience & Leadership
                </h2>
                <div className="space-y-2.5">
                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="resume-section-block text-xs">
                      <div className="flex items-center justify-between">
                        <p className="font-extrabold text-slate-950">
                          {exp.role}{' '}
                          <span className="font-medium text-slate-600">| {exp.organization}</span>
                        </p>
                        <span className="text-slate-700 font-semibold">{exp.duration}</span>
                      </div>
                      <p className="text-slate-800 mt-0.5 leading-relaxed">• {exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications & Honors */}
            {resumeData.certifications.length > 0 && (
              <div className="resume-section-block mt-3.5">
                <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                  Verified Certifications
                </h2>
                <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                  {resumeData.certifications.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
