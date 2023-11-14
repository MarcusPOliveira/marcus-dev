interface TechBadgeProps {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="rounded-lg bg-emerald-900/80 px-3 py-1 text-sm text-emerald-400">
      {name}
    </span>
  )
}
