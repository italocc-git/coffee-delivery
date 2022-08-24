import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import illustration from '../../assets/illustration.svg'
export const Success = () => {
    return (
        <div className="px-[160px]">
            <div className="flex flex-col gap-2">
                <h1 className="font-baloo font-extrabold text-[32px] text-product-yellow-dark">Uhu! Pedido confirmado</h1>
                <span className="font-roboto text-xl text-base-subtitle">Agora é só aguardar que logo o café chegará até você</span>
            </div>
            <div className="flex items-start justify-between w-full mt-10">
                <div className="flex flex-col items-start p-10 gap-8 border-2 border-product-purple-dark rounded-[6px] rounded-tr-[36px] rounded-bl-[36px] w-[526px]">
                    <div className="flex items-center gap-5">
                        <MapPin weight="fill" size={32} className="bg-product-purple p-2 text-base-white rounded-full" />
                        <div className="flex flex-col font-roboto text-base-text">
                            <span>Entrega em <b>Rua João Daniel Martinelli, 102</b></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 font-roboto text-base-text">
                        <Timer weight="fill" size={32} className="bg-product-yellow p-2 text-base-white rounded-full"  />
                        <div className="flex flex-col font-roboto text-base-text">
                            <span>Previsão de entrega</span>
                            <b>20 min - 30 min</b>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 font-roboto text-base-text">
                        <CurrencyDollar weight="fill" size={32} className="bg-product-yellow-dark p-2 text-base-white rounded-full" />
                        <div className="flex flex-col">
                            <span>Pagamento na entrega </span>
                            <b>Cartão de Crédito</b>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={illustration} alt='illustration' />
                </div>
            </div>
        </div>
    )
}