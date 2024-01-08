import Image from 'next/image'

import { ProjectSection } from '@/types'

interface ProjectTemplatesProps {
  templates: ProjectSection[]
  platform?: string
}

export const ProjectTemplates = ({
  templates,
  platform,
}: ProjectTemplatesProps) => {
  const isMobile = platform === 'mobile'

  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {templates?.map((template, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {template?.title}
          </h2>
          <Image
            src={template?.image?.url}
            alt={`Imagem da sessão ${template?.title}`}
            width={isMobile ? 520 : 1080}
            height={isMobile ? 300 : 672}
            unoptimized
            // className="object-cover w-full rounded-lg aspect-auto"
            className={`aspect-auto rounded-lg object-cover`}
          />
        </div>
      ))}
    </section>
  )
}
