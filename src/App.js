import React from 'react'
import './App.css'
import ProductTable from './components/productTable/ProductTable'
import ProductView from './components/productView/ProductView'
import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
      <Routes>
        <Route path="/" element={<ProductTable productTable={props.state.productTable} dispatch={props.dispatch} />} />
        <Route path="/productView" element={<ProductView />} />
      </Routes>
  )
}

export default App
