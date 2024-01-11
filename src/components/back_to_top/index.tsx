'use client'
import { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'

import { Button } from '..'

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!showButton && window.scrollY > 500) setShowButton(true)
    if (showButton && window.scrollY <= 500) setShowButton(false)
  }, [showButton])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="fixed bottom-4 right-4 z-20">
      {showButton && (
        <Button
          className="shadow-lg shadow-orange-600/20"
          onClick={scrollToTop}
        >
          <TbArrowNarrowUp size={20} />
        </Button>
      )}
    </div>
  )
}
