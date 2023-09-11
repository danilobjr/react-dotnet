import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TableHeaderCellProps = ComponentPropsWithoutRef<'th'>

export const TableHeaderCell = ({
  className = '',
  children = null,
}: TableHeaderCellProps) => (
  <th
    className={twMerge(
      'border-r-table-border border-r text-center text-sm font-medium',
      className,
    )}
  >
    {children}
  </th>
)
