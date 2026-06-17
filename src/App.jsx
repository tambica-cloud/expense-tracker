import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    <div className='flex'>
        <div className='w-64 bg-gray-200'>
            <Sidebar />
        </div>
        <div className='flex-1 p-6'>
            <Dashboard />
        </div>
    </div>
     
     
    </>
  )
}

export default App
