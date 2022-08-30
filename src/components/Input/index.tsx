import React from 'react'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}
export const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <input
      className="
            flex items-center gap-1 p-3 bg-base-input border border-base-button focus:outline-none focus:border focus:border-product-yellow-dark rounded-md max-h-[42px]
            text-base-text "
      {...rest}
      placeholder={placeholder}
    />
  )
}
