import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  PageView,
  UserProfile,
  CareerDomain,
  CareerRole,
  UserSkill,
  SkillLevel,
  SkillStatus,
  RoadmapMilestone,
  SavedItem,
  ResumeData,
  ToastMessage,
  EducationInfo,
} from '../types';
import {
  CAREER_DOMAINS,
  CAREER_ROLES,
  ROADMAPS_BY_ROLE,
  INITIAL_USER_PROFILE,
} from '../data/careerData';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export interface SkillGapItem {
  name: string;
  category: string;
  requiredLevel: string;
  userLevel: SkillLevel;
  status: SkillStatus;
  progressPercent: number;
  importance: string;
}

export interface SkillGapAnalysisResult {
  matchPercentage: number;
  matchScoreLabel: string;
  matchingSkills: SkillGapItem[];
  inProgressSkills: SkillGapItem[];
  missingSkills: SkillGapItem[];
  allBreakdown: SkillGapItem[];
  priorityFocusSkill: {
    name: string;
    description: string;
    targetScore: number;
  } | null;
}

export interface CareerMatchRecommendation {
  role: CareerRole;
  domain: CareerDomain;
  matchPercentage: number;
  matchingSkillsCount: number;
  totalSkillsCount: number;
  topMatchingSkills: string[];
  missingSkills: string[];
  reason: string;
}

interface AppContextType {
  currentView: PageView;
  navigate: (view: PageView, params?: { domainId?: string; roleId?: string }) => void;
  user: UserProfile;
  isLoggedIn: boolean;
  isDemoMode: boolean;
  login: (email?: string, password?: string) => void;
  loginAsDemo: () => void;
  signup: (userData: { name: string; email: string; password?: string }) => void;
  logout: () => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  updateUserSkill: (skillName: string, level: SkillLevel) => void;
  addCustomSkill: (skillName: string, level: SkillLevel) => void;

  selectedDomain: CareerDomain;
  selectedRole: CareerRole;
  setSelectedDomainId: (domainId: string) => void;
  setSelectedRoleId: (roleId: string) => void;
  availableRolesForSelectedDomain: CareerRole[];

  skillGapResult: SkillGapAnalysisResult;

  milestones: RoadmapMilestone[];
  toggleMilestone: (milestoneId: string) => void;
  roadmapProgressPercent: number;

  careerRecommendations: CareerMatchRecommendation[];

  savedItems: SavedItem[];
  toggleSaveItem: (
    type: SavedItem['type'],
    item: { id: string; title: string; subtitle: string }
  ) => void;
  isItemSaved: (itemId: string) => boolean;

  appliedIds: string[];
  applyToOpportunity: (id: string, title: string, company: string) => void;
  isApplied: (id: string) => boolean;

  resumeData: ResumeData;
  updateResumeData: (updates: Partial<ResumeData>) => void;
  resetResumeToDefault: () => void;

  toasts: ToastMessage[];
  showToast: (
    title: string,
    message: string,
    type?: 'success' | 'info' | 'warning'
  ) => void;
  removeToast: (id: string) => void;

