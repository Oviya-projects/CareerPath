export type SkillLevel = 'None' | 'Beginner' | 'Intermediate' | 'Advanced';

export type SkillStatus = 'Completed' | 'In Progress' | 'Not Started' | 'Missing';

export interface SkillRequirement {
  name: string;
  category: 'core' | 'technical' | 'tool' | 'soft';
  importance: 'High' | 'Medium' | 'Essential';
  requiredLevel: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface UserSkill {
  name: string;
  level: SkillLevel;
}

export interface CareerRole {
  id: string;
  name: string;
  domainId: string;
  domainName: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  requiredSkills: SkillRequirement[];
  avgSalary: string;
  salaryRange?: string;
  jobGrowth: string;
  demandLevel: 'High' | 'Very High' | 'Moderate';
  entryRequirements: string;
  experienceLevel?: string;
  shortDescription?: string;
  longDescription?: string;
  onetCode?: string;
  sourceUrl?: string;
}

export interface CareerDomain {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  skills: string[];
  careerRoles: string[]; // Role names
  rolesCount: number;
}

export interface RoadmapMilestone {
  id: string;
  stepNumber: number;
  title: string;
  subtitle?: string;
  description: string;
  durationWeeks?: number;
  durationLabel?: string;
  duration?: string;
  skills: string[];
  tasks?: string[];
  recommendedResources?: string[];
  phase?: number;
  totalPhases?: number;
  phaseName?: string;
  isCompleted: boolean;
  status: 'completed' | 'in_progress' | 'locked';
  actionLabel?: string;
  resourcesCount?: number;
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  skill: string;
  domainId: string;
  roleId?: string;
  type: 'Course' | 'Interactive' | 'Documentation' | 'Video Tutorial' | 'Book';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  isFree: boolean;
  rating: number;
  url: string;
  description: string;
  verifiedDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  domainId: string;
  roleId?: string;
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  isFree: boolean;
  hasCredential: boolean;
  badgeUrl?: string;
  url: string;
  description: string;
  officialCode?: string;
  credentialType?: 'Certification' | 'Course Certificate' | 'Learning Path';
  verifiedDate?: string;
}

export interface Project {
  id: string;
  title: string;
  domainId: string;
  roleId?: string;
  description: string;
  skills: string[];
  technologies: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  careerRelevance: string;
  features: string[];
  githubStarter?: string;
  datasetUrl?: string;
  liveDemoUrl?: string;
  isCompleted: boolean;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  logoText: string;
  domainId: string;
  roleId?: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  duration: string;
  stipend: string;
  skills: string[];
  deadline: string;
  postedDate: string;
  description: string;
  openings: number;
  isLiveVacancy?: boolean;
  careerPortalUrl?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logoText: string;
  domainId: string;
  roleId?: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  experience: string;
  salary: string;
  skills: string[];
  postedDate: string;
  description: string;
  type: 'Full-time' | 'Contract' | 'Graduate Role';
  isLiveVacancy?: boolean;
  careerPortalUrl?: string;
}

export interface EducationInfo {
  college: string;
  degree: string;
  department: string;
  currentYear: string;
  graduationYear: string;
  cgpa?: string;
}

export interface ResumeProject {
  title: string;
  tech: string;
  description: string;
  link?: string;
}

export interface ResumeExperience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
  education: EducationInfo;
  skills: string[];
  projects: ResumeProject[];
  certifications: string[];
  experience: ResumeExperience[];
  achievements: string[];
  template: 'modern' | 'minimal' | 'executive';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  education: EducationInfo;
  selectedDomainId: string;
  selectedRoleId: string;
  currentSkills: UserSkill[];
  careerGoal: 'Internship' | 'Full-Time Job' | 'Career Switch';
  preferredWorkType: 'Remote' | 'Hybrid' | 'On-site' | 'Any';
  preferredLocation: string;
  isOnboarded: boolean;
  careerReadinessScore: number;
  profileCompletion: number;
  joinedDate: string;
}

export interface SavedItem {
  id: string;
  type: 'job' | 'internship' | 'certification' | 'project' | 'resource';
  itemId: string;
  title: string;
  subtitle: string;
  savedAt: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

export type PageView =
  | 'landing'
  | 'login'
  | 'signup'
  | 'onboarding'
  | 'dashboard'
  | 'domains'
  | 'roles'
  | 'role-details'
  | 'recommendations'
  | 'skill-gap'
  | 'roadmap'
  | 'resources'
  | 'certifications'
  | 'projects'
  | 'resume-builder'
  | 'internships'
  | 'jobs'
  | 'saved'
  | 'profile'
  | 'settings';
