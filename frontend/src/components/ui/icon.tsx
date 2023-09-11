import { cloneElement } from 'react'
import { TablerIconsProps, IconSearch } from '@tabler/icons-react'

const icon = {
  search: <IconSearch />,
}

export type IconName = keyof typeof icon

export type IconProps = TablerIconsProps & {
  name: IconName
}

export const Icon = ({ name, size = 24, ...otherProps }: IconProps) => {
  const Component = icon[name]
  return !Component ? (
    <span>Not found icon</span>
  ) : (
    cloneElement(Component, {
      size,
      ...otherProps,
    })
  )
}
