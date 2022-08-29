import {Trash} from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { Button } from '../Button'
import { SelectQuantity } from '../SelectQuantity'
export const Cart = () => {
    const {cart , removeItemToCart} = useCart()
    return (
        <>
        {cart.map(cartItem => (
            <div key={cartItem.id} className="flex justify-between items-start mb-5 ">
                <div className='flex gap-5'>
                    <img src={cartItem.image} alt='coffee' className='w-[64px] h-[64px]' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-roboto text-base-subtitle'>{cartItem.title}</h1>
                        <div className='flex gap-2 items-start'>
                            <SelectQuantity  quantity={cartItem.quantity} setQuantity={(quantity )  => console.log(quantity)} />
                            <Button layout='removeCart' icon={Trash} title="REMOVER" onClick={() => removeItemToCart(cartItem)}/>
                        </div>
                    </div>
                </div>

                <div className='font-roboto font-bold text-base-text'>
                    <span>RS {cartItem.price}</span>
                </div>
        </div>
        ))}
        <hr className='border border-base-button mt-2'/>
        </>
    )
}