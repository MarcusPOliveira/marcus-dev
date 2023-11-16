'use client'
import {
  ContactForm,
  Footer,
  Header,
  ProjectDetails,
  ProjectTemplates,
} from '@/components'

export default function Project() {
  return (
    <div>
      <Header />
      <ProjectDetails />
      <ProjectTemplates />
      <ContactForm />
      <Footer />
    </div>
  )
}
