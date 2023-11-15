import { ContactForm } from '@/components/contact_form'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero_section'
import { HighlightedProjects } from '@/components/highlighted_projects'
import { Knowledge } from '@/components/knowledge'
import { WorkExperience } from '@/components/work_experience'

export default function Home() {
  return (
    <div className="">
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
