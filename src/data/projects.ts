export type Project = {
  title: string;
  href?: string;
  description: string;
  impact: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
{
    title: "GUI Murphy (TikTok Techjam 2025)",
    href: "https://github.com/RB9823/techjam-2025-final",
    description: "An automated UI inconsistencies detection / validation model w/ a user-friendly GUI",
    impact: "Made me go insane, with sleep ramifications for the ensuing week",
    tech: ["Python", "OpenParser"],
    featured: true
  },
  {
    title: "Smart Storybook (ETHGlobal SF 2024)",
    href: "https://github.com/imjwang/storybook",
    description: "Web3 platform enabling creators to monetize IP through NFTs; FastAPI backend integrated with Pinata IPFS",
    impact: "Won 2nd place, Best AI Application.",
    tech: ["FastAPI", "Pinata", "IPFS", "Python", "Web3"],
    featured: true
  },
  {
    title: "sentiment. (GenAI Genesis Hackathon 2024)",
    href: "https://github.com/RB9823/GenAI",
    description: "Full-stack web application that analyses sentiment in text and voice notes",
    impact: "Developed a full-stack sentiment analysis app (React/Flask) integrating OpenAI GPT-3.5 API for text/voice analysis",
    tech: ["React", "Flask", "OpenAI API", "Python", "TypeScript"],
    featured: true
  }
];
