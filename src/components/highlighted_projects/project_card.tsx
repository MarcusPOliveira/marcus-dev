'use client'
import Image from 'next/image'
import { FaMobile, FaDesktop } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { MotionProps, motion } from 'framer-motion'

import { Project } from '@/types'

import { Link, TechBadge } from '..'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const animation: MotionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }

  const platformIcon =
    project?.platform === 'mobile' ? (
      <FaMobile size={20} className="text-orange-600" />
    ) : (
      <FaDesktop size={20} className="text-orange-600" />
    )

  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="h-[200px] w-full sm:h-[300px] lg:min-h-full lg:w-[420px]">
        <Image
          src={project.thumbnail?.url}
          alt="Thumbnail do projeto"
          width={420}
          height={304}
          className="h-full w-full rounded-lg object-cover "
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 text-lg font-medium text-gray-50"
          {...animation}
          transition={{ duration: 0.7 }}
        >
          {platformIcon} {project.title}
        </motion.h3>
        <motion.p
          className="my-6 text-gray-400"
          {...animation}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {project?.techs?.map((tech, index) => (
            <TechBadge
              name={tech.name}
              key={`${tech.name}-${project.title}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
