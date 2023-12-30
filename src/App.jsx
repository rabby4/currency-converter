
import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('bdt')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {

  }

  return (
    <>
      <h2 className='text-4xl'>this is heading</h2>
    </>
  )
}

export default App
