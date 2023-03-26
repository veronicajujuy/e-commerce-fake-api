import { MyContextProvider } from './GlobalStates/GlobalStates'
import CardContainer from './Components/CardContainer'
import ItemProduct from './Components/ItemProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<CardContainer />}/>
          <Route path={"/products/:id"} element={<ItemProduct />}/>
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  )
}

export default App
