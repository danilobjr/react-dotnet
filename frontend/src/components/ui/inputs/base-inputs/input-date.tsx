import type { KeyboardEvent } from 'react'
import { forwardRef } from 'react'
import ptBr from 'date-fns/locale/pt-BR'
import range from 'ramda/src/range'
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { RefCallBack } from 'react-hook-form'
import { getMonth, getYear } from '@utils/date'
import { Label } from './common/label'
import { LabelText } from './common/label-text'
import { BaseInputProp } from './types/base-input-props'

registerLocale('pt-br', ptBr)

const currentYear = new Date().getFullYear()
const years = range(1990, currentYear)
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

type InputValue = Date | null

export type InputDateProps = BaseInputProp<'input'> &
  Omit<ReactDatePickerProps, 'value' | 'onChange'> & {
    value: InputValue
    normalize?: (value: InputValue) => InputValue
    onChange: (value: InputValue) => void
  }

export const InputDate = forwardRef(
  (
    {
      label = '',
      placeholder = '',
      value,
      normalize = (value) => value,
      onChange,
      ...otherProps
    }: InputDateProps,
    ref,
  ) => {
    const handleChange = (value: InputValue) => {
      const normalizedValue = normalize(value)
      onChange(normalizedValue)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault()
    }

    return (
      <Label>
        {!!label && <LabelText>{label}</LabelText>}

        {/* TODO localization: uppercase first letter */}
        {/* TODO should select month and year using a select input */}
        <DatePicker
          // TODO reuse common classes between components
          // TODO use tailwind-merge
          // className="border-input-border border px-2 py-1"
          className="w-full border border-input-border px-2 py-1"
          dateFormat="dd/MM/yyyy"
          locale="pt-br"
          placeholderText={placeholder}
          selected={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...otherProps}
          ref={ref as RefCallBack}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>

              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {'>'}
              </button>
            </div>
          )}
        />
      </Label>
    )
  },
)
