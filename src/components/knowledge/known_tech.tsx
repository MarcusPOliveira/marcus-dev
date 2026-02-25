'use client'
import { KnownTechs } from '@/types'
import { CmsIcon } from '..'

interface KnownTechProps {
  tech: KnownTechs
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="group flex items-center gap-4 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all duration-300 hover:bg-gray-600/30 hover:text-orange-600 hover:shadow-[6px_4px_20px_rgba(234,88,12,0.15)]">
      <div className="flex items-center justify-center w-12 h-12 text-2xl transition-colors duration-300 rounded-lg bg-gray-600/30 group-hover:bg-gray-600/50 [&>div]:transition-transform [&>div]:duration-300 group-hover:[&>div]:scale-110">
        <CmsIcon icon={tech.iconSvg} />
      </div>
      <p className="flex-1 text-lg font-medium">{tech.name}</p>
    </div>
  )
}
