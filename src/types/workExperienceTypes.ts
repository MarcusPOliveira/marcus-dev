import type { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTechs } from '.'

export interface WorkExperience {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  techs: KnownTechs[]
  description: {
    raw: RichTextContent
  }
}
