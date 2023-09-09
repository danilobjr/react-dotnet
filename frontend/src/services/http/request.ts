import { env } from '@config/env'
import type { RequestConfig } from './types'

export class RequestError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

export async function request<TResponse>(
  url: string,
  config: RequestConfig = {},
): Promise<TResponse> {
  try {
    const response = await fetch(`${env.apiUrl}${url}`, config)

    if (!response.ok) {
      const errorMessage = await response.text()
      throw new RequestError(response.status, errorMessage)
    }

    const data = await response.json()
    return data as TResponse
  } catch (error) {
    console.error(error)
    throw error
  }
}
