'use client'
import { getRelativeTimeString } from '@/utils'
import { KnownTechs } from '@/types'
import { CmsIcon } from '..'
import { useLocale, useTranslations } from 'next-intl'

interface KnownTechProps {
  tech: KnownTechs
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const locale = useLocale()
  const t = useTranslations('knowledge')

  const localeMap: Record<string, string> = {
    pt: 'pt-BR',
    en: 'en-US',
  }

  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    localeMap[locale] || 'pt-BR'
  ).replace(/há |ago /, '')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-orange-600">
      <div className="itens-center flex justify-between">
        <p className="font-medium">{tech.name}</p>
        <span className="text-xl">
          <CmsIcon icon={tech.iconSvg} />
        </span>
      </div>
      <span>{t('experience', { time: relativeTime })}</span>
    </div>
  )
}
