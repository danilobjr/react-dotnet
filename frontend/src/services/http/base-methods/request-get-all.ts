import { request } from '@services/http/request'

export const requestGetAll =
  <T>(path: string) =>
  () =>
    request<T>(path, {
      method: 'GET',
    })
