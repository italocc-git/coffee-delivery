import { IconProps } from "phosphor-react";

interface ButtonProps {
    layout: 'submit' | 'addCart' | 'removeCart' | 'headerCart';
    title ?: string
    icon ?: any /* corrigir depois */
}

export const Button = ({layout , title, icon : Icon} : ButtonProps) => {
    
    const ButtonSubmit = () => {
        return (
            <button className="flex items-center justify-center gap-1 bg-product-yellow hover:bg-product-yellow-dark text-white w-32 h-11 rounded-md p-3 cursor-pointer transition-colors">{title}</button>
        )
    }

    const ButtonAddCart = () => {
        return (
            <button className="flex items-center justify-center gap-1 bg-product-purple-dark hover:bg-product-purple text-white w-[38px] h-[38px] rounded-md p-2 cursor-pointer transition-colors"><Icon weight='fill' size={20}/></button>
        )
    }

    const ButtonRemoveCart = () => {
        return (
            <button className="flex items-center justify-center gap-1 bg-base-button hover:bg-base-hover text-base-title w-[91px] h-8 rounded-md px-2 cursor-pointer transition-colors">Icon {title}</button>
        )
    }

    const ButtonHeaderCart = () => {
        return (
            <button className="flex items-center justify-center gap-1 bg-product-yellow-light text-product-yellow-dark w-[38px] h-[38px] rounded-md p-2 cursor-pointer"><Icon weight='fill' size={20}/></button>
        )
    }


    switch(layout){
        case 'submit' :
            return <ButtonSubmit/>
        case 'addCart':
            return <ButtonAddCart/>
        case 'removeCart':
            return <ButtonRemoveCart/>
        case 'headerCart':
            return <ButtonHeaderCart/>

        default:
            return <button></button>
    }
}