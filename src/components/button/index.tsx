'use client'
import { ButtonHTMLAttributes } from 'react'

import { cn } from '@/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-gray-50 transition-all hover:bg-orange-600 disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
