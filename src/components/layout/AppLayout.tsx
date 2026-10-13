import React from 'react';
import { useApp } from '../../context/AppContext';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import { ToastContainer } from '../common/ToastContainer';

// Page Imports
import { LandingPage } from '../../pages/LandingPage';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';
import { OnboardingPage } from '../../pages/OnboardingPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { CareerDomainsPage } from '../../pages/CareerDomainsPage';
import { CareerRolesPage } from '../../pages/CareerRolesPage';
import { RoleDetailsPage } from '../../pages/RoleDetailsPage';
import { CareerRecommendationPage } from '../../pages/CareerRecommendationPage';
import { SkillGapPage } from '../../pages/SkillGapPage';
import { RoadmapPage } from '../../pages/RoadmapPage';
import { LearningResourcesPage } from '../../pages/LearningResourcesPage';
import { CertificationsPage } from '../../pages/CertificationsPage';
import { ProjectsPage } from '../../pages/ProjectsPage';
import { ResumeBuilderPage } from '../../pages/ResumeBuilderPage';
import { InternshipsPage } from '../../pages/InternshipsPage';
import { JobsPage } from '../../pages/JobsPage';
import { SavedItemsPage } from '../../pages/SavedItemsPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { SettingsPage } from '../../pages/SettingsPage';

export const AppLayout: React.FC = () => {
  const { currentView, isLoggedIn } = useApp();

  const isPublicPage = currentView === 'landing' || currentView === 'login' || currentView === 'signup';
  const showSidebar = isLoggedIn && !isPublicPage && currentView !== 'onboarding';

  const renderActivePage = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'onboarding':
        return <OnboardingPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'domains':
        return <CareerDomainsPage />;
      case 'roles':
        return <CareerRolesPage />;
      case 'role-details':
        return <RoleDetailsPage />;
      case 'recommendations':
        return <CareerRecommendationPage />;
      case 'skill-gap':
        return <SkillGapPage />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'resources':
        return <LearningResourcesPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'resume-builder':
        return <ResumeBuilderPage />;
      case 'internships':
        return <InternshipsPage />;
      case 'jobs':
        return <JobsPage />;
      case 'saved':
        return <SavedItemsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 antialiased font-sans selection:bg-blue-600 selection:text-white print:bg-white print:min-h-0">
      {/* Top Navigation */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Main Body Area with Responsive Sidebar and Content */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto print:max-w-none print:w-full print:m-0 print:p-0">
        {showSidebar && (
          <div className="print:hidden">
            <Sidebar />
          </div>
        )}

        <main className={`flex-1 p-4 sm:p-6 lg:p-8 min-w-0 transition-all ${isPublicPage ? 'p-0 sm:p-0 lg:p-0' : ''} print:p-0 print:m-0 print:w-full`}>
          {renderActivePage()}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (Matching Stitch design) */}
      <div className="print:hidden">
        <BottomNav />
      </div>

      {/* Floating Global Toasts */}
      <div className="print:hidden">
        <ToastContainer />
      </div>
    </div>
  );
};
