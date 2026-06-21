import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import AddExpense from './pages/AddExpense'
import Expenses from './pages/Expenses'
import ExpenseDetail from './pages/ExpenseDetail'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='add-expense' element={<AddExpense />} />
        <Route path='edit-expense/:id' element={<AddExpense />} />
        <Route path='expense-detail/:id' element={<ExpenseDetail />} />
        <Route path='expenses' element={<Expenses />} />
      </Route>

    </Routes>
     
     
    </>
  )
}

export default App
