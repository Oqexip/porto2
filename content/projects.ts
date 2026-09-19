export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  details: string;
  stack: string[];
  repository: string;
  role: string;
  caseStudy: boolean;
};

// Project descriptions are limited to features documented in these repositories.
// Personal role and results can be added after Ilham confirms them.
export const projects: Project[] = [
  {
    slug: "sedia-aku-sebelum-banjir",
    title: "Sedia Aku Sebelum Banjir",
    type: "Embedded systems / IoT",
    summary: "An ESP32 early warning prototype that monitors water distance and environmental readings, then triggers a local alarm and remote updates.",
    details: "The repository documents an ESP32 system using an ultrasonic sensor and DHT22. When a distance threshold is crossed, it controls servos and a siren, sends Telegram notifications, publishes MQTT telemetry, and exposes status on a local web dashboard.",
    stack: ["ESP32", "C++", "MQTT", "Telegram Bot", "HTML"],
    repository: "https://github.com/Oqexip/sediaAkuSebelumBanjir",
    role: "Sole builder",
    caseStudy: true,
  },
  {
    slug: "omongin",
    title: "OmongIn",
    type: "Full-stack web application",
    summary: "An anonymous discussion platform with boards, threaded conversations, voting, moderation, and discovery tools.",
    details: "The repository describes a Laravel application with registration, custom boards, nested replies, voting, reporting, search and filtering, and controls for sensitive content.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js"],
    repository: "https://github.com/Oqexip/OmongIn",
    role: "Sole builder",
    caseStudy: true,
  },
  {
    slug: "easyvert",
    title: "EasyVert",
    type: "Browser-based utility",
    summary: "A file conversion tool designed to process documents and images in the browser, without uploading them to a server.",
    details: "The README describes browser-based conversions between PDF, image, and office document formats using React, Vite, WebAssembly, Canvas, and JavaScript libraries.",
    stack: ["React", "Vite", "JavaScript", "WebAssembly", "Canvas"],
    repository: "https://github.com/Oqexip/EasyVert",
    role: "Sole builder",
    caseStudy: true,
  },
  {
    slug: "lsp-e-ticketing",
    title: "LSP E-Ticketing",
    type: "Web application",
    summary: "An e-ticketing web project created for LSP work.",
    details: "",
    stack: [],
    repository: "https://github.com/Oqexip/LSP_E-Ticketing",
    role: "Sole builder",
    caseStudy: false,
  },
];
