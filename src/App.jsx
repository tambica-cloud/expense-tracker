import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import AddExpense from './pages/AddExpense'
import Expenses from './pages/Expenses'
import ExpenseDetail from './pages/ExpenseDetail'

function App() {

  return (
    <>
    <div className='flex'>
        <div className='w-64 bg-gray-200'>
            <Sidebar />
        </div>
        <div className='flex-1 p-6'>
            <ExpenseDetail />
        </div>
    </div>
     
     
    </>
  )
}

export default App
