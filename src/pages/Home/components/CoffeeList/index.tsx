import { CatalogCard } from "../../../../components/CatalogCard"
import {cooffeeListData} from './utils/data'
export const CoffeeList = () => {   
    return (
      <div className="h-[1345px]">
        <h1 className="font-baloo font-extrabold text-[32px] text-base-subtitle mb-20">Nossos cafés</h1>
        <div className="flex flex-wrap items-center gap-10">
        {cooffeeListData.map(coffee => (
            <CatalogCard key={coffee.id} id={coffee.id} image={coffee.image} type={coffee.type} title={coffee.title} description={coffee.description} price={coffee.price}
              quantity={coffee.quantity}
            />
        ))}
        </div>
      </div>  
    )
}