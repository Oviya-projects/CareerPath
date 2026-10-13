import React from 'react';
import { useApp } from '../context/AppContext';
import { CAREER_DOMAINS } from '../data/careerData';
import { DomainIcon } from '../components/common/DomainIcon';
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  GitBranch,
  FileText,
  Award,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Users,
  Compass,
  GraduationCap,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { navigate, setSelectedDomainId } = useApp();

  const handleDomainClick = (domainId: string) => {
    setSelectedDomainId(domainId);
    navigate('roles');
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Built for College Students & Fresh Graduates</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Your Personal Blueprint from <span className="text-[#2563EB]">Campus to Career</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Discover 15+ tech & creative domains, benchmark your real-time skill gaps, follow step-by-step career roadmaps, and build ATS-ready resumes.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-get-started-btn"
                onClick={() => navigate('signup')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2563EB] text-white text-base font-bold hover:bg-blue-700 shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2"
              >
                <span>Start Your Career Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-domains-btn"
                onClick={() => navigate('domains')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-base font-bold hover:bg-slate-50 shadow-sm transition flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Explore 15 Domains</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">15+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Career Domains</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">60+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Job Ready Roles</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Free Open Resources</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">1-Click</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">ATS Resume Builder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-600 mb-2">End-to-End Career Architecture</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Everything you need to land your first role</p>
            <p className="mt-3 text-slate-600 text-sm">No vague advice. Concrete skills, curated roadmaps, real portfolio projects, and direct opportunities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              id="feature-card-skill-gap"
              onClick={() => navigate('skill-gap')}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Algorithmic Skill Gap Analysis</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Benchmark your current skills against exact market requirements for high-demand roles. Discover your match percentage and highest-ROI focus areas.
              </p>
            </div>

            {/* Card 2 */}
            <div
              id="feature-card-roadmap"
              onClick={() => navigate('roadmap')}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Milestone-Driven Roadmaps</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Step-by-step verified learning trajectories with estimated durations, practice exercises, and milestone checklists tailored for student timelines.
              </p>
            </div>

            {/* Card 3 */}
            <div
              id="feature-card-resume"
              onClick={() => navigate('resume-builder')}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Integrated ATS Resume Builder</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automatically formats your verified college coursework, skills, and portfolio capstones into recruiter-approved, print-ready PDF resumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Popular Domains Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs uppercase font-bold tracking-wider text-blue-600 mb-2">Choose Your Pathway</h2>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Explore 15 Career Domains</p>
            </div>
            <button
              id="landing-view-all-domains-btn"
              onClick={() => navigate('domains')}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition"
            >
              View All Domains <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_DOMAINS.slice(0, 6).map((domain) => (
              <div
                key={domain.id}
                id={`domain-preview-${domain.id}`}
                onClick={() => handleDomainClick(domain.id)}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <DomainIcon iconName={domain.iconName} size={22} />
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {domain.rolesCount} Roles
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{domain.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{domain.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Explore Roadmaps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-[#2563EB] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 mx-auto text-blue-200 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to bridge your skill gap?</h2>
          <p className="mt-4 text-blue-100 text-base max-w-xl mx-auto">
            Join thousands of college students building personalized career trajectories. Free, open, and built for your future.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              id="cta-get-started-btn"
              onClick={() => navigate('signup')}
              className="px-8 py-3.5 rounded-xl bg-white text-blue-700 font-extrabold text-sm hover:bg-blue-50 shadow-lg transition flex items-center space-x-2"
            >
              <span>Create Free Student Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
