import type { ComponentPropsWithoutRef, ElementType } from 'react'

export type BaseInputProp<T extends ElementType> = Omit<
  ComponentPropsWithoutRef<T>,
  'type' | 'value' | 'onChange' | 'onInput'
> & {
  label?: string
}
