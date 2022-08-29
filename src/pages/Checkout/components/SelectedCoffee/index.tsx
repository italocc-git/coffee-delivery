import { useFormContext, UseFormReturn } from "react-hook-form"
import { FormProps } from "../.."
import { Button } from "../../../../components/Button"
import { Cart } from "../../../../components/Cart"
import { useCart } from "../../../../hooks/useCart"
import { priceFormatter } from "../../../../utils/formatter"


interface SelectedCoffeeProps {
     form : UseFormReturn<FormProps> 
}

export const SelectedCoffee = ({form} : SelectedCoffeeProps) => {
    const {cart} = useCart()

    const {handleSubmit, getValues } = form;

    const sumTotalQuantity = cart.reduce(((acc , currentValue) => acc + currentValue.quantity * Number(String(currentValue.price).replace(',' , '.'))), 0)
    

    const handleSubmitCoffee = () => {
        const data = getValues()
        console.log(data)
    }
 
    return(
        <form onSubmit={handleSubmit(handleSubmitCoffee)} className="flex flex-col gap-6 p-10 bg-base-card rounded-[6px] rounded-tr-[44px] rounded-bl-[44px] lg:w-[800px]">
            <div>
                <Cart />
            </div>
            <div className="flex flex-col items-start gap-2 font-roboto">
                <div className="flex justify-between w-full  text-base-text">
                    <span>Total de itens</span>
                    <span>{priceFormatter.format(sumTotalQuantity)}</span>
                </div>
                <div className="flex justify-between w-full  text-base-text">
                    <span>Entrega</span>
                    <span>{priceFormatter.format(3.5)}</span>
                </div>
                <div className="flex justify-between w-full  text-base-subtitle font-bold">
                    <span>Total</span>
                    <span>{sumTotalQuantity && priceFormatter.format(sumTotalQuantity + 3.5) }</span>
                </div>
            </div>
           
            <div>
                <Button layout="submit" type="submit" title="CONFIRMAR PEDIDO"  />
            </div>
        </form>
    )
}