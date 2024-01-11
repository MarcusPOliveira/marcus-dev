import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { Project } from '@/types'

import { Button, Link, RichText, SectionTitle, TechBadge } from '..'

interface ProjectDetailsProps {
  project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg-dark.png) no-repeat center/cover, url(${project?.thumbnail?.url})`,
        }}
      />
      <SectionTitle
        title={project?.title}
        subtitle="detalhes"
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <div className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        {project?.description?.raw && (
          <RichText content={project?.description?.raw} />
        )}
      </div>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {project?.techs?.map((tech) => (
          <TechBadge name={tech.name} key={`${tech.name}-${project.title}`} />
        ))}
      </div>

      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <Button className="min-w-[180px]">
              <TbBrandGithub /> Repositório
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FiGlobe /> Projeto Online
            </Button>
          </a>
        )}
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft /> Voltar para Projetos
      </Link>
    </section>
  )
}
