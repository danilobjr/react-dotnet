import type { PropsWithChildren } from 'react'

export const Page = ({ children }: PropsWithChildren) => {
  return <div className="bg-page p-6">{children}</div>
}
