import { useQuery } from 'react-query'
import { api } from '@services/http/api'
import type { SecurityUpdate } from '@services/http/repositories/security-updates-repository'
import { queryKeys } from './query-keys'

export const useSecurityUpdatesGetAll = () => {
  const query = useQuery<SecurityUpdate[]>({
    queryKey: queryKeys.securityUpdates.getAll(),
    queryFn: api.securityUpdates.getAll,
  })

  return query
}
