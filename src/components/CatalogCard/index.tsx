import { Button } from '../Button';
import {ShoppingCart } from 'phosphor-react'
import { SelectQuantity } from '../SelectQuantity';
import { useState } from 'react';
interface CatalogCardProps {
    image: string;
    type: string[];
    title: string;
    description : string;
    price: string;

}

export const CatalogCard = ({image , type , title, description, price} : CatalogCardProps) => {
    
    
    return(
        <div className="flex flex-col items-center justify-center gap-1 w-[256px] h-[310px] bg-base-card rounded-[6px] relative px-[20px] rounded-tr-[36px] rounded-bl-[36px]"> 
            <img src={image} alt="café americano" 
                className='absolute top-[-20px] '
            />

            
            <span className='bg-product-yellow-light text-product-yellow-dark font-bold rounded-lg p-2 text-[10px] mt-3'>{type[0]}</span>
            <h1 className='text-base-subtitle font-bold text-xl font-baloo'>{title}</h1>
            <p className='text-base-label font-normal text-sm font-roboto text-center '>{description}</p>

                <div className='flex items-center justify-between gap-[20px] absolute bottom-4 '>
                    <span className='text-base-text text-sm font-roboto'>R$ <b className='text-[24px] font-extrabold font-baloo'>{price}</b></span>
                    
                    <SelectQuantity  />
                    <Button layout='addCart' icon={ShoppingCart} />
                </div>
            
        </div>
    )
}