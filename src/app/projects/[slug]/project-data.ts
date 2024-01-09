import { fetchHygraphQuery } from '@/hygraph'
import { Project } from '@/types'
import { ProjectProps } from './page'
import { Metadata } from 'next'

export const getProjectDetails = async (slug: string): Promise<Project> => {
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

export const generateMetadata = async ({
  params: slug,
}: ProjectProps): Promise<Metadata> => {
  const project = await getProjectDetails(slug.slug)

  return {
    title: project?.title,
  }
}
