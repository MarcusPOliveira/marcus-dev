'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { useTranslations } from 'next-intl'

export const CustomCursor = () => {
  const t = useTranslations('cursor')
  const [mounted, setMounted] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  useEffect(() => {
    setMounted(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target as HTMLElement
      if (target) {
        // Obter o cursor computado do elemento atual
        const computedStyle = window.getComputedStyle(target)
        // Se for um elemento interativo, esconde o custom cursor para mostrar o nativo
        if (
          computedStyle.cursor === 'pointer' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA'
        ) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }
      }
    }
    // Se o dispositivo não suportar hover, não adicionamos o listener
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      window.addEventListener('mousemove', moveCursor)
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden flex-col items-start sm:flex ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="-ml-1 -mt-1 rotate-[2deg]"
      >
        <path
          d="M3.20404 2.19302C2.75382 1.83278 2 2.15418 2 2.73187V20.402C2 21.0427 2.82273 21.2982 3.19329 20.7699L8.33089 13.4398C8.44101 13.2828 8.62548 13.1895 8.81729 13.1895H16.8927C17.5101 13.1895 17.785 12.3907 17.2917 11.9961L3.20404 2.19302Z"
          fill="#2D266F"
          stroke="white"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <div className="ml-2 rounded-r-md rounded-bl-md bg-orange-600 px-1 py-1.5 text-xs font-semibold text-[#2D266F] shadow-sm">
        {t('you')}
      </div>
    </motion.div>
  )
}
