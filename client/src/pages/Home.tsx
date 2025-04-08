import { DietStatsCards } from '@/components/DietStatsCards'
import { CheckCircle, Flame, UtensilsCrossed, XCircle } from 'lucide-react'

export function Home() {
  return (
    <div>
      <section className='flex items-center gap-3 justify-between'>
        <DietStatsCards
          color='green'
          icon={<UtensilsCrossed strokeWidth={3} />}
          title='Total de refeições'
          value='1292'
        />
        <DietStatsCards
          color='blue'
          icon={<CheckCircle strokeWidth={3} />}
          title='% refeiçoes dentro da dieta'
          value='1292'
        />
        <DietStatsCards color='red' icon={<XCircle strokeWidth={3} />} title='% refeições fora da dieta' value='1292' />
        <DietStatsCards
          color='orange'
          icon={<Flame strokeWidth={3} />}
          title='sequencia dentro da dieta'
          value='1292'
        />
      </section>
    </div>
  )
}
