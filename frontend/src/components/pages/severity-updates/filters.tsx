import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextController<FormSchema> control={control} label="ID" name="id" />

      <InputTextController<FormSchema>
        control={control}
        label="Document Title"
        name="documentTitle"
      />

      <InputDateController<FormSchema>
        control={control}
        label="Initial Release Date (from)"
        name="initialReleaseDateFrom"
        selectsStart
        startDate={watch('initialReleaseDateFrom')}
        endDate={watch('initialReleaseDateTo')}
      />

      {/* FIXME should set value to null when start date greater then end date */}
      <InputDateController<FormSchema>
        control={control}
        label="Initial Release Date (to)"
        name="initialReleaseDateTo"
        selectsEnd
        startDate={watch('initialReleaseDateFrom')}
        endDate={watch('initialReleaseDateTo')}
        minDate={watch('initialReleaseDateFrom')}
        normalize={ifNotNullSetEndOfDayHours}
      />

      <InputDateController<FormSchema>
        control={control}
        label="Current Release Date (from)"
        name="currentReleaseDateFrom"
        selectsStart
        startDate={watch('currentReleaseDateFrom')}
        endDate={watch('currentReleaseDateTo')}
      />

      {/* FIXME should set value to null when start date greater then end date */}
      <InputDateController<FormSchema>
        control={control}
        label="Current Release Date (to)"
        name="currentReleaseDateTo"
        selectsEnd
        startDate={watch('currentReleaseDateFrom')}
        endDate={watch('currentReleaseDateTo')}
        minDate={watch('currentReleaseDateFrom')}
        normalize={ifNotNullSetEndOfDayHours}
      />

      {/* TODO style buttons */}
      <button>Filtrar</button>
      <button onClick={() => reset()}>Limpar</button>
    </form>
  )
}
