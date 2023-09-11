import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TableBodyCellProps = ComponentPropsWithoutRef<'td'>

export const TableBodyCell = ({
  className = '',
  children = null,
}: TableBodyCellProps) => (
  <td
    className={twMerge(
      'border-r-table-border border-r p-4 text-center',
      className,
    )}
  >
    {children}
  </td>
)
