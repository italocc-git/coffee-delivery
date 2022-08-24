import { FillOrder } from "./components/FillOrder"
import { SelectedCoffee } from "./components/SelectedCoffee"

export const Checkout = () => {
    return(
        <div className="flex justify-between px-[160px]">
            <FillOrder />
            <SelectedCoffee />
        </div>
    )
}