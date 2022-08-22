import { CoffeeList } from "./components/CoffeeList"
import { Introduction } from "./components/Introduction"

export const Home = () => {
    return(
        <div className="px-[160px]" >
            <Introduction/>
            <CoffeeList/>
            
        </div>
    )
}