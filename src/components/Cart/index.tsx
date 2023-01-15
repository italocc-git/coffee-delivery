import { Trash } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { priceFormatter } from '../../utils/formatter'
import { Button } from '../Button'
import { SelectQuantity } from '../SelectQuantity'
export const Cart = () => {
  const { cart, removeItemFromCart } = useCart()
  return (
    <>
      {cart.map((cartItem) => (
        <div
          key={cartItem.id}
          className="flex justify-between items-start mb-5 "
        >
          <div className="flex gap-4 w-full ">
            <img
              src={cartItem.image}
              alt="coffee"
              className="w-[64px] h-[64px]"
            />
            <div className="flex flex-col  gap-1 w-full ">
              <div className="flex justify-between">
                <h1 className="font-roboto text-base-subtitle text-sm">
                  {cartItem.title}
                </h1>
                <span className="font-roboto font-bold text-base-text text-sm">
                  {' '}
                  {priceFormatter.format(cartItem.price)}
                </span>
              </div>

              <div className="flex gap-2 items-start ">
                <SelectQuantity
                  cartItem={cartItem}
                  quantity={cartItem.quantity}
                />
                <Button
                  layout="removeCart"
                  icon={Trash}
                  title="REMOVER"
                  onClick={() => removeItemFromCart(cartItem)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr className="border border-base-button mt-2" />
    </>
  )
}
