import { cn } from '@/utils/cn'

interface HorizontalDividerProps {
  className?: string
}

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn('my-8 w-full border-b border-b-gray-800', className)} />
  )
}
