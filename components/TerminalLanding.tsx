'use client';

import {
    Terminal,
    Layers,
    Cpu,
    Database,
    Mail,
    Phone,
    Github,
    Linkedin,
    Instagram,
    Facebook,
    ArrowRight,
    Download,
    Link2,
    type LucideProps
} from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

function XIcon(props: LucideProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={props.className}>
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
    );
}

function WhatsAppIcon(props: LucideProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={props.className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

const SOCIALS = [
    { label: 'LinkedIn', handle: 'in/martin-tembo', href: 'https://www.linkedin.com/in/martin-tembo-3844b3186', icon: Linkedin },
    { label: 'WhatsApp', handle: '+260 779 699 188', href: 'https://wa.me/message/DV7BUBEAFENND1', icon: WhatsAppIcon },
    { label: 'GitHub', handle: 'martin-codegene', href: 'https://github.com/martin-codegene', icon: Github },
    { label: 'X', handle: '@martintembo_1', href: 'https://x.com/martintembo_1', icon: XIcon },
    { label: 'Instagram', handle: '@martintembo1', href: 'https://www.instagram.com/martintembo1', icon: Instagram },
    { label: 'Facebook', handle: 'Martin Tembo', href: 'https://www.facebook.com/share/1EjKKiZmmc/', icon: Facebook },
];

export default function TerminalLanding() {
    return (
        <div className="bg-[#050505] text-[#f0f0f0] font-['Space_Grotesk',sans-serif] overflow-x-hidden scroll-smooth selection:bg-[#00ff88]/30">

            {/* Global custom styles for complex patterns and animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        /* Scanline overlay */
        body::before {
          content: '';
          position: fixed; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.02) 2px, rgba(0,255,136,0.02) 4px);
          pointer-events: none; z-index: 9999;
        }
        
        /* Hero grid with radial mask */
        .hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.4;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .animate-blink { animation: blink 1s infinite; }
        .animate-pulse-slow { animation: pulse 2s infinite; }
      `}} />

            {/* NAV */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]">
                <div className="font-['JetBrains_Mono',monospace] text-sm text-[#00ff88] tracking-widest">
                    <span className="text-[#555]">~/</span>martin-tembo
                </div>
                <div className="hidden md:flex gap-8">
                    <a href="#skills" className="text-[#888] hover:text-[#00ff88] text-[13px] tracking-widest uppercase transition-colors">Skills</a>
                    <a href="#experience" className="text-[#888] hover:text-[#00ff88] text-[13px] tracking-widest uppercase transition-colors">Experience</a>
                    <a href="#projects" className="text-[#888] hover:text-[#00ff88] text-[13px] tracking-widest uppercase transition-colors">Projects</a>
                    <a href="#contact" className="text-[#888] hover:text-[#00ff88] text-[13px] tracking-widest uppercase transition-colors">Contact</a>
                </div>
                <a href="mailto:martin.codegene@gmail.com" className="bg-transparent border border-[#00ff88] text-[#00ff88] px-5 py-2 font-['JetBrains_Mono',monospace] text-xs tracking-widest uppercase hover:bg-[#00ff88] hover:text-[#050505] transition-all">
                    Hire Me
                </a>
            </nav>

            {/* HERO */}
            <section className="min-h-screen flex items-center px-6 md:px-12 pt-[120px] pb-20 relative">
                <div className="hero-grid pointer-events-none"></div>
                <div className="relative max-w-[900px] z-10 w-full">
                    <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88] tracking-[3px] uppercase mb-6 flex items-center gap-3 before:content-[''] before:w-10 before:h-[1px] before:bg-[#00ff88]">
                        <span className="animate-blink text-sm">◉</span> Available for opportunities
                    </div>
                    <h1 className="text-[clamp(48px,8vw,96px)] font-bold leading-none tracking-tight mb-6">
                        Martin<br />
                        <span className="text-[#00ff88]">Tembo</span>
                        <span className="text-[#555] font-light">.</span>
                    </h1>
                    <p className="text-lg text-[#888] leading-relaxed max-w-[560px] mb-12">
                        Full Stack Software Engineer architecting scalable, AI-driven digital products. I bridge complex backend systems with sleek, highly interactive frontend experiences.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="bg-[#00ff88] text-[#050505] px-8 py-3.5 font-bold text-sm tracking-widest uppercase hover:bg-[#00cc6a] hover:-translate-y-0.5 transition-all flex items-center ">
                            <span>
                                View My Work
                            </span>
                        </a>
                        <a href="mailto:martin.codegene@gmail.com" className="bg-transparent border border-[#1a1a1a] text-[#888] px-8 py-3.5 text-sm tracking-widest uppercase hover:border-[#00ff88] hover:text-[#00ff88] transition-colors flex items-center ">
                            <span>
                                Get In Touch
                            </span>
                        </a>
                        <a href="/resume.pdf" download="Martin-Tembo-CV.pdf" className="bg-transparent border border-[#1a1a1a] text-[#888] px-8 py-3.5 text-sm tracking-widest uppercase hover:border-[#00ff88] hover:text-[#00ff88] transition-colors flex items-center gap-2">
                            <Download size={16} />
                            <span>
                                Download CV
                            </span>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {SOCIALS.map(({ label, href, icon: Icon }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex items-center gap-2 px-4 py-2.5 border border-[#1a1a1a] hover:border-[#00ff88] group transition-colors">
                                <Icon className="w-4 h-4 text-[#888] group-hover:text-[#00ff88] transition-colors" />
                                <span className="font-['JetBrains_Mono',monospace] text-[11px] tracking-widest uppercase text-[#888] group-hover:text-[#00ff88] transition-colors">{label}</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-8 md:gap-12 mt-20 pt-12 border-t border-[#1a1a1a]">
                        <div>
                            <div className="text-[40px] font-bold text-[#00ff88] font-['JetBrains_Mono',monospace]">4+</div>
                            <div className="text-xs text-[#555] tracking-widest uppercase mt-1">Years Professional</div>
                        </div>
                        <div>
                            <div className="text-[40px] font-bold text-[#00ff88] font-['JetBrains_Mono',monospace]">{PROJECTS.filter(p => p.status === 'Live').length}</div>
                            <div className="text-xs text-[#555] tracking-widest uppercase mt-1">Projects Shipped</div>
                        </div>
                        <div>
                            <div className="text-[40px] font-bold text-[#00ff88] font-['JetBrains_Mono',monospace]">4</div>
                            <div className="text-xs text-[#555] tracking-widest uppercase mt-1">Client Countries</div>
                        </div>
                    </div>
                </div>

                {/* TERMINAL BLOCK */}
                <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[360px] bg-[#0d0d0d] border border-[#1a1a1a] p-5 z-10 shadow-2xl">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28ca41]"></div>
                    </div>
                    <div className="font-['JetBrains_Mono',monospace] text-xs leading-relaxed">
                        <div><span className="text-[#00ff88]">$ </span><span className="text-[#f0f0f0]">cat developer.json</span></div>
                        <div className="text-[#888]">{"{"}</div>
                        <div className="text-[#888]">&nbsp;&nbsp;<span className="text-[#7dd3fc]">"name"</span>: <span className="text-[#fbbf24]">"Martin Tembo"</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;<span className="text-[#7dd3fc]">"role"</span>: <span className="text-[#fbbf24]">"Full Stack Engineer"</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;<span className="text-[#7dd3fc]">"location"</span>: <span className="text-[#fbbf24]">"Remote / Zambia"</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;<span className="text-[#7dd3fc]">"coding_since"</span>: <span className="text-[#c084fc]">2017</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;<span className="text-[#7dd3fc]">"stack"</span>: [</div>
                        <div className="text-[#888]">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#fbbf24]">"Next.js"</span>, <span className="text-[#fbbf24]">"React"</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#fbbf24]">"React Native"</span>, <span className="text-[#fbbf24]">"Hono"</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#fbbf24]">"NestJS"</span>, <span className="text-[#fbbf24]">"AWS"</span>,</div>
                        <div className="text-[#888]">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#fbbf24]">"AI/RAG"</span>, <span className="text-[#fbbf24]">"Go"</span></div>
                        <div className="text-[#888]">&nbsp;&nbsp;],</div>
                        <div className="text-[#888]">&nbsp;&nbsp;<span className="text-[#7dd3fc]">"available"</span>: <span className="text-[#00ff88]">true</span></div>
                        <div className="text-[#888]">{"}"}</div>
                        <div className="mt-3"><span className="text-[#00ff88]">$ </span><span className="text-[#f0f0f0]">./hire-martin.sh<span className="animate-blink">▋</span></span></div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="px-6 md:px-12 py-[60px] md:py-[100px]">
                <div className="mb-16">
                    <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88] tracking-[3px] uppercase mb-3">
            // 01 — Capabilities
                    </div>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight">
                        What I <span className="text-[#555]">Build</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1a1a1a]">
                    <div className="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors">
                        <Layers className="text-[#00ff88] mb-4" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-2">Frontend Development</div>
                        <div className="text-[13px] text-[#888] leading-relaxed">Building pixel-perfect, performant UIs across web, mobile, and desktop — from dashboards to AI chat interfaces and cross-platform apps.</div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {['React', 'Next.js', 'React Native', 'Expo', 'Tauri', 'UI/UX'].map(tag => (
                                <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors">
                        <Terminal className="text-[#00ff88] mb-4" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-2">AI Integration</div>
                        <div className="text-[13px] text-[#888] leading-relaxed">Embedding LLMs into production apps — RAG pipelines with citations, AI tutors, agents, and intelligent automation.</div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {['OpenAI', 'Gemini', 'RAG', 'pgvector', 'MCP', 'AI Agents'].map(tag => (
                                <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors">
                        <Cpu className="text-[#00ff88] mb-4" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-2">Backend Systems</div>
                        <div className="text-[13px] text-[#888] leading-relaxed">Scalable microservices, REST & GraphQL APIs, real-time WebSockets, and background job pipelines built for production loads.</div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {['NestJS', 'Hono', 'GraphQL', 'Node.js', 'Bun', 'Go', 'Python', 'Rust'].map(tag => (
                                <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors">
                        <Database className="text-[#00ff88] mb-4" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-2">Databases & DevOps</div>
                        <div className="text-[13px] text-[#888] leading-relaxed">Managing data at scale with PostgreSQL, MongoDB, and cloud-native infrastructure patterns.</div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'AWS', 'Fly.io', 'Docker'].map(tag => (
                                <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="px-6 md:px-12 py-[60px] md:py-[100px] bg-[#0d0d0d]">
                <div className="mb-16">
                    <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88] tracking-[3px] uppercase mb-3">
            // 02 — Work History
                    </div>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight">
                        Where I&apos;ve <span className="text-[#555]">Worked</span>
                    </h2>
                </div>

                <div className="flex flex-col">
                    <div className="py-10 border-b border-[#1a1a1a] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                        <div>
                            <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88]">2026 — Present</div>
                            <div className="font-bold text-lg mt-2 mb-1">ATB Applications LLC</div>
                            <div className="text-xs text-[#555]">Formerly ShaftFitters LLC</div>
                            <div className="text-xs text-[#555]">USA (Remote)</div>
                        </div>
                        <div>
                            <div className="text-[22px] font-bold mb-4">Lead Software Engineer</div>
                            <ul className="space-y-2">
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Lead engineer on <Link href="/projects/shaftfitters" className="text-[#f0f0f0] hover:text-[#00ff88] underline underline-offset-4">ShaftFitters</Link>, a golf shaft recommendation platform built from golfers&apos; own swing data, owning backend, mobile, and web end to end.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Built the iOS and Android apps in Expo and React Native, with swing-data visualisations in Skia and Reanimated, shipped to the App Store.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Architected the Hono REST API on AWS Lambda and Fly.io with PostgreSQL, Prisma, and Redis, plus BullMQ queues powering the recommendation engine, maintenance, and catalog sync.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Implemented App Store and Google Play subscriptions via RevenueCat with webhook-driven entitlements, plus Stripe payments and pay-as-you-go plans.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Built the Next.js web app and admin console, an affiliate product catalog with supplier purchase orders, and JWT/OTP auth with role-based access.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Ran production: database migrations and go-live audits, Sentry error tracking, PostHog analytics, Resend email, and Expo push notifications.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {['React Native', 'Expo', 'Next.js', 'TypeScript', 'Hono', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'AWS Lambda', 'Fly.io', 'RevenueCat', 'Stripe', 'Sentry', 'PostHog'].map(tag => (
                                    <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="py-10 border-b border-[#1a1a1a] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                        <div>
                            <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88]">2025 — 2026</div>
                            <div className="font-bold text-lg mt-2 mb-1">Homiee</div>
                            <div className="text-xs text-[#555]">Australia (Remote)</div>
                        </div>
                        <div>
                            <div className="text-[22px] font-bold mb-4">Full Stack Developer</div>
                            <ul className="space-y-2">
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Architected and developed core systems for a real estate web platform serving the Australian market.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Designed production-grade user interfaces in Next.js and React — dashboards, video panels, AI chat interfaces.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Engineered a real-time AI-powered chat system enabling Q&A between users and intelligent agents using NLP workflows.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {['Next.js', 'React', 'Node.js', 'Python', 'AWS', 'OpenAI'].map(tag => (
                                    <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="py-10 border-b border-[#1a1a1a] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                        <div>
                            <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88]">2023 — 2025</div>
                            <div className="font-bold text-lg mt-2 mb-1">Elobbs Technologies</div>
                            <div className="text-xs text-[#555]">Remote — Bangladesh</div>
                        </div>
                        <div>
                            <div className="text-[22px] font-bold mb-4">Full-Stack Engineer</div>
                            <ul className="space-y-2">
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Developed and maintained NestJS backend services for a job posting and contract management platform.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Implemented RESTful APIs for job listings, contracts, and user workflows.</li>
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">Built a Google Business Reviews aggregation system using Go (Golang) microservices.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {['NestJS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Golang', 'React'].map(tag => (
                                    <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="py-10 border-b border-[#1a1a1a] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                        <div>
                            <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88]">2022</div>
                            <div className="font-bold text-lg mt-2 mb-1">Shypass</div>
                            <div className="text-xs text-[#555]">Zambia</div>
                        </div>
                        <div>
                            <div className="text-[22px] font-bold mb-4">Full Stack Developer</div>
                            <ul className="space-y-2">
                                <li className="text-[14px] text-[#888] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#00ff88]">First professional role, building frontend and backend features across the product with React, Express, and MongoDB.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {['ExpressJS', 'ReactJS', 'JavaScript', 'MongoDB'].map(tag => (
                                    <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="px-6 md:px-12 py-[60px] md:py-[100px]">
                <div className="mb-16">
                    <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88] tracking-[3px] uppercase mb-3">
            // 03 — Selected Work
                    </div>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight">
                        Things I&apos;ve <span className="text-[#555]">Built</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1a1a1a]">
                    {PROJECTS.map((project) => (
                        <div key={project.num} className="bg-[#0d0d0d] p-9 relative overflow-hidden transition-colors hover:bg-[#0d1a12] group">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00ff88] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                            <div className="font-['JetBrains_Mono',monospace] text-[10px] text-[#00ff88] tracking-widest uppercase mb-3">
                                {project.cat}
                            </div>
                            <Link href={`/projects/${project.slug}`} className="block text-[22px] font-bold mb-3 hover:text-[#00ff88] transition-colors">{project.title}</Link>
                            <div className="text-[14px] text-[#888] leading-relaxed mb-6">
                                {project.desc}
                            </div>
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.tags.map(tag => (
                                    <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#888]">{tag}</span>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 font-['JetBrains_Mono',monospace] text-[12px] text-[#f0f0f0] tracking-widest uppercase hover:text-[#00ff88] transition-colors">
                                    Case study <ArrowRight size={12} />
                                </Link>
                                {[{ link: project.link, linkText: project.linkText }, ...(project.extraLinks ?? [])].map(({ link, linkText }) => (
                                    <a key={linkText} href={link} target={link !== '#' ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-1 font-['JetBrains_Mono',monospace] text-[12px] text-[#00ff88] tracking-widest hover:underline">
                                        {linkText} {link !== '#' && <ArrowRight size={12} />}
                                    </a>
                                ))}
                            </div>
                            <div className="absolute bottom-6 right-6 font-['JetBrains_Mono',monospace] text-5xl font-bold text-[#1a1a1a]">
                                {project.num}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="px-6 md:px-12 py-[60px] md:py-[100px] bg-[#0d0d0d]">
                <div className="border border-[#1a1a1a] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div>
                        <div className="font-['JetBrains_Mono',monospace] text-xs text-[#00ff88] tracking-[3px] uppercase mb-4">
              // 04 — Let&apos;s Talk
                        </div>
                        <div className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-tight mb-4">
                            Open to new<br /><span className="text-[#00ff88]">opportunities</span>
                        </div>
                        <p className="text-[15px] text-[#888] leading-relaxed">
                            I&apos;m currently available for full-time roles, contract work, and interesting projects. Remote-first, working across Australian, USA, and European time zones.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:martin.codegene@gmail.com" className="flex items-center gap-4 p-5 md:p-6 border border-[#1a1a1a] hover:border-[#00ff88] group transition-colors">
                            <Mail className="text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors" size={20} strokeWidth={1.5} />
                            <div>
                                <div className="font-['JetBrains_Mono',monospace] text-[11px] text-[#555] tracking-widest uppercase mb-1">Email</div>
                                <div className="text-sm text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors">martin.codegene@gmail.com</div>
                            </div>
                        </a>
                        <a href="tel:+260779699188" className="flex items-center gap-4 p-5 md:p-6 border border-[#1a1a1a] hover:border-[#00ff88] group transition-colors">
                            <Phone className="text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors" size={20} strokeWidth={1.5} />
                            <div>
                                <div className="font-['JetBrains_Mono',monospace] text-[11px] text-[#555] tracking-widest uppercase mb-1">Phone</div>
                                <div className="text-sm text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors">+260 779 699 188</div>
                            </div>
                        </a>
                        {SOCIALS.map(({ label, handle, href, icon: Icon }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 md:p-6 border border-[#1a1a1a] hover:border-[#00ff88] group transition-colors">
                                <Icon className="w-5 h-5 text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors" />
                                <div>
                                    <div className="font-['JetBrains_Mono',monospace] text-[11px] text-[#555] tracking-widest uppercase mb-1">{label}</div>
                                    <div className="text-sm text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors">{handle}</div>
                                </div>
                            </a>
                        ))}
                        <a href="https://linktr.ee/martintembo1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start mt-2 font-['JetBrains_Mono',monospace] text-[12px] text-[#00ff88] tracking-widest hover:underline">
                            <Link2 size={14} /> All my links — linktr.ee/martintembo1 <ArrowRight size={12} />
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="px-6 md:px-12 py-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="font-['JetBrains_Mono',monospace] text-xs text-[#555]">
                    © 2026 Martin Tembo. All rights reserved.
                </div>
                <a href="https://linktr.ee/martintembo1" target="_blank" rel="noreferrer" className="font-['JetBrains_Mono',monospace] text-xs text-[#555] hover:text-[#00ff88] transition-colors">
                    linktr.ee/martintembo1
                </a>
                <div className="flex items-center gap-2 text-xs text-[#00ff88]">
                    <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse-slow"></div>
                    Available for work
                </div>
            </footer>
        </div>
    );
}
