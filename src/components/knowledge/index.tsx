'use client'
import { motion } from 'framer-motion'

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
          techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <KnownTech tech={tech} />
            </motion.div>
          ))}
      </div>
    </section>
  )
}
