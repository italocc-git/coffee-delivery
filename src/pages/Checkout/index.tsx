import { FillOrder } from './components/FillOrder'
import { SelectedCoffee } from './components/SelectedCoffee'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formValidationSchema = zod.object({
  cep: zod.string().min(1, { message: 'Campo Obrigatório' }),
  street: zod.string().min(1, { message: 'Campo Obrigatório' }),
  number: zod.string().min(1, { message: 'Campo Obrigatório' }),
  complement: zod.string(),
  district: zod.string().min(1, { message: 'Campo Obrigatório' }),
  city: zod.string().min(1, { message: 'Campo Obrigatório' }),
  uf: zod.string().min(1, { message: 'Campo Obrigatório' }),
})

export type formProps = zod.infer<typeof formValidationSchema>

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<
    'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
  >()

  const form = useForm<formProps>({
    resolver: zodResolver(formValidationSchema),
  })

  return (
    <div className="flex justify-between px-[160px] lg:flex-col lg:gap-6 md:px-[80px] sm:px-4 lg:mb-11 ">
      <FillOrder
        form={form}
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
      <SelectedCoffee form={form} paymentMethod={paymentMethod} />
    </div>
  )
}
