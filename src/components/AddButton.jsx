import React from 'react'
import { setGlobalState } from '../store'
import {BsPlusLg} from 'react-icons/bs'


const AddButton = () => {
  return (
    <div className='fixed right-10 bottom-10  flex space-x-2 justify-center'>
        <button className='flex justify-center items-center w-10 h-10 bg-green-500 text-white text-sm font-meduim upprecase leading-tight rounded-full shadow-md hover:bg-green-800  '  onClick={() => setGlobalState('createModal', 'scale-100')}>
         <BsPlusLg className='font-bold' size={20}/>
        </button>
    </div>
  )
}

export default AddButton

BsPlusLg