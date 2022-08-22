import logo from '../../assets/logo.png'
import {MapPin , ShoppingCart} from 'phosphor-react'
import { Button } from '../Button'

export const Header = () => {
    return(
        <nav className='flex items-center justify-between h-[104px] px-[160px]'>
            <img src={logo} alt='logo' className='h-10' />
            <div className='flex gap-3'>
                <div className='bg-product-purple-light text-product-purple-dark flex items-center gap-1 p-2 rounded '>
                    <MapPin weight='fill' className='text-product-purple-dark w-[22px] h-[22px]' />
                    <span className='font-roboto text-sm '>Mombaça, CE</span>
                </div>
                <Button layout='headerCart' icon={ShoppingCart} />
            </div>
        </nav>
    )
}