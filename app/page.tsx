import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

function SectionHeading({ id, eyebrow, title, accent, description }: { id: string; eyebrow: string; title: string; accent: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h2 id={id}>{title} <em>{accent}</em></h2>{description && <p className="section-description">{description}</p>}</div>;
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const destination = project.caseStudy ? `/work/${project.slug}` : project.repository;
  const content = <><span className="project-index">0{index + 1}</span><span className="project-body"><span className="project-title">{project.title}</span><span className="project-summary">{project.summary}</span><span className="project-tags">{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</span></span><span className="project-trailing"><span className="project-type">{project.type}</span><span className="round-arrow" aria-hidden="true">↗</span></span></>;
  return <li>{project.caseStudy ? <Link className="project-row" href={destination} aria-label={`Read about ${project.title}`}>{content}</Link> : <a className="project-row" href={destination} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click" aria-label={`View ${project.title} repository`}>{content}</a>}</li>;
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true"><span>IS</span></div>
        <div className="hero-content shell">
          <p className="hero-eyebrow">ELECTRICAL ENGINEERING · SOFTWARE · ELECTRONICS</p>
          <h1 id="hero-title">Ilham <em>Sikumbang.</em></h1>
          <p className="hero-role">Building software for the web and the physical world.</p>
          <p className="hero-summary">Electrical Engineering student at Universitas Gadjah Mada, developing practical work across software and electronics.</p>
          <div className="hero-actions"><a className="button button-light" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Connect on LinkedIn <span aria-hidden="true">↗</span></a><Link className="button button-outline" href="/#work">Explore my work <span aria-hidden="true">↘</span></Link></div>
        </div>
        <div className="hero-bottom shell"><span>PORTFOLIO / 2026</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
      </section>

      <section className="section about-section shell" id="about" aria-labelledby="about-title">
        <div className="about-copy"><SectionHeading id="about-title" eyebrow="ABOUT ME" title="The person" accent="behind the work." /><p className="about-lead">I&apos;m Ilham, a developer and Electrical Engineering student who enjoys making useful things work in the browser and in the physical world.</p><p className="body-copy">My experience includes building internal web applications and exploring embedded systems through independent projects. I care about clear interfaces, reliable implementation, and learning through real problems.</p><a className="inline-link" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">More about me on LinkedIn <span aria-hidden="true">↗</span></a></div>
        <figure className="about-panel"><Image src="/images/ilham-portrait.png" alt="Portrait of Ilham Sikumbang wearing a black suit in front of a red curtain" width={800} height={800} sizes="(max-width: 800px) 100vw, 44vw" /><figcaption><span>ILHAM SIKUMBANG</span><span>INDONESIA / UGM</span></figcaption></figure>
      </section>

      <section className="section work-section shell" id="work" aria-labelledby="work-title"><div className="section-topline"><div><p className="eyebrow"><span className="eyebrow-line" />SELECTED WORK</p><h2 id="work-title">Projects <em>in focus.</em></h2><p className="section-description">A small selection of things I built, from web applications to an ESP32 prototype.</p></div><a className="outline-link" href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">Explore GitHub <span aria-hidden="true">↗</span></a></div><ol className="project-list">{projects.map((project, index) => <ProjectRow project={project} index={index} key={project.slug} />)}</ol></section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title"><div className="shell"><SectionHeading id="experience-title" eyebrow="EXPERIENCE" title="The work" accent="so far." description="Roles that have shaped how I build and collaborate." /><div className="timeline">{profile.experience.map((item) => <article className="timeline-item" key={item.role}><span className="timeline-date">{item.period}</span><span className="timeline-dot" aria-hidden="true" /><div className="timeline-card"><span className="card-kicker">{item.company}</span><h3>{item.role}</h3><p>{item.summary}</p></div></article>)}</div></div></section>

      <section className="section education-section shell" id="education" aria-labelledby="education-title"><SectionHeading id="education-title" eyebrow="EDUCATION" title="Where I" accent="learned." /><div className="education-grid"><article className="education-card"><span className="card-kicker">2026 — PRESENT</span><h3>Electrical Engineering</h3><p>Universitas Gadjah Mada</p><span className="education-note">Current study</span></article><article className="education-card"><span className="card-kicker">2023 — 2026</span><h3>Software Engineering</h3><p>SMK Negeri 1 Jakarta</p><span className="education-note">Vocational education</span></article></div></section>

      <section className="section skills-section shell" id="skills" aria-labelledby="skills-title"><SectionHeading id="skills-title" eyebrow="CAPABILITIES" title="Tools &" accent="technologies." description="Technologies documented in my CV and selected project repositories." /><div className="skill-grid">{profile.skillGroups.map((group) => <div className="skill-group" key={group.label}><div className="skill-group-head"><h3>{group.label}</h3><span>{String(group.items.length).padStart(2, "0")}</span></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

      <section className="section proof-section shell" id="achievements" aria-labelledby="achievements-title"><div className="proof-card"><p className="eyebrow"><span className="eyebrow-line" />A VERIFIED OUTCOME</p><h2 id="achievements-title">Built for <em>real use.</em></h2>{profile.achievements.map((item) => <p key={item.impact}>{item.statement} <strong>{item.impact}</strong></p>)}<span className="proof-source">SOURCE / ILHAM&apos;S CV</span></div></section>

      {profile.cvUrl && <section className="cv-section shell" id="cv" aria-labelledby="cv-title"><div><p className="eyebrow"><span className="eyebrow-line" />CURRICULUM VITAE</p><h2 id="cv-title">The full <em>picture.</em></h2><p>Explore my experience, education, and technical background in one document.</p></div><a className="button button-outline" href={profile.cvUrl} download data-umami-event="CV download">Download CV <span aria-hidden="true">↗</span></a></section>}

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-content"><p className="eyebrow"><span className="eyebrow-line" />GET IN TOUCH</p><h2 id="contact-title">Have an idea?<br /><em>Let&apos;s connect.</em></h2><p>I&apos;m open to conversations about software, electronics, and opportunities to build useful things.</p><div className="contact-actions"><a className="button button-light" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Connect on LinkedIn <span aria-hidden="true">↗</span></a><a className="button button-outline" href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">View GitHub <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
  );
}
