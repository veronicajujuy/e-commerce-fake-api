import { MyContextProvider } from './GlobalStates/GlobalStates'
import CardContainer from './Components/CardContainer'

function App() {

  return (
    <MyContextProvider>
      <CardContainer />
    </MyContextProvider>
  )
}

export default App
