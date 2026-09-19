import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project?.caseStudy) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.title} | ${site.name}`, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project?.caseStudy) notFound();

  return (
    <main id="main-content" className="case-main shell">
      <Link className="case-back" href="/#work"><span aria-hidden="true">←</span> Back to selected work</Link>
      <div className="case-header"><p className="eyebrow"><span className="eyebrow-line" />PROJECT / {project.type}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p></div>
      <div className="case-rule" />
      <div className="case-grid"><section aria-labelledby="case-overview"><p className="eyebrow"><span className="eyebrow-line" />OVERVIEW</p><h2 id="case-overview">The project.</h2><p>{project.details}</p></section><aside aria-label="Project facts"><dl className="case-facts"><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Repository</dt><dd><a className="inline-link" href={project.repository} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">View source <span aria-hidden="true">↗</span></a></dd></div>{project.stack.length > 0 && <div><dt>Documented tools</dt><dd><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></dd></div>}</dl></aside></div>
      <div className="case-actions"><Link href="/#work">← All projects</Link><a href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Connect on LinkedIn ↗</a></div>
    </main>
  );
}
