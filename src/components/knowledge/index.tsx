import { KnownTechs } from '@/types'

import { SectionTitle } from '..'
import { KnownTech } from './known_tech'

interface KnowledgeProps {
  techs: KnownTechs[]
}

export const Knowledge = ({ techs }: KnowledgeProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="tecnologias" />
      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,_minmax(264px,1fr))] gap-3">
        {Array.isArray(techs) &&
          techs.length > 0 &&
          techs.map((tech, index) => <KnownTech key={index} tech={tech} />)}
      </div>
    </section>
  )
}
