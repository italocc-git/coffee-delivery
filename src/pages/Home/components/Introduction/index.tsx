import CoffeeInto from '../../../../assets/coffee-introduction.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
export const Introduction = () => {
  return (
    <div className="flex items-center justify-between h-[544px]">
      <div className="min-w-[588px] ">
        <div className="flex flex-col items-start gap-4 mb-10">
          <h1 className="text-5xl font-extrabold  text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="text-xl font-normal  text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver a qualquer
            hora
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between max-w-[700px]">
          <div className="">
            <div className="flex items-center gap-3 h-8 mb-4">
              <ShoppingCart
                className="bg-product-yellow-dark text-white w-7 h-7 rounded-full p-1"
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3 h-8">
              <Timer
                className="bg-product-yellow text-white w-7 h-7 rounded-full p-1"
                weight="fill"
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 h-8 mb-4">
              <Package
                className="bg-base-text text-white w-7 h-7 rounded-full p-1"
                weight="fill"
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="flex items-center gap-3 h-8">
              <Coffee
                className="bg-product-purple text-white w-7 h-7 rounded-full p-1"
                weight="fill"
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={CoffeeInto} alt="coffee" width="476px" height="360px" />
      </div>
    </div>
  )
}
