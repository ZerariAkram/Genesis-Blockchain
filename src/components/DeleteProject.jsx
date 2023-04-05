import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import { toast } from 'react-toastify'
import { deleteProject } from '../services/blockchain'
import { useNavigate } from 'react-router-dom'

const  DeleteProject = ({project}) => {

    const [deleteModal] = useGlobalState('deleteModal')
    const navigate = useNavigate()
    const handleSubmit = async () =>{
        await deleteProject(project?.id)
        toast.success('Project deleted successfuly, will reflect in 30sec.')
        setGlobalState('deleteModal', 'scale-0')
        navigate.push('/')
    }

  return (
    <div className={` fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform  transition-transform duration-300 ${deleteModal}`} >
       <div className='bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12  p-6'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>{project?.title}</p>
                    <button type="button" className='border-0 bg-transparent focus:outline-none' onClick={(e)=> setGlobalState('deleteModal', 'scale-0')}  ><FaTimes/></button>   
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <div className='overflow-hidden h-20 w-20 rounded-xl'>
                        <img src={project?.imageURL || "https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt={project?.title} className='h-full w-full object-cover cursor-pointer' />
                    </div>
                </div>

                
                <div className='flex flex-col  justify-center items-center mt-3 '>
                    <p>Are you Sure?</p>
                    <span className='text-red-600'>this is irreversible!</span>
                </div>
               

                <div className='flex justify-center  items-center mt-3'>
                    <button className='inline-blcok w-full  py-2.5 bg-red-600 text-white text-md font-meduim  leading-tight rounded-full  hover:bg-red-800 ' type="delete" onClick={handleSubmit}>Delete Project</button>
                </div>
            </div>
        </div> 

    </div>
  )
}

export default DeleteProject