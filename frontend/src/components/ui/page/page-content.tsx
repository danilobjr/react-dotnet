import type { PropsWithChildren } from 'react'

export const PageContent = ({ children }: PropsWithChildren) => {
  return <div className="bg-page-content p-6">{children}</div>
}
