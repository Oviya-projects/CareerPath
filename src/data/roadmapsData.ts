import { RoadmapMilestone } from '../types';

export const ROADMAPS_BY_ROLE: Record<string, RoadmapMilestone[]> = {
  "data-analyst": [
    {
      "id": "data-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Data Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Data Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Tableau",
        "Python",
        "Data Visualization",
        "Excel"
      ],
      "tasks": [
        "Study core theory and fundamentals of Tableau, Python",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": true,
      "status": "completed",
      "actionLabel": "Review Module",
      "resourcesCount": 4
    },
    {
      "id": "data-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Data Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Power BI",
        "Python",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Power BI",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Continue Learning",
      "resourcesCount": 5
    },
    {
      "id": "data-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Data Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Excel",
        "SQL",
        "Power BI"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Excel, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "data-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Data Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Excel",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "data-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Data Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Data Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "business-analyst-da": [
    {
      "id": "business-analyst-da-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Business Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Business Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Analysis",
        "Requirement Gathering",
        "Agile/Scrum",
        "Excel"
      ],
      "tasks": [
        "Study core theory and fundamentals of Business Analysis, Requirement Gathering",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "business-analyst-da-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Business Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Business Analysis",
        "SQL",
        "Power BI",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Business Analysis, SQL",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "business-analyst-da-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Business Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Business Analysis",
        "Excel",
        "Requirement Gathering",
        "SQL"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Business Analysis, Excel",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "business-analyst-da-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Business Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Analysis",
        "Excel",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "business-analyst-da-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Business Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Business Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "bi-analyst": [
    {
      "id": "bi-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for BI Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for BI Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Data Warehousing",
        "Problem Solving",
        "Power BI"
      ],
      "tasks": [
        "Study core theory and fundamentals of Data Warehousing, Problem Solving",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "bi-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily BI Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Data Modeling",
        "DAX",
        "Power BI",
        "Tableau"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Data Modeling",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "bi-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized BI Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Power BI",
        "SQL",
        "Data Modeling"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Power BI, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "bi-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level BI Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Power BI",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "bi-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for BI Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to BI Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "reporting-analyst": [
    {
      "id": "reporting-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Reporting Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Reporting Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Power BI",
        "Data Auditing",
        "Python",
        "Excel"
      ],
      "tasks": [
        "Study core theory and fundamentals of Power BI, Data Auditing",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "reporting-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Reporting Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Data Auditing",
        "Python",
        "Excel",
        "Power BI"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Data Auditing",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "reporting-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Reporting Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Excel",
        "SQL",
        "Attention to Detail",
        "Data Auditing"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Excel, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "reporting-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Reporting Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Excel",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "reporting-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Reporting Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Reporting Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "full-stack-developer": [
    {
      "id": "full-stack-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Full-Stack Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Full-Stack Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "HTML",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of HTML, Git/GitHub",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": true,
      "status": "completed",
      "actionLabel": "Review Module",
      "resourcesCount": 4
    },
    {
      "id": "full-stack-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Full-Stack Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying HTML, CSS",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Continue Learning",
      "resourcesCount": 5
    },
    {
      "id": "full-stack-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Full-Stack Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing HTML, CSS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "full-stack-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Full-Stack Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "full-stack-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Full-Stack Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Full-Stack Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "web-developer": [
    {
      "id": "web-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Web Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Web Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Responsive Design",
        "Web Accessibility",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Responsive Design, Web Accessibility",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "web-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Web Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying HTML, CSS",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "web-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Web Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing HTML, CSS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "web-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Web Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "web-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Web Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Web Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "software-developer": [
    {
      "id": "software-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Software Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Software Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Programming Fundamentals",
        "Data Structures",
        "Algorithms",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Programming Fundamentals, Data Structures",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "software-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Software Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Data Structures",
        "Algorithms",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Data Structures, Algorithms",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "software-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Software Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Programming Fundamentals",
        "Data Structures",
        "Algorithms"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Programming Fundamentals, Data Structures",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "software-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Software Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Programming Fundamentals",
        "Data Structures",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "software-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Software Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Software Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "ml-engineer": [
    {
      "id": "ml-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Machine Learning Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Machine Learning Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Machine Learning",
        "Statistics",
        "Linear Algebra",
        "Scikit-learn"
      ],
      "tasks": [
        "Study core theory and fundamentals of Machine Learning, Statistics",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "ml-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Machine Learning Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "Machine Learning",
        "Scikit-learn",
        "PyTorch"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, Machine Learning",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "ml-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Machine Learning Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "Machine Learning",
        "Scikit-learn"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, Machine Learning",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "ml-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Machine Learning Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "Machine Learning",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "ml-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Machine Learning Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Machine Learning Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "ai-engineer": [
    {
      "id": "ai-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for AI Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for AI Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Deep Learning",
        "Prompt Engineering",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Deep Learning, Prompt Engineering",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "ai-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily AI Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "Deep Learning",
        "LLMs",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, Deep Learning",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "ai-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized AI Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "LLMs",
        "REST APIs",
        "Deep Learning"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, LLMs",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "ai-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level AI Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "LLMs",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "ai-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for AI Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to AI Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "ml-developer": [
    {
      "id": "ml-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for ML Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for ML Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Machine Learning",
        "Statistics",
        "Data Visualization",
        "Pandas"
      ],
      "tasks": [
        "Study core theory and fundamentals of Machine Learning, Statistics",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "ml-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily ML Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "Pandas",
        "NumPy"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, Pandas",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "ml-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized ML Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "Pandas",
        "NumPy"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, Pandas",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "ml-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level ML Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "Pandas",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "ml-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for ML Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to ML Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "cybersecurity-analyst": [
    {
      "id": "cybersecurity-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Cybersecurity Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Cybersecurity Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Threat Analysis",
        "Linux"
      ],
      "tasks": [
        "Study core theory and fundamentals of Cybersecurity Fundamentals, Networking",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "cybersecurity-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Cybersecurity Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Networking",
        "Linux",
        "Threat Analysis",
        "Wireshark"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Networking, Linux",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "cybersecurity-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Cybersecurity Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Linux"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cybersecurity Fundamentals, Networking",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "cybersecurity-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Cybersecurity Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "cybersecurity-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Cybersecurity Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Cybersecurity Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "security-engineer": [
    {
      "id": "security-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Security Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Security Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Cryptography",
        "Linux"
      ],
      "tasks": [
        "Study core theory and fundamentals of Cybersecurity Fundamentals, Networking",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "security-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Security Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Cryptography",
        "Cloud Security",
        "Python",
        "Linux"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Cryptography, Cloud Security",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "security-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Security Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Linux",
        "Cryptography",
        "Cloud Security"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cybersecurity Fundamentals, Networking",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "security-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Security Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "security-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Security Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Security Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "soc-analyst": [
    {
      "id": "soc-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for SOC Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for SOC Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Threat Analysis",
        "SIEM Tools"
      ],
      "tasks": [
        "Study core theory and fundamentals of Cybersecurity Fundamentals, Networking",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "soc-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily SOC Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "SIEM Tools",
        "Wireshark"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Cybersecurity Fundamentals, Networking",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "soc-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized SOC Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "SIEM Tools"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cybersecurity Fundamentals, Networking",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "soc-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level SOC Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cybersecurity Fundamentals",
        "Networking",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "soc-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for SOC Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to SOC Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "cloud-engineer": [
    {
      "id": "cloud-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Cloud Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Cloud Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "Networking",
        "Terraform",
        "AWS"
      ],
      "tasks": [
        "Study core theory and fundamentals of Cloud Fundamentals, Networking",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "cloud-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Cloud Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "AWS",
        "Linux",
        "Networking"
      ],
      "tasks": [
        "Build intermediate mini-projects applying AWS, Linux",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "cloud-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Cloud Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "AWS",
        "Linux"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cloud Fundamentals, AWS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "cloud-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Cloud Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "AWS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "cloud-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Cloud Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Cloud Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "cloud-administrator": [
    {
      "id": "cloud-administrator-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Cloud Administrator",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Cloud Administrator.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "Cloud Security",
        "Azure"
      ],
      "tasks": [
        "Study core theory and fundamentals of Cloud Fundamentals, Cloud Security",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "cloud-administrator-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Cloud Administrator tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Azure",
        "AWS",
        "Linux"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Azure, AWS",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "cloud-administrator-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Cloud Administrator workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "Linux",
        "Azure",
        "AWS"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cloud Fundamentals, Linux",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "cloud-administrator-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Cloud Administrator positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "Linux",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "cloud-administrator-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Cloud Administrator roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Cloud Administrator",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "cloud-architect": [
    {
      "id": "cloud-architect-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Cloud Architect",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Cloud Architect.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "Networking",
        "System Architecture",
        "AWS"
      ],
      "tasks": [
        "Study core theory and fundamentals of Cloud Fundamentals, Networking",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "cloud-architect-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Cloud Architect tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Azure",
        "Cloud Security",
        "Terraform",
        "AWS"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Azure, Cloud Security",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "cloud-architect-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Cloud Architect workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "AWS",
        "Networking",
        "Azure",
        "Cloud Security"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cloud Fundamentals, AWS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "cloud-architect-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Cloud Architect positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud Fundamentals",
        "AWS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "cloud-architect-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Cloud Architect roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Cloud Architect",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "ui-designer": [
    {
      "id": "ui-designer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for UI Designer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for UI Designer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "UI Design",
        "Design Systems",
        "Wireframing",
        "Figma"
      ],
      "tasks": [
        "Study core theory and fundamentals of UI Design, Design Systems",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "ui-designer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily UI Designer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Design Systems",
        "Prototyping",
        "Wireframing",
        "Figma"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Design Systems, Prototyping",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "ui-designer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized UI Designer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "UI Design",
        "Figma",
        "Design Systems",
        "Prototyping"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing UI Design, Figma",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "ui-designer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level UI Designer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "UI Design",
        "Figma",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "ui-designer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for UI Designer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to UI Designer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "ux-designer": [
    {
      "id": "ux-designer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for UX Designer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for UX Designer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "UX Research",
        "Wireframing",
        "Usability Testing",
        "Figma"
      ],
      "tasks": [
        "Study core theory and fundamentals of UX Research, Wireframing",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "ux-designer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily UX Designer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Figma",
        "Usability Testing",
        "Information Architecture"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Figma, Usability Testing",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "ux-designer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized UX Designer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "UX Research",
        "Figma",
        "Wireframing",
        "Usability Testing"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing UX Research, Figma",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "ux-designer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level UX Designer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "UX Research",
        "Figma",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "ux-designer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for UX Designer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to UX Designer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "product-designer": [
    {
      "id": "product-designer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Product Designer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Product Designer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "UI Design",
        "UX Research",
        "Design Systems",
        "Figma"
      ],
      "tasks": [
        "Study core theory and fundamentals of UI Design, UX Research",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "product-designer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Product Designer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "UX Research",
        "Design Systems",
        "Product Strategy",
        "Figma"
      ],
      "tasks": [
        "Build intermediate mini-projects applying UX Research, Design Systems",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "product-designer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Product Designer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "UI Design",
        "UX Research",
        "Figma",
        "Design Systems"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing UI Design, UX Research",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "product-designer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Product Designer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "UI Design",
        "UX Research",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "product-designer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Product Designer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Product Designer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "devops-engineer": [
    {
      "id": "devops-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for DevOps Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for DevOps Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "CI/CD",
        "Terraform",
        "Linux"
      ],
      "tasks": [
        "Study core theory and fundamentals of CI/CD, Terraform",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "devops-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily DevOps Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Kubernetes",
        "Cloud",
        "Python",
        "Linux",
        "Docker"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Kubernetes, Cloud",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "devops-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized DevOps Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Linux",
        "Docker",
        "Kubernetes",
        "Cloud"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Linux, Docker",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "devops-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level DevOps Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Linux",
        "Docker",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "devops-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for DevOps Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to DevOps Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "cloud-devops-engineer": [
    {
      "id": "cloud-devops-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Cloud DevOps Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Cloud DevOps Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "CI/CD",
        "AWS"
      ],
      "tasks": [
        "Study core theory and fundamentals of CI/CD, AWS",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "cloud-devops-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Cloud DevOps Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Cloud",
        "AWS",
        "Docker"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Cloud, AWS",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "cloud-devops-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Cloud DevOps Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Cloud",
        "AWS",
        "Docker"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Cloud, AWS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "cloud-devops-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Cloud DevOps Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Cloud",
        "AWS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "cloud-devops-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Cloud DevOps Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Cloud DevOps Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "site-reliability-engineer": [
    {
      "id": "site-reliability-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Site Reliability Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Site Reliability Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "System Monitoring",
        "Networking",
        "Problem Solving",
        "Linux"
      ],
      "tasks": [
        "Study core theory and fundamentals of System Monitoring, Networking",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "site-reliability-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Site Reliability Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "Kubernetes",
        "Networking",
        "Linux"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, Kubernetes",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "site-reliability-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Site Reliability Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Linux",
        "Python",
        "System Monitoring",
        "Kubernetes"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Linux, Python",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "site-reliability-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Site Reliability Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Linux",
        "Python",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "site-reliability-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Site Reliability Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Site Reliability Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "flutter-developer": [
    {
      "id": "flutter-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Flutter Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Flutter Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Mobile UI/UX",
        "Firebase",
        "Flutter"
      ],
      "tasks": [
        "Study core theory and fundamentals of Mobile UI/UX, Firebase",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "flutter-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Flutter Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Dart",
        "REST APIs",
        "Mobile UI/UX",
        "Flutter",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Dart, REST APIs",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "flutter-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Flutter Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Flutter",
        "Dart",
        "REST APIs"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Flutter, Dart",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "flutter-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Flutter Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Flutter",
        "Dart",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "flutter-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Flutter Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Flutter Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "android-developer": [
    {
      "id": "android-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Android Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Android Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Mobile UI/UX",
        "OOP",
        "Firebase",
        "Android"
      ],
      "tasks": [
        "Study core theory and fundamentals of Mobile UI/UX, OOP",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "android-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Android Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Kotlin",
        "REST APIs",
        "Mobile UI/UX",
        "Android",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Kotlin, REST APIs",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "android-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Android Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Kotlin",
        "Android",
        "REST APIs"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Kotlin, Android",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "android-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Android Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Kotlin",
        "Android",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "android-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Android Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Android Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "mobile-app-developer": [
    {
      "id": "mobile-app-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Mobile App Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Mobile App Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Programming Fundamentals",
        "Mobile UI/UX",
        "Responsive Design",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Programming Fundamentals, Mobile UI/UX",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "mobile-app-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Mobile App Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Mobile UI/UX",
        "REST APIs",
        "Git/GitHub",
        "Firebase"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Mobile UI/UX, REST APIs",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "mobile-app-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Mobile App Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Programming Fundamentals",
        "Mobile UI/UX",
        "REST APIs"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Programming Fundamentals, Mobile UI/UX",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "mobile-app-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Mobile App Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Programming Fundamentals",
        "Mobile UI/UX",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "mobile-app-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Mobile App Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Mobile App Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "data-scientist": [
    {
      "id": "data-scientist-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Data Scientist",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Data Scientist.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Statistics",
        "Machine Learning",
        "Data Visualization",
        "Pandas"
      ],
      "tasks": [
        "Study core theory and fundamentals of Statistics, Machine Learning",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "data-scientist-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Data Scientist tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "NumPy",
        "Machine Learning",
        "Pandas"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, NumPy",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "data-scientist-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Data Scientist workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "Statistics",
        "Pandas",
        "NumPy"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, Statistics",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "data-scientist-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Data Scientist positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "Statistics",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "data-scientist-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Data Scientist roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Data Scientist",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "applied-data-scientist": [
    {
      "id": "applied-data-scientist-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Applied Data Scientist",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Applied Data Scientist.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Machine Learning",
        "Statistics",
        "Data Visualization",
        "Pandas"
      ],
      "tasks": [
        "Study core theory and fundamentals of Machine Learning, Statistics",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "applied-data-scientist-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Applied Data Scientist tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "Machine Learning",
        "SQL",
        "Pandas",
        "Scikit-learn"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, Machine Learning",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "applied-data-scientist-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Applied Data Scientist workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "Machine Learning",
        "SQL"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, Machine Learning",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "applied-data-scientist-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Applied Data Scientist positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "Machine Learning",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "applied-data-scientist-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Applied Data Scientist roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Applied Data Scientist",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "data-science-analyst": [
    {
      "id": "data-science-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Data Science Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Data Science Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Statistics",
        "Data Visualization",
        "Pandas"
      ],
      "tasks": [
        "Study core theory and fundamentals of Statistics, Data Visualization",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "data-science-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Data Science Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "SQL",
        "Statistics",
        "Pandas",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, SQL",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "data-science-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Data Science Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "SQL",
        "Statistics"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "data-science-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Data Science Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "data-science-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Data Science Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Data Science Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "data-engineer": [
    {
      "id": "data-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Data Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Data Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "ETL",
        "Data Pipelines",
        "Apache Spark"
      ],
      "tasks": [
        "Study core theory and fundamentals of ETL, Data Pipelines",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "data-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Data Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Python",
        "Databases",
        "Apache Spark"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Python",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "data-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Data Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "SQL",
        "Python",
        "Databases"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing SQL, Python",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "data-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Data Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "SQL",
        "Python",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "data-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Data Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Data Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "etl-developer": [
    {
      "id": "etl-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for ETL Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for ETL Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "ETL",
        "Data Pipelines"
      ],
      "tasks": [
        "Study core theory and fundamentals of ETL, Data Pipelines",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "etl-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily ETL Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Databases",
        "Data Warehousing"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Databases",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "etl-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized ETL Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "SQL",
        "Databases",
        "ETL"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing SQL, Databases",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "etl-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level ETL Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "SQL",
        "Databases",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "etl-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for ETL Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to ETL Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "data-pipeline-engineer": [
    {
      "id": "data-pipeline-engineer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Data Pipeline Engineer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Data Pipeline Engineer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Data Pipelines",
        "Apache Spark"
      ],
      "tasks": [
        "Study core theory and fundamentals of Data Pipelines, Apache Spark",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "data-pipeline-engineer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Data Pipeline Engineer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Python",
        "SQL",
        "Databases",
        "Apache Spark"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Python, SQL",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "data-pipeline-engineer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Data Pipeline Engineer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Python",
        "SQL",
        "Data Pipelines"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Python, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "data-pipeline-engineer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Data Pipeline Engineer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Python",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "data-pipeline-engineer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Data Pipeline Engineer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Data Pipeline Engineer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "business-analyst": [
    {
      "id": "business-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Business Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Business Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Analysis",
        "Statistics",
        "Data Visualization",
        "Excel"
      ],
      "tasks": [
        "Study core theory and fundamentals of Business Analysis, Statistics",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "business-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Business Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Power BI",
        "Statistics",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Power BI",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "business-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Business Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Excel",
        "SQL",
        "Business Analysis",
        "Power BI"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Excel, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "business-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Business Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Excel",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "business-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Business Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Business Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "bi-analyst-ba": [
    {
      "id": "bi-analyst-ba-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Business Intelligence Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Business Intelligence Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Intelligence",
        "Data Visualization",
        "Power BI"
      ],
      "tasks": [
        "Study core theory and fundamentals of Business Intelligence, Data Visualization",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "bi-analyst-ba-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Business Intelligence Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Tableau",
        "Data Visualization",
        "Power BI",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Tableau",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "bi-analyst-ba-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Business Intelligence Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Business Intelligence",
        "Power BI",
        "SQL",
        "Tableau"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Business Intelligence, Power BI",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "bi-analyst-ba-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Business Intelligence Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Intelligence",
        "Power BI",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "bi-analyst-ba-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Business Intelligence Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Business Intelligence Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "analytics-consultant": [
    {
      "id": "analytics-consultant-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Analytics Consultant",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Analytics Consultant.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Analysis",
        "Data Visualization",
        "Client Communication",
        "Power BI"
      ],
      "tasks": [
        "Study core theory and fundamentals of Business Analysis, Data Visualization",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "analytics-consultant-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Analytics Consultant tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Power BI",
        "Data Visualization",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Power BI",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "analytics-consultant-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Analytics Consultant workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Business Analysis",
        "SQL",
        "Excel",
        "Power BI"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Business Analysis, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "analytics-consultant-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Analytics Consultant positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Business Analysis",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "analytics-consultant-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Analytics Consultant roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Analytics Consultant",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "digital-marketing-specialist": [
    {
      "id": "digital-marketing-specialist-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Digital Marketing Specialist",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Digital Marketing Specialist.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "SEO",
        "Social Media Marketing",
        "Marketing Analytics",
        "Google Analytics"
      ],
      "tasks": [
        "Study core theory and fundamentals of SEO, Social Media Marketing",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "digital-marketing-specialist-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Digital Marketing Specialist tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SEO",
        "SEM",
        "Social Media Marketing",
        "Google Analytics"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SEO, SEM",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "digital-marketing-specialist-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Digital Marketing Specialist workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Google Analytics",
        "SEO",
        "SEM"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Google Analytics, SEO",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "digital-marketing-specialist-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Digital Marketing Specialist positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Google Analytics",
        "SEO",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "digital-marketing-specialist-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Digital Marketing Specialist roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Digital Marketing Specialist",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "seo-specialist": [
    {
      "id": "seo-specialist-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for SEO Specialist",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for SEO Specialist.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "SEO",
        "Content Marketing",
        "Marketing Analytics",
        "Google Analytics"
      ],
      "tasks": [
        "Study core theory and fundamentals of SEO, Content Marketing",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "seo-specialist-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily SEO Specialist tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Google Analytics",
        "Content Marketing",
        "Marketing Analytics"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Google Analytics, Content Marketing",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "seo-specialist-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized SEO Specialist workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "SEO",
        "Google Analytics",
        "Content Marketing"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing SEO, Google Analytics",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "seo-specialist-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level SEO Specialist positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "SEO",
        "Google Analytics",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "seo-specialist-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for SEO Specialist roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to SEO Specialist",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "marketing-analyst": [
    {
      "id": "marketing-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Marketing Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Marketing Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Marketing Analytics",
        "Data Visualization",
        "SEO",
        "Google Analytics"
      ],
      "tasks": [
        "Study core theory and fundamentals of Marketing Analytics, Data Visualization",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "marketing-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Marketing Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "SQL",
        "Data Visualization",
        "Google Analytics",
        "Excel"
      ],
      "tasks": [
        "Build intermediate mini-projects applying SQL, Data Visualization",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "marketing-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Marketing Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Marketing Analytics",
        "Google Analytics",
        "SQL",
        "Data Visualization"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Marketing Analytics, Google Analytics",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "marketing-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Marketing Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Marketing Analytics",
        "Google Analytics",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "marketing-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Marketing Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Marketing Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "product-manager": [
    {
      "id": "product-manager-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Product Manager",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Product Manager.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Product Strategy",
        "Product Roadmapping",
        "User Research"
      ],
      "tasks": [
        "Study core theory and fundamentals of Product Strategy, Product Roadmapping",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "product-manager-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Product Manager tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "User Research",
        "Market Research",
        "Analytics"
      ],
      "tasks": [
        "Build intermediate mini-projects applying User Research, Market Research",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "product-manager-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Product Manager workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Product Strategy",
        "Product Roadmapping",
        "User Research",
        "Market Research"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Product Strategy, Product Roadmapping",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "product-manager-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Product Manager positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Product Strategy",
        "Product Roadmapping",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "product-manager-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Product Manager roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Product Manager",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "associate-product-manager": [
    {
      "id": "associate-product-manager-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Associate Product Manager",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Associate Product Manager.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Agile/Scrum",
        "Product Roadmapping",
        "User Research"
      ],
      "tasks": [
        "Study core theory and fundamentals of Agile/Scrum, Product Roadmapping",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "associate-product-manager-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Associate Product Manager tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Agile/Scrum",
        "User Research",
        "Analytics"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Agile/Scrum, User Research",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "associate-product-manager-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Associate Product Manager workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Agile/Scrum",
        "Communication",
        "User Research"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Agile/Scrum, Communication",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "associate-product-manager-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Associate Product Manager positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Agile/Scrum",
        "Communication",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "associate-product-manager-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Associate Product Manager roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Associate Product Manager",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "product-analyst": [
    {
      "id": "product-analyst-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Product Analyst",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Product Analyst.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Product Strategy",
        "User Research",
        "Data Visualization"
      ],
      "tasks": [
        "Study core theory and fundamentals of Product Strategy, User Research",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "product-analyst-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Product Analyst tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Analytics",
        "SQL",
        "Product Strategy"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Analytics, SQL",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "product-analyst-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Product Analyst workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Analytics",
        "SQL"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Analytics, SQL",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "product-analyst-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Product Analyst positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Analytics",
        "SQL",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "product-analyst-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Product Analyst roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Product Analyst",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "frontend-developer": [
    {
      "id": "frontend-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Frontend Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Frontend Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Responsive Design",
        "Web Accessibility",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Responsive Design, Web Accessibility",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "frontend-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Frontend Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying HTML, CSS",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "frontend-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Frontend Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing HTML, CSS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "frontend-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Frontend Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "frontend-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Frontend Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Frontend Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "react-developer": [
    {
      "id": "react-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for React Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for React Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Responsive Design",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Responsive Design, Git/GitHub",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "react-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily React Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "React",
        "JavaScript",
        "TypeScript",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying React, JavaScript",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "react-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized React Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "React",
        "JavaScript",
        "TypeScript"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing React, JavaScript",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "react-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level React Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "React",
        "JavaScript",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "react-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for React Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to React Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "web-developer-fe": [
    {
      "id": "web-developer-fe-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Web Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Web Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Responsive Design",
        "Web Accessibility",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Responsive Design, Web Accessibility",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "web-developer-fe-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Web Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying HTML, CSS",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "web-developer-fe-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Web Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing HTML, CSS",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "web-developer-fe-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Web Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "HTML",
        "CSS",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "web-developer-fe-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Web Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Web Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "backend-developer": [
    {
      "id": "backend-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Backend Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Backend Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Node.js",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of Node.js, Git/GitHub",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "backend-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Backend Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Node.js",
        "REST APIs",
        "Databases",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Node.js, REST APIs",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "backend-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Backend Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Node.js",
        "REST APIs",
        "Databases"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Node.js, REST APIs",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "backend-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Backend Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Node.js",
        "REST APIs",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "backend-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Backend Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Backend Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "api-developer": [
    {
      "id": "api-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for API Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for API Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "REST APIs",
        "Git/GitHub"
      ],
      "tasks": [
        "Study core theory and fundamentals of REST APIs, Git/GitHub",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "api-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily API Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "REST APIs",
        "Node.js",
        "Databases",
        "Git/GitHub"
      ],
      "tasks": [
        "Build intermediate mini-projects applying REST APIs, Node.js",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "api-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized API Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "REST APIs",
        "Node.js",
        "Databases"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing REST APIs, Node.js",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "api-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level API Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "REST APIs",
        "Node.js",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "api-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for API Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to API Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "server-side-developer": [
    {
      "id": "server-side-developer-1",
      "stepNumber": 1,
      "title": "Foundations: Core Principles for Server-side Developer",
      "subtitle": "4 Weeks",
      "description": "Master fundamental concepts, industry terminology, and essential tools required for Server-side Developer.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Server-side Development"
      ],
      "tasks": [
        "Study core theory and fundamentals of Server-side Development",
        "Set up local development/practice environment and configure version control with Git",
        "Complete baseline practice exercises and code walk-throughs",
        "Document weekly learning reflections and problem-solving notes"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 4
    },
    {
      "id": "server-side-developer-2",
      "stepNumber": 2,
      "title": "Technical Competency & Tooling",
      "subtitle": "6 Weeks",
      "description": "Deep dive into primary frameworks, query languages, and technical platforms central to daily Server-side Developer tasks.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Server-side Development",
        "Databases",
        "SQL"
      ],
      "tasks": [
        "Build intermediate mini-projects applying Server-side Development, Databases",
        "Implement industry standard design patterns and clean code conventions",
        "Debug complex real-world edge cases and optimize execution performance",
        "Publish all modular code milestones to a dedicated GitHub repository"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 5
    },
    {
      "id": "server-side-developer-3",
      "stepNumber": 3,
      "title": "Advanced Systems & Architecture",
      "subtitle": "5 Weeks",
      "description": "Scale your expertise with production-grade architectures, integration pipelines, and specialized Server-side Developer workflows.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Server-side Development",
        "Databases",
        "SQL"
      ],
      "tasks": [
        "Architect end-to-end multi-tier implementations utilizing Server-side Development, Databases",
        "Incorporate automated testing, security validation, and schema checks",
        "Integrate external APIs, third-party services, and production data feeds",
        "Conduct peer code reviews and optimize system performance benchmarks"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "server-side-developer-4",
      "stepNumber": 4,
      "title": "End-to-End Portfolio Capstone Project",
      "subtitle": "4 Weeks",
      "description": "Build a comprehensive portfolio capstone that proves your readiness for entry-level Server-side Developer positions.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Server-side Development",
        "Databases",
        "Portfolio Capstone",
        "Git/GitHub"
      ],
      "tasks": [
        "Scope and design a complete real-world case study solving a genuine problem",
        "Use production-grade datasets and industry-approved tech stack",
        "Deploy the project to a live public URL and author an extensive GitHub README with architecture diagrams",
        "Record a 2-minute Loom/video walkthrough explaining technical design decisions"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Portfolio Capstone",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "server-side-developer-5",
      "stepNumber": 5,
      "title": "Certifications, ATS Resume & Job Applications",
      "subtitle": "Ongoing",
      "description": "Validate your capabilities through accredited credentials, polish an ATS-optimized resume, and apply for Server-side Developer roles.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume Optimization",
        "Interview Preparation",
        "Industry Credentials"
      ],
      "tasks": [
        "Prepare for and earn recognized industry certification relevant to Server-side Developer",
        "Synthesize portfolio outcomes into quantitative, action-verb bullet points on your resume",
        "Prepare for technical interviews (live coding, SQL challenges, system architecture)",
        "Submit targeted applications to verified graduate roles and paid internships"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Career Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    }
  ],
  "default": [
    {
      "id": "gen-1",
      "stepNumber": 1,
      "title": "Foundations & Environment Setup",
      "subtitle": "4 Weeks",
      "description": "Establish foundational computer science knowledge, command line proficiency, and version control.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Git/GitHub",
        "Programming Fundamentals"
      ],
      "phase": 1,
      "totalPhases": 5,
      "phaseName": "Foundations",
      "isCompleted": true,
      "status": "completed",
      "actionLabel": "Review Module",
      "resourcesCount": 4
    },
    {
      "id": "gen-2",
      "stepNumber": 2,
      "title": "Core Technical Skills",
      "subtitle": "6 Weeks",
      "description": "Master primary programming languages, frameworks, and data modeling tools required for the target career path.",
      "durationWeeks": 6,
      "durationLabel": "6 Weeks",
      "skills": [
        "Technical Core",
        "Frameworks"
      ],
      "phase": 2,
      "totalPhases": 5,
      "phaseName": "Technical Core",
      "isCompleted": false,
      "status": "in_progress",
      "actionLabel": "Start Module",
      "resourcesCount": 5
    },
    {
      "id": "gen-3",
      "stepNumber": 3,
      "title": "Applied Project Building",
      "subtitle": "5 Weeks",
      "description": "Apply newly gained competencies to build working portfolio applications solving practical real-world problems.",
      "durationWeeks": 5,
      "durationLabel": "5 Weeks",
      "skills": [
        "Projects",
        "Tools"
      ],
      "phase": 3,
      "totalPhases": 5,
      "phaseName": "Applied Practice",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 4
    },
    {
      "id": "gen-4",
      "stepNumber": 4,
      "title": "Industry Certifications & Validation",
      "subtitle": "4 Weeks",
      "description": "Validate technical competencies through recognized exams, badges, and credentials from accredited providers.",
      "durationWeeks": 4,
      "durationLabel": "4 Weeks",
      "skills": [
        "Certifications"
      ],
      "phase": 4,
      "totalPhases": 5,
      "phaseName": "Validation",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    },
    {
      "id": "gen-5",
      "stepNumber": 5,
      "title": "ATS Resume & Career Placement",
      "subtitle": "Ongoing",
      "description": "Format project achievements into a clean ATS resume, prepare for technical interviews, and submit job applications.",
      "durationWeeks": 4,
      "durationLabel": "Ongoing",
      "skills": [
        "Resume",
        "Internships",
        "Jobs"
      ],
      "phase": 5,
      "totalPhases": 5,
      "phaseName": "Placement",
      "isCompleted": false,
      "status": "locked",
      "actionLabel": "Locked",
      "resourcesCount": 3
    }
  ]
};
