import Image from 'next/image'
import { FaMobile, FaDesktop } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Project } from '@/types'

import { Link, TechBadge } from '..'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const platformIcon =
    project?.platform === 'mobile' ? (
      <FaMobile size={20} className="text-emerald-500" />
    ) : (
      <FaDesktop size={20} className="text-emerald-500" />
    )

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          src={project.thumbnail?.url}
          alt="Thumbnail do projeto"
          width={420}
          height={304}
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          {platformIcon} {project.title}
        </h3>
        <p className="my-6 text-gray-400">{project.shortDescription}</p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {project?.techs?.map((tech) => (
            <TechBadge name={tech.name} key={`${tech.name}-${project.title}`} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
