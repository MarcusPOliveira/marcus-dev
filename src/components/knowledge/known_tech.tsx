import { ReactNode } from 'react'

import { getRelativeTimeString } from '@/utils/getRelativeTime'

interface KnownTechProps {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR'
  ).replace('há ', '')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="itens-center flex justify-between">
        <p className="font-medium">{tech.name}</p>
        <span className="text-xl">{tech.icon}</span>
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  )
}
