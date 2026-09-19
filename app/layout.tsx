import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { siteUrl } from "@/content/site-url";
import "./globals.css";

const geistSans = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-geist-sans", display: "swap" });
const geistMono = localFont({ src: "./fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: { default: `${site.name} — Software & Electronics`, template: `%s | ${site.name}` },
  description: "Ilham Sikumbang is an Electrical Engineering student at Universitas Gadjah Mada working across software and electronics.",
  openGraph: {
    title: `${site.name} — Software & Electronics`,
    description: "Building software for the web and the physical world.",
    type: "website",
  },
};

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
];

const mobileNavigation = [
  ...navigation,
  { label: "Education", href: "/#education" },
  { label: "Achievements", href: "/#achievements" },
  { label: "CV", href: "/#cv" },
  { label: "Contact", href: "/#contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <nav className="nav-pill" aria-label="Primary navigation">
            <Link className="nav-mark" href="/#home" aria-label="Ilham Sikumbang, home">IS<span>.</span></Link>
            <div className="nav-links">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
            <a className="nav-contact" href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">Let&apos;s connect <span aria-hidden="true">↗</span></a>
            <details className="mobile-nav">
              <summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary>
              <div className="mobile-nav-panel">{mobileNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<a href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">GitHub ↗</a></div>
            </details>
          </nav>
        </header>
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && <Script src="https://cloud.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} strategy="afterInteractive" />}
        <footer className="site-footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} Ilham Sikumbang</span><span>Built across software and electronics.</span><div><a href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">GitHub ↗</a><Link href="/#home">Back to top ↑</Link></div></div></footer>
      </body>
    </html>
  );
}
