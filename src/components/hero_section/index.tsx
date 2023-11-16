'use client'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbMail,
} from 'react-icons/tb'

import { Button, TechBadge } from '..'

const MOCK_CONTACTS = [
  {
    name: 'GitHub',
    url: 'https://github.com/MarcusPOliveira',
    icon: <TbBrandGithub />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/marcus-paulo-oliveira-46b39b174/',
    icon: <TbBrandLinkedin />,
  },
  {
    name: 'Email',
    url: 'mailto:mp.mp.oliveira@gmail.com',
    icon: <TbMail />,
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=5537998336732',
    icon: <TbBrandWhatsapp />,
  },
  {},
]

export const HeroSection = () => {
  const handleContact = () => {
    const goToContactSection = document.querySelector('#contact')
    if (goToContactSection) {
      goToContactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[430px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Marcus Paulo Oliveira</h2>

          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Desenvolvedor Front-End Web/Mobile | Técnico em Informática -
            Instituto Federal de Minas Gerais - Campus Formiga. Entusiasta de
            novas tecnologias!
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="NextJs" key={index} />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="transition-colors hover:text-gray-100"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/foto.jpg"
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
