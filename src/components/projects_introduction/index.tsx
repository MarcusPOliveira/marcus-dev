'use client'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useLocale, useTranslations } from 'next-intl'

import { Link, SectionTitle } from '..'

export const ProjectsIntroduction = () => {
  const locale = useLocale()
  const t = useTranslations('projectsPage')

  return (
    <section className="bg-hero-image-dark flex h-[450px] w-full flex-col items-center justify-center bg-cover bg-no-repeat px-2 lg:h-[630px]">
      <SectionTitle
        title={t('title')}
        subtitle={t('subtitle')}
        className="items-center text-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="my-6 max-w-[460px] text-center text-sm text-gray-400 sm:text-base">
          {t('description')}
        </p>
        <Link href={`/${locale}/home`}>
          <HiArrowNarrowLeft /> {t('backHome')}
        </Link>
      </div>
    </section>
  )
}
