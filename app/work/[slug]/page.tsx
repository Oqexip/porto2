import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() { return projects.filter((project) => project.caseStudy).map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project?.caseStudy) return {};
  return { title: project.title, description: project.summary, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title: `${project.title} | ${site.name}`, description: project.summary, type: "article" } };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project?.caseStudy) notFound();

  return <main id="main-content" className="case-main shell"><Link className="back-link" href="/#work">← Back to selected work</Link><p className="section-index">PROJECT / {project.type}</p><h1>{project.title}<span className="accent-period">.</span></h1><p className="case-summary">{project.summary}</p><div className="case-divider" /><div className="case-grid"><div><span className="mono-label">THE PROJECT</span><p>{project.details}</p></div><aside><span className="mono-label">MY ROLE</span><p className="case-role">{project.role}</p><span className="mono-label">SOURCE</span><a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>{project.stack.length > 0 && <><span className="mono-label stack-label">DOCUMENTED TOOLS</span><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></>}</aside></div><div className="case-next"><Link href="/#work">← All work</Link><a href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Connect on LinkedIn ↗</a></div></main>;
}
