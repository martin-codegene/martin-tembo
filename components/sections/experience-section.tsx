import { EXPERIENCES } from "@/lib/data";
import { ArrowUpRight, Badge } from "lucide-react";
import SectionHeader from "./section-header";

function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Experience" />
      <ol className="group/list space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <li key={idx} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-900/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2">
                {exp.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-neutral-200">
                  <div>
                    <a className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-white focus-visible:text-white group/link text-base" href="#" aria-label={exp.role}>
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{exp.role} · <span className="inline-block text-white">{exp.company}</span></span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-neutral-400">
                  {exp.description[0]}
                </p>
                <ul className="mt-2 text-sm text-neutral-500 list-disc list-inside">
                  {exp.description.slice(1).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {exp.tech.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <a className="inline-flex items-center font-medium leading-tight text-neutral-200 font-semibold text-neutral-200 group" aria-label="View Full Résumé" href="/resume.pdf">
          <span className="border-b border-transparent pb-px transition group-hover:border-white motion-reduce:transition-none">
            View Full Resume
          </span>
          <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}

export default ExperienceSection;
