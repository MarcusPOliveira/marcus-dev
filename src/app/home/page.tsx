import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero_section'
import { HighlightedProjects } from '@/components/highlighted_projects'
import { Knowledge } from '@/components/knowledge'

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Knowledge />
      <HighlightedProjects />
    </div>
  )
}
