'use client'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Button, CmsIcon, RichText, TechBadge } from '..'
import { HomePageInfo } from '@/types'

interface HeroSectionProps {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const goToContactSection = document.querySelector('#contact')
    if (goToContactSection) {
      goToContactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  console.log('homeInfo', homeInfo.introduction)

  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[430px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Marcus Paulo Oliveira</h2>

          {homeInfo?.introduction?.raw && (
            <div className="my-6 text-sm text-gray-400 sm:text-base">
              <RichText content={homeInfo.introduction.raw} />
            </div>
          )}
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.isArray(homeInfo?.techs) &&
              homeInfo?.techs.length > 0 &&
              homeInfo?.techs.map((tech, index) => (
                <TechBadge key={`tech-${index}`} name={tech.name} />
              ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {Array.isArray(homeInfo?.socialMedias) &&
                homeInfo?.socialMedias.length > 0 &&
                homeInfo?.socialMedias.map((socialMedia, index) => (
                  <a
                    key={`socialMedia-${index}`}
                    href={socialMedia.url}
                    target="_blank"
                    className="transition-colors hover:text-gray-100"
                  >
                    <CmsIcon icon={socialMedia.iconSvg} />
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div>
          <Image
            src={homeInfo?.profilePicture?.url}
            width={420}
            height={404}
            alt="Avatar"
            className="mb-6 h-[280px] w-[280px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
