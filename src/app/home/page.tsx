'use client'
import {
  ContactForm,
  Footer,
  Header,
  HeroSection,
  HighlightedProjects,
  Knowledge,
  WorkExperience,
} from '@/components'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Knowledge />
      <HighlightedProjects />
      <WorkExperience />
      <ContactForm />
      <Footer />
    </div>
  )
}
