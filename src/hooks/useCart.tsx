import { createContext, useState, useContext, ReactNode } from 'react'

interface CoffeeType {
  id?: number
  image: string
  type: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface CartContextType {
  cart: CoffeeType[]
  addItemToCart: (cart: CoffeeType) => void
  removeItemToCart: (removedItem: CoffeeType) => void
  increaseToCurrentCart: (cartItem: CoffeeType) => void
  decreaseItemCart: (cartItem: CoffeeType) => void
}

type CartContextProviderType = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextType)

export const useCart = () => {
  return useContext(CartContext)
}

export const CartContextProvider = ({ children }: CartContextProviderType) => {
  const [cart, setCart] = useState<CoffeeType[]>(() => {
    const cartStorage = localStorage.getItem(import.meta.env.VITE_STORAGE_KEY)

    if (cartStorage) {
      return JSON.parse(cartStorage)
    }

    return []
  })

  const addItemToCart = (newItem: CoffeeType) => {
    if (newItem.quantity === 0)
      return /* Caso o usuário queira remover , colocando 0. Validar */

    const findCoffee = cart.find((coffee) => coffee.id === newItem.id)
    let newCart: CoffeeType[] = []
    if (findCoffee) {
      /* Se encontrar adiciona uma quantidade nova no item encontrado */
      newCart = cart.map((item) =>
        item.id === findCoffee.id
          ? { ...newItem, quantity: newItem.quantity }
          : item,
      )
      setCart(newCart)
    } else {
      /* Adiciona o item ao carrinho atual com uma quantidade */
      setCart((oldState) => {
        newCart = [...oldState, newItem]
        return newCart
      })
    }

    localStorage.setItem(
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify(newCart),
    )
  }

  const increaseToCurrentCart = (item: CoffeeType) => {
    const findSelectedCoffeeQuantity = cart.find(
      (coffee) => coffee.id === item.id,
    )

    if (findSelectedCoffeeQuantity) {
      const newCart = cart.map((item) =>
        item.id === findSelectedCoffeeQuantity.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      )
      setCart(newCart)
    }
  }

  const decreaseItemCart = (item: CoffeeType) => {
    const findSelectedCoffeeQuantity = cart.find(
      (coffee) => coffee.id === item.id,
    )

    if (findSelectedCoffeeQuantity) {
      const newCart = cart.map((item) =>
        item.id === findSelectedCoffeeQuantity.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      )
      setCart(newCart)
    }
  }

  const removeItemToCart = (itemRemoved: CoffeeType) => {
    const cartUpdated = cart.filter(
      (itemCart) => itemCart.id !== itemRemoved.id,
    )
    setCart(cartUpdated)
    localStorage.setItem(
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify(cartUpdated),
    )
  }

  return (
    <CartContext.Provider
      value={
        {
          cart,
          addItemToCart,
          removeItemToCart,
          increaseToCurrentCart,
          decreaseItemCart,
        } as CartContextType
      }
    >
      {children}
    </CartContext.Provider>
  )
}
