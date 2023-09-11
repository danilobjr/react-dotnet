import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type TableHeaderProps = PropsWithChildren & {
  classNameThead?: string
  classNameTr?: string
}

export const TableHeader = ({
  classNameThead = '',
  classNameTr = '',
  children = null,
}: TableHeaderProps) => (
  <thead className={twMerge('border-green-600 border-b-2', classNameThead)}>
    <tr className={twMerge('bg-neutral-200 h-10', classNameTr)}>{children}</tr>
  </thead>
)
