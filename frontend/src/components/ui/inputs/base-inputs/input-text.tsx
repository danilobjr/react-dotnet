import { forwardRef, type ChangeEvent } from 'react'
import { RefCallBack } from 'react-hook-form'
import { Label } from './common/label'
import { LabelText } from './common/label-text'
import { BaseInputProp } from './types/base-input-props'

export type InputTextProps = BaseInputProp<'input'> & {
  value: string
  onChange: (value: string) => void
}

export const InputText = forwardRef(
  ({ label = '', onChange, ...otherProps }: InputTextProps, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    }

    return (
      <Label>
        {!!label && <LabelText>{label}</LabelText>}

        <input
          // TODO reuse common classes between components
          // TODO use tailwind-merge
          className="border-input-border border px-2 py-1"
          type="text"
          onChange={handleChange}
          {...otherProps}
          ref={ref as RefCallBack}
        />
      </Label>
    )
  },
)
