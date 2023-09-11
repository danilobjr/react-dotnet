import type { ComponentPropsWithoutRef } from 'react'
import { type VariantProps, cva } from 'cva'
import { Icon, type IconName } from '@components/ui/icon'

const buttonVariants = cva(
  ['text-white', 'flex', 'w-fit', 'h-10', 'items-center', 'font-medium'],
  {
    variants: {
      intent: {
        primary: 'bg-green-600',
        secondary: 'bg-neutral-400',
      },
    },
    defaultVariants: {
      intent: 'secondary',
    },
  },
)

const iconVariants = cva(
  ['flex', 'h-full', 'w-10', 'items-center', 'justify-center'],
  {
    variants: {
      intent: {
        primary: 'bg-green-700',
        secondary: 'bg-neutral-500',
      },
    },
    defaultVariants: {
      intent: 'secondary',
    },
  },
)

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    icon?: IconName
  }

export const Button = ({
  children,
  icon = undefined,
  intent = 'secondary',
  ...otherProps
}: ButtonProps) => (
  <button className={buttonVariants({ intent })} {...otherProps}>
    {!!icon && (
      <div className={iconVariants({ intent })}>
        <Icon name="search" />
      </div>
    )}

    <span className="px-4">{children}</span>
  </button>
)
