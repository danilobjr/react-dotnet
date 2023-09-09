import type {
  Control,
  FieldPath,
  FieldValues,
} from 'react-hook-form/dist/types'

export type NonExposedProps<T> = Omit<
  T,
  'value' | 'checked' | 'onChange' | 'onInput' | 'children'
>

export type BaseControllerProps<
  TProps,
  TFormSchema extends FieldValues,
  TFieldName extends FieldPath<TFormSchema> = FieldPath<TFormSchema>
> = NonExposedProps<TProps> & {
  control: Control<any>
  name: TFieldName
}
