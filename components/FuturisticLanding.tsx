'use client';

import {
    Monitor,
    Server,
    Bot,
    Cloud,
    Mail,
    Phone,
    Github,
    ArrowRight
} from 'lucide-react';

export default function FuturisticLanding() {
    return (
        <div className="bg-[#050814] text-white font-['Outfit',sans-serif] overflow-x-hidden scroll-smooth selection:bg-[#8b5cf6]/30">

            {/* Tiny style block purely for custom keyframe animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float1 { from{transform:translate(0,0)} to{transform:translate(60px,80px)} }
        @keyframes float2 { from{transform:translate(0,0)} to{transform:translate(-60px,-80px)} }
        @keyframes float3 { from{transform:translate(0,0)} to{transform:translate(40px,-60px)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 6px #22c55e} 50%{box-shadow:0 0 14px #22c55e} }
        .animate-float1 { animation: float1 20s infinite alternate; }
        .animate-float2 { animation: float2 18s infinite alternate; }
        .animate-float3 { animation: float3 15s infinite alternate; }
        .animate-glow { animation: glow 2s infinite; }
      `}} />

            {/* Background Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute rounded-full blur-[80px] opacity-15 w-[600px] h-[600px] bg-[#00e5ff] -top-[200px] -left-[100px] animate-float1"></div>
                <div className="absolute rounded-full blur-[80px] opacity-15 w-[500px] h-[500px] bg-[#8b5cf6] -bottom-[150px] -right-[100px] animate-float2"></div>
                <div className="absolute rounded-full blur-[80px] opacity-15 w-[300px] h-[300px] bg-[#ec4899] top-1/2 left-[40%] animate-float3"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-[#050814]/70 backdrop-blur-xl border-b border-white/10">
                <div className="text-lg font-bold">
                    Martin <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent">Tembo</span>
                </div>
                <div className="hidden md:flex gap-9">
                    <a href="#skills" className="text-white/50 hover:text-white text-sm transition-colors">Skills</a>
                    <a href="#experience" className="text-white/50 hover:text-white text-sm transition-colors">Experience</a>
                    <a href="#projects" className="text-white/50 hover:text-white text-sm transition-colors">Projects</a>
                    <a href="#contact" className="text-white/50 hover:text-white text-sm transition-colors">Contact</a>
                </div>
                <a href="mailto:martin.codegene@gmail.com" className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:opacity-85 transition-opacity">
                    Hire Me
                </a>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center px-6 md:px-16 pt-[120px] pb-20">
                <div className="max-w-[760px]">
                    <div className="inline-flex items-center gap-2 py-1.5 pr-3.5 pl-1.5 border border-white/10 rounded-full bg-white/5 text-xs text-white/50 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-glow"></span>
                        Available for new opportunities
                    </div>
                    <h1 className="text-[clamp(52px,8vw,96px)] font-black leading-none tracking-tight mb-7">
                        Full Stack<br />
                        <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent block">Engineer.</span>
                        <span className="font-extralight text-white/60 text-[0.7em] tracking-normal block mt-2">AI · Web · Mobile</span>
                    </h1>
                    <p className="text-lg text-white/50 leading-relaxed max-w-[520px] mb-12">
                        I architect and build exceptional, scalable, AI-driven digital experiences. Bridging complex backend microservices with sleek frontends to create premium digital products.
                    </p>
                    <div className="flex gap-4 flex-wrap mb-16">
                        <a href="#projects" className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,229,255,0.2)] transition-all">
                            View My Work
                        </a>
                        <a href="mailto:martin.codegene@gmail.com" className="bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-lg text-[15px] font-medium backdrop-blur-md hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                            Get In Touch
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
                        <div className="md:pr-12 md:mr-12 md:border-r border-white/10">
                            <div className="text-[42px] font-black bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent leading-none">3+</div>
                            <div className="text-xs text-white/25 mt-1">Years Experience</div>
                        </div>
                        <div className="md:pr-12 md:mr-12 md:border-r border-white/10">
                            <div className="text-[42px] font-black bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent leading-none">8+</div>
                            <div className="text-xs text-white/25 mt-1">Projects Shipped</div>
                        </div>
                        <div>
                            <div className="text-[42px] font-black bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent leading-none">100%</div>
                            <div className="text-xs text-white/25 mt-1">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative z-10 px-6 md:px-16 py-[60px] md:py-[100px]">
                <div className="inline-block px-3.5 py-1 border border-white/10 rounded-full text-[11px] tracking-widest uppercase text-[#00e5ff] bg-[#00e5ff]/10 mb-4 font-['Fira_Code',monospace]">
          // skills
                </div>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight mb-14 leading-tight">
                    Tech <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent">Stack</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-7 backdrop-blur-md hover:border-[#00e5ff]/50 transition-colors">
                        <Monitor className="mb-4 text-[#00e5ff]" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-4">Frontend</div>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'React Native', 'Expo', 'TypeScript'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/50">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-7 backdrop-blur-md hover:border-[#00e5ff]/50 transition-colors">
                        <Server className="mb-4 text-[#00e5ff]" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-4">Backend</div>
                        <div className="flex flex-wrap gap-2">
                            {['NestJS', 'Node.js', 'Go', 'Python', 'REST APIs'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/50">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-7 backdrop-blur-md hover:border-[#00e5ff]/50 transition-colors">
                        <Bot className="mb-4 text-[#00e5ff]" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-4">AI Integration</div>
                        <div className="flex flex-wrap gap-2">
                            {['OpenAI', 'LLMs', 'NLP', 'AI Agents'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/50">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-7 backdrop-blur-md hover:border-[#00e5ff]/50 transition-colors">
                        <Cloud className="mb-4 text-[#00e5ff]" size={28} strokeWidth={1.5} />
                        <div className="text-base font-bold mb-4">Cloud & Databases</div>
                        <div className="flex flex-wrap gap-2">
                            {['AWS', 'PostgreSQL', 'MongoDB', 'Microservices', 'Serverless'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/50">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="relative z-10 px-6 md:px-16 py-[60px] md:py-[100px]">
                <div className="inline-block px-3.5 py-1 border border-white/10 rounded-full text-[11px] tracking-widest uppercase text-[#00e5ff] bg-[#00e5ff]/10 mb-4 font-['Fira_Code',monospace]">
          // experience
                </div>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight mb-14 leading-tight">
                    Work <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent">History</span>
                </h2>

                <div className="flex flex-col gap-5">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md hover:border-white/20 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-3">
                            <div>
                                <div className="text-2xl font-bold mb-1">Full Stack Developer</div>
                                <div className="text-sm text-[#00e5ff] font-medium">Homiee</div>
                            </div>
                            <div className="md:text-right">
                                <div className="font-['Fira_Code',monospace] text-xs text-white/50">2025 — 2026</div>
                                <div className="text-xs text-white/25 mt-1">Australia (Remote)</div>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-white/50 text-sm leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8b5cf6]">Architected and developed core systems for a real estate web platform serving the Australian market.</li>
                            <li className="text-white/50 text-sm leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8b5cf6]">Designed and built production-grade user interfaces in Next.js and React, including dashboards, video interaction panels, and AI chat interfaces.</li>
                            <li className="text-white/50 text-sm leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8b5cf6]">Engineered a real-time AI-powered chat system enabling Q&A between users and intelligent agents using NLP-driven workflows.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {['Next.js', 'React', 'Node.js', 'Python', 'AWS', 'OpenAI'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-md bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-xs text-[#8b5cf6]">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md hover:border-white/20 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-3">
                            <div>
                                <div className="text-2xl font-bold mb-1">Full-Stack Engineer</div>
                                <div className="text-sm text-[#00e5ff] font-medium">Elobbs Technologies</div>
                            </div>
                            <div className="md:text-right">
                                <div className="font-['Fira_Code',monospace] text-xs text-white/50">2023 — 2025</div>
                                <div className="text-xs text-white/25 mt-1">Bangladesh (Remote)</div>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-white/50 text-sm leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8b5cf6]">Developed and maintained NestJS backend services for a job posting and contract management platform.</li>
                            <li className="text-white/50 text-sm leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8b5cf6]">Implemented RESTful APIs for job listings, contracts, and user management workflows.</li>
                            <li className="text-white/50 text-sm leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8b5cf6]">Built a Google Business Reviews aggregation system using Go (Golang) microservices.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {['NestJS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Golang', 'React'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-md bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-xs text-[#8b5cf6]">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative z-10 px-6 md:px-16 py-[60px] md:py-[100px]">
                <div className="inline-block px-3.5 py-1 border border-white/10 rounded-full text-[11px] tracking-widest uppercase text-[#00e5ff] bg-[#00e5ff]/10 mb-4 font-['Fira_Code',monospace]">
          // projects
                </div>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight mb-14 leading-tight">
                    Selected <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent">Work</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all md:col-span-2 group relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="font-['Fira_Code',monospace] text-[10px] tracking-widest text-[#00e5ff] mb-3 uppercase">AI · B2B · SaaS</div>
                            <div className="text-[22px] font-bold mb-2.5">PricePul</div>
                            <p className="text-[13px] text-white/50 leading-relaxed flex-1">B2B pricing intelligence SaaS that monitors every competitor pricing page 24/7. The moment something changes — plans, tiers, promos — your sales team gets an alert with AI context before the next demo. Featured on Product Hunt.</p>
                            <div className="mt-5 flex gap-2 items-center flex-wrap">
                                <a href="https://pricepul.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-['Fira_Code',monospace] text-[11px] text-[#00e5ff] hover:underline">
                                    pricepul.com <ArrowRight size={12} />
                                </a>
                                {['Next.js', 'AI/NLP', 'Playwright'].map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-white/25">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="font-['Fira_Code',monospace] text-[10px] tracking-widest text-[#00e5ff] mb-3 uppercase">AI · Lead Gen</div>
                            <div className="text-[22px] font-bold mb-2.5">AudienceAce</div>
                            <p className="text-[13px] text-white/50 leading-relaxed flex-1">AI-powered B2B lead generation platform utilizing an NLP engine to identify, qualify, and engage the right audiences at scale.</p>
                            <div className="mt-5 flex gap-2 items-center flex-wrap">
                                <a href="https://audienceace.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-['Fira_Code',monospace] text-[11px] text-[#00e5ff] hover:underline">
                                    audienceace.com <ArrowRight size={12} />
                                </a>
                                {['NLP', 'AI'].map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-white/25">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="font-['Fira_Code',monospace] text-[10px] tracking-widest text-[#00e5ff] mb-3 uppercase">E-Commerce</div>
                            <div className="text-[22px] font-bold mb-2.5">MetiBuy</div>
                            <p className="text-[13px] text-white/50 leading-relaxed flex-1">Premium multi-vendor marketplace with scalable serverless architecture. Handles complex vendor management and payment workflows.</p>
                            <div className="mt-5 flex gap-2 items-center flex-wrap">
                                <a href="https://metibuy.shop" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-['Fira_Code',monospace] text-[11px] text-[#00e5ff] hover:underline">
                                    metibuy.shop <ArrowRight size={12} />
                                </a>
                                {['Serverless', 'AWS'].map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-white/25">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="font-['Fira_Code',monospace] text-[10px] tracking-widest text-[#00e5ff] mb-3 uppercase">Real Estate · AI</div>
                            <div className="text-[22px] font-bold mb-2.5">Homiee</div>
                            <p className="text-[13px] text-white/50 leading-relaxed flex-1">Real estate platform handling 100+ active listings with AI-powered Q&A agents and video interaction panels for the Australian market.</p>
                            <div className="mt-5 flex gap-2 items-center flex-wrap">
                                <span className="inline-flex items-center gap-1 font-['Fira_Code',monospace] text-[11px] text-white/30">
                                    Internal Project
                                </span>
                                {['Next.js', 'OpenAI'].map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-white/25">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="font-['Fira_Code',monospace] text-[10px] tracking-widest text-[#00e5ff] mb-3 uppercase">Productivity</div>
                            <div className="text-[22px] font-bold mb-2.5">MeetingFlow</div>
                            <p className="text-[13px] text-white/50 leading-relaxed flex-1">AI productivity platform for meeting optimization, helping teams extract value from every session with intelligent summarization.</p>
                            <div className="mt-5 flex gap-2 items-center flex-wrap">
                                <a href="https://meetingflow.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-['Fira_Code',monospace] text-[11px] text-[#00e5ff] hover:underline">
                                    meetingflow.app <ArrowRight size={12} />
                                </a>
                                {['React', 'AI'].map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-white/25">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="font-['Fira_Code',monospace] text-[10px] tracking-widest text-[#00e5ff] mb-3 uppercase">Microservices</div>
                            <div className="text-[22px] font-bold mb-2.5">GMB Reviews</div>
                            <p className="text-[13px] text-white/50 leading-relaxed flex-1">Dashboard aggregating Google My Business data using Go microservices for real-time business intelligence and review insights.</p>
                            <div className="mt-5 flex gap-2 items-center flex-wrap">
                                <a href="https://gmbrevs.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-['Fira_Code',monospace] text-[11px] text-[#00e5ff] hover:underline">
                                    gmbrevs.com <ArrowRight size={12} />
                                </a>
                                {['Golang', 'Dashboard'].map(tag => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] text-white/25">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative z-10 px-6 md:px-16 py-[60px] md:py-[100px]">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                    <div>
                        <div className="inline-block px-3.5 py-1 border border-white/10 rounded-full text-[11px] tracking-widest uppercase text-[#00e5ff] bg-[#00e5ff]/10 mb-4 font-['Fira_Code',monospace]">
              // contact
                        </div>
                        <div className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight leading-tight mb-4">
                            Let&apos;s build<br />something <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent">great.</span>
                        </div>
                        <p className="text-base text-white/50 leading-relaxed">
                            Available for full-time roles and interesting projects. Remote-first, experienced working across Australian and European time zones.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a href="mailto:martin.codegene@gmail.com" className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all backdrop-blur-md group">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                <Mail size={18} strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5 font-['Fira_Code',monospace]">Email</div>
                                <div className="text-sm font-medium text-white">martin.codegene@gmail.com</div>
                            </div>
                        </a>

                        <a href="tel:+260779699188" className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all backdrop-blur-md group">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                <Phone size={18} strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5 font-['Fira_Code',monospace]">Phone / WhatsApp</div>
                                <div className="text-sm font-medium text-white">+260 779 699 188</div>
                            </div>
                        </a>

                        <a href="https://github.com/martin-codegene" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all backdrop-blur-md group">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                <Github size={18} strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5 font-['Fira_Code',monospace]">GitHub</div>
                                <div className="text-sm font-medium text-white">github.com/martin-codegene</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 px-6 md:px-16 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                <div className="font-bold text-[15px]">
                    Martin <span className="bg-gradient-to-br from-[#00e5ff] to-[#8b5cf6] bg-clip-text text-transparent">Tembo</span>
                </div>
                <div className="text-[13px] text-white/25">
                    © 2026 — Full Stack Software Engineer
                </div>
            </footer>
        </div>
    );
}