import  { useEffect, useState } from "react"
import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./views/Home"
import Project from './views/Project'
import { isWalletConnected } from "./services/blockchain"
import { ToastContainer } from "react-toastify"



const App = () => {

  const [loaded, setLoaded] = useState(false)
  useEffect ( async () =>  {
    await isWalletConnected()
    console.log('Blcokchain Loaded')
    
    setLoaded(true)
  },[])
  return (
    <div className="min-h-screen">
      <Header/>
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects/:id" element={<Project/>} />
        </Routes>
      ): null}
      <ToastContainer 
        position="bottom-center" 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark" 
        />
    </div>
  )
}

export default App
