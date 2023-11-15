import Image from 'next/image'
import { FaMobile, FaDesktop } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Link, TechBadge } from '..'

export const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          src="https://design4users.com/wp-content/uploads/2023/04/fitness-app-by-Odama.jpg"
          alt="Thumbnail do projeto"
          width={420}
          height={304}
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <FaMobile size={20} className="text-emerald-500" /> Nome do Projeto
        </h3>
        <p className="my-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          assumenda, sit rerum quas eos dolor esse alias expedita corrupti sunt
          ullam mollitia inventore sapiente natus delectus quisquam doloribus!
          Ullam id quidem sunt fugiat nesciunt corrupti quod voluptate?
          Praesentium accusantium explicabo numquam esse eos facilis hic
          blanditiis. Odio possimus veniam aspernatur.
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
          <TechBadge name="NextJs" />
        </div>

        <Link href="/projects/teste">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
