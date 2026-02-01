'use client'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

import { Project, ProjectsPageData } from '@/types'

import { useLoading } from '@/hooks'
import { fetchHygraphQuery } from '@/hygraph'

import {
  ContactForm,
  Footer,
  Header,
  Loading,
  ProjectsIntroduction,
  ProjectsList,
} from '@/components'

const getPageData = async (locale: string): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery($locale: Locale!) {
      projects(locales: [$locale, pt_BR]) {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        techs {
          name
        }
        platform
      }
    }
  `
  return fetchHygraphQuery(query, locale, 60 * 60 * 24) // 1 day
}

export default function Projects() {
  const locale = useLocale()
  const [projectsData, setProjectsData] = useState<Project[]>([])
  const [isMounted, setIsMounted] = useState(false)

  const { isLoading } = useLoading([projectsData])

  useEffect(() => {
    setIsMounted(true)
    const fetchData = async () => {
      const { projects } = await getPageData(locale)
      setProjectsData(projects)
    }

    fetchData()
  }, [locale])

  if (!isMounted) return null

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <ProjectsIntroduction />
      <ProjectsList projects={projectsData} />
      <ContactForm />
      <Footer />
    </div>
  )
}
