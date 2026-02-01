'use client'
import { KnownTechs } from '@/types'
import { CmsIcon } from '..'

interface KnownTechProps {
  tech: KnownTechs
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="group relative flex items-center gap-4 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-orange-600 hover:shadow-lg hover:shadow-orange-600/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600/30 text-2xl transition-all group-hover:bg-gray-600/50 group-hover:scale-110">
        <CmsIcon icon={tech.iconSvg} />
      </div>
      <p className="flex-1 font-medium text-lg">{tech.name}</p>
    </div>
  )
}
