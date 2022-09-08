import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { UseFormReturn, Controller } from 'react-hook-form'
import { formProps } from '../..'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface FillOrderProps {
  form: UseFormReturn<formProps>
}

export const FillOrder = ({ form }: FillOrderProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = form
  const inputClass =
    'flex items-center gap-1 p-3 bg-base-input border border-base-button focus:outline-none focus:border focus:border-product-yellow-dark rounded-md max-h-[42px] text-base-text '
  const errorClass = 'text-red-500 text-xs font-roboto font-semibold'
  return (
    <div className="flex-grow">
      <h1 className="font-baloo text-lg font-bold text-base-subtitle mb-4 ">
        Complete seu pedido
      </h1>
      <div className="flex flex-wrap gap-3 mr-10 ">
        <div className="bg-base-card rounded-[6px] p-10 w-full ">
          <div className="flex items-start gap-2 max-w-[560px] mb-6">
            <MapPinLine className="text-product-yellow-dark" size={20} />
            <div className="flex flex-col gap-1 font-roboto">
              <span className="text-base-subtitle ">Endereço de Entrega</span>
              <span className="text-base-text text-[14px]">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <div className="flex  flex-col w-full max-w-[550px] ">
              <input
                id="cep"
                className={inputClass}
                placeholder="CEP"
                {...register('cep')}
              />
              <div className="h-4">
                {errors.cep && (
                  <span className={errorClass}>{errors.cep.message}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full sm:max-w-[550px]">
              <input
                className={inputClass}
                placeholder="Rua"
                {...register('street')}
              />
              <div className="h-4">
                <span className={errorClass}>
                  {errors.street && errors.street.message}
                </span>
              </div>
            </div>
            <div className="flex sm:flex-col gap-2 w-full sm:max-w-[550px]">
              <div className="flex flex-col  ">
                <input
                  className={inputClass}
                  placeholder="Número"
                  {...register('number')}
                />
                <div className="h-4">
                  {errors.number && (
                    <span className={errorClass}>{errors.number.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-grow ">
                <input
                  className={`${inputClass} mb-4`}
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </div>
            </div>

            <div className="flex sm:flex-col  gap-2 w-full sm:max-w-[550px]">
              <div className="flex flex-col   ">
                <input
                  className={inputClass}
                  placeholder="Bairro"
                  {...register('district')}
                />
                <div className="h-4">
                  {errors.district && (
                    <span className={errorClass}>
                      {errors.district.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col  flex-grow  ">
                <input
                  className={inputClass}
                  placeholder="Cidade"
                  {...register('city')}
                />
                <div className="h-4">
                  {errors.city && (
                    <span className={errorClass}>{errors.city.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col  min-w-[60px]">
                <input
                  className={inputClass}
                  placeholder="UF"
                  {...register('uf')}
                />
                <div className="h-4">
                  {errors.uf && (
                    <span className={errorClass}>{errors.uf.message}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-card rounded-[6px] p-10 ">
          <div className="flex items-start gap-2  max-w-[560px] mb-6">
            <CurrencyDollar className="text-product-purple " size={20} />
            <div className="flex flex-col  gap-1 font-roboto">
              <span className="text-base-subtitle ">Pagamento</span>
              <span className="text-base-text text-[14px]">
                O pagamento é feito na entrega. Escolhar a forma que deseja
                pagar
              </span>
            </div>
          </div>

          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex sm:flex-col items-center justify-center gap-3 w-full max-w-[506px] text-product-purple"
                >
                  <RadioGroup.Item
                    value="credit"
                    className="flex items-center justify-center gap-2 p-4 border border-base-button  border-hidden focus:border bg-base-button focus:outline-none focus:ring focus:ring-product-purple hover:bg-base-hover transition-colors rounded-[6px] cursor-pointer
              w-full min-w-[160px]"
                  >
                    <CreditCard className="text-product-purple" size={16} />
                    <span className="text-base-label font-roboto text-xs">
                      {'CARTÃO DE CRÉDITO'}
                    </span>
                  </RadioGroup.Item>

                  <RadioGroup.Item
                    value="debit"
                    className="flex items-center justify-center gap-2 p-4 border border-base-button  border-hidden focus:border bg-base-button focus:outline-none focus:ring focus:ring-product-purple hover:bg-base-hover transition-colors rounded-[6px] cursor-pointer
              w-full min-w-[160px]"
                  >
                    <Bank className="text-product-purple" size={16} />
                    <span className="text-base-label font-roboto text-xs">
                      {'CARTÃO DE DÉBITO'}
                    </span>
                  </RadioGroup.Item>

                  <RadioGroup.Item
                    value="money"
                    className="flex items-center justify-center gap-2 p-4 border border-base-button  border-hidden focus:border bg-base-button focus:outline-none focus:ring focus:ring-product-purple hover:bg-base-hover transition-colors rounded-[6px] cursor-pointer
              w-full min-w-[160px]"
                  >
                    <Money className="text-product-purple" size={16} />
                    <span className="text-base-label font-roboto text-xs">
                      {'DINHEIRO'}
                    </span>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />

          <div className="mt-2 text-center ">
            {errors.paymentMethod && (
              <span className={errorClass}>{errors.paymentMethod.message}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
