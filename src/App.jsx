import './App.css'
import { GlobalProvider } from './GlobalContext'
import Homepage from './components/Homepage'

import Minesweeper from './minesweeper/Minesweeper'

function App() {
  return (
    <GlobalProvider>
      {/* <Homepage/> */}
      <Minesweeper/>
    </GlobalProvider>
  )
}

export default App
