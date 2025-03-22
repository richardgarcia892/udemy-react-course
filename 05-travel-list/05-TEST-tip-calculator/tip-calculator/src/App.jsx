import { useState } from 'react'

import './App.css'


function App() {
  const [bill, setBill] = useState(0)
  const [tips, setTips] = useState([0, 5, 10, 15, 20])

  function handleBillChange(event) {
    setBill(event.target.value)
  }

  return (
    <div className="app">
      <h1>Tip calculator APP</h1>
      <InputBill onBillChange={handleBillChange} />
      <Bill bill={bill} />
      <Tips tips={tips} />
    </div>
  )
}

function InputBill({ onBillChange }) {
  return (
    <div className="input-bill">
      <p>Enter Bill amount</p>
      <input type="number" placeholder='Enter the bill amount' onChange={e => { onBillChange(e) }} />
    </div>
  )
}

function Bill({ bill }) {
  return (
    <div className="bill">
      <p>Bill</p>
      <p>{bill}</p>
    </div>
  )
}

function Tips({ tips }) {
  return (
    <div className="customers">
      <ul>
        {tips.map((tip, index) => <Tip tip={tip} key={index} />)}
      </ul>
    </div>
  )
}

function Tip({ tip, key }) {
  console.log(tip, key)
  return (
    <li>
      <h2>tip {key}</h2>
      <p>{tip}</p>
    </li>
  )
}

export default App
