import React from 'react'
interface SelectCreditCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  method: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
  icon: any
}

export const SelectCreditCard = ({
  method,
  icon: Icon,
  ...rest
}: SelectCreditCardProps) => {
  return (
    <button
      {...rest}
      className="flex items-center gap-3 p-4 border border-base-button  border-hidden focus:border bg-base-button focus:outline-none focus:ring focus:ring-product-purple hover:bg-base-hover transition-colors rounded-[6px] cursor-pointer"
    >
      <Icon className="text-product-purple" size={16} />
      <span className="text-base-label font-roboto text-xs">{method}</span>
    </button>
  )
}
