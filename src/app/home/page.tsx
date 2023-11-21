/* eslint-disable @next/next/no-async-client-component */
'use client'
import { HomePageData } from '@/types'
import { fetchHygraphQuery } from '@/hygraph'

import {
  BackToTop,
  ContactForm,
  Footer,
  Header,
  HeroSection,
  HighlightedProjects,
  Knowledge,
  WorkExperience,
} from '@/components'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      techs {
        name
      }
      profilePicture {
        url
      }
      socialMedias {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
    }
  }
`

  return fetchHygraphQuery(query, 60 * 60 * 24) //24 hours to revalidate
}

const Home = async () => {
  const { page: pageData } = await getPageData()
  console.log('pageData hygraph', pageData)
  return (
    <div>
      <BackToTop />
      <Header />
      <HeroSection data={pageData} />
      <Knowledge data={pageData.knownTechs} />
      <HighlightedProjects />
      <WorkExperience />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
