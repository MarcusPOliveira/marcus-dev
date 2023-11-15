import { HiArrowNarrowRight } from 'react-icons/hi'

import { Link } from '../link'
import { ProjectCard } from './project_card'
import { SectionTitle } from '../section_title'
import { HorizontalDivider } from '../divider/horizontal'

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />
      <div className="">
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            <ProjectCard key={index} />
            <HorizontalDivider className="my-16" key={`divider-${index}`} />
          </>
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
