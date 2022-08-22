import { Plus , Minus} from 'phosphor-react'

export const SelectQuantity  = () => {


    return (
            <div className='flex items-center justify-center gap-2 w-[72px] rounded-lg bg-base-button p-2' >
                    <Minus className='text-product-purple font-bold cursor-pointer hover:text-product-purple-dark' size={18}  /> 
                    <span>1</span>
                    <Plus className='text-product-purple hover:text-product-purple-dark font-bold cursor-pointer' size={18} /> 
            </div>
    )
}