import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { Button, Link, SectionTitle, TechBadge } from '..'

export const ProjectDetails = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url("https://www.projectmanager.com/wp-content/uploads/2022/03/Kanban_Manufacturing_Wide_Zoom-150_Moving-task-to-new-status.jpg")',
        }}
      />
      <SectionTitle
        title="Nome do Projeto"
        subtitle="detalhes"
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod rem vitae
        earum aliquam animi at incidunt, nam nulla sunt consequatur.
      </p>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
      </div>

      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        <a href="https://github.com/MarcusPOliveira" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub /> Repositório
          </Button>
        </a>
        <a href="https://github.com/MarcusPOliveira" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe /> Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft /> Voltar para Projetos
      </Link>
    </section>
  )
}
