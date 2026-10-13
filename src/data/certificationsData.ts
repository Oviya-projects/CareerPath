import { Certification } from '../types';

export const CERTIFICATIONS: Certification[] = [
  {
    "id": "cert-pl300",
    "name": "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    "provider": "Microsoft",
    "domainId": "data-analytics",
    "roleId": "data-analyst",
    "skills": [
      "Power BI",
      "SQL",
      "Data Modeling",
      "DAX"
    ],
    "difficulty": "Intermediate",
    "duration": "40-60 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://learn.microsoft.com/credentials/certifications/data-analyst-associate/",
    "description": "Industry gold standard for business intelligence. Validates ability to clean data, build robust tabular data models, write DAX, and deploy reports.",
    "officialCode": "PL-300",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-da",
    "name": "Data Analysis with Python Certification",
    "provider": "freeCodeCamp",
    "domainId": "data-analytics",
    "roleId": "data-analyst",
    "skills": [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization"
    ],
    "difficulty": "Intermediate",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/data-analysis-with-python/",
    "description": "100% free accredited certificate awarded upon completing 5 rigorous data analysis projects including medical data visualizer and demographic analyzer.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-dp900-da",
    "name": "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    "provider": "Microsoft",
    "domainId": "data-analytics",
    "roleId": "bi-analyst",
    "skills": [
      "SQL",
      "Databases",
      "Data Warehousing"
    ],
    "difficulty": "Beginner",
    "duration": "20 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://learn.microsoft.com/credentials/certifications/azure-data-fundamentals/",
    "description": "Validates foundational knowledge of core data concepts: relational and non-relational database services and modern analytics workloads on Azure.",
    "officialCode": "DP-900",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-fed",
    "name": "Front End Development Libraries Certification",
    "provider": "freeCodeCamp",
    "domainId": "full-stack-dev",
    "roleId": "full-stack-developer",
    "skills": [
      "React",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "difficulty": "Intermediate",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/front-end-development-libraries/",
    "description": "Validates proficiency with React, Redux, Bootstrap, SASS, and jQuery by completing 5 real-world interactive applications.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-bed",
    "name": "Back End Development and APIs Certification",
    "provider": "freeCodeCamp",
    "domainId": "full-stack-dev",
    "roleId": "full-stack-developer",
    "skills": [
      "Node.js",
      "REST APIs",
      "Databases",
      "JavaScript"
    ],
    "difficulty": "Intermediate",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    "description": "Verifiable credential awarded after building a timestamp microservice, request header parser, URL shortener, and exercise tracker with MongoDB.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-aws-mla",
    "name": "AWS Certified Machine Learning Engineer - Associate (MLA-C01)",
    "provider": "AWS",
    "domainId": "ai-ml",
    "roleId": "ml-engineer",
    "skills": [
      "Machine Learning",
      "Python",
      "Cloud",
      "Scikit-learn"
    ],
    "difficulty": "Intermediate",
    "duration": "50 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    "description": "Validates hands-on ability to build, train, tune, and deploy machine learning models using AWS SageMaker and cloud inference services.",
    "officialCode": "MLA-C01",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-ms-ai900",
    "name": "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    "provider": "Microsoft",
    "domainId": "ai-ml",
    "roleId": "ai-engineer",
    "skills": [
      "Machine Learning",
      "Deep Learning",
      "LLMs"
    ],
    "difficulty": "Beginner",
    "duration": "20 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://learn.microsoft.com/credentials/certifications/azure-ai-fundamentals/",
    "description": "Validates foundational knowledge of artificial intelligence workloads: computer vision, natural language processing, and conversational generative AI.",
    "officialCode": "AI-900",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-ml",
    "name": "Machine Learning with Python Certification",
    "provider": "freeCodeCamp",
    "domainId": "ai-ml",
    "roleId": "ml-developer",
    "skills": [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Machine Learning"
    ],
    "difficulty": "Intermediate",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/machine-learning-with-python/",
    "description": "Free verified credential demonstrating machine learning projects: rock paper scissors AI, cat vs dog image classifier, and book recommendation engine.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-cisco-ccst-cyber",
    "name": "Cisco Certified Support Technician (CCST) Cybersecurity",
    "provider": "Cisco Networking Academy",
    "domainId": "cybersecurity",
    "roleId": "cybersecurity-analyst",
    "skills": [
      "Cybersecurity Fundamentals",
      "Networking",
      "Threat Analysis"
    ],
    "difficulty": "Beginner",
    "duration": "30 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://www.netacad.com/courses/cybersecurity/ccst-cybersecurity",
    "description": "Entry-level certification covering security principles, network vulnerabilities, operational endpoint safety, and incident investigation.",
    "officialCode": "CCST-CYBER",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-ms-sc900",
    "name": "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
    "provider": "Microsoft",
    "domainId": "cybersecurity",
    "roleId": "security-engineer",
    "skills": [
      "Cloud Security",
      "Cybersecurity Fundamentals",
      "Threat Analysis"
    ],
    "difficulty": "Beginner",
    "duration": "20 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/",
    "description": "Validates knowledge of identity governance, Microsoft Entra ID access controls, zero-trust architecture, and compliance safeguards.",
    "officialCode": "SC-900",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-aws-clf",
    "name": "AWS Certified Cloud Practitioner (CLF-C02)",
    "provider": "AWS",
    "domainId": "cloud-computing",
    "roleId": "cloud-engineer",
    "skills": [
      "Cloud Fundamentals",
      "AWS",
      "Cloud Security"
    ],
    "difficulty": "Beginner",
    "duration": "25 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    "description": "Essential foundational cloud credential verifying understanding of the AWS global infrastructure, core services, security, and pricing models.",
    "officialCode": "CLF-C02",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-ms-az900",
    "name": "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "provider": "Microsoft",
    "domainId": "cloud-computing",
    "roleId": "cloud-administrator",
    "skills": [
      "Cloud Fundamentals",
      "Azure",
      "Cloud Security"
    ],
    "difficulty": "Beginner",
    "duration": "20 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/",
    "description": "Foundational Microsoft credential covering cloud computing concepts, Azure architecture components, security, and management tools.",
    "officialCode": "AZ-900",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-gcp-cdl",
    "name": "Google Cloud Digital Leader Certification",
    "provider": "Google Cloud",
    "domainId": "cloud-computing",
    "roleId": "cloud-architect",
    "skills": [
      "Cloud Fundamentals",
      "Google Cloud",
      "Virtualization"
    ],
    "difficulty": "Beginner",
    "duration": "25 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://cloud.google.com/learn/certification/cloud-digital-leader",
    "description": "Validates understanding of Google Cloud core services, computing products, cloud storage solutions, and digital business transformation.",
    "officialCode": "GCP-CDL",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-lf-kcna",
    "name": "Kubernetes and Cloud Native Associate (KCNA)",
    "provider": "Linux Foundation & CNCF",
    "domainId": "devops",
    "roleId": "devops-engineer",
    "skills": [
      "Kubernetes",
      "Docker",
      "Cloud",
      "CI/CD"
    ],
    "difficulty": "Intermediate",
    "duration": "40 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/",
    "description": "Official CNCF certification confirming baseline knowledge of cloud-native architecture, container orchestration, Kubernetes concepts, and telemetry.",
    "officialCode": "KCNA",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-lf-lfca",
    "name": "Linux Foundation Certified IT Associate (LFCA)",
    "provider": "Linux Foundation",
    "domainId": "devops",
    "roleId": "cloud-devops-engineer",
    "skills": [
      "Linux",
      "Git/GitHub",
      "System Monitoring"
    ],
    "difficulty": "Beginner",
    "duration": "30 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://training.linuxfoundation.org/certification/certified-it-associate/",
    "description": "Validates core system administration, command line operation, networking essentials, and fundamentals of cloud computing.",
    "officialCode": "LFCA",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-meta-android",
    "name": "Meta Android Developer Professional Certificate",
    "provider": "Meta / Coursera",
    "domainId": "mobile-dev",
    "roleId": "android-developer",
    "skills": [
      "Android",
      "Kotlin",
      "Mobile UI/UX",
      "REST APIs"
    ],
    "difficulty": "Intermediate",
    "duration": "6 months (5 hrs/week)",
    "isFree": false,
    "hasCredential": true,
    "url": "https://www.coursera.org/professional-certificates/meta-android-developer",
    "description": "Industry professional credential covering Kotlin, Jetpack Compose, state management in Android, React Native concepts, and app store deployment.",
    "credentialType": "Course Certificate",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-scipy",
    "name": "Scientific Computing with Python Certification",
    "provider": "freeCodeCamp",
    "domainId": "data-science",
    "roleId": "data-scientist",
    "skills": [
      "Python",
      "Algorithms",
      "Statistics"
    ],
    "difficulty": "Beginner",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    "description": "Verifiable credential awarded after writing Python algorithms: arithmetic formatter, time calculator, budget app, and probability experiment simulator.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-rdb",
    "name": "Relational Database Certification",
    "provider": "freeCodeCamp",
    "domainId": "data-engineering",
    "roleId": "data-engineer",
    "skills": [
      "SQL",
      "Databases",
      "ETL",
      "Linux"
    ],
    "difficulty": "Intermediate",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/relational-database/",
    "description": "Build real projects in a Dockerized VS Code environment using PostgreSQL, Bash scripts, Git, and complex database relationships.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-ms-pl300-ba",
    "name": "Power BI Data Analyst Associate (PL-300)",
    "provider": "Microsoft",
    "domainId": "business-analytics",
    "roleId": "business-analyst",
    "skills": [
      "Power BI",
      "Excel",
      "Business Intelligence",
      "DAX"
    ],
    "difficulty": "Intermediate",
    "duration": "50 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://learn.microsoft.com/credentials/certifications/data-analyst-associate/",
    "description": "Validates ability to deliver actionable commercial dashboards, optimize KPI data models, and create business intelligence assets.",
    "officialCode": "PL-300",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-google-ga4",
    "name": "Google Analytics Individual Qualification (GA4)",
    "provider": "Google Skillshop",
    "domainId": "digital-marketing",
    "roleId": "digital-marketing-specialist",
    "skills": [
      "Google Analytics",
      "Marketing Analytics",
      "Conversion Optimization"
    ],
    "difficulty": "Beginner",
    "duration": "10 hours preparation",
    "isFree": true,
    "hasCredential": true,
    "url": "https://skillshop.exceedlms.com/student/path/18330-google-analytics-individual-qualification",
    "description": "Official Google certification validating proficiency in Google Analytics 4, event tracking setup, exploration reports, and conversion analysis.",
    "officialCode": "GA4-IQ",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-google-ads",
    "name": "Google Ads Search Certification",
    "provider": "Google Skillshop",
    "domainId": "digital-marketing",
    "roleId": "seo-specialist",
    "skills": [
      "SEM",
      "SEO",
      "Google Analytics"
    ],
    "difficulty": "Beginner",
    "duration": "8 hours preparation",
    "isFree": true,
    "hasCredential": true,
    "url": "https://skillshop.exceedlms.com/student/path/18128-google-ads-search-certification",
    "description": "Official accreditation demonstrating mastery of search marketing campaigns, bidding strategies, keyword match types, and performance metrics.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-scrum-pspo1",
    "name": "Professional Scrum Product Owner I (PSPO I)",
    "provider": "Scrum.org",
    "domainId": "product-management",
    "roleId": "product-manager",
    "skills": [
      "Agile/Scrum",
      "Product Roadmapping",
      "Product Strategy"
    ],
    "difficulty": "Intermediate",
    "duration": "30 hours preparation",
    "isFree": false,
    "hasCredential": true,
    "url": "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
    "description": "Globally recognized product management certification validating ability to maximize value delivered by products and manage product backlogs in Scrum.",
    "officialCode": "PSPO-I",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-fcc-rwd",
    "name": "Responsive Web Design Certification",
    "provider": "freeCodeCamp",
    "domainId": "frontend-dev",
    "roleId": "frontend-developer",
    "skills": [
      "HTML",
      "CSS",
      "Responsive Design",
      "Web Accessibility"
    ],
    "difficulty": "Beginner",
    "duration": "300 hours (Self-paced)",
    "isFree": true,
    "hasCredential": true,
    "url": "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    "description": "Free accredited certificate awarded after building 5 projects: survey form, tribute page, technical documentation, product landing page, and portfolio.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-meta-backend",
    "name": "Meta Back-End Developer Professional Certificate",
    "provider": "Meta / Coursera",
    "domainId": "backend-dev",
    "roleId": "backend-developer",
    "skills": [
      "Python",
      "Django",
      "Databases",
      "REST APIs"
    ],
    "difficulty": "Intermediate",
    "duration": "6 months (5 hrs/week)",
    "isFree": false,
    "hasCredential": true,
    "url": "https://www.coursera.org/professional-certificates/meta-back-end-developer",
    "description": "Comprehensive program teaching Python, Django, REST APIs, MySQL, and cloud deployments with end-to-end capstone evaluation.",
    "credentialType": "Course Certificate",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-google-ux",
    "name": "Google UX Design Professional Certificate",
    "provider": "Google / Coursera",
    "domainId": "ui-ux-design",
    "roleId": "ui-ux-designer",
    "skills": [
      "Figma",
      "Wireframing",
      "User Research",
      "Prototyping",
      "Usability Testing"
    ],
    "difficulty": "Beginner",
    "duration": "6 months (4-5 hrs/week)",
    "isFree": false,
    "hasCredential": true,
    "url": "https://grow.google/certificates/ux-design/",
    "description": "Official Google career certificate covering empathetic design thinking, low and high fidelity wireframing, responsive prototyping in Figma, and user testing.",
    "credentialType": "Course Certificate",
    "verifiedDate": "2026-03"
  },
  {
    "id": "cert-nng-ux",
    "name": "NN/g UX Master Certification",
    "provider": "Nielsen Norman Group",
    "domainId": "ui-ux-design",
    "roleId": "product-designer",
    "skills": [
      "User Research",
      "Information Architecture",
      "Usability Testing",
      "Interaction Design"
    ],
    "difficulty": "Advanced",
    "duration": "15 intensive courses & exams",
    "isFree": false,
    "hasCredential": true,
    "url": "https://www.nngroup.com/ux-certification/",
    "description": "Globally respected usability credential validating deep mastery of quantitative user research, information architecture, and heuristic evaluations.",
    "credentialType": "Certification",
    "verifiedDate": "2026-03"
  }
];

