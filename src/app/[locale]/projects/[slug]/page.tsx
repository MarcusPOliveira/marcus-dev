'use client'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import { use } from 'react'

import type { Project } from '@/types'

import { useLoading } from '@/hooks'
import { fetchHygraphQuery } from '@/hygraph'

import {
  ContactForm,
  Footer,
  Header,
  Loading,
  ProjectDetails,
  ProjectTemplates,
} from '@/components'

export interface ProjectProps {
  params: Promise<{
    slug: string
  }>
}

const getProjectDetails = async (slug: string, locale: string): Promise<Project> => {
  const query = `
  query ProjectQuery($locale: Locale!) {
    project(where: {slug: "${slug}"}, locales: [$locale, pt_BR]) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      techs {
        name
      }
      liveProjectUrl
      githubUrl
      platform
    }
  }
  `
  const data = fetchHygraphQuery<Project>(
    query,
    locale,
    1000 * 60 * 60 * 24 // 1 day
  )

  return data
}

export default function Project({ params }: ProjectProps) {
  const locale = useLocale()
  const { slug } = use(params)
  const [isMounted, setIsMounted] = useState(false)
  const [projectData, setProjectData] = useState<any>({})

  const { isLoading } = useLoading([projectData])

  useEffect(() => {
    setIsMounted(true)
    const fetchData = async () => {
      const response = await getProjectDetails(slug, locale)
      setProjectData(response)
    }

    fetchData()
  }, [slug, locale])

  if (!isMounted) return null

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <ProjectDetails project={projectData?.project} />
      <ProjectTemplates
        templates={projectData?.project?.sections}
        platform={projectData?.project?.platform}
      />
      <ContactForm />
      <Footer />
    </div>
  )
}
