export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  details?: string[];
};

export const education: Education[] = [
  {
    school: "National University of Singapore",
    degree: "Bachelor of Computing (Hons), Computer Science — Specialisations: Artificial Intelligence & Database Systems",
    start: "Aug 2021",
    end: "Dec 2025 (Expected)",
    details: [
      "Special Programme: NUS Overseas Colleges Toronto–Waterloo AY 24/25 Sem 2 Intake"
    ]
  },
  {
    school: "University of Toronto - Rotman Commerce",
    degree: "NOC Exchange Semesters",
    start: "Jan 2024",
    end: "Dec 2024",
  },
  {
    school: "United World College of South East Asia (UWCSEA)",
    degree: "IB Diploma (Bilingual)",
    start: "Aug 2017",
    end: "May 2019",
    details: [
      "HL: Mathematics, Physics, Chemistry",
      "SL: English A Language and Literature, Hindi A, Economics"
    ]
  }
];
