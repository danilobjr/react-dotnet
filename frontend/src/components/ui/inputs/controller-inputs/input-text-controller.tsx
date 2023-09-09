import { Controller, type FieldValues } from 'react-hook-form'
import {
  InputText,
  type InputTextProps,
} from '@components/ui/inputs/base-inputs/input-text'
import type { BaseControllerProps } from './types/base-controller-props'

export const InputTextController = <TFormSchema extends FieldValues>({
  control,
  name,
  ...externalProps
}: BaseControllerProps<InputTextProps, TFormSchema>) => {
  return (
    <Controller
      control={control}
      name={name as string}
      render={({ field: controllerProps }) => {
        return <InputText {...{ ...externalProps, ...controllerProps }} />
      }}
    />
  )
}
