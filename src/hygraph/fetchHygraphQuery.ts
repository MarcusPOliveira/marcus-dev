type HygraphLocale = 'pt_BR' | 'en'

const localeMap: Record<string, HygraphLocale> = {
  pt: 'pt_BR', // Português usa pt_BR (default no Hygraph)
  en: 'en', // Inglês usa en
}

export const fetchHygraphQuery = async <T>(
  query: string,
  locale: string = 'pt',
  revalidate?: number
): Promise<T> => {
  const hygraphLocale = localeMap[locale] || 'pt_BR'

  const requestBody = {
    query,
    variables: { locale: hygraphLocale },
  }

  console.log('🌍 Fetching Hygraph:')
  console.log('  App locale:', locale)
  console.log('  Hygraph locale:', hygraphLocale)
  console.log('  Variables being sent:', requestBody.variables)

  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      'gcms-locales': hygraphLocale,
    },
    body: JSON.stringify(requestBody),
    next: { revalidate },
  })

  const result = await response.json()

  if (result.errors) {
    console.error('❌ Hygraph errors:', JSON.stringify(result.errors, null, 2))
  }

  if (result.data) {
    console.log('✅ Data received from Hygraph')
    // Debug: mostrar primeiros caracteres do introduction
    if (result.data.page?.introduction?.raw) {
      const introPreview = JSON.stringify(
        result.data.page.introduction.raw
      ).substring(0, 150)
      console.log('  Introduction preview:', introPreview + '...')
    }
  }

  return result.data
}
