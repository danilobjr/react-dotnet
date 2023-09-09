import { format } from 'date-fns'

// TODO treat exception
export const formatToPtBrDate = (value: string): string => {
  const date = new Date(value)
  return format(date, 'dd/MM/yyyy')
}
