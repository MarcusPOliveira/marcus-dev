import { HiArrowNarrowLeft } from 'react-icons/hi'

import { Link, SectionTitle } from '..'

export const ProjectsIntroduction = () => {
  return (
    <section className="bg-hero-image-dark flex h-[450px] w-full flex-col items-center justify-center bg-cover bg-no-repeat px-2 lg:h-[630px]">
      <SectionTitle
        title="Meus Projetos"
        subtitle="projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="my-6 max-w-[460px] text-center text-sm text-gray-400 sm:text-base">
          Aqui você poderá ver alguns dos meu trabalhos que eu desenvolvi.
          Navegue e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e como as funcionalidades foram implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft /> Voltar para Home
        </Link>
      </div>
    </section>
  )
}
