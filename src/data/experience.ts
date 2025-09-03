export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Tudor Capital",
    role: "Quantitative Developer Intern",
    start: "May 2025",
    end: "Aug 2025",
    bullets: [
      "Architected a distributed alerting platform (4 microservices) using Spring Boot, ActiveMQ, and Redis; sub-second UI latency for real-time Grafana alert management",
      "Reduced Grafana infra management by 99% (10h → 5m) by building Ansible + Python automation for dashboards, alerts, and config via REST API",
      "Shipped a greenfield FIX log viewer (React, TypeScript, TanStack Table) in one sprint; cut log extraction latency by 95% (60s → 3s)"
    ],
    tech: ["Spring Boot", "ActiveMQ", "Redis", "React", "TypeScript", "Ansible", "Grafana"]
  },
  {
    company: "Upside Robotics",
    role: "Software Engineer Intern",
    start: "Aug 2024",
    end: "Mar 2025",
    bullets: [
      "Architected a serverless AWS pipeline (Lambda, S3, DynamoDB) to ingest/process 5M+ data points per run from a 20+ robot fleet (IaC via Serverless Framework)",
      "Developed a real-time operations dashboard (Nextjs, TypeScript) with Mapbox geospatial tracking and live telemetry; cut manual field checks by ~30%",
      "Engineered resilient firmware logic (batching, offline caching) with hardware teams to ensure reliable data delivery over intermittent LTE"
    ],
    tech: ["AWS Lambda", "S3", "DynamoDB", "Serverless Framework", "Next.js", "TypeScript", "Mapbox"]
  },
  {
    company: "CUCU Covers",
    role: "Software Developer Intern",
    start: "Jan 2024",
    end: "Aug 2024",
    bullets: [
      "Built a Slack analytics bot aggregating Shopify, Instagram, TikTok, and Sendlane into MongoDB; automated KPI reports via Python/Flask (decision efficiency +40%)",
      "Converted manual order parsing and image cleaning into an automated Python pipeline with CI/CD on Vercel; 100%+ throughput improvement",
      "Reduced production incidents by 55% by fixing schema mismatches, API failures, and timestamp processing errors; enabled 2 new product lines"
    ],
    tech: ["Python", "Flask", "MongoDB", "Slack API", "Vercel", "CI/CD"]
  },
  {
    company: "Accenture",
    role: "Quality Engineering Intern",
    start: "May 2023",
    end: "Aug 2023",
    bullets: [
      "Executed regression and defect testing within a 300-member global QA team, logging and tracking 100+ SAP defects in JIRA to uphold system stability",
      "Automated 60+ end-to-end test cases with Tricentis Tosca, boosting test coverage and reducing manual QA effort by 40%",
      "Collaborated with development and support teams to prioritize defects and define test plans, accelerating average resolution time by 30%"
    ],
    tech: ["Tricentis Tosca", "JIRA", "SAP"]
  }
];
