export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

// Details below are taken from Ilham's supplied CV and selected repositories.
export const profile = {
  skillGroups: [
    { label: "Frontend", items: ["HTML & CSS", "JavaScript & TypeScript", "React & Next.js", "Tailwind CSS"] },
    { label: "Backend & tools", items: ["Laravel", "PostgreSQL", "Python", "Docker", "Git & GitHub"] },
    { label: "Embedded & IoT", items: ["ESP32", "C++", "MQTT"] },
  ],
  experience: [
    { period: "Feb – Jun 2026", role: "Full-stack Developer", company: "PT Rayterton Indonesia", summary: "Built and maintained internal applications with Next.js, TypeScript, Laravel, and Tailwind CSS, including API integrations for authentication, data, and dashboards." },
    { period: "Jan – Feb 2026", role: "Information Technology Intern", company: "PT Rayterton Indonesia", summary: "Helped develop internal web applications and translate client requirements into interfaces and functional features." },
  ] satisfies Experience[],
  achievements: [
    { statement: "At PT Rayterton Indonesia, I delivered a multifinance application used by more than", impact: "500 internal employees." },
  ],
  cvUrl: "/ilham-sikumbang-cv.pdf",
};
