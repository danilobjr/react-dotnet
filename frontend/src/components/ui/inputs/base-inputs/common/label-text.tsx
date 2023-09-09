import type { ComponentPropsWithoutRef } from 'react'

type LabelTextProps = ComponentPropsWithoutRef<'span'>

export const LabelText = ({ children = null }: LabelTextProps) => (
  <span className="cursor-pointer text-sm font-bold">{children}</span>
)
