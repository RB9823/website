export type Project = {
  title: string;
  href?: string;
  imgSrc?: string;
  description: string;
  impact: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
{
    title: "GUI Murphy (TikTok TechJam 2025)",
    href: "https://github.com/RB9823/techjam-2025-final",
    imgSrc: "/images/placeholder.svg",
    description: "Developed a multi-stage UI inconsistency detection and validation model with a user-friendly GUI",
    impact: "Finalist — Top 4% (12 / 300 projects)",
    tech: ["Python", "OmniParser", "CLIP", "MLLMs"],
    featured: true
  },
  {
    title: "Smart Storybook (ETHGlobal SF 2024)",
    href: "https://github.com/imjwang/storybook",
    imgSrc: "/images/placeholder.svg",
    description: "Web3 platform enabling creators to monetize IP through NFTs; FastAPI backend integrated with Pinata IPFS",
    impact: "Won 2nd place, Best AI Application.",
    tech: ["FastAPI", "Pinata", "IPFS", "Python", "Web3"],
    featured: true
  },
  {
    title: "sentiment. (GenAI Genesis Hackathon 2024)",
    href: "https://github.com/RB9823/GenAI",
    imgSrc: "/images/placeholder.svg",
    description: "Full-stack web application that analyses sentiment in text and voice notes",
    impact: "Developed a full-stack sentiment analysis app (React/Flask) integrating OpenAI GPT-3.5 API for text/voice analysis",
    tech: ["React", "Flask", "OpenAI API", "Python", "TypeScript"],
    featured: true
  }
];
