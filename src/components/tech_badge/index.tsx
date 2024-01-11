'use client'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

interface TechBadgeProps extends ComponentProps<typeof motion.span> {
  name: string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-lg bg-orange-900/80 px-3 py-1 text-sm text-orange-600"
      {...props}
    >
      {name}
    </motion.span>
  )
}
