import Image from 'next/image'
import { ptBR } from 'date-fns/locale'
import {
  differenceInMonths,
  differenceInYears,
  format,
  getTime,
} from 'date-fns'

import { WorkExperience } from '@/types/workExperienceTypes'

import { RichText, TechBadge } from '..'

interface ExperienceItemProps {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = new Date(experience.startDate + 'T00:00:00')
  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })

  const endDate = experience.endDate
    ? new Date(experience.endDate + 'T00:00:00')
    : new Date()
  const formattedEndDate = experience.endDate
    ? format(endDate, 'MMM yyyy', { locale: ptBR })
    : 'Até o momento'

  const today = getTime(new Date())
  const endDuration = endDate ? new Date(endDate) : today
  const months = differenceInMonths(endDuration, startDate)
  const years = differenceInYears(endDuration, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience.companyLogo.url}
            alt={`Logo da ${experience.companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="text-gray-500 transition-colors hover:text-orange-600"
          >
            @ {experience.companyName}
          </a>
          <h4 className="text-gray-300">{experience.role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} - {formattedEndDate} - ({formattedDuration})
          </span>
          <div className="text-gray-400">
            {experience.description.raw && (
              <RichText content={experience.description.raw} />
            )}
          </div>
        </div>
        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          {experience.techs.length > 0 && 'Competências'}
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {experience.techs.map((tech) => (
            <TechBadge
              key={`${tech.name}-${experience.companyName}`}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
