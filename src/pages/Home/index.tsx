import { Header } from "../../components/Header"
import { CoffeeList } from "./components/CoffeeList"
import { Introduction } from "./components/Introduction"

export const Home = () => {
    return(
        <div className="px-[160px]" >
            <Header/>
            <Introduction/>
            <CoffeeList/>
            
        </div>
    )
}