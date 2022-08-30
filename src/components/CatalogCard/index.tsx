import { Button } from '../Button'
import { ShoppingCart } from 'phosphor-react'
import { SelectQuantity } from '../SelectQuantity'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { priceFormatter } from '../../utils/formatter'
interface CatalogCardProps {
  id: number
  image: string
  type: string[]
  title: string
  description: string
  price: number
  quantity: number
}

export const CatalogCard = (coffeeItem: CatalogCardProps) => {
  const { image, type, title, description, price } = coffeeItem
  const { addItemToCart } = useCart()
  const [quantity, setQuantity] = useState(0)
  const addCart = () => {
    addItemToCart({
      ...coffeeItem,
      quantity,
    })
  }
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-[256px] h-[310px] bg-base-card rounded-[6px] relative px-[20px] rounded-tr-[36px] rounded-bl-[36px]">
      <img src={image} alt="café americano" className="absolute top-[-20px] " />

      <span className="bg-product-yellow-light text-product-yellow-dark font-bold rounded-lg p-2 text-[10px] mt-3">
        {type[0]}
      </span>
      <h1 className="text-base-subtitle font-bold text-xl font-baloo">
        {title}
      </h1>
      <p className="text-base-label font-normal text-sm font-roboto text-center ">
        {description}
      </p>

      <div className="flex items-center justify-between gap-[20px] absolute bottom-4 ">
        <span className="text-base-text text-sm font-roboto">
          <b className="text-[24px] font-extrabold font-baloo">
            {priceFormatter.format(price)}
          </b>
        </span>

        <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
        <Button layout="addCart" icon={ShoppingCart} onClick={addCart} />
      </div>
    </div>
  )
}
