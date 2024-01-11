import { ComponentProps } from 'react'
import NextLink from 'next/link'

import { cn } from '@/utils'

interface LinkProps extends ComponentProps<typeof NextLink> {}

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-orange-600',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
