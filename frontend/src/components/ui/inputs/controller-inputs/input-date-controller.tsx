import { Controller, type FieldValues } from 'react-hook-form'
import {
  InputDate,
  type InputDateProps,
} from '@components/ui/inputs/base-inputs/input-date'
import type { BaseControllerProps } from './types/base-controller-props'

export const InputDateController = <TFormSchema extends FieldValues>({
  control,
  name,
  ...externalProps
}: BaseControllerProps<InputDateProps, TFormSchema>) => {
  return (
    <Controller
      control={control}
      name={name as string}
      render={({ field: controllerProps }) => {
        return <InputDate {...{ ...externalProps, ...controllerProps }} />
      }}
    />
  )
}
