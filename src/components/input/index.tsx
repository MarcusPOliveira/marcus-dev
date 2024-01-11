import { cn } from '@/utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        'h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600',
        className
      )}
      {...props}
    />
  )
}
