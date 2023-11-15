import Image from 'next/image'
import { TechBadge } from '../tech_badge'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://media.licdn.com/dms/image/C4E0BAQHznLL_22pD6w/company-logo_200_200/0/1644257233136?e=2147483647&v=beta&t=WSDwh45SdUIYnQpkaLxR1xmgDgzUOFJnc50OpQJPbhI"
            alt="Logo"
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
            href="https://adekz.com"
            target="_blank"
            className="text-gray-500 transition-colors hover:text-emerald-500"
          >
            @ Adekz
          </a>
          <h4 className="text-gray-300">Front-End Developer</h4>
          <span className="text-gray-500">
            Jan 2023 - Até o momento - (11 meses)
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ratione enim numquam quibusdam eum ea saepe, quasi autem! Totam,
            quibusdam.
          </p>
        </div>
        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competências
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
        </div>
      </div>
    </div>
  )
}
