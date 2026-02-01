'use client'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { BsGlobe } from 'react-icons/bs'

export const LanguageSelector = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    if (!pathname) return

    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    router.push(newPath)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-3">
      <BsGlobe className="text-gray-400" size={18} />
      <div className="flex items-center gap-2">
        <button
          onClick={() => switchLocale('pt')}
          className={`text-sm font-medium transition-colors ${
            locale === 'pt'
              ? 'text-emerald-500'
              : 'text-gray-400 hover:text-gray-200'
          }`}
          aria-label="Português"
        >
          PT
        </button>
        <span className="text-gray-600">|</span>
        <button
          onClick={() => switchLocale('en')}
          className={`text-sm font-medium transition-colors ${
            locale === 'en'
              ? 'text-emerald-500'
              : 'text-gray-400 hover:text-gray-200'
          }`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  )
}
