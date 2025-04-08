import { UtensilsCrossed } from 'lucide-react'

interface DietStatsCardsProps {
  title: string
  value: string
  icon: React.ReactNode
  color: DietStatsCardsColor
}

export type DietStatsCardsColor = 'green' | 'blue' | 'red' | 'orange'

const colorVariants: Record<DietStatsCardsColor, string> = {
  green: 'bg-green-200 text-green-800',
  blue: 'bg-blue-200 text-blue-800',
  red: 'bg-red-200 text-red-800',
  orange: 'bg-amber-200 text-amber-800',
}

export function DietStatsCards({ icon, title, value, color }: DietStatsCardsProps) {
  return (
    <div className='p-3 flex items-center gap-3 bg-stone-50 rounded-md shadow-md w-full'>
      <div className={`h-16 w-16 ${colorVariants[color]} rounded-md flex items-center justify-center`}>{icon}</div>

      <div className='flex flex-col'>
        <span className='text-zinc-500'>{title}</span>
        <strong className='text-2xl bold text-zinc-900'>{value}</strong>
      </div>
    </div>
  )
}
