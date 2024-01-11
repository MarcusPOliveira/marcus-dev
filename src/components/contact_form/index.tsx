'use client'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Input, SectionTitle } from '..'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(3).max(1000),
})

interface ContactFormData extends z.infer<typeof contactFormSchema> {}

export const ContactForm = () => {
  const { handleSubmit, register, watch } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const message = watch('message')

  const onSubmit = (data: ContactFormData) => {}

  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          title="Vamos trabalhar juntos?"
          subtitle="contato"
          className="items-center text-center"
        />
        <form
          className="mt-12 flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input placeholder="Seu nome" type="text" {...register('name')} />
          <Input placeholder="Seu email" type="email" {...register('email')} />
          <div className="flex flex-col gap-2">
            <textarea
              placeholder="Sua mensagem"
              className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600"
              maxLength={1000}
              {...register('message')}
            />
            <p className="self-end text-sm text-gray-500">
              {message?.length ? message.length : '0'}/1000
            </p>
          </div>
          <Button type="submit" className="mx-auto mt-6 w-max shadow-button">
            Enviar mensagem
            <HiArrowNarrowRight />
          </Button>
        </form>
      </div>
    </section>
  )
}
