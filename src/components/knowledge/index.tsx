import { TbBrandNextjs } from 'react-icons/tb'

import { KnownTech } from './known_tech'
import { SectionTitle } from '../section_title'

export const Knowledge = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="tecnologias" />
      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,_minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'NextJs',
              startDate: '2022-12-01',
            }}
          />
        ))}
      </div>
    </section>
  )
}
