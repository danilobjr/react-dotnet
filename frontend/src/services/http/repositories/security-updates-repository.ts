import { requestGetAll } from '@services/http/base-methods/request-get-all'

const urlPath = '/updates'

export type SecurityUpdate = Readonly<{
  currentReleaseDate: string
  cvrfUrl: string
  documentTitle: string
  id: string
  initialReleaseDate: string
}>

export const securityUpdatesRepository = {
  getAll: requestGetAll<SecurityUpdate[]>(urlPath),
}
