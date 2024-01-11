import { ReactNode } from 'react'

import { getRelativeTimeString } from '@/utils'
import { KnownTechs } from '@/types'
import { CmsIcon } from '..'

interface KnownTechProps {
  tech: KnownTechs
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR'
  ).replace('há ', '')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-orange-600">
      <div className="itens-center flex justify-between">
        <p className="font-medium">{tech.name}</p>
        <span className="text-xl">
          <CmsIcon icon={tech.iconSvg} />
        </span>
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  )
}
