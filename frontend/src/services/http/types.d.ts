type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type RequestConfig = Omit<RequestInit, 'method'> & {
  method?: HttpMethod
}
