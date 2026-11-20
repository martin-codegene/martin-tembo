"use client";

import { PROJECTS } from "@/lib/data";
import SectionHeader from "./section-header";
import { ArrowUpRight, Badge } from "lucide-react";

function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Projects" />
      <ul className="group/list space-y-12">
        {PROJECTS.map((project, idx) => (
          <li key={idx} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-900/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:group-hover:drop-shadow-lg"></div>

              <div className="z-10 sm:col-span-8">
                <h3 className="font-medium leading-snug text-neutral-200">
                  <a
                    href={project.link || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-white focus-visible:text-white group/link text-base"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{project.title}</span>
                    <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-neutral-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
