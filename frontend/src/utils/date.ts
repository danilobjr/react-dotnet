export const getMonth = (date: Date): number => date.getMonth()

export const getYear = (date: Date): number => date.getFullYear()

export const setEndOfDayHours = (date: Date): Date => {
  date.setHours(23, 59, 59, 999)
  return date
}
