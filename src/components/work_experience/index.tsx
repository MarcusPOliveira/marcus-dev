import { WorkExperience as WorkExperienceType } from '@/types/workExperienceTypes'

import { SectionTitle } from '..'
import { ExperienceItem } from './experience_item'

interface WorkExperienceProps {
  workExperiences: WorkExperienceType[]
}

export const WorkExperience = ({ workExperiences }: WorkExperienceProps) => {
  workExperiences.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return dateB - dateA
  })

  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiências Profissionais"
          subtitle="experiências"
        />
        <p className="mt-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          tempora, non sapiente dolorum praesentium laboriosam delectus quaerat
          commodi autem accusamus.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {workExperiences.map((workExperience) => (
          <ExperienceItem
            key={`${workExperience.companyName}-${workExperience.startDate}`}
            experience={workExperience}
          />
        ))}
      </div>
    </section>
  )
}
