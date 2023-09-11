import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type PageContentProps = ComponentPropsWithoutRef<'div'>

export const PageContent = ({ className, children }: PageContentProps) => {
  return (
    <div className={twMerge('bg-page-content p-6', className)}>{children}</div>
  )
}
