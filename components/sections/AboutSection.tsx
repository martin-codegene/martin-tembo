import { SKILLS } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <SectionHeader title="About" />
        <div className="text-neutral-400 leading-relaxed space-y-4">
            <p>
                In 2025, software isn't just about code—it's about <strong className="text-white">intelligence</strong>.
                I specialize in bridging the gap between robust backend systems and modern AI capabilities.
            </p>
            <p>
                Currently, I'm building high-performance real estate platforms at <strong className="text-white">Homiee</strong>,
                where I focus on sub-100ms latency search engines. Prior to that, I engineered backend systems for a job platform
                at Elobbs Technologies.
            </p>
            <p>
                My stack is sharp and type-safe: <span className="text-white">TypeScript, Go, and Python</span> are my daily drivers.
                When I'm not pushing code, I'm researching RAG pipelines and AI agent workflows.
            </p>
        </div>

        {/* Skill Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
            {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category} className="p-4 border border-neutral-900 bg-neutral-950/30 rounded-lg">
                    <h4 className="text-xs font-bold text-neutral-200 uppercase mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map(skill => (
                            <span key={skill} className="text-xs text-neutral-500">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);


export default AboutSection;