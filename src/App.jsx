import './App.css'
import { GlobalProvider } from './GlobalContext'
import Homepage from './components/Homepage'

function App() {
  return (
    <GlobalProvider>
      <Homepage/>
    </GlobalProvider>
  )
}

export default App
