import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TableProps = ComponentPropsWithoutRef<'td'>

export const Table = ({ className = '', children = null }: TableProps) => (
  <table className={twMerge('border-table-border w-full border', className)}>
    {children}
  </table>
)
