export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

// Details below are taken from Ilham's supplied CV and selected repositories.
export const profile = {
  skills: ["HTML & CSS", "JavaScript & TypeScript", "React & Next.js", "Laravel", "Tailwind CSS", "PostgreSQL", "Python", "Docker", "Git & GitHub", "ESP32 & MQTT"],
  experience: [
    { period: "Feb – Jun 2026", role: "Full-stack Developer", company: "PT Rayterton Indonesia", summary: "Built and maintained internal applications with Next.js, TypeScript, Laravel, and Tailwind CSS, including API integrations for authentication, data, and dashboards." },
    { period: "Jan – Feb 2026", role: "Information Technology Intern", company: "PT Rayterton Indonesia", summary: "Helped develop internal web applications and translate client requirements into interfaces and functional features." },
  ] satisfies Experience[],
  achievements: ["Delivered a multifinance application used by more than 500 internal employees at PT Rayterton Indonesia."],
  cvUrl: "/ilham-sikumbang-cv.pdf",
};
