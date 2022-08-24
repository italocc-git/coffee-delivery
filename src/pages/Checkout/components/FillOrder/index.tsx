import { MapPinLine , CurrencyDollar , CreditCard , Money, Bank } from "phosphor-react"
import { Input } from "../../../../components/Input"
import { SelectCreditCard } from "../../../../components/SelectCreditCard"

export const FillOrder = () => {
    return (
        <div >
            <h1 className="font-baloo text-lg font-bold text-base-subtitle mb-4 ">
                Complete seu pedido
            </h1>
            <div className="flex flex-wrap gap-3 flex-grow mr-10">
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
                        <Input placeholder="CEP"  />
                        <Input placeholder="Rua"  />
                        <Input placeholder="Número" />
                        <Input placeholder="Complemento" />
                        <Input placeholder="Bairro" />
                        <Input placeholder="Cidade" />
                        <Input placeholder="UF" />
                        
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
                        <SelectCreditCard type="CARTÃO DE CRÉDITO" icon={CreditCard} />
                        <SelectCreditCard type="CARTÃO DE DÉBITO" icon={Bank} />
                        <SelectCreditCard type="DINHEIRO" icon={Money} />
                    </div>
                </div> 
            </div>

            
        </div>
    )
}