import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
export const Header = () => {
  const { cart, clearCoffeeListCart } = useCart()

  return (
    <nav className="flex items-center justify-between h-[104px] px-[160px]">
      <Link to="/">
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <div className="flex gap-3">
        <div className="bg-product-purple-light text-product-purple-dark flex items-center gap-1 p-2 rounded ">
          <MapPin
            weight="fill"
            className="text-product-purple-dark w-[22px] h-[22px]"
          />
          <span
            className="font-roboto text-sm cursor-pointer"
            onClick={clearCoffeeListCart}
          >
            Mombaça, CE (clear)
          </span>
        </div>
        <Link to="/checkout">
          <Button
            layout="headerCart"
            icon={ShoppingCart}
            title={String(cart.length)}
          />
        </Link>
      </div>
    </nav>
  )
}
