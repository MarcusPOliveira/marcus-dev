import { SectionTitle } from '../section_title'
import { ExperienceItem } from './experience_item'

export const WorkExperience = () => {
  return (
    <section className="container flex gap-16 py-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiência profissional"
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
