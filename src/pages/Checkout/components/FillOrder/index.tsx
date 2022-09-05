import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { SelectCreditCard } from '../../../../components/SelectCreditCard'
import { UseFormReturn } from 'react-hook-form'
import { formProps } from '../..'

interface FillOrderProps {
  setPaymentMethod: (
    method: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro',
  ) => void
  form: UseFormReturn<formProps>
  paymentMethod:
    | 'Cartão de Crédito'
    | 'Cartão de Débito'
    | 'Dinheiro'
    | undefined
}

export const FillOrder = ({
  setPaymentMethod,
  paymentMethod,
  form,
}: FillOrderProps) => {
  const {
    register,
    formState: { errors },
  } = form
  const inputClass =
    'flex items-center gap-1 p-3 bg-base-input border border-base-button focus:outline-none focus:border focus:border-product-yellow-dark rounded-md max-h-[42px] text-base-text '
  const errorClass = 'text-red-500 text-xs font-roboto font-semibold'
  return (
    <div className="flex-grow ">
      <h1 className="font-baloo text-lg font-bold text-base-subtitle mb-4 ">
        Complete seu pedido
      </h1>
      <div className="flex flex-wrap gap-3 mr-10">
        <div className="bg-base-card rounded-[6px] p-10">
          <div className="flex items-start gap-2 w-[560px] mb-6">
            <MapPinLine className="text-product-yellow-dark" size={20} />
            <div className="flex flex-col gap-1 font-roboto">
              <span className="text-base-subtitle ">Endereço de Entrega</span>
              <span className="text-base-text text-[14px]">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-start">
            <div className="flex flex-col  ">
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
            <div className="flex flex-col w-full">
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
            <div className="flex gap-4 w-full">
              <div className="flex flex-col ">
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
              <input
                className={inputClass}
                placeholder="Complemento"
                style={{ flex: 1 }}
                {...register('complement')}
              />
            </div>

            <div className="flex  gap-4 w-full">
              <div className="flex flex-col  ">
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
              <div className="flex flex-col  flex-grow ">
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
              <div className="flex flex-col  w-[60px]">
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

        <div className="bg-base-card rounded-[6px] p-10 w-full ">
          <div className="flex items-start gap-2  w-[560px] mb-6">
            <CurrencyDollar className="text-product-purple " size={20} />
            <div className="flex flex-col  gap-1 font-roboto">
              <span className="text-base-subtitle ">Pagamento</span>
              <span className="text-base-text text-[14px]">
                O pagamento é feito na entrega. Escolhar a forma que deseja
                pagar
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 w-full text-product-purple">
            <SelectCreditCard
              method="CARTÃO DE CRÉDITO"
              icon={CreditCard}
              onClick={() => setPaymentMethod('Cartão de Crédito')}
            />
            <SelectCreditCard
              method="CARTÃO DE DÉBITO"
              icon={Bank}
              onClick={() => setPaymentMethod('Cartão de Débito')}
            />
            <SelectCreditCard
              method="DINHEIRO"
              icon={Money}
              onClick={() => setPaymentMethod('Dinheiro')}
            />
          </div>
          <div className="mt-2 text-center ">
            {paymentMethod ? (
              <span className="text-base-title text-xs font-semibold">
                {paymentMethod} selecionado
              </span>
            ) : (
              <span className={errorClass}>Selecione a forma de pagamento</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
