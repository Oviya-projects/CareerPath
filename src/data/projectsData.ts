import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    "id": "proj-da-churn",
    "title": "Customer Churn Analysis & Retention Modeling Dashboard",
    "domainId": "data-analytics",
    "roleId": "data-analyst",
    "description": "Analyzed 7,000+ telecom customer records to identify top factors driving contract cancellation and built an executive Power BI dashboard.",
    "skills": [
      "SQL",
      "Power BI",
      "Excel",
      "Data Visualization"
    ],
    "technologies": [
      "PostgreSQL",
      "Power BI",
      "DAX",
      "Excel"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 25,
    "careerRelevance": "Customer retention is the primary focus of subscription businesses. Shows mastery of cohort modeling and commercial storytelling.",
    "features": [
      "SQL data cleaning queries identifying high-risk customer tenure tiers",
      "Interactive Power BI dashboard with churn probability slicers",
      "DAX measures calculating monthly recurring revenue at risk ($2.4M)",
      "Executive summary deck detailing 3 prioritized intervention strategies"
    ],
    "githubStarter": "https://github.com/microsoft/Data-Science-For-Beginners",
    "datasetUrl": "https://www.kaggle.com/datasets/blastchar/telco-customer-churn",
    "isCompleted": false
  },
  {
    "id": "proj-da-superstore",
    "title": "Superstore Sales Analytics & Profitability Optimization",
    "domainId": "data-analytics",
    "roleId": "bi-analyst",
    "description": "Designed a 4-page financial analytics dashboard modeling regional profitability, shipping velocity, and product category margins across 10,000 retail orders.",
    "skills": [
      "Power BI",
      "SQL",
      "Data Modeling",
      "Tableau"
    ],
    "technologies": [
      "Tableau Public",
      "SQL Server",
      "Excel"
    ],
    "difficulty": "Beginner",
    "estimatedHours": 18,
    "careerRelevance": "Proves understanding of retail supply chain KPIs, margin calculations, and multi-page executive visual architecture.",
    "features": [
      "Cleaned multi-table relational orders, returns, and sales manager tables",
      "Regional margin comparison identifying loss-making product sub-categories",
      "Dynamic date hierarchy filtering by year, quarter, and shipping mode",
      "Automated KPI alerts for delayed fulfillment orders"
    ],
    "githubStarter": "https://github.com/microsoft/Data-Science-For-Beginners",
    "datasetUrl": "https://www.kaggle.com/datasets/vivek468/superstore-dataset-final",
    "isCompleted": false
  },
  {
    "id": "proj-fs-ecommerce",
    "title": "Fullstack E-Commerce Platform with Cart & Payment Flow",
    "domainId": "full-stack-dev",
    "roleId": "full-stack-developer",
    "description": "Engineered a production-ready web application with user authentication, product catalog filtering, cart state management, and Stripe checkout.",
    "skills": [
      "React",
      "Node.js",
      "REST APIs",
      "SQL",
      "Git/GitHub"
    ],
    "technologies": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "difficulty": "Advanced",
    "estimatedHours": 45,
    "careerRelevance": "E-commerce apps demonstrate end-to-end full-stack mastery: auth, persistent storage, responsive design, and third-party API integration.",
    "features": [
      "JWT-based user signup/login with password encryption and protected routes",
      "Full shopping cart state management with persistent LocalStorage",
      "PostgreSQL relational schema modeling products, categories, orders, and users",
      "Responsive product grid with keyword search and category facet filtering"
    ],
    "githubStarter": "https://github.com/gothinkster/realworld",
    "isCompleted": false
  },
  {
    "id": "proj-ml-housing",
    "title": "Real Estate Valuation Predictor with Scikit-learn",
    "domainId": "ai-ml",
    "roleId": "ml-engineer",
    "description": "Trained and validated gradient boosted regression models to forecast residential property values with extensive feature engineering and residual analysis.",
    "skills": [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ],
    "technologies": [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "FastAPI"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 30,
    "careerRelevance": "Regression and feature engineering are fundamental machine learning tasks evaluated in technical take-home interviews.",
    "features": [
      "Exploratory analysis identifying multi-collinearity and outlier prices",
      "Feature transformation pipeline handling missing data and one-hot encoding",
      "Hyperparameter tuning comparing Ridge, Random Forest, and XGBoost models",
      "Lightweight FastAPI microservice returning instant price predictions"
    ],
    "githubStarter": "https://github.com/microsoft/ML-For-Beginners",
    "datasetUrl": "https://www.kaggle.com/datasets/harlfoxem/housesalesprediction",
    "isCompleted": false
  },
  {
    "id": "proj-ai-rag",
    "title": "Domain Knowledge RAG Assistant with Vector Search",
    "domainId": "ai-ml",
    "roleId": "ai-engineer",
    "description": "Built a question-answering conversational bot that parses technical PDF documents, computes vector embeddings, and answers queries using LLM retrieval.",
    "skills": [
      "Python",
      "LLMs",
      "Vector Databases",
      "REST APIs"
    ],
    "technologies": [
      "Python",
      "LangChain",
      "ChromaDB",
      "FastAPI"
    ],
    "difficulty": "Advanced",
    "estimatedHours": 40,
    "careerRelevance": "Retrieval-Augmented Generation (RAG) is the most sought-after practical AI engineering capability in the current software market.",
    "features": [
      "Document chunking and tokenization of long-form technical manuals",
      "Semantic similarity search using ChromaDB vector embeddings",
      "Context injection and prompt template safety guardrails",
      "Interactive web chat interface with citation provenance links"
    ],
    "githubStarter": "https://github.com/microsoft/generative-ai-for-beginners",
    "isCompleted": false
  },
  {
    "id": "proj-sec-audit",
    "title": "Automated Web Vulnerability Scanner & Audit Tool",
    "domainId": "cybersecurity",
    "roleId": "security-engineer",
    "description": "Developed an automated Python security auditing script that inspects HTTP response headers, flags outdated SSL/TLS ciphers, and tests for XSS injection points.",
    "skills": [
      "Cybersecurity Fundamentals",
      "Python",
      "Networking",
      "Linux"
    ],
    "technologies": [
      "Python",
      "OWASP ZAP",
      "Requests",
      "Linux"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 25,
    "careerRelevance": "Shows practical understanding of network protocols, defensive header configurations, and automated vulnerability triage.",
    "features": [
      "Automated inspection of CSP, HSTS, X-Frame-Options, and CORS headers",
      "SSL/TLS certificate expiration and weak cipher detection",
      "Generates markdown and HTML security audit reports with severity scores",
      "Validated against intentionally vulnerable test targets such as OWASP Juice Shop"
    ],
    "githubStarter": "https://github.com/juice-shop/juice-shop",
    "isCompleted": false
  },
  {
    "id": "proj-cloud-infra",
    "title": "Multi-Tier Cloud Infrastructure Deployment with Terraform",
    "domainId": "cloud-computing",
    "roleId": "cloud-engineer",
    "description": "Authored modular Infrastructure as Code scripts to provision a highly available VPC with public/private subnets, load balancers, and auto-scaling VM instances.",
    "skills": [
      "Cloud Fundamentals",
      "AWS",
      "Terraform",
      "Linux"
    ],
    "technologies": [
      "Terraform",
      "AWS (VPC, EC2, ALB, S3)",
      "Bash"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 28,
    "careerRelevance": "Terraform is standard across modern cloud engineering. Demonstrates production-grade multi-tier network isolation.",
    "features": [
      "Custom VPC with dual Availability Zone redundancy and NAT Gateway routing",
      "Application Load Balancer distributing traffic to auto-scaled web instances",
      "Secure private subnets hosting isolated database instances",
      "Remote S3 state storage with DynamoDB state locking to prevent concurrency collisions"
    ],
    "githubStarter": "https://github.com/hashicorp/terraform",
    "isCompleted": false
  },
  {
    "id": "proj-ui-design-system",
    "title": "FinTech Mobile Banking Design System & Accessibility Audit",
    "domainId": "ui-ux-design",
    "roleId": "ui-designer",
    "description": "Designed a cohesive 40+ component design system in Figma featuring dark/light modes, WCAG AA contrast compliance, and complete interactive mobile flows.",
    "skills": [
      "UI Design",
      "Figma",
      "Design Systems",
      "Prototyping"
    ],
    "technologies": [
      "Figma",
      "FigJam",
      "Design Tokens"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 30,
    "careerRelevance": "Recruiters look for design systems, token scalability, and accessibility considerations rather than just pretty screens.",
    "features": [
      "Atomic design token architecture (colors, typography, spacing, elevations)",
      "Accessible high-contrast palette verified with Stark plugin",
      "Interactive animated micro-interactions for transaction success states",
      "Full interactive prototype testing transfer and budget management flows"
    ],
    "githubStarter": "https://github.com/bradfrost/atomic-design",
    "isCompleted": false
  },
  {
    "id": "proj-devops-cicd",
    "title": "Automated Microservice CI/CD Pipeline with Docker & GitHub Actions",
    "domainId": "devops",
    "roleId": "devops-engineer",
    "description": "Engineered an end-to-end automated deployment pipeline that executes linting, unit tests, Docker container builds, security scans, and deployment upon Git push.",
    "skills": [
      "Docker",
      "CI/CD",
      "Linux",
      "Git/GitHub"
    ],
    "technologies": [
      "GitHub Actions",
      "Docker",
      "Trivy",
      "Node.js"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 24,
    "careerRelevance": "Essential DevOps milestone showing how to eliminate manual deployments, enforce testing gates, and prevent vulnerable container images from shipping.",
    "features": [
      "Parallel test execution runner on pull request creation",
      "Multi-stage Dockerfile minimizing final image size to under 80MB",
      "Automated vulnerability scanning with Trivy security scanner",
      "Automated semantic version tagging and container registry publishing"
    ],
    "githubStarter": "https://github.com/actions/starter-workflows",
    "isCompleted": false
  },
  {
    "id": "proj-mobile-habit",
    "title": "Cross-Platform Habit Tracker Mobile App with Local Persistence",
    "domainId": "mobile-dev",
    "roleId": "flutter-developer",
    "description": "Developed an offline-first habit tracking mobile application using Flutter and Dart with interactive progress charts, push notifications, and local SQLite storage.",
    "skills": [
      "Flutter",
      "Dart",
      "Mobile UI/UX",
      "REST APIs"
    ],
    "technologies": [
      "Flutter",
      "Dart",
      "SQLite/Hive",
      "Provider"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 35,
    "careerRelevance": "Demonstrates responsive touch interaction, reactive state architecture, and reliable offline data storage on iOS and Android.",
    "features": [
      "Custom animated calendar heatmap showing streak progression",
      "Offline-first reactive local database persistence with Hive/SQLite",
      "Scheduled daily reminder notifications via local device alarms",
      "Smooth 60fps gesture animations and dark mode theme switching"
    ],
    "githubStarter": "https://github.com/brianegan/flutter_architecture_samples",
    "isCompleted": false
  },
  {
    "id": "proj-ds-nlp",
    "title": "Customer Review Sentiment Analyzer & Aspect Extractor",
    "domainId": "data-science",
    "roleId": "data-scientist",
    "description": "Analyzed 20,000 product reviews to extract customer sentiment polarity and isolate top product feature complaints using natural language processing.",
    "skills": [
      "Python",
      "Statistics",
      "Pandas",
      "Data Visualization"
    ],
    "technologies": [
      "Python",
      "NLTK",
      "Scikit-learn",
      "Seaborn",
      "WordCloud"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 28,
    "careerRelevance": "Text analytics and unstructured data extraction are crucial skills across customer intelligence and product analytics teams.",
    "features": [
      "Text normalization pipeline (tokenization, stop-word removal, lemmatization)",
      "TF-IDF vectorization and Naive Bayes / Logistic Regression classification",
      "Topic modeling identifying recurring negative review keywords",
      "Visual sentiment dashboard displaying customer approval across categories"
    ],
    "githubStarter": "https://github.com/microsoft/Data-Science-For-Beginners",
    "datasetUrl": "https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews",
    "isCompleted": false
  },
  {
    "id": "proj-de-pipeline",
    "title": "E-Commerce Real-Time Data Pipeline & Warehouse Lakehouse",
    "domainId": "data-engineering",
    "roleId": "data-engineer",
    "description": "Built an automated ETL pipeline that ingests raw e-commerce transaction logs, validates data quality schemas, and writes clean dimensional tables to PostgreSQL.",
    "skills": [
      "SQL",
      "Python",
      "Databases",
      "ETL",
      "Data Pipelines"
    ],
    "technologies": [
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas"
    ],
    "difficulty": "Advanced",
    "estimatedHours": 38,
    "careerRelevance": "Core proof of data engineering competency: handling schema drift, writing idempotent transformations, and ensuring high pipeline data quality.",
    "features": [
      "Automated CSV and JSON ingestion with schema validation checks",
      "Dimensional star schema with dimension and fact sales tables",
      "Automated deduplication and currency normalization transformations",
      "Comprehensive error logging and alert reporting on corrupt records"
    ],
    "githubStarter": "https://github.com/freeCodeCamp/relational-database",
    "datasetUrl": "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
    "isCompleted": false
  },
  {
    "id": "proj-ba-cohort",
    "title": "SaaS Subscription Cohort Retention & LTV Forecast Model",
    "domainId": "business-analytics",
    "roleId": "business-analyst",
    "description": "Modeled monthly recurring revenue (MRR) expansion, logo retention rates, and customer lifetime value (LTV) across a 24-month SaaS cohort dataset.",
    "skills": [
      "Excel",
      "SQL",
      "Business Analysis",
      "Power BI"
    ],
    "technologies": [
      "Excel",
      "SQL",
      "Power BI"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 22,
    "careerRelevance": "Subscription unit economics (CAC, LTV, Net Revenue Retention) are central to corporate finance and business analysis interviews.",
    "features": [
      "Triangular cohort retention matrix modeling user drop-off over 24 months",
      "Dynamic scenario sensitivity table modeling churn reduction impact",
      "Interactive Power BI executive deck tracking net revenue retention",
      "Recommendations brief proposing targeted annual contract incentives"
    ],
    "githubStarter": "https://github.com/microsoft/Data-Science-For-Beginners",
    "isCompleted": false
  },
  {
    "id": "proj-mkt-audit",
    "title": "Comprehensive SEO Technical Audit & Keyword Strategy Plan",
    "domainId": "digital-marketing",
    "roleId": "seo-specialist",
    "description": "Conducted an end-to-end technical SEO audit on an e-commerce platform, identifying 45+ crawl bottlenecks and authoring a high-intent keyword target strategy.",
    "skills": [
      "SEO",
      "Google Analytics",
      "Content Marketing",
      "Marketing Analytics"
    ],
    "technologies": [
      "Google Search Console",
      "Google Analytics 4",
      "Excel"
    ],
    "difficulty": "Beginner",
    "estimatedHours": 18,
    "careerRelevance": "Direct proof of SEO acumen: demonstrates technical troubleshooting, search intent mapping, and measurable traffic projection.",
    "features": [
      "Technical crawl audit analyzing Core Web Vitals, 404 redirects, and canonical tags",
      "High-intent keyword matrix mapping search volume to user purchase stage",
      "Optimized metadata templates (title tags, H1s, schema markup)",
      "Projected organic traffic growth model based on targeted ranking gains"
    ],
    "githubStarter": "https://moz.com/beginners-guide-to-seo",
    "isCompleted": false
  },
  {
    "id": "proj-pm-prd",
    "title": "End-to-End Product Requirements Document (PRD) & Prototype",
    "domainId": "product-management",
    "roleId": "product-manager",
    "description": "Authored an exhaustive PRD for a collaborative campus note-sharing feature including user stories, acceptance criteria, wireframe flows, and success metrics.",
    "skills": [
      "Product Strategy",
      "Product Roadmapping",
      "User Research",
      "Agile/Scrum"
    ],
    "technologies": [
      "Figma",
      "Jira/Confluence",
      "Mixpanel Spec"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 24,
    "careerRelevance": "The PRD is the primary writing sample evaluated during Product Management associate and new-grad hiring rounds.",
    "features": [
      "Problem definition backed by 15 synthesized student user interviews",
      "Detailed functional specifications with user stories and edge-case handling",
      "Wireframe user flows in Figma illustrating the core onboarding loop",
      "North Star metric definition and instrumentation plan for analytics tracking"
    ],
    "githubStarter": "https://github.com/bradfrost/atomic-design",
    "isCompleted": false
  },
  {
    "id": "proj-fe-dashboard",
    "title": "High-Performance Analytics Dashboard with Responsive Charts",
    "domainId": "frontend-dev",
    "roleId": "frontend-developer",
    "description": "Built an interactive web analytics dashboard with React, Tailwind CSS, dark mode support, and SVG chart visualizations with zero layout shift.",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Responsive Design"
    ],
    "technologies": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": 25,
    "careerRelevance": "Dashboard builds showcase clean component architecture, data rendering efficiency, and modern styling mastery.",
    "features": [
      "Modular component architecture with reusable Card, Button, and Modal elements",
      "Accessible keyboard navigation and dark/light color scheme toggle",
      "Smooth responsive layout adapting from mobile screens to 4K desktop",
      "Instant client-side filter and sorting without UI latency"
    ],
    "githubStarter": "https://github.com/gothinkster/realworld",
    "isCompleted": false
  },
  {
    "id": "proj-be-auth",
    "title": "Secure Microservice Authentication & Role-Based Access Control API",
    "domainId": "backend-dev",
    "roleId": "backend-developer",
    "description": "Architected a secure authentication microservice featuring JWT access/refresh token rotation, bcrypt password hashing, and role-based permissions.",
    "skills": [
      "Node.js",
      "REST APIs",
      "Databases",
      "Authentication",
      "API Security"
    ],
    "technologies": [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "JWT"
    ],
    "difficulty": "Advanced",
    "estimatedHours": 32,
    "careerRelevance": "Auth and security are universal backend expectations. Demonstrates mastery of token lifecycles and cryptographic best practices.",
    "features": [
      "Dual-token architecture: short-lived access tokens and secure HTTP-only refresh cookies",
      "Role-Based Access Control (RBAC) middleware verifying Admin vs Student permissions",
      "Rate limiting with Redis to thwart brute-force login attempts",
      "Automated integration test suite using Supertest and Jest"
    ],
    "githubStarter": "https://github.com/gothinkster/realworld",
    "isCompleted": false
  }
];
