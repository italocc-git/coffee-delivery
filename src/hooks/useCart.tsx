import {createContext , useState , useContext, ReactNode} from 'react'



interface CoffeeType {
    id ?: number
    image: string;
    type: string[];
    title: string;
    description : string;
    price: string;
    quantity : number
}

interface CartContextType {
    cart : CoffeeType[]
    addItemToCart : (cart : CoffeeType) => void
    clearCoffeeListCart : () => void /* temporario */
    removeItemToCart : (removedItem : CoffeeType) => void
 }

type CartContextProviderType = {
    children : ReactNode
}



const CartContext = createContext({} as CartContextType)

export const useCart = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({children} : CartContextProviderType) => {

    const [cart , setCart] = useState<CoffeeType[]>(() => {

        const cartStorage = localStorage.getItem('@coffeeDelivery-dev:cart')

        if(cartStorage) {
            return JSON.parse(cartStorage)
        }

        return []
    })


    const addItemToCart = (newItem : CoffeeType) => {

        if(newItem.quantity === 0) return /* Caso o usuário queira remover , colocando 0. Validar */

       const findCoffee = cart.find(coffee => coffee.id === newItem.id )
       let newCart : CoffeeType[] = []
       if(findCoffee) {
        /* Se encontrar adiciona uma quantidade nova no item encontrado */
            newCart = cart.map(item => item.id === findCoffee.id ? {...newItem , quantity: newItem.quantity} : item)
            setCart(newCart)
       }
       else {
        /* Adiciona o item ao carrinho atual com uma quantidade */
            setCart((oldState) => {
                newCart = [...oldState , newItem]
                return newCart
            })
       }

       localStorage.setItem('@coffeeDelivery-dev:cart', JSON.stringify(newCart))
    }

  

    const clearCoffeeListCart = () => {
        localStorage.clear()
    }

    const removeItemToCart = (itemRemoved : CoffeeType) => {
        
        const cartUpdated =  cart.filter(itemCart => itemCart.id !== itemRemoved.id)
        setCart(cartUpdated)
        localStorage.setItem('@coffeeDelivery-dev:cart', JSON.stringify(cartUpdated))
        
    }

    return(
        <CartContext.Provider value={{cart , addItemToCart , clearCoffeeListCart, removeItemToCart} as CartContextType}>
            {children}
        </CartContext.Provider>
    )
}