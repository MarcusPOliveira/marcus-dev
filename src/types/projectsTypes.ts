import type { RichTextContent } from '@graphcms/rich-text-types'

export interface ProjectsPageData {
  projects: Project[]
}

export interface ProjectsPageStaticData {
  projects: {
    slug: string
  }[]
}

export interface KnownTechs {
  iconSvg: string
  name: string
  startDate: string
}

export interface ProjectSection {
  title: string
  image: {
    url: string
  }
}

export interface Project {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  techs: KnownTechs[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
  }
  liveProjectUrl?: string
  githubUrl?: string
  platform?: string
}
