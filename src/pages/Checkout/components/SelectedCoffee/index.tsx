import { Button } from "../../../../components/Button"
import { Cart } from "../../../../components/Cart"

export const SelectedCoffee = () => {
    return(
        <div className="flex flex-col gap-6 p-10 bg-base-card rounded-[6px] rounded-tr-[44px] rounded-bl-[44px] w-[800px]">
            <div>
                <Cart />
            </div>
            <div className="flex flex-col items-start gap-2 font-roboto">
                <div className="flex justify-between w-full  text-base-text">
                    <span>Total de itens</span>
                    <span>R$ 29,70</span>
                </div>
                <div className="flex justify-between w-full  text-base-text">
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                </div>
                <div className="flex justify-between w-full  text-base-subtitle font-bold">
                    <span>Total</span>
                    <span>R$ 33,20</span>
                </div>
            </div>
            <div>
                <Button layout="submit" title="CONFIRMAR PEDIDO"  />
            </div>
        </div>
    )
}