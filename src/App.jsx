
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'
import Profile from './pages/Profile'
import AddPage from './pages/AddPage'
import EditPage from './pages/EditPage'
import Signup from './pages/Signup'

function App() {
  
  return (
    <>
     <Routes>
     <Route exact path="/" element={<DashBoard/>}/>
     <Route path="/register" element={<Signup/>}/>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/user/add" element={<AddPage/>}/>
     <Route path="/user/edit/:id" element={<EditPage/>}/>
      
     </Routes>
    </>
  )
}

export default App
