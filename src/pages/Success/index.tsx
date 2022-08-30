import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/illustration.svg'
import { useLocation } from 'react-router-dom'

type FormProps = {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
  method: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro' | undefined
}
export const Success = () => {
  const location = useLocation()
  const { street, number, district, city, uf, method } =
    (location.state as FormProps) || {}

  if (location.state) {
    return (
      <div className="px-[160px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-baloo font-extrabold text-[32px] text-product-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <span className="font-roboto text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>
        <div className="flex items-start justify-between w-full mt-10">
          <div className="flex flex-col items-start p-10 gap-8 border-2 border-product-purple-dark rounded-[6px] rounded-tr-[36px] rounded-bl-[36px] w-[526px]">
            <div className="flex items-center gap-5">
              <MapPin
                weight="fill"
                size={32}
                className="bg-product-purple p-2 text-base-white rounded-full"
              />
              <div className="flex flex-col font-roboto text-base-text">
                <span>
                  Entrega em{' '}
                  <b>
                    {street}, {number}
                  </b>
                </span>
                <span>
                  {district} - {city}, {uf}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 font-roboto text-base-text">
              <Timer
                weight="fill"
                size={32}
                className="bg-product-yellow p-2 text-base-white rounded-full"
              />
              <div className="flex flex-col font-roboto text-base-text">
                <span>Previsão de entrega</span>
                <b>20 min - 30 min</b>
              </div>
            </div>
            <div className="flex items-center gap-5 font-roboto text-base-text">
              <CurrencyDollar
                weight="fill"
                size={32}
                className="bg-product-yellow-dark p-2 text-base-white rounded-full"
              />
              <div className="flex flex-col">
                <span>Pagamento na entrega </span>
                <b>{method}</b>
              </div>
            </div>
          </div>

          <div>
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="px-[160px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-baloo font-extrabold text-[32px] text-product-yellow-dark">
            Dados indisponíveis
          </h1>
          <span className="font-roboto text-xl text-base-subtitle">
            Favor inserir os dados de entrega para prosseguir com sua
            solicitação
          </span>
        </div>
      </div>
    )
  }
}
