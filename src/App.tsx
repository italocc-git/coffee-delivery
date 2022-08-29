import { Home } from "./pages/Home"
import {BrowserRouter} from 'react-router-dom'
import { Routes } from "./Routes"
import { CartContextProvider } from "./hooks/useCart"
function App() {

  return (
    <CartContextProvider>
      <BrowserRouter >
        <Routes />
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App
