import { Plus, Minus } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

interface CoffeeType {
  id?: number
  image: string
  type: string[]
  title: string
  description: string
  price: number
  quantity: number
}
interface SelectQuantityProps {
  quantity: number
  setQuantity?: (quantity: number) => void
  cartItem?: CoffeeType
}

export const SelectQuantity = ({
  quantity,
  setQuantity,
  cartItem,
}: SelectQuantityProps) => {
  const { increaseToCurrentCart, decreaseItemCart } = useCart()

  const decreaseAmount = () => {
    if (quantity > 0 && setQuantity) setQuantity(quantity - 1)

    if (cartItem) decreaseItemCart(cartItem)
  }

  const increaseAmount = () => {
    if (quantity >= 0 && setQuantity) setQuantity(quantity + 1)

    if (cartItem) increaseToCurrentCart(cartItem)
  }

  return (
    <div className="flex items-center justify-center gap-2 w-[72px] rounded-lg bg-base-button p-2">
      <button onClick={decreaseAmount}>
        <Minus
          className="text-product-purple font-bold cursor-pointer hover:text-product-purple-dark"
          size={18}
        />
      </button>

      <span className="text-xs">{quantity}</span>
      <button onClick={increaseAmount}>
        <Plus
          className="text-product-purple hover:text-product-purple-dark font-bold cursor-pointer"
          size={18}
        />
      </button>
    </div>
  )
}
