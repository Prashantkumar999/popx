import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AccountSetting from './pages/AccountSetting'
import CreateAccount from './pages/CreateAccount'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-full h-full'>
    <div className='w-[25%] border h-screen mx-auto'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/account-setting" element={<AccountSetting />} />
        <Route path='create-account' element={<CreateAccount/>} />
      </Routes>
    </div>
  </div>
  )
}

export default App
