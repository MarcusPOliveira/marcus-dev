import type { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTechs } from './projectsTypes'

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
}

export interface HomePageData {
  page: HomePageInfo
}