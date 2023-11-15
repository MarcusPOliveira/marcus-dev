'use client'
import {
  ContactForm,
  Footer,
  Header,
  ProjectsIntroduction,
  ProjectsList,
} from '@/components'

export default function Projects() {
  return (
    <div>
      <Header />
      <ProjectsIntroduction />
      <ProjectsList />
      <ContactForm />
      <Footer />
    </div>
  )
}
