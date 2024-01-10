'use client'
import { useEffect, useState } from 'react'

import { HomePageData, HomePageInfo } from '@/types'
import { WorkExperience as WorkExperienceType } from '@/types/workExperienceTypes'

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
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        techs {
          name
        }
        platform
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      techs {
        name
      }
    }
  }
`

  return fetchHygraphQuery(query, 60 * 60 * 24) //24 hours to revalidate
}

const Home = () => {
  const [pageData, setPageData] = useState({} as HomePageInfo)
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceType[]>(
    []
  )
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const fetchData = async () => {
      const { page: pageData, workExperiences } = await getPageData()
      setPageData(pageData)
      setWorkExperiences(workExperiences)
    }

    fetchData()
  }, [])

  if (!isMounted) return null

  return (
    <div>
      <BackToTop />
      <Header />
      <HeroSection homeInfo={pageData} />
      <Knowledge techs={pageData?.knownTechs} />
      <HighlightedProjects projects={pageData?.highlightProjects} />
      <WorkExperience workExperiences={workExperiences} />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
