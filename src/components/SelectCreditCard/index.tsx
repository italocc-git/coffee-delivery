interface SelectCreditCardProps {
    type:  'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
    icon : any
}

export const SelectCreditCard = ({type, icon : Icon} : SelectCreditCardProps) => {
    return(
        <div className="flex items-center gap-3 p-4 border border-product-purple border-hidden active:border-solid bg-base-button active:bg-product-purple-light hover:bg-base-hover transition-colors rounded-[6px] cursor-pointer">
            <Icon className='text-product-purple' size={16} />
            <span className="text-base-label font-roboto text-xs">{type}</span>
        </div>
    )
}