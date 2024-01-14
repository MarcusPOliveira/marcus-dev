'use client'
import { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitErrorHandler, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { Button, Input, SectionTitle } from '..'
import { FiLoader } from 'react-icons/fi'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
})

interface ContactFormData extends z.infer<typeof contactFormSchema> {}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, register, watch, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const message = watch('message')

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true)

      const templateParams = {
        from_name: data.name,
        email: data.email,
        message: data.message,
      }

      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID!,
          process.env.EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
          alert('Mensagem enviada com sucesso!')
          reset()
        })
        .catch((err) => {
          throw new Error(err)
        })
    } catch (err) {
      console.error('err', err)
    } finally {
      setIsLoading(false)
    }
  }

  const onError: SubmitErrorHandler<ContactFormData> = (errors, e) => {
    console.error(errors)
  }

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
          onSubmit={handleSubmit(onSubmit, onError)}
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
          <Button
            type="submit"
            className={`mx-auto mt-6 ${
              isLoading ? 'h-12 w-[201px]' : 'w-max'
            } shadow-button`}
          >
            {isLoading ? (
              <FiLoader className="animate-spin" />
            ) : (
              <>
                Enviar mensagem
                <HiArrowNarrowRight />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
