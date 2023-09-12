import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@components/ui/button'
import { InputDateController } from '@components/ui/inputs/controller-inputs/input-date-controller'
import { InputTextController } from '@components/ui/inputs/controller-inputs/input-text-controller'
import { setEndOfDayHours } from '@utils/date'

const ifNotNullSetEndOfDayHours = (value: Date | null) =>
  value === null ? null : setEndOfDayHours(value)

const formSchema = z.object({
  currentReleaseDateFrom: z.coerce.date().nullable(),
  currentReleaseDateTo: z.coerce.date().nullable(),
  documentTitle: z.string(),
  id: z.string(),
  initialReleaseDateFrom: z.coerce.date().nullable(),
  initialReleaseDateTo: z.coerce.date().nullable(),
})
export type FormSchema = z.infer<typeof formSchema>

type FiltersProps = {
  onSubmit: (formData: FormSchema) => void
}

// TODO define loading state. Maybe disabling inputs? Loading indication in button?
export const Filters = ({ onSubmit }: FiltersProps) => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    // formState: { isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentReleaseDateFrom: null,
      currentReleaseDateTo: null,
      documentTitle: '',
      id: '',
      initialReleaseDateFrom: null,
      initialReleaseDateTo: null,
    },
  })

  const handleResetButtonClick = () => reset()

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6">
        <InputTextController<FormSchema>
          control={control}
          label="ID"
          name="id"
        />

        <InputTextController<FormSchema>
          control={control}
          label="Document Title"
          name="documentTitle"
        />
      </div>

      <div className="flex items-end justify-between">
        <div className="flex items-end gap-6">
          <InputDateController<FormSchema>
            control={control}
            label="Initial Release Date"
            name="initialReleaseDateFrom"
            placeholder="From"
            selectsStart
            startDate={watch('initialReleaseDateFrom')}
            endDate={watch('initialReleaseDateTo')}
          />

          {/* FIXME should set value to null when start date greater then end date */}
          <InputDateController<FormSchema>
            control={control}
            name="initialReleaseDateTo"
            placeholder="To"
            selectsEnd
            startDate={watch('initialReleaseDateFrom')}
            endDate={watch('initialReleaseDateTo')}
            minDate={watch('initialReleaseDateFrom')}
            normalize={ifNotNullSetEndOfDayHours}
          />

          <InputDateController<FormSchema>
            control={control}
            label="Current Release Date"
            name="currentReleaseDateFrom"
            placeholder="From"
            selectsStart
            startDate={watch('currentReleaseDateFrom')}
            endDate={watch('currentReleaseDateTo')}
          />

          {/* FIXME should set value to null when start date greater then end date */}
          <InputDateController<FormSchema>
            control={control}
            // label="Current Release Date (to)"
            name="currentReleaseDateTo"
            placeholder="To"
            selectsEnd
            startDate={watch('currentReleaseDateFrom')}
            endDate={watch('currentReleaseDateTo')}
            minDate={watch('currentReleaseDateFrom')}
            normalize={ifNotNullSetEndOfDayHours}
          />
        </div>

        <div className="flex gap-6">
          <Button intent="primary" icon="search">
            Pesquisar
          </Button>

          <Button onClick={handleResetButtonClick}>Limpar</Button>
        </div>
      </div>
    </form>
  )
}
