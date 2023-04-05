import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import { toast } from 'react-toastify'
import { backProject } from '../services/blockchain'

const BackProject = ({project}) => {

    const [backModal] = useGlobalState('backModal')
    const [amount, setAmount] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!amount) return

        await backProject(project?.id, amount)
        toast.success('Project backed successfully, will reflect in 30sec.')
        setGlobalState('backModal','scale-0')
    }

  return (
    <div className={` fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform  transition-transform duration-300 ${backModal}`} >
       <div className='bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12  p-6'>
            <form  onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>{project?.title}</p>
                    <button type="button" className='border-0 bg-transparent focus:outline-none' onClick={()=> setGlobalState('backModal', 'scale-0')}><FaTimes/></button>   
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <div className='overflow-hidden h-20 w-20 rounded-xl'>
                        <img src={project?.imageURL || "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt={project?.title} className='h-full w-full object-cover cursor-pointer' />
                    </div>
                </div>

                
                <div className='flex justify-between items-center bg-gray-300  rounded-xl mt-5'>
                    <input className='block w-full bg-transparent border-0 text-sm  text-slate-500 focus:outline-none focus:ring-0' type="number" step={0.01} min={0.01} name="amount" placeholder='Amount (ETH)' required onChange={(e) => setAmount(e.target.value)} value={amount} />
                </div>
               

                <div className='flex justify-center  items-center mt-5'>
                    <button className='inlinr-blcok w-full  py-2.5 bg-green-600 text-white text-md font-meduim  leading-tight rounded-full uppercase hover:bg-green-800 ' type="submit">Back Project</button>
                </div>
            </form>
        </div> 

    </div>
  )
}

export default BackProject