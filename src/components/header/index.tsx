'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'

import { NavItem } from './nav_item'
import { LanguageSelector } from '../language_selector'

export const Header = () => {
  const t = useTranslations('navigation')
  const locale = useLocale()

  const NAV_ITEMS = [
    {
      label: t('home'),
      href: `/${locale}/home`,
    },
    {
      label: t('projects'),
      href: `/${locale}/projects`,
    },
  ]

  return (
    <motion.header
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href={`/${locale}/home`}>
          <Image
            width={160}
            height={160}
            priority
            className="h-40 w-40 lg:h-48 lg:w-48"
            src="/images/logo.svg"
            alt={t('home')}
          />
        </Link>
        <nav className="flex items-center gap-4 md:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <LanguageSelector />
        </nav>
      </div>
    </motion.header>
  )
}
