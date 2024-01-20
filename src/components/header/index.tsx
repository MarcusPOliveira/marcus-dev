'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { NavItem } from './nav_item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={180}
            height={160}
            className="h-40 w-44 lg:h-48 lg:w-52"
            src="/images/logo.svg"
            alt="Logo"
          />

          {/* <Image width={200} height={180} src="/images/logo.svg" alt="Logo" /> */}
        </Link>
        <nav className="flex items-center gap-4 md:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
