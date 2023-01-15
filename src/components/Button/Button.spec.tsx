/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'
import { ShoppingCart, Trash } from 'phosphor-react'


describe('Button Component', () => {
  it('should renders submit button correctly', () => {

   render( <Button layout="submit" title="CONFIRMAR PEDIDO" />)

   const buttonTitle = screen.getByText("CONFIRMAR PEDIDO")

   expect(buttonTitle).toBeInTheDocument()
  })

  it('should renders addCart button correctly', () => {

    render( <Button layout="addCart" icon={ShoppingCart}  />)
 
    const button = screen.getByRole('button')
 
    expect(button.children.length).toBe(1)
   })

   it('should renders remove button correctly', () => {

    render( <Button layout="removeCart" icon={Trash} title='REMOVER'  />)
 
    const button = screen.getByRole('button', {name: 'REMOVER'})
 
    expect(button).toBeTruthy()
   })

   it('should renders headerCart button correctly', () => {

    render( <Button layout="headerCart" icon={ShoppingCart} title='0'  />)
 
    const button = screen.getByRole('button')

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(button.children.length).toBe(1)
    
   })

   it('should contain a class bg-product-yellow in submit Button', () => {

    render( <Button layout="submit" title="CONFIRMAR PEDIDO" />)
 
    const buttonTitle = screen.getByText("CONFIRMAR PEDIDO")
 
    expect(buttonTitle).toHaveClass("bg-product-yellow")
   })

   it('should contain a class bg-product-purple-dark in add Cart Button', () => {

    render( <Button layout="addCart" icon={ShoppingCart}  />)
 
    const button = screen.getByRole('button')
 
    expect(button).toHaveClass("bg-product-purple-dark")
   })

   it('should contain a class text-product-purple in Icon and bg-base-button in Remove Cart Button ', () => {

    render( <Button layout="removeCart" icon={Trash} title='REMOVER'  />)
 
    const button = screen.getByRole('button', {name: 'REMOVER'})
 
    expect(button).toHaveClass("bg-base-button")
    expect(button.children[0]).toHaveClass("text-product-purple")
    
   })

   it('should contain a class bg-product-yellow-light in add Header Cart Button', () => {

     const {getByRole} = render( <Button layout="headerCart" icon={ShoppingCart} title='0'  />)
 
    const button = getByRole('button')

    expect(button).toHaveClass("bg-product-yellow-light")
    
   })

   it('should remove coffee item', () => {

   // Para fazer o teste de remoção , eu preciso simular a criação de um item específico no carrinho antes.
   const {getByText} = render( <Button layout="removeCart" icon={Trash} title='REMOVER' />)

   const button = getByText('REMOVER')

   /* const removeItemToCart = jest.fn(); */

   userEvent.click(button)
   /* expect(removeItemToCart).toHaveBeenCalledWith() */
   
  })
   
})
 
