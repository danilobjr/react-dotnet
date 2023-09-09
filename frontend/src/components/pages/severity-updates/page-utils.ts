import and from 'ramda/src/and'
import anyPass from 'ramda/src/anyPass'
import complement from 'ramda/src/complement'
import either from 'ramda/src/either'
import filter from 'ramda/src/filter'
import gte from 'ramda/src/gte'
import includes from 'ramda/src/includes'
import is from 'ramda/src/is'
import isNil from 'ramda/src/isNil'
import lte from 'ramda/src/lte'
import pipe from 'ramda/src/pipe'
import propEq from 'ramda/src/propEq'
import propSatisfies from 'ramda/src/propSatisfies'
import toLower from 'ramda/src/toLower'
import trim from 'ramda/src/trim'
import when from 'ramda/src/when'
import where from 'ramda/src/where'
import { FormSchema as FiltersFormSchema } from './filters'

// utils
const isPropValueNotEmptyString = (propName: string) =>
  complement(propEq('', propName))
const isPropValueTypeOfDate = (propName: string) =>
  propSatisfies(is(Date), propName)

const isCurrentReleaseDateFilterFulfilled = anyPass([
  isPropValueTypeOfDate('currentReleaseDateFrom'),
  isPropValueTypeOfDate('currentReleaseDateTo'),
])
const isDocumentTitleFilterFulfilled =
  isPropValueNotEmptyString('documentTitle')
const isIdFilterFulfilled = isPropValueNotEmptyString('id')
const isInitialReleaseDateFilterFulfilled = anyPass([
  isPropValueTypeOfDate('initialReleaseDateFrom'),
  isPropValueTypeOfDate('initialReleaseDateTo'),
])

const isDateInRange =
  (fromDate: Date | null, toDate: Date | null) => (value: string) =>
    and(
      // TODO remove 'as any' casting
      either(isNil, gte(new Date(value)))(fromDate as any),
      either(isNil, lte(new Date(value)))(toDate as any),
    )

// TODO type 'data' param
export const filterData = (filtersObj: FiltersFormSchema) => (data: any) =>
  when(
    anyPass([
      isCurrentReleaseDateFilterFulfilled,
      isDocumentTitleFilterFulfilled,
      isIdFilterFulfilled,
      isInitialReleaseDateFilterFulfilled,
    ]),
    filter(
      where({
        currentReleaseDate: isDateInRange(
          filtersObj.currentReleaseDateFrom,
          filtersObj.currentReleaseDateTo,
        ),
        documentTitle: pipe(
          trim,
          toLower,
          includes(filtersObj.documentTitle.trim().toLowerCase()),
        ),
        id: includes(filtersObj.id),
        initialReleaseDate: isDateInRange(
          filtersObj.initialReleaseDateFrom,
          filtersObj.initialReleaseDateTo,
        ),
      }),
    ),
  )(data)
