import { cn } from '@/utils/cn'
import { ForwardedRef, forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardedRef?: ForwardedRef<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600',
        props.className
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
