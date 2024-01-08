import type { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTechs, Project } from './projectsTypes'
import { WorkExperience } from './workExperienceTypes'

export interface SocialMedias {
  url: string
  iconSvg: string
}

export interface HomePageInfo {
  introduction: {
    raw: RichTextContent
  }
  techs: KnownTechs[]
  profilePicture: {
    url: string
  }
  socialMedias: SocialMedias[]
  knownTechs: KnownTechs[]
  highlightProjects: Project[]
}

export interface HomePageData {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}
