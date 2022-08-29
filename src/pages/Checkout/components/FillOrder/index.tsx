import { MapPinLine , CurrencyDollar , CreditCard , Money, Bank } from "phosphor-react"
import { Input } from "../../../../components/Input"
import { SelectCreditCard } from "../../../../components/SelectCreditCard"
import { useFormContext , UseFormReturn} from "react-hook-form";
import { formProps , FormProps } from "../..";

interface FillOrderProps {
    setPaymentMethod : (method: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro') => void
    form : UseFormReturn<FormProps> 
    paymentMethod : 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro' | undefined
}

export const FillOrder = ({setPaymentMethod, paymentMethod, form}: FillOrderProps) => {
    const { register, formState } = form;
    const {errors} = formState
    const errorClass = "text-red-500 text-xs font-roboto font-semibold"
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

                    <div className="flex flex-wrap  gap-4 items-start ">
                        <div className="flex flex-col ">
                            <Input id='cep' placeholder="CEP" {...register('cep')} />
                             {/*  {errors.cep && <span className={errorClass}>{errors.cep.message}</span>} */}
                        </div>
                        <div className="flex flex-col w-full">
                            <Input placeholder="Rua" {...register('street')}  />
                           {/*  {errors.street && <span className={errorClass}>{errors.steet.message}</span>} */}
                        </div>
                        <div className="flex gap-4 w-full">
                            <Input placeholder="Número" {...register('number')} />
                            <Input placeholder="Complemento" style={{flex:1}} {...register('complement')} />
                            {/* {errors.number && <span className={errorClass}>{errors.cep.message}</span> */}
                        </div>
                       
                        <div className="flex  gap-4 w-full">
                            <Input placeholder="Bairro" {...register('district')}  />
                            <Input placeholder="Cidade" style={{flex:1}} {...register('city')}  />
                            <Input placeholder="UF" {...register('state')} /> 
                            {/* {errors.district && <span className={errorClass}>{errors.cep.message}</spa */}
                        </div>
                      
                        
                        
                    </div>
                </div>


                <div className="bg-base-card rounded-[6px] p-10 w-full">
                <div className="flex items-start gap-2  w-[560px] mb-6">
                        <CurrencyDollar className="text-product-purple " size={20} />
                        <div className="flex flex-col  gap-1 font-roboto">
                            <span className="text-base-subtitle ">Pagamento</span>
                            <span className="text-base-text text-[14px]">
                                O pagamento é feito na entrega. Escolhar a forma que deseja pagar
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 w-full text-product-purple">
                        <SelectCreditCard method="CARTÃO DE CRÉDITO" icon={CreditCard} onClick={() => setPaymentMethod('Cartão de Crédito')}/>
                        <SelectCreditCard method="CARTÃO DE DÉBITO" icon={Bank} onClick={() => setPaymentMethod('Cartão de Débito')} />
                        <SelectCreditCard method="DINHEIRO" icon={Money} onClick={() => setPaymentMethod('Dinheiro')} />
                    </div>
                    <div className="mt-2 text-center ">
                    {paymentMethod  ? (
                            <span className="text-base-title text-xs font-semibold">
                                {paymentMethod} selecionado
                            </span>         
                    )
                     : <span className={errorClass}>
                            Selecione a forma de pagamento
                        </span>
                    }
                        
                    </div>
                </div> 
            </div>

            
        </div>
    )
}