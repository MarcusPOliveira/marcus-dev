import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'

interface NavItemProps {
  label: string
  href: string
  icon?: React.ReactNode
}

export const NavItem = ({ label, href, icon }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 font-mono font-medium text-gray-400',
        isActive && 'text-gray-50'
      )}
    >
      <span className="hidden text-orange-600 md:inline">#</span>
      {icon && <span className="text-xl md:hidden">{icon}</span>}
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}
