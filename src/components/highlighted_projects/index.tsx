'use client'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useLocale, useTranslations } from 'next-intl'

import { Project } from '@/types'

import { ProjectCard } from './project_card'
import { HorizontalDivider, Link, SectionTitle } from '..'

interface HighlightedProjectsProps {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  const locale = useLocale()
  const t = useTranslations('highlightedProjects')

  return (
    <section className="container py-16">
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />
      <HorizontalDivider className="mb-16" />
      <div className="">
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" key={`divider-${project.slug}`} />
          </div>
        ))}
        <span className="flex items-center gap-1.5">
          <p className="text-gray-400">{t('interested')}</p>
          <Link href={`/${locale}/projects`} className="inline-flex">
            {t('seeAll')} <HiArrowNarrowRight />
          </Link>
        </span>
      </div>
    </section>
  )
}
