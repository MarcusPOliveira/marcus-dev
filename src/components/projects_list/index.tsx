import Link from 'next/link'

import { Project } from '@/types'

import { ProjectCard } from './project_card'

interface ProjectsListProps {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {/* <Link href="/projects/teste">
        <ProjectCard />
      </Link> */}
      {
        projects?.map((project) => (
          <Link key={project.title} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))
      }
    </section>
  )
}
