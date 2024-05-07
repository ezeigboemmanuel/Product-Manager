import './globals.css'
import React, { useState } from 'react'
import AddForm from './AddForm';
import DisplayData from './DisplayData';

const App = () => {
  const [productName, setProductName] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [weight, setWeight] = useState("")
  const [color, setColor] = useState("")
  const [available, setAvailable] = useState("")
  return (
    <div className=''>
      <AddForm />
      <DisplayData />
    </div>
  )
}

export default App