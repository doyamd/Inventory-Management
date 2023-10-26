import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InvoList from './InvoList'
import Form from './Form';
import Login from './Login';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<InvoList/>}></Route>
        <Route path="/add" element={<Form/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

    </Routes>
  )
}

export default Routing