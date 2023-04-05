import {TbBusinessplan} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <>
    <header className='flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-900 shadow-lg fixed top-0 left-0 right-0' >
          <Link to="/" className='flex justify-start items-center text-xl text-black space-x-1' >
            <span>Genesis</span>
            {TbBusinessplan}
            
        </Link> 
        <div className='flex space-x-2 justify-center bg-green br-10'>
        {connectedAccount ?  (
          <button type='btn' className='inline-block bg-green-600 px-6 py-2.5 text-white font-mediume text-xs uppercase rounded-full shadow-md hover:bg-green-800' >{truncate(connectedAccount, 4, 4, 11)}</button> 
        ):(
          <button type='btn' className='inline-block bg-green-600 px-6 py-2.5 text-white font-mediume text-xs uppercase rounded-full shadow-md hover:bg-green-800' onClick={connectWallet} >Connect Wallet</button> 
        )}
        </div>

    </header>
    
    
    </>
  )
}

export default Header