import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../button'
import { Input } from '../input'
import { SectionTitle } from '../section_title'

export const ContactForm = () => {
  return (
    <section className="flex items-center justify-center bg-gray-950 py-16 md:py-32">
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          title="Vamos trabalhar juntos?"
          subtitle="contato"
          className="items-center text-center"
        />
        <form className="mt-12 flex w-full flex-col gap-4">
          <Input placeholder="Seu nome" type="text" />
          <Input placeholder="Seu email" type="email" />
          <Input
            placeholder="Sua mensagem"
            className="h-[138px]"
            maxLength={1000}
            type="text"
          />
          <Button className="mx-auto mt-6 w-max shadow-button">
            Enviar mensagem
            <HiArrowNarrowRight />
          </Button>
        </form>
      </div>
    </section>
  )
}
