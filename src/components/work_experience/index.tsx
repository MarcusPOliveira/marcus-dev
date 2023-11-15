import { SectionTitle } from '../section_title'
import { ExperienceItem } from './experience_item'

export const WorkExperience = () => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiências Profissional"
          subtitle="experiências"
        />
        <p className="mt-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          tempora, non sapiente dolorum praesentium laboriosam delectus quaerat
          commodi autem accusamus.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
