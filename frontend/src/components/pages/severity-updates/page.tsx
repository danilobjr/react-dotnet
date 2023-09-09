import { useMemo, useState } from 'react'
import { Page, PageContent } from '@components/ui/page'
import { useSecurityUpdatesGetAll } from '@hooks/http/use-security-updates-get-all'
import { SecurityUpdate } from '@services/http/repositories/security-updates-repository'
import { Filters, FormSchema as FiltersFormSchema } from './filters'
import { filterData } from './page-utils'
import { Table } from './table'

export const SeverityUpdatesPage = () => {
  const { data, isLoading } = useSecurityUpdatesGetAll()
  const [filters, setFilters] = useState<FiltersFormSchema>({
    currentReleaseDateFrom: null,
    currentReleaseDateTo: null,
    documentTitle: '',
    id: '',
    initialReleaseDateFrom: null,
    initialReleaseDateTo: null,
  })

  const handleFiltersFormSubmission = (formData: FiltersFormSchema) => {
    setFilters(formData)
  }

  const filteredData = useMemo(() => {
    if (!data) {
      return data
    }

    console.log(data)

    // const mappedData: SecurityUpdate[] = (data as any)?.value?.map(
    //   (d: any) => ({
    //     currentReleaseDate: d.CurrentReleaseDate,
    //     cvrfUrl: d.CvrfUrl,
    //     documentTitle: d.DocumentTitle,
    //     id: d.ID,
    //     initialReleaseDate: d.InitialReleaseDate,
    //   }),
    // )

    // return filterData(filters)(mappedData)
    return []
  }, [data, filters])

  return isLoading ? (
    <span>Carregando</span>
  ) : (
    <Page>
      <PageContent>
        <Filters onSubmit={handleFiltersFormSubmission} />
        <Table data={filteredData as any} />
      </PageContent>
    </Page>
  )
}
