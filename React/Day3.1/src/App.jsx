import { useState } from 'react'
import './App.css'
import CompA from './components/CompA'
import { Provider } from './context/contextAPI'

function App() {
  const [data, setdata] = useState("Versace Bag");

  return (
    <>
    <Provider value={data}>
        <CompA />
    </Provider>
    </>
  )
}

export default App
