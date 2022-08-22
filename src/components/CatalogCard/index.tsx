import coffeeExample from '../../assets/coffees/americano.png'
import { Button } from '../Button';
import {ShoppingCart , Plus , Minus} from 'phosphor-react'
interface CatalogCardProps {
    image: string;
    type: string[];
    title: string;
    description : string;
    price: string;

}

export const CatalogCard = ({image , type , title, description, price} : CatalogCardProps) => {
    return(
        <div className="flex flex-col items-center justify-center gap-1 w-[256px] h-[310px] bg-base-card rounded-[6px] relative px-[20px]">  {/* rounded-tr-full rounded-bl-full */}
            <img src={image} alt="café americano" 
                className='absolute top-[-20px] '
            />

            
            <span className='bg-product-yellow-light text-product-yellow-dark font-bold rounded-lg p-2 text-[10px] mt-3'>{type[0]}</span>
            <h1 className='text-base-subtitle font-bold text-xl font-baloo'>{title}</h1>
            <p className='text-base-label font-normal text-sm font-roboto text-center '>{description}</p>

                <div className='flex items-center justify-between gap-[20px] absolute bottom-4 '>
                    <span className='text-base-text text-sm font-roboto'>R$ <b className='text-[24px] font-extrabold font-baloo'>{price}</b></span>
                    <div className='flex items-center justify-center gap-2 w-[72px] rounded-lg bg-base-button p-2' >
                        <Minus className='text-product-purple font-bold cursor-pointer hover:text-product-purple-dark' size={18}  /> 
                        <span>1</span>
                        <Plus className='text-product-purple hover:text-product-purple-dark font-bold cursor-pointer' size={18} /> 
                    </div>
                    <Button layout='addCart' icon={ShoppingCart} />
                </div>
            
        </div>
    )
}