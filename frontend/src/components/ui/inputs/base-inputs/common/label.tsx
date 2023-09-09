import type { ComponentPropsWithoutRef } from 'react'

export const Label = ({
  className = '',
  children = null,
  ...otherProps
}: ComponentPropsWithoutRef<'span'>) => (
  <label
    className="flex select-none flex-col gap-1 text-neutral-900"
    {...otherProps}
  >
    {children}
  </label>
)
