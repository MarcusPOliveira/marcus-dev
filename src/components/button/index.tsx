'use client'
import { ButtonHTMLAttributes, ComponentProps } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/utils'

interface ButtonProps extends ComponentProps<typeof motion.button> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <motion.button
      type="button"
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-gray-50 transition-all hover:bg-orange-600 disabled:opacity-50',
        className
      )}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
