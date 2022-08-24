import {Trash} from 'phosphor-react'
import coffee from '../../assets/coffees/americano.png'
import { Button } from '../Button'
import { SelectQuantity } from '../SelectQuantity'
export const Cart = () => {
    return (
        <>
        <div className="flex justify-between items-start ">
            <div className='flex gap-5'>
                <img src={coffee} alt='coffee' className='w-[64px] h-[64px]' />
                <div className='flex flex-col gap-1'>
                    <h1 className='font-roboto text-base-subtitle'>Expresso Tradicional</h1>
                    <div className='flex gap-2 items-start'>
                        <SelectQuantity  />
                        <Button layout='removeCart' icon={Trash} title="REMOVER"/>
                    </div>
                </div>
            </div>

            <div className='font-roboto font-bold text-base-text'>
                <span>RS 9,90</span>
            </div>
        </div>
        <hr className='border border-base-button mt-2'/>
        </>
    )
}