import { Plus , Minus} from 'phosphor-react'

interface SelectQuantityProps {
    quantity: number;
    setQuantity : (quantity : number) => void;    
}

export const SelectQuantity  = ({quantity , setQuantity} : SelectQuantityProps) => {
        
        


        const decreaseAmount = () => {
                if(quantity > 0) setQuantity(quantity -1)
        }

        const increaseAmount = () => {
                if(quantity >= 0) setQuantity(quantity +1)            
        }

    return (
            <div className='flex items-center justify-center gap-2 w-[72px] rounded-lg bg-base-button p-2' >
                    <button onClick={decreaseAmount} >
                        <Minus className='text-product-purple font-bold cursor-pointer hover:text-product-purple-dark' size={18}
                        /> 
                    </button>
                    
                    <span className='text-xs'>{quantity}</span>
                    <button onClick={increaseAmount}  >
                        <Plus className='text-product-purple hover:text-product-purple-dark font-bold cursor-pointer' size={18}
                        /> 
                    </button>
                    
            </div>
    )
}