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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <div className="shell header-inner">
            <Link className="wordmark" href="/" aria-label="Ilham Sikumbang, home">ILHAM<span>.</span></Link>
            <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/#skills">Skills</Link><Link href="/#about">About</Link><Link href="/#education">Education</Link><Link href="/#experience">Experience</Link><Link href="/#achievements">Achievements</Link><Link href="/#cv">CV</Link></nav>
            <details className="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation"><Link href="/#work">Work</Link><Link href="/#skills">Skills</Link><Link href="/#about">About</Link><Link href="/#education">Education</Link><Link href="/#experience">Experience</Link><Link href="/#achievements">Achievements</Link><Link href="/#cv">CV</Link></nav></details>
            <Link className="header-contact" href="/#contact">Let&apos;s connect <span aria-hidden="true">↗</span></Link>
          </div>
        </header>
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && <Script src="https://cloud.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} strategy="afterInteractive" />}
        <footer className="site-footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} Ilham Sikumbang</span><div><a href={site.linkedin} target="_blank" rel="noopener noreferrer" data-umami-event="LinkedIn click">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer" data-umami-event="GitHub click">GitHub ↗</a><Link href="/#main-content">Back to top ↑</Link></div></div></footer>
      </body>
    </html>
  );
}
