export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlightSummary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  category: string;
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  grade?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  description: string;
  skillsCovered: string[];
}

export const portfolioData = {
  personal: {
    name: "Patta Naga Bhushana Rao",
    title: "Senior Full Stack Developer",
    subtitle: "Specializing in React.js, Java Spring Boot, Archibus / Eptura IWMS & Enterprise SQL",
    experienceYears: "4+",
    location: "Pune, Maharashtra, India",
    email: "pattanagabhushanara005@gmail.com",
    phone: "+91 7794047370",
    github: "https://github.com/Nagabhushanarao",
    githubRepo: "https://github.com/Nagabhushanarao/naga-full-stack-developer-portfolio",
    resumeUrl: "./resume.pdf",
    summary: `Results-driven Senior Full Stack Developer with 4+ years of specialized enterprise experience building, optimizing, and modernizing mission-critical web applications using React.js, Java Spring Boot, JavaScript (ES6+), Angular, and SQL. Proven expertise delivering end-to-end bespoke customizations for Archibus / Eptura IWMS, driving large-scale database migrations, and architecting robust RESTful APIs. Track record across the full Agile/Scrum SDLC delivering high-velocity implementations with 100% data fidelity and zero production disruption for enterprise clients across EMEA.`
  },

  // Exact skills from Resume
  skills: {
    frontend: [
      { name: "React.js", category: "frontend", highlight: true },
      { name: "Angular", category: "frontend", highlight: true },
      { name: "JavaScript (ES6+)", category: "frontend", highlight: true },
      { name: "HTML5", category: "frontend" },
      { name: "CSS3", category: "frontend" },
      { name: "Responsive Design", category: "frontend" },
      { name: "State Management", category: "frontend" }
    ] as SkillItem[],
    backend: [
      { name: "Java", category: "backend", highlight: true },
      { name: "Spring Boot", category: "backend", highlight: true },
      { name: "RESTful APIs", category: "backend", highlight: true },
      { name: "Spring Data", category: "backend" },
      { name: "Enterprise Workflows", category: "backend" }
    ] as SkillItem[],
    database: [
      { name: "SQL", category: "database", highlight: true },
      { name: "Schema Optimization", category: "database", highlight: true },
      { name: "Large-Scale Database Comparison", category: "database", highlight: true },
      { name: "Data Validation & Migration", category: "database" }
    ] as SkillItem[],
    tools: [
      { name: "Git", category: "tools", highlight: true },
      { name: "GitHub", category: "tools" },
      { name: "Postman", category: "tools" },
      { name: "JIRA", category: "tools" },
      { name: "Agile/Scrum SDLC", category: "tools" },
      { name: "Archibus/Eptura IWMS", category: "tools", highlight: true },
      { name: "Workplace & Asset Management", category: "tools" }
    ] as SkillItem[]
  },

  metrics: [
    { label: "Enterprise Experience", value: "4+ Years" },
    { label: "Data Fidelity & Integrity", value: "100%" },
    { label: "Production Downtime", value: "0%" },
    { label: "Client Footprint", value: "EMEA & Global" }
  ],

  experiences: [
    {
      role: "Senior Software Developer",
      company: "Crestere Technologies LLP",
      location: "Pune, India",
      period: "June 2025 – Present",
      isCurrent: true,
      highlightSummary: "Promoted within 3 years for outstanding technical delivery, complex solution design, and platform version upgrades on enterprise Archibus (Eptura) IWMS.",
      achievements: [
        "Architect modular full-stack capabilities with React.js and Java Spring Boot, streamlining space management, asset tracking, and facilities maintenance operations.",
        "Spearhead end-to-end database schema comparisons, automated data validation, and migration scripts across legacy-to-latest enterprise releases, ensuring 100% data integrity with zero downtime.",
        "Collaborate with international Product Owners, QA teams, and enterprise clients across Europe, the Middle East, and Africa (EMEA) to translate business requirements into scalable architectures.",
        "Direct code quality enhancements through thorough peer reviews, architectural mentoring, and enforcement of unit testing standards."
      ],
      technologies: ["React.js", "Java Spring Boot", "Archibus / Eptura IWMS", "SQL", "RESTful APIs", "Git", "JIRA", "Agile SDLC"]
    },
    {
      role: "Junior Software Developer",
      company: "Crestere Technologies LLP",
      location: "Pune, India",
      period: "May 2022 – May 2025",
      isCurrent: false,
      highlightSummary: "Engineered responsive enterprise web applications utilizing Angular + Java Spring Boot (1.5 years) and subsequently re-architected core modules using React.js + Spring Boot (1.5 years).",
      achievements: [
        "Customize Archibus modules to client requirements, developing UI enhancements, business rules, custom reports, and external API integrations.",
        "Conduct deep-dive troubleshooting and dataset reconciliations during high-volume enterprise upgrade cycles.",
        "Execute Agile/Scrum ceremonies, unit and API integration testing via Postman, and smooth production releases.",
        "Establish deep domain proficiency in facilities infrastructure management and enterprise workplace ecosystems."
      ],
      technologies: ["Angular", "React.js", "Java", "Spring Boot", "SQL", "Postman", "Archibus IWMS", "HTML5/CSS3"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "iwms-modernization",
      title: "Archibus Enterprise IWMS Platform Modernization",
      subtitle: "Enterprise Space & Asset Management Suite",
      description: "Spearheaded the UI and backend re-architecture from legacy frameworks into a modern modular stack using React.js and Java Spring Boot.",
      problem: "Legacy monolithic workplace modules faced slow rendering, cumbersome navigational flows, and complex custom business logic bottlenecks during enterprise tenant upgrades.",
      solution: "Designed responsive React component hierarchies with optimized state management and decoupled Spring Boot RESTful micro-endpoints, interfacing with Archibus Workflow Rules.",
      impact: [
        "Delivered intuitive floorplan visualization, asset allocation, and work request ticketing for enterprise EMEA clients.",
        "Achieved 45% faster page transitions and decoupled frontend from core legacy server renders.",
        "Engineered reliable integration with external enterprise ERPs and directory services."
      ],
      techStack: ["React.js", "Java Spring Boot", "Archibus / Eptura IWMS", "RESTful APIs", "SQL", "JavaScript (ES6+)"],
      category: "Enterprise Full Stack",
      metrics: [
        { label: "Performance Gain", value: "45%" },
        { label: "Data Integrity", value: "100%" }
      ]
    },
    {
      id: "db-migration-engine",
      title: "Automated Database Schema Comparison & Migration Suite",
      subtitle: "Zero-Downtime Data Reconciliation & Validation",
      description: "Engineered high-accuracy database comparison tools and automated migration procedures across legacy-to-latest enterprise releases.",
      problem: "Enterprise client upgrades across multi-tenant SQL databases risked column mismatches, constraint violations, and hours of operational downtime.",
      solution: "Built automated SQL scripts and validation pipelines to inspect schema deltas, verify referential integrity, and execute controlled staged data migrations with rollback guards.",
      impact: [
        "Achieved 100% data fidelity during mission-critical production upgrades for EMEA enterprise portfolios.",
        "Reduced manual verification effort from days to automated script runs in minutes.",
        "Guaranteed zero production disruption and zero data loss across upgrade cycles."
      ],
      techStack: ["SQL", "Schema Optimization", "Database Comparison", "Data Validation", "Java", "Enterprise Workflows"],
      category: "Database & Migration",
      metrics: [
        { label: "Production Downtime", value: "0 hrs" },
        { label: "Fidelity", value: "100%" }
      ]
    },
    {
      id: "rest-integration-hub",
      title: "Enterprise Facilities RESTful Integration Framework",
      subtitle: "High-Throughput Workflows & Event Processing",
      description: "Architected secure RESTful APIs bridging front-end client dashboards with Archibus workflow engine and underlying SQL data layers.",
      problem: "External mobile apps and third-party facility monitoring systems required real-time access to work requests, asset health, and maintenance dispatching.",
      solution: "Developed performant Spring Boot endpoints leveraging Spring Data, strict input validation, comprehensive Postman test coverage, and enterprise role-based authorization.",
      impact: [
        "Streamlined end-to-end work request lifecycles from submission to field completion.",
        "Implemented standardized error-handling patterns and uniform JSON schemas.",
        "Enabled seamless bidirectional sync between Archibus data records and external enterprise systems."
      ],
      techStack: ["Java", "Spring Boot", "RESTful APIs", "Spring Data", "Postman", "SQL", "Agile SDLC"],
      category: "Backend & APIs",
      metrics: [
        { label: "API Latency", value: "<120ms" },
        { label: "Test Coverage", value: "Robust" }
      ]
    }
  ] as ProjectItem[],

  architecture: {
    title: "Enterprise Full-Stack Architecture",
    description: "Designed for high data fidelity, low latency, and zero production disruption in mission-critical enterprise environments.",
    layers: [
      {
        step: "01",
        title: "Frontend Presentation Layer",
        tech: "React.js / Angular • TypeScript • Tailwind CSS",
        details: "Responsive, accessible UI with centralized state management, reusable components, and client-side form validation."
      },
      {
        step: "02",
        title: "Secure Communication Layer",
        tech: "HTTPS • RESTful APIs • JSON",
        details: "Standardized request/response envelopes, JWT/session authentication, and optimized payload sizes."
      },
      {
        step: "03",
        title: "Enterprise Backend Core",
        tech: "Java • Spring Boot • Spring Data",
        details: "Clean layered architecture with Controller, Service, and Repository patterns ensuring separation of concerns and robust business logic."
      },
      {
        step: "04",
        title: "Enterprise Workflow & IWMS Rules",
        tech: "Archibus / Eptura Workflow Engine",
        details: "Integration with event handlers, business rules, space calculations, and multi-tenant asset lifecycle management."
      },
      {
        step: "05",
        title: "Database & Migration Engine",
        tech: "SQL Server • Schema Comparison • Data Validation",
        details: "Parameterized queries, indexed views, automated reconciliation scripts, and zero-downtime migration protocols."
      }
    ]
  },

  education: [
    {
      degree: "B.Sc. in Mathematics, Statistics & Computer Science (M.S.CS)",
      institution: "Saiteja Degree College, Hyderabad",
      university: "Osmania University",
      period: "2014 – 2017",
      grade: "83%",
      details: "Solid foundation in discrete mathematics, analytical statistics, algorithms, and computational theory."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "CCBP 4.0 - Continuous Career Building Program",
      provider: "NxtWave Intensive",
      description: "Completed comprehensive full-stack training covering real-world application engineering, modern best practices, and enterprise programming fundamentals.",
      skillsCovered: ["React.js", "Full Stack Development", "Modern JavaScript (ES6+)", "Core Java", "SQL", "Responsive Web Design", "Git"]
    }
  ] as CertificationItem[]
};
