'use client'
import { useEffect, useState } from 'react'

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

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
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
  return fetchHygraphQuery(query, 60 * 60 * 24) // 1 day
}

export default function Projects() {
  const [projectsData, setProjectsData] = useState<Project[]>([])
  const [isMounted, setIsMounted] = useState(false)

  const { isLoading } = useLoading(projectsData)

  useEffect(() => {
    setIsMounted(true)
    const fetchData = async () => {
      const { projects } = await getPageData()
      setProjectsData(projects)
    }

    fetchData()
  }, [])

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
