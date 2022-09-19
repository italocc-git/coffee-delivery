import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart, CircleNotch } from 'phosphor-react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useState, useEffect } from 'react'

type geCodeProps = {
  address: String
  postal_code: String
  country: String
  region: String
  area: String
  sublocality: String
  street: String
  location: {
    lat: Number
    lng: Number
  }
  location_type: String
  type: String
}

export const Header = () => {
  const { cart } = useCart()
  const [geCodeData, setGeCodeData] = useState<geCodeProps>({} as geCodeProps)
  const [isLoading, setIsLoading] = useState(false)
  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  const currentLocalization = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST,
      },
    }
    navigator.geolocation.getCurrentPosition((location) => {
      setIsLoading(true)
      const { coords } = location
      fetch(
        `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${coords.latitude}%2C${coords.longitude}`,
        options,
      )
        .then((response: any) => {
          return response.json()
        })
        .then((response) => {
          setGeCodeData(response.results[1])
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false)
        })
    }, error)
  }

  useEffect(() => {
    currentLocalization()
  }, [])

  return (
    <nav className="flex items-center justify-between h-[104px] px-[160px] md:px-[80px] sm:px-4 lg:mb-11 ">
      <Link to="/">
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <div className="flex gap-3">
        <div className="bg-product-purple-light text-product-purple-dark flex justify-center items-center gap-1 p-2 rounded min-w-[150px] min-h-[38px]">
          <MapPin
            weight="fill"
            className="text-product-purple-dark w-[22px] h-[22px]"
          />
          {isLoading ? (
            <CircleNotch className="animate-spin" weight="fill" />
          ) : (
            geCodeData.area && (
              <span className="font-roboto text-sm">
                {geCodeData.area}, {geCodeData.region}
              </span>
            )
          )}
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
