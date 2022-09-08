import { FillOrder } from './components/FillOrder'
import { SelectedCoffee } from './components/SelectedCoffee'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const messageError = 'Campo Obrigatório'
const formValidationSchema = zod.object({
  cep: zod.string().min(1, { message: messageError }),
  street: zod.string().min(1, { message: messageError }),
  number: zod.string().min(1, { message: messageError }),
  complement: zod.string(),
  district: zod.string().min(1, { message: messageError }),
  city: zod.string().min(1, { message: messageError }),
  uf: zod.string().min(1, { message: messageError }),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    required_error: messageError,
  }),
})

export type formProps = zod.infer<typeof formValidationSchema>

export const Checkout = () => {
  const form = useForm<formProps>({
    resolver: zodResolver(formValidationSchema),
  })

  return (
    <div className="flex justify-between px-[160px] lg:flex-col lg:gap-6 md:px-[80px] sm:px-4 lg:mb-11 ">
      <FillOrder form={form} />
      <SelectedCoffee form={form} />
    </div>
  )
}
