import { CoffeeList } from './components/CoffeeList'
import { Introduction } from './components/Introduction'

export const Home = () => {
  return (
    <div className="px-[160px]  sm:px-[80px]">
      <Introduction />
      <CoffeeList />
    </div>
  )
}
