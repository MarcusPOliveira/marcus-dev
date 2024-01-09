'use client'
import { useEffect, useState } from 'react'

import { Project } from '@/types'

import { fetchHygraphQuery } from '@/hygraph'
import {
  ContactForm,
  Footer,
  Header,
  ProjectDetails,
  ProjectTemplates,
} from '@/components'

export interface ProjectProps {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<Project> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
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
    1000 * 60 * 60 * 24 // 1 day
  )

  return data
}

export default function Project({ params: { slug } }: ProjectProps) {
  const [projectData, setProjectData] = useState<any>({})
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const fetchData = async () => {
      const response = await getProjectDetails(slug)
      setProjectData(response)
    }

    fetchData()
  }, [slug])

  if (!isMounted) return null

  return (
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
