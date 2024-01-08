import { HiArrowNarrowRight } from 'react-icons/hi'

import { Project } from '@/types'

import { ProjectCard } from './project_card'
import { HorizontalDivider, Link, SectionTitle } from '..'

interface HighlightedProjectsProps {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />
      <div className="">
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" key={`divider-${project.slug}`} />
          </div>
        ))}
        <span className="flex items-center gap-1.5">
          <p className="text-gray-400">Se interessou?</p>
          <Link href="/projects" className="inline-flex">
            Ver todos <HiArrowNarrowRight />
          </Link>
        </span>
      </div>
    </section>
  )
}