  globalSearch: string;
  setGlobalSearch: (q: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_USER = 'careerpath_user_profile_v1';
const LOCAL_STORAGE_KEY_SAVED = 'careerpath_saved_items_v1';
const LOCAL_STORAGE_KEY_APPLIED = 'careerpath_applied_items_v1';
const LOCAL_STORAGE_KEY_ROADMAP = 'careerpath_roadmap_progress_v1';
const LOCAL_STORAGE_KEY_RESUME = 'careerpath_resume_data_v1';
const LOCAL_STORAGE_KEY_DEMO_MODE = 'careerpath_demo_mode_v1';

const INITIAL_RESUME_DATA: ResumeData = {
  fullName: 'Alex Chen',
  email: 'alex.chen@university.edu',
  phone: '+1 (555) 234-5678',
  location: 'San Francisco, CA',
  linkedin: 'linkedin.com/in/alexchen-data',
  github: 'github.com/alexchen-dev',
  portfolio: 'alexchen.me',
  summary:
    'Motivated Senior student in Information Science & Economics at UC Berkeley with hands-on experience in SQL, Power BI, Excel modeling, and statistical analysis. Proven track record in deriving actionable insights from multi-source datasets through academic projects and case competitions.',
  education: {
    college: 'University of California, Berkeley',
    degree: 'Bachelor of Science in Information Science',
    department: 'Department of Computing & Economics',
    currentYear: 'Senior',
    graduationYear: 'May 2026',
    cgpa: '3.82 / 4.0',
  },
  skills: [
    'SQL',
    'Excel (Advanced)',
    'Power BI',
    'Python',
    'Tableau',
    'Statistical Analysis',
    'Data Cleaning',
    'Git',
  ],
  projects: [
    {
      title: 'Customer Churn Analytics & Retention Dashboard',
      tech: 'SQL, Power BI, DAX, PostgreSQL',
      description:
        'Engineered cohort retention models across 7,000 customer accounts; built an interactive Power BI dashboard isolating high-risk churn factors and forecasting $2.4M in potential retention revenue.',
      link: 'github.com/alexchen-dev/churn-analysis',
    },
    {
      title: 'Global Retail Sales Intelligence Platform',
      tech: 'Excel, Tableau Public, Pivot Modeling',
      description:
        'Structured automated data cleaning pipelines in Excel and designed a 4-page Tableau dashboard tracking regional profit margins and product velocity metrics.',
      link: 'tableau.com/profile/alexchen',
    },
  ],
  certifications: [
    'Google Data Analytics Professional Certificate (In Progress)',
    'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    'freeCodeCamp Data Analysis with Python',
  ],
  experience: [
    {
      role: 'Student Data Assistant',
      organization: 'UC Berkeley Division of Computing',
      duration: 'Sep 2025 - Present',
      description:
        'Manage departmental enrollment spreadsheets, write SQL queries to track student course progression, and prepare quarterly faculty summary decks.',
    },
  ],
  achievements: [
    '1st Place, Bay Area Collegiate Data Hackathon (2025)',
    "Dean's Honor List for 6 Consecutive Semesters",
    'President, Student Analytics & Business Intelligence Society',
  ],
  template: 'modern',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentView, setCurrentView] = useState<PageView>('landing');
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // ---------------------------------------------------------
  // USER STATE
  // ---------------------------------------------------------

  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_USER);

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }

    return INITIAL_USER_PROFILE;
  });

  const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY_DEMO_MODE) === 'true';
    } catch {
      return false;
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY_DEMO_MODE) === 'true';
    } catch {
      return false;
    }
  });

  // ---------------------------------------------------------
  // FIREBASE AUTH STATE
  // ---------------------------------------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setIsLoggedIn(true);
        setIsDemoMode(false);
        try {
          localStorage.removeItem(LOCAL_STORAGE_KEY_DEMO_MODE);
        } catch {
          // ignore
        }

        setUser((prev) => ({
          ...prev,
          email: firebaseUser.email || prev.email,
          name: firebaseUser.displayName || prev.name,
        }));
      } else {
        // If not authenticated in Firebase, preserve Demo Mode if explicitly active
        const wasDemo = localStorage.getItem(LOCAL_STORAGE_KEY_DEMO_MODE) === 'true';
        if (wasDemo) {
          setIsLoggedIn(true);
          setIsDemoMode(true);
        } else {
          setIsLoggedIn(false);
          setIsDemoMode(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // ---------------------------------------------------------
  // SAVED ITEMS
  // ---------------------------------------------------------

  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SAVED);

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }

    return [
      {
        id: 'saved-1',
        type: 'job',
        itemId: 'job-1',
        title: 'Associate Data Analyst',
        subtitle: 'Acme Global Insights • $75k - $88k',
        savedAt: '2 days ago',
      },
      {
        id: 'saved-2',
        type: 'certification',
        itemId: 'cert-google-da',
        title: 'Google Data Analytics Professional Certificate',
        subtitle: 'Google • 100% Free Audit',
        savedAt: '3 days ago',
      },
      {
        id: 'saved-3',
        type: 'project',
        itemId: 'proj-churn-1',
        title: 'Customer Churn Analysis & Retention Modeling',
        subtitle: 'Intermediate • SQL & Power BI',
        savedAt: 'Yesterday',
      },
    ];
  });

  // ---------------------------------------------------------
  // APPLIED ITEMS
  // ---------------------------------------------------------

  const [appliedIds, setAppliedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_APPLIED);

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }

    return ['int-1'];
  });

  // ---------------------------------------------------------
  // RESUME DATA
  // ---------------------------------------------------------

  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_RESUME);

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }

    return INITIAL_RESUME_DATA;
  });

  // ---------------------------------------------------------
  // ROADMAP
  // ---------------------------------------------------------

  const [completedMilestoneIds, setCompletedMilestoneIds] = useState<
    string[]
  >(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_ROADMAP);

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }

    return ['da-1'];
  });

  // ---------------------------------------------------------
  // LOCAL STORAGE
  // ---------------------------------------------------------

  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_USER,
        JSON.stringify(user)
      );
    } catch {
      // ignore
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_SAVED,
        JSON.stringify(savedItems)
      );
    } catch {
      // ignore
    }
  }, [savedItems]);

  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_APPLIED,
        JSON.stringify(appliedIds)
      );
    } catch {
      // ignore
    }
  }, [appliedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ROADMAP,
        JSON.stringify(completedMilestoneIds)
      );
    } catch {
      // ignore
    }
  }, [completedMilestoneIds]);

  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_RESUME,
        JSON.stringify(resumeData)
      );
    } catch {
      // ignore
    }
  }, [resumeData]);

  // ---------------------------------------------------------
  // SELECTED DOMAIN
  // ---------------------------------------------------------

  const selectedDomain = useMemo(() => {
    const found = CAREER_DOMAINS.find(
      (d) => d.id === user.selectedDomainId
    );

    return found || CAREER_DOMAINS[0];
  }, [user.selectedDomainId]);

  // ---------------------------------------------------------
  // SELECTED ROLE
  // ---------------------------------------------------------

  const selectedRole = useMemo(() => {
    const found = CAREER_ROLES.find(
      (r) => r.id === user.selectedRoleId
    );

    if (found) {
      return found;
    }

    const fallbackInDomain = CAREER_ROLES.find(
      (r) => r.domainId === selectedDomain.id
    );

    return fallbackInDomain || CAREER_ROLES[0];
  }, [user.selectedRoleId, selectedDomain.id]);

  // ---------------------------------------------------------
  // AVAILABLE ROLES
  // ---------------------------------------------------------

  const availableRolesForSelectedDomain = useMemo(() => {
    return CAREER_ROLES.filter(
      (r) => r.domainId === selectedDomain.id
    );
  }, [selectedDomain.id]);

  // ---------------------------------------------------------
  // SKILL GAP ENGINE
  // ---------------------------------------------------------

  const skillGapResult: SkillGapAnalysisResult = useMemo(() => {
    const reqSkills = selectedRole.requiredSkills;

    if (!reqSkills || reqSkills.length === 0) {
      return {
        matchPercentage: 0,
        matchScoreLabel: 'Needs Assessment',
        matchingSkills: [],
        inProgressSkills: [],
        missingSkills: [],
        allBreakdown: [],
        priorityFocusSkill: null,
      };
    }

    let totalPoints = 0;
    let earnedPoints = 0;

    const allBreakdown: SkillGapItem[] = reqSkills.map((req) => {
      const userSkill = user.currentSkills.find(
        (s) =>
          s.name.toLowerCase() === req.name.toLowerCase()
      );

      const userLevel: SkillLevel = userSkill
        ? userSkill.level
        : 'None';

      const weight =
        req.importance === 'Essential'
          ? 3
          : req.importance === 'High'
          ? 2
          : 1;

      totalPoints += weight * 3;

      let userScore = 0;

      if (userLevel === 'Advanced') {
        userScore = 3;
      } else if (userLevel === 'Intermediate') {
        userScore = 2;
      } else if (userLevel === 'Beginner') {
        userScore = 1;
      }

      earnedPoints += userScore * weight;

      let status: SkillStatus = 'Missing';
      let progressPercent = 0;

      if (userLevel === 'Advanced') {
        status = 'Completed';
        progressPercent = 100;
      } else if (userLevel === 'Intermediate') {
        if (
          req.requiredLevel === 'Intermediate' ||
          req.requiredLevel === 'Beginner'
        ) {
          status = 'Completed';
          progressPercent = 100;
        } else {
          status = 'In Progress';
          progressPercent = 66;
        }
      } else if (userLevel === 'Beginner') {
        if (req.requiredLevel === 'Beginner') {
          status = 'In Progress';
          progressPercent = 50;
        } else {
          status = 'In Progress';
          progressPercent = 33;
        }
      }

      return {
        name: req.name,
        category: req.category,
        requiredLevel: req.requiredLevel,
        userLevel,
        status,
        progressPercent,
        importance: req.importance,
      };
    });

    const matchPercentage = Math.min(
      100,
      Math.max(
        10,
        Math.round(
          (earnedPoints / (totalPoints || 1)) * 100
        )
      )
    );

    let matchScoreLabel = 'Building Foundations';

    if (matchPercentage >= 85) {
      matchScoreLabel = 'Highly Competitive';
    } else if (matchPercentage >= 70) {
      matchScoreLabel = 'Strong Fit';
    } else if (matchPercentage >= 50) {
      matchScoreLabel = 'Moderate Alignment';
    }

    const matchingSkills = allBreakdown.filter(
      (s) => s.status === 'Completed'
    );

    const inProgressSkills = allBreakdown.filter(
      (s) => s.status === 'In Progress'
    );

    const missingSkills = allBreakdown.filter(
      (s) => s.status === 'Missing'
    );

    const highPriorityMissing =
      allBreakdown.find(
        (s) =>
          (s.status === 'In Progress' ||
            s.status === 'Missing') &&
          s.importance === 'Essential'
      ) ||
      allBreakdown.find(
        (s) => s.status === 'In Progress'
      ) ||
      allBreakdown.find(
        (s) => s.status === 'Missing'
      );

    let priorityFocusSkill = null;

    if (highPriorityMissing) {
      const projectedBoost = Math.min(
        96,
        matchPercentage + 14
      );

      priorityFocusSkill = {
        name: highPriorityMissing.name,
        description: `Closing your gap in ${highPriorityMissing.name} will elevate your match score to ${projectedBoost}%. Mastering this competency is essential for daily ${selectedRole.name} tasks.`,
        targetScore: projectedBoost,
      };
    }

    return {
      matchPercentage,
      matchScoreLabel,
      matchingSkills,
      inProgressSkills,
      missingSkills,
      allBreakdown,
      priorityFocusSkill,
    };
  }, [selectedRole, user.currentSkills]);

  // ---------------------------------------------------------
  // READINESS SCORE
  // ---------------------------------------------------------

  useEffect(() => {
    setUser((prev) => ({
      ...prev,
      careerReadinessScore:
        skillGapResult.matchPercentage,
    }));
  }, [skillGapResult.matchPercentage]);

  // ---------------------------------------------------------
  // ROADMAP
  // ---------------------------------------------------------

  const milestones: RoadmapMilestone[] = useMemo(() => {
    const list =
      ROADMAPS_BY_ROLE[selectedRole.id] ||
      ROADMAPS_BY_ROLE['data-analyst'] ||
      ROADMAPS_BY_ROLE['default'];

    return list.map((m, idx) => {
      const isCompleted =
        completedMilestoneIds.includes(m.id);

      let status:
        | 'completed'
        | 'in_progress'
        | 'locked' = 'locked';

      if (isCompleted) {
        status = 'completed';
      } else {
        const prevCompleted =
          idx === 0 ||
          completedMilestoneIds.includes(
            list[idx - 1].id
          );

        status = prevCompleted
          ? 'in_progress'
          : 'locked';
      }

      return {
        ...m,
        isCompleted,
        status,
      };
    });
  }, [selectedRole.id, completedMilestoneIds]);

  const roadmapProgressPercent = useMemo(() => {
    if (!milestones.length) {
      return 0;
    }

    const completed = milestones.filter(
      (m) => m.isCompleted
    ).length;

    return Math.round(
      (completed / milestones.length) * 100
    );
  }, [milestones]);

  const toggleMilestone = (milestoneId: string) => {
    setCompletedMilestoneIds((prev) => {
      const exists = prev.includes(milestoneId);

      return exists
        ? prev.filter((id) => id !== milestoneId)
        : [...prev, milestoneId];
    });

    showToast(
      'Roadmap Updated',
      'Milestone status updated successfully!',
      'success'
    );
  };

  // ---------------------------------------------------------
  // CAREER RECOMMENDATIONS
  // ---------------------------------------------------------

  const careerRecommendations: CareerMatchRecommendation[] =
    useMemo(() => {
      const userSkillNames = new Set(
        user.currentSkills
          .filter((s) => s.level !== 'None')
          .map((s) => s.name.toLowerCase())
      );

      return CAREER_ROLES.map((role) => {
        const domain =
          CAREER_DOMAINS.find(
            (d) => d.id === role.domainId
          ) || CAREER_DOMAINS[0];

        const reqSkills = role.requiredSkills || [];

        const total = reqSkills.length || 1;

        const matching = reqSkills.filter((r) =>
          userSkillNames.has(r.name.toLowerCase())
        );

        const missing = reqSkills.filter(
          (r) =>
            !userSkillNames.has(
              r.name.toLowerCase()
            )
        );

        let matchScore = Math.round(
          (matching.length / total) * 100
        );

        if (
          domain.id === user.selectedDomainId
        ) {
          matchScore = Math.min(
            95,
            matchScore + 10
          );
        }

        return {
          role,
          domain,
          matchPercentage: Math.max(
            35,
            matchScore
          ),
          matchingSkillsCount: matching.length,
          totalSkillsCount: total,
          topMatchingSkills: matching
            .map((m) => m.name),
          missingSkills: missing
            .map((m) => m.name),
          reason: `Based on your proficiency in ${matching
            .slice(0, 3)
            .map((m) => m.name)
            .join(', ') || 'foundation skills'} and domain preferences.`,
        };
      }).sort(
        (a, b) =>
          b.matchPercentage - a.matchPercentage
      );
    }, [
      user.currentSkills,
      user.selectedDomainId,
    ]);

  // ---------------------------------------------------------
  // TOAST
  // ---------------------------------------------------------

  const showToast = (
    title: string,
    message: string,
    type: 'success' | 'info' | 'warning' = 'info'
  ) => {
    const id = Math.random()
      .toString(36)
      .substring(2, 9);

    setToasts((prev) => [
      ...prev,
      {
        id,
        title,
        message,
        type,
      },
    ]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  // ---------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------

  const navigate = (
    view: PageView,
    params?: {
      domainId?: string;
      roleId?: string;
    }
  ) => {
    if (params?.domainId) {
      setUser((prev) => ({
        ...prev,
        selectedDomainId: params.domainId!,
      }));
    }

    if (params?.roleId) {
      setUser((prev) => ({
        ...prev,
        selectedRoleId: params.roleId!,
      }));
    }

    setCurrentView(view);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ---------------------------------------------------------
  // DOMAIN / ROLE
  // ---------------------------------------------------------

  const setSelectedDomainId = (
    domainId: string
  ) => {
    const domain = CAREER_DOMAINS.find(
      (d) => d.id === domainId
    );

    if (domain) {
      const firstRole = CAREER_ROLES.find(
        (r) => r.domainId === domainId
      );

      setUser((prev) => ({
        ...prev,
        selectedDomainId: domainId,
        selectedRoleId: firstRole
          ? firstRole.id
          : prev.selectedRoleId,
      }));

      showToast(
        'Domain Updated',
        `Active career domain set to ${domain.name}.`,
        'info'
      );
    }
  };

  const setSelectedRoleId = (
    roleId: string
  ) => {
    const role = CAREER_ROLES.find(
      (r) => r.id === roleId
    );

    if (role) {
      setUser((prev) => ({
        ...prev,
        selectedRoleId: roleId,
        selectedDomainId: role.domainId,
      }));

      showToast(
        'Role Selected',
        `Target career role updated to ${role.name}.`,
        'success'
      );
    }
  };

  // ---------------------------------------------------------
  // PROFILE / SKILLS
  // ---------------------------------------------------------

  const updateUserProfile = (
    updates: Partial<UserProfile>
  ) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));

    showToast(
      'Profile Updated',
      'Your profile details have been saved.',
      'success'
    );
  };

  const updateUserSkill = (
    skillName: string,
    level: SkillLevel
  ) => {
    setUser((prev) => {
      const existing =
        prev.currentSkills.filter(
          (s) =>
            s.name.toLowerCase() !==
            skillName.toLowerCase()
        );

      return {
        ...prev,
        currentSkills: [
          ...existing,
          {
            name: skillName,
            level,
          },
        ],
      };
    });

    showToast(
      'Skill Updated',
      `${skillName} set to ${level}.`,
      'success'
    );
  };

  const addCustomSkill = (
    skillName: string,
    level: SkillLevel
  ) => {
    if (!skillName.trim()) {
      return;
    }

    updateUserSkill(
      skillName.trim(),
      level
    );
  };

  // ---------------------------------------------------------
  // SAVED ITEMS
  // ---------------------------------------------------------

  const toggleSaveItem = (
    type: SavedItem['type'],
    item: {
      id: string;
      title: string;
      subtitle: string;
    }
  ) => {
    setSavedItems((prev) => {
      const exists = prev.some(
        (i) => i.itemId === item.id
      );

      if (exists) {
        showToast(
          'Removed from Saved',
          `${item.title} removed.`,
          'info'
        );

        return prev.filter(
          (i) => i.itemId !== item.id
        );
      }

      showToast(
        'Saved Successfully',
        `${item.title} saved to your collection.`,
        'success'
      );

      return [
        ...prev,
        {
          id: 'saved-' + Date.now(),
          type,
          itemId: item.id,
          title: item.title,
          subtitle: item.subtitle,
          savedAt: 'Just now',
        },
      ];
    });
  };

  const isItemSaved = (
    itemId: string
  ) => {
    return savedItems.some(
      (i) => i.itemId === itemId
    );
  };

  // ---------------------------------------------------------
  // APPLICATIONS
  // ---------------------------------------------------------

  const applyToOpportunity = (
    id: string,
    title: string,
    company: string
  ) => {
    if (appliedIds.includes(id)) {
      showToast(
        'Already Applied',
        `You have already applied for ${title} at ${company}.`,
        'info'
      );

      return;
    }

    setAppliedIds((prev) => [
      ...prev,
      id,
    ]);

    showToast(
      'Application Submitted!',
      `Your application for ${title} at ${company} was recorded.`,
      'success'
    );
  };

  const isApplied = (id: string) =>
    appliedIds.includes(id);

  // ---------------------------------------------------------
  // RESUME
  // ---------------------------------------------------------

  const updateResumeData = (
    updates: Partial<ResumeData>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const resetResumeToDefault = () => {
    setResumeData(
      INITIAL_RESUME_DATA
    );

    showToast(
      'Resume Reset',
      'Restored default template and information.',
      'info'
    );
  };

  // ---------------------------------------------------------
  // AUTH
  // ---------------------------------------------------------

  const login = (
    email?: string,
    password?: string
  ) => {
    setIsDemoMode(false);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY_DEMO_MODE);
    } catch {
      // ignore
    }

    if (email && email.trim()) {
      setUser((prev) => ({
        ...prev,
        email: email.trim(),
      }));
    }

    setIsLoggedIn(true);

    showToast(
      'Welcome Back!',
      'Successfully authenticated to CareerPath.',
      'success'
    );

    navigate('dashboard');
  };

  const loginAsDemo = () => {
    setIsDemoMode(true);
    setIsLoggedIn(true);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_DEMO_MODE, 'true');
    } catch {
      // ignore
    }
    setUser(INITIAL_USER_PROFILE);

    showToast(
      'Demo Mode Active',
      'Exploring as Alex Chen (Student Benchmark). Local preview mode.',
      'info'
    );

    navigate('dashboard');
  };

  const signup = (userData: {
    name: string;
    email: string;
    password?: string;
  }) => {
    setIsDemoMode(false);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY_DEMO_MODE);
    } catch {
      // ignore
    }

    setIsLoggedIn(true);

    setUser((prev) => ({
      ...prev,
      name:
        userData.name || prev.name,
      email:
        userData.email || prev.email,
      isOnboarded: false,
    }));

    showToast(
      'Account Created!',
      "Let's set up your career profile.",
      'success'
    );

    navigate('onboarding');
  };

  const logout = async () => {
    try {
      if (auth.currentUser) {
        await signOut(auth);
      }
    } catch (error) {
      console.warn('Firebase logout notice:', error);
    }

    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY_DEMO_MODE);
    } catch {
      // ignore
    }

    setIsDemoMode(false);
    setIsLoggedIn(false);

    showToast(
      'Signed Out',
      'You have been safely signed out.',
      'info'
    );

    navigate('landing');
  };

  // ---------------------------------------------------------
  // PROVIDER
  // ---------------------------------------------------------

  return (
    <AppContext.Provider
      value={{
        currentView,
        navigate,
        user,
        isLoggedIn,
        isDemoMode,

        login,
        loginAsDemo,
        signup,
        logout,

        updateUserProfile,
        updateUserSkill,
        addCustomSkill,

        selectedDomain,
        selectedRole,
        setSelectedDomainId,
        setSelectedRoleId,
        availableRolesForSelectedDomain,

        skillGapResult,

        milestones,
        toggleMilestone,
        roadmapProgressPercent,

        careerRecommendations,

        savedItems,
        toggleSaveItem,
        isItemSaved,

        appliedIds,
        applyToOpportunity,
        isApplied,

        resumeData,
        updateResumeData,
        resetResumeToDefault,

        toasts,
        showToast,
        removeToast,

        globalSearch,
        setGlobalSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'useApp must be used within an AppProvider'
    );
  }

  return context;
};