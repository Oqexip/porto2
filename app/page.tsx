import Link from "next/link";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Electrical Engineering · UGM</p>
          <h1 id="hero-title">Building software for the web <em>and</em> the physical world<span className="accent-period">.</span></h1>
          <p className="hero-description">I&apos;m <strong>Ilham Sikumbang</strong>, an Electrical Engineering student at Universitas Gadjah Mada working across software and electronics.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">Explore GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-hidden="true"><div className="aside-top"><span>01 / INTRODUCTION</span><span>ILHAM SIKUMBANG</span></div><div className="aside-center"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="aside-mark">IS<span>.</span></span></div><div className="aside-bottom"><span>SOFTWARE</span><span>+</span><span>ELECTRONICS</span></div></div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="hero-foot-line" /><span>Based in Indonesia</span></div>
      </section>

      <section className="intro-band" aria-label="Introduction"><div className="shell intro-band-inner"><span className="mono-label">A SHORT INTRODUCTION</span><p>Curious about the space where thoughtful software meets real-world systems.</p><span className="band-symbol" aria-hidden="true">↗</span></div></section>

      <section className="section shell" id="work" aria-labelledby="work-title"><div className="section-heading"><div><p className="section-index">01 / WORK</p><h2 id="work-title">Selected work<span className="accent-period">.</span></h2></div><p className="section-lead">A closer look at the ideas and technical choices behind the things I build.</p></div>
        <div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.slug}><span className="project-number">0{index + 1}</span><div><p className="project-kind">{project.type}</p><h3>{project.caseStudy ? <Link href={`/work/${project.slug}`}>{project.title}</Link> : <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.title}</a>}</h3><p>{project.summary}</p></div>{project.caseStudy ? <Link className="project-arrow" href={`/work/${project.slug}`} aria-label={`Read about ${project.title}`}>↗</Link> : <a className="project-arrow" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository`}>↗</a>}</article>)}</div>
        <a className="text-link work-more" href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">Explore more on GitHub <span aria-hidden="true">↗</span></a>
      </section>

      <section className="section section-tinted" id="focus" aria-labelledby="focus-title"><div className="shell"><div className="section-heading"><div><p className="section-index">02 / FOCUS</p><h2 id="focus-title">Two sides of the same curiosity<span className="accent-period">.</span></h2></div></div><div className="focus-grid"><div className="focus-item"><span className="focus-number">01</span><h3>Software</h3><p>Building for digital experiences, with an interest in clear interfaces and useful systems.</p><span className="focus-line" /></div><div className="focus-item"><span className="focus-number">02</span><h3>Electronics</h3><p>Exploring how code connects with hardware and the physical world through electrical engineering.</p><span className="focus-line" /></div></div></div></section>

      {profile.skills.length > 0 && <section className="section shell" id="skills" aria-labelledby="skills-title"><p className="section-index">03 / SKILLS</p><h2 id="skills-title">Tools in practice<span className="accent-period">.</span></h2><p className="section-lead skill-lead">Technologies documented in the selected project repositories.</p><ul className="simple-list">{profile.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>}

      <section className="section shell about-grid" id="about" aria-labelledby="about-title"><div><p className="section-index">04 / ABOUT</p><h2 id="about-title">A little about me<span className="accent-period">.</span></h2></div><div className="about-copy"><p className="about-large">I&apos;m Ilham, a developer and Electrical Engineering student interested in building things that connect ideas to practical use.</p><p>My work spans software and electronics. I&apos;m developing that practice through study and hands-on projects, and I&apos;m open to opportunities where I can keep learning and contribute with care.</p><a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Let&apos;s connect <span aria-hidden="true">↗</span></a></div></section>

      <section className="section shell education-section" id="education" aria-labelledby="education-title"><div className="section-heading"><div><p className="section-index">05 / EDUCATION</p><h2 id="education-title">Where I&apos;m learning<span className="accent-period">.</span></h2></div></div><div className="education-row"><span className="mono-label">AUG 2026 – PRESENT</span><div><h3>Universitas Gadjah Mada</h3><p>Electrical Engineering</p></div><span className="education-arrow" aria-hidden="true">↗</span></div><div className="education-row"><span className="mono-label">JUN 2023 – JUN 2026</span><div><h3>SMK Negeri 1 Jakarta</h3><p>Software Engineering</p></div><span className="education-arrow" aria-hidden="true">↗</span></div></section>

      {profile.experience.length > 0 && <section className="section shell" id="experience" aria-labelledby="experience-title"><p className="section-index">06 / EXPERIENCE</p><h2 id="experience-title">Experience<span className="accent-period">.</span></h2><div className="experience-list">{profile.experience.map((item) => <article className="experience-row" key={item.role}><span className="mono-label">{item.period}</span><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div></article>)}</div></section>}
      {profile.achievements.length > 0 && <section className="section shell" id="achievements" aria-labelledby="achievements-title"><p className="section-index">07 / ACHIEVEMENTS</p><h2 id="achievements-title">Achievements<span className="accent-period">.</span></h2><div className="simple-list">{profile.achievements.map((item) => <p key={item}>{item}</p>)}</div></section>}
      {profile.cvUrl && <section className="section shell" id="cv" aria-labelledby="cv-title"><p className="section-index">08 / CV</p><h2 id="cv-title">Curriculum vitae<span className="accent-period">.</span></h2><a className="text-link" href={profile.cvUrl} download data-umami-event="CV download">Download my CV <span aria-hidden="true">↗</span></a></section>}

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-inner"><p className="section-index">09 / GET IN TOUCH</p><h2 id="contact-title">Have something<br />in mind? <em>Let&apos;s talk.</em></h2><p>I&apos;m always glad to connect with people working on thoughtful software and electronics.</p><a className="button button-light" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Connect on LinkedIn <span aria-hidden="true">↗</span></a><div className="contact-bottom"><span>ILHAM SIKUMBANG</span><span>SOFTWARE &amp; ELECTRONICS</span></div></div></section>
    </main>
  );
}
