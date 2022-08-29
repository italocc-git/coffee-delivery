import { FillOrder } from "./components/FillOrder"
import { SelectedCoffee } from "./components/SelectedCoffee"
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import {  zodResolver } from '@hookform/resolvers/zod';
export type FormProps = {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    district : string;
    city : string;
    state: string;
    uf : string;
} 
 const formValidationSchema = zod.object({
    cep: zod.string().min(1, {message: 'Campo Obrigatório'}),
    street: zod.string().min(1, {message: 'Campo Obrigatório'}),
    number: zod.string().min(1, {message: 'Campo Obrigatório'}),
    complement: zod.string(),
    district : zod.string().min(1, {message: 'Campo Obrigatório'}),
    city : zod.string().min(1, {message: 'Campo Obrigatório'}),
    state: zod.string().min(1, {message: 'Campo Obrigatório'}),
    uf : zod.string().min(1, {message: 'Campo Obrigatório'})
  });

export type formProps = zod.infer<typeof formValidationSchema>

export const Checkout = () => {

    const [paymentMethod , setPaymentMethod] = useState<'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'>()

    const form = useForm<FormProps>({
        /*  resolver : zodResolver(formValidationSchema),  */
    })

    
    if(form) {
        return(
                <div className="flex justify-between px-[160px]">
                    <FillOrder form={form} setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod}/>
                    <SelectedCoffee form={form}  />
                </div>
        )
    }
}