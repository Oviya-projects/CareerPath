/**
 * CareerPath Central Dataset Hub
 * 
 * Re-exports normalized, verified career domains, roles, roadmaps, learning resources,
 * certifications, portfolio projects, and curated job/internship benchmarks.
 * 
 * Sources:
 * - O*NET 29.0 Database (U.S. Department of Labor / Employment and Training Administration)
 * - ESCO (European Skills, Competences, Qualifications and Occupations)
 * - freeCodeCamp, MDN Web Docs, Microsoft Learn, AWS Skill Builder, Google Cloud Skills
 * 
 * License & Attribution:
 * - O*NET: CC-BY 4.0 (https://www.onetcenter.org/license_portal.html)
 * - Free resources and certification metadata used according to their educational usage terms.
 */

import { CAREER_DOMAINS } from './domainsData';
import { CAREER_ROLES } from './rolesData';
import { ROADMAPS_BY_ROLE } from './roadmapsData';
import { LEARNING_RESOURCES } from './resourcesData';
import { CERTIFICATIONS } from './certificationsData';
import { PROJECTS } from './projectsData';
import { INTERNSHIPS, JOBS } from './opportunitiesData';

// Compatibility Aliases consumed across various application pages
export const LEARNING_RESOURCES_DATA = LEARNING_RESOURCES;
export const CERTIFICATIONS_DATA = CERTIFICATIONS;
export const PORTFOLIO_PROJECTS_DATA = PROJECTS;
export const INTERNSHIPS_DATA = INTERNSHIPS;
export const JOBS_DATA = JOBS;

// Re-export core entities
export {
  CAREER_DOMAINS,
  CAREER_ROLES,
  ROADMAPS_BY_ROLE,
  LEARNING_RESOURCES,
  CERTIFICATIONS,
  PROJECTS,
  INTERNSHIPS,
  JOBS,
};

// User Profile Initial Benchmark (Alex Chen - Final Year Student)
export const INITIAL_USER_PROFILE = {
  id: 'user-alex-1',
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  bio: 'Aspiring Data Analyst passionate about uncovering actionable business insights through SQL, Power BI, and statistical modeling.',
  education: {
    college: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    department: 'Information Science & Economics',
    currentYear: 'Final Year (Senior)',
    graduationYear: '2026',
    cgpa: '3.82 / 4.0',
  },
  selectedDomainId: 'data-analytics',
  selectedRoleId: 'data-analyst',
  currentSkills: [
    { name: 'Excel', level: 'Advanced' as const },
    { name: 'Power BI', level: 'Intermediate' as const },
    { name: 'SQL', level: 'Beginner' as const },
    { name: 'Statistics', level: 'Beginner' as const },
    { name: 'Python', level: 'None' as const },
  ],
  careerGoal: 'Internship' as const,
  preferredWorkType: 'Hybrid' as const,
  preferredLocation: 'San Francisco, CA / Remote',
  isOnboarded: true,
  careerReadinessScore: 72,
  profileCompletion: 85,
  joinedDate: 'August 2026',
};
