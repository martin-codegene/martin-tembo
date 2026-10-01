import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS, getProject } from '@/lib/projects';

const mono = "font-['JetBrains_Mono',monospace]";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return {};
    return {
        title: `${project.title} — Martin Tembo`,
        description: project.desc,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const index = PROJECTS.indexOf(project);
    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];
    const links = [{ link: project.link, linkText: project.linkText }, ...(project.extraLinks ?? [])];
    const statusColor = project.status === 'Live' ? 'text-[#00ff88] border-[#00ff88]/40' : 'text-[#fbbf24] border-[#fbbf24]/40';

    return (
        <div className="min-h-screen bg-[#050505] text-[#f0f0f0] font-['Space_Grotesk',sans-serif] overflow-x-hidden selection:bg-[#00ff88]/30">

            {/* NAV */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]">
                <Link href="/" className={`${mono} text-sm text-[#00ff88] tracking-widest`}>
                    <span className="text-[#555]">~/</span>martin-tembo<span className="text-[#555]">/projects/</span>{project.slug}
                </Link>
                <Link href="/#projects" className={`hidden sm:inline-flex items-center gap-2 text-[#888] hover:text-[#00ff88] text-[13px] tracking-widest uppercase transition-colors`}>
                    <ArrowLeft size={14} /> All Projects
                </Link>
            </nav>

            {/* HERO */}
            <header className="px-6 md:px-12 pt-[140px] pb-16 border-b border-[#1a1a1a] relative">
                <div className={`absolute right-6 md:right-12 top-[120px] ${mono} text-[96px] md:text-[160px] font-bold text-[#111] leading-none select-none pointer-events-none`}>
                    {project.num}
                </div>
                <div className="relative max-w-[900px]">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className={`${mono} text-xs text-[#00ff88] tracking-[3px] uppercase`}>{project.cat}</span>
                        <span className={`${mono} text-[10px] tracking-widest uppercase px-2 py-0.5 border ${statusColor}`}>{project.status}</span>
                    </div>
                    <h1 className="text-[clamp(40px,7vw,80px)] font-bold leading-none tracking-tight mb-6">
                        {project.title}<span className="text-[#555] font-light">.</span>
                    </h1>
                    <p className="text-lg text-[#888] leading-relaxed max-w-[720px] mb-10">{project.desc}</p>
                    <div className="flex flex-wrap gap-3">
                        {links.map(({ link, linkText }) => link === '#' ? (
                            <span key={linkText} className={`${mono} text-xs tracking-widest uppercase px-5 py-3 border border-[#1a1a1a] text-[#555]`}>
                                {linkText}
                            </span>
                        ) : (
                            <a key={linkText} href={link} target="_blank" rel="noreferrer" className={`${mono} inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-3 border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-[#050505] transition-colors`}>
                                {linkText} <ArrowUpRight size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            {/* BODY */}
            <main className="px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
                <div className="min-w-0">
                    <section className="mb-14">
                        <div className={`${mono} text-xs text-[#00ff88] tracking-[3px] uppercase mb-4`}>{'// Overview'}</div>
                        <div className="space-y-4">
                            {project.overview.map((para) => (
                                <p key={para} className="text-[16px] text-[#bbb] leading-relaxed">{para}</p>
                            ))}
                        </div>
                    </section>

                    {project.sections.map((section, i) => (
                        <section key={section.title} className="mb-12">
                            <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-[#1a1a1a]">
                                <span className={`${mono} text-xs text-[#555]`}>{String(i + 1).padStart(2, '0')}</span>
                                <h2 className="text-[22px] font-bold">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="text-[15px] text-[#888] leading-relaxed pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                {/* SIDEBAR */}
                <aside className="lg:sticky lg:top-[100px] self-start">
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6">
                        <div className="flex gap-2 mb-5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28ca41]"></div>
                        </div>
                        <div className={`${mono} text-xs mb-5`}>
                            <span className="text-[#00ff88]">$ </span><span className="text-[#f0f0f0]">cat stack.json</span>
                        </div>
                        <div className="space-y-5">
                            {project.stack.map(({ group, items }) => (
                                <div key={group}>
                                    <div className={`${mono} text-[10px] text-[#7dd3fc] tracking-widest uppercase mb-2`}>{group}</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {items.map((item) => (
                                            <span key={item} className={`${mono} text-[11px] px-2 py-0.5 border border-[#1a1a1a] text-[#fbbf24]`}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </main>

            {/* PREV / NEXT */}
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#1a1a1a] border-t border-[#1a1a1a]">
                <Link href={`/projects/${prev.slug}`} className="bg-[#0d0d0d] hover:bg-[#0d1a12] px-6 md:px-12 py-10 group transition-colors">
                    <div className={`${mono} text-[11px] text-[#555] tracking-widest uppercase mb-2 flex items-center gap-2`}>
                        <ArrowLeft size={12} /> Previous
                    </div>
                    <div className="text-xl font-bold group-hover:text-[#00ff88] transition-colors">{prev.title}</div>
                </Link>
                <Link href={`/projects/${next.slug}`} className="bg-[#0d0d0d] hover:bg-[#0d1a12] px-6 md:px-12 py-10 group transition-colors sm:text-right">
                    <div className={`${mono} text-[11px] text-[#555] tracking-widest uppercase mb-2 flex items-center gap-2 sm:justify-end`}>
                        Next <ArrowRight size={12} />
                    </div>
                    <div className="text-xl font-bold group-hover:text-[#00ff88] transition-colors">{next.title}</div>
                </Link>
            </nav>

            {/* FOOTER */}
            <footer className="px-6 md:px-12 py-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
                <div className={`${mono} text-xs text-[#555]`}>© 2026 Martin Tembo. All rights reserved.</div>
                <a href="mailto:martin.codegene@gmail.com" className="text-xs text-[#00ff88] tracking-widest uppercase hover:underline">
                    Hire Me →
                </a>
            </footer>
        </div>
    );
}
