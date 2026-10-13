import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PORTFOLIO_PROJECTS_DATA } from '../data/careerData';
import {
  FolderGit2,
  Search,
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Plus,
  Layers,
  Sparkles,
  Database,
  Code2,
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const {
    toggleSaveItem,
    isItemSaved,
    resumeData,
    updateResumeData,
    showToast,
    navigate,
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const filteredProjects = PORTFOLIO_PROJECTS_DATA.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      proj.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDifficulty =
      difficultyFilter === 'All' || proj.difficulty.toLowerCase() === difficultyFilter.toLowerCase();

    return matchesSearch && matchesDifficulty;
  });

  const handleAddProjectToResume = (proj: (typeof PORTFOLIO_PROJECTS_DATA)[0]) => {
    const alreadyInResume = resumeData.projects.some(
      (p) => p.title.toLowerCase() === proj.title.toLowerCase()
    );

    if (alreadyInResume) {
      showToast('Already on Resume', `${proj.title} is already on your resume.`, 'info');
      return;
    }

    updateResumeData({
      projects: [
        ...resumeData.projects,
        {
          title: proj.title,
          tech: proj.technologies.join(', '),
          description: proj.description,
          link: proj.githubStarter,
        },
      ],
    });

    showToast('Added to Resume', `${proj.title} added to your ATS resume.`, 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Real-World Proof of Work</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Portfolio Capstone Projects
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Build recruiters-approved projects using real public datasets and production tech stacks.
            </p>
          </div>

          <button
            id="projects-view-resume-btn"
            onClick={() => navigate('resume-builder')}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center space-x-1.5"
          >
            <span>Preview in Resume</span>
          </button>
        </div>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="projects-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects by tech (e.g. SQL, Python, Power BI, Tableau)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  difficultyFilter === diff
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => {
          const saved = isItemSaved(proj.id);

          return (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      proj.difficulty === 'Beginner'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : proj.difficulty === 'Intermediate'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-purple-50 text-purple-700 border border-purple-200'
                    }`}
                  >
                    {proj.difficulty} Level
                  </span>

                  <button
                    onClick={() =>
                      toggleSaveItem('project', {
                        id: proj.id,
                        title: proj.title,
                        subtitle: `${proj.difficulty} • ${proj.technologies.join(', ')}`,
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

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{proj.description}</p>

                {/* Tech Stack Pills */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Technologies</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Relevance */}
                <div className="mt-3 flex items-center text-xs text-slate-500">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-blue-600 shrink-0" />
                  <span className="line-clamp-1">{proj.careerRelevance}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={proj.githubStarter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center space-x-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>View Project Guide</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  onClick={() => handleAddProjectToResume(proj)}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-bold rounded-xl transition flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Resume</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
