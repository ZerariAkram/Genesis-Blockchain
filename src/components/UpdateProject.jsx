import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import { updateProject } from '../services/blockchain'
import { toast } from 'react-toastify'

const UpdateProject = ({project}) => {

    const [updateModal] =  useGlobalState('updateModal')
    const [title, setTitle] = useState(project?.title)
    const [date, setDate] = useState(project?.date)
    const [imageURL, setImageURL] = useState(project?.imageURL)
    const [description, setDescription] = useState(project?.description)

    const toTimestamp = (dateStr) => {
        const dateObj = Date.parse(dateStr)
        return dateObj / 1000
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!title|| !date || !imageURL || !description) retrun

        const params = {
            id:project?.id,
            title,
            expiresAt: toTimestamp(date),
            imageURL,
            description
        }

        await updateProject (params)
        toast.success('Project Updated successfuly, will reflect in 30sec.' )
        onClose()
    }

    const onClose= () =>{
        setGlobalState('updateModal', 'scale-0')
        reset()
    }
    const reset = () => {
        setTitle('')
        setDate('')
        setImageURL('')
        setDescription('')
    }
    

  return (
    <div className={` fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform  transition-transform duration-300 ${updateModal}`} >
       <div className='bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12  p-6'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Eidt Project</p>
                    <button type="button" className='border-0 bg-transparent focus:outline-none' onClick={onClose}><FaTimes/></button>   
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <div className='overflow-hidden h-20 w-20 rounded-xl'>
                        <img src={imageURL || 'https://cdn.pixabay.com/photo/2023/03/15/02/11/green-leaves-7853561_960_720.jpg'} alt="project title" className='h-full w-full object-cover cursor-pointer' />
                    </div>
                </div>

                <div className='flex justify-between items-center bg-gray-300 rounded-xl mt-5'>
                    <input className='block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0' type="text" name="title" placeholder="Title" required  onChange={(e)=> setTitle(e.target.value)} value={title}/>
                </div>
               
                <div className='flex justify-between items-center bg-gray-300  rounded-xl mt-5'>
                    <input className='block w-full bg-transparent border-0 text-sm  text-slate-500 focus:outline-none focus:ring-0' type="date"  name="date" placeholder='Expires' required   onChange={(e)=> setDate(e.target.value)} value={date}/>
                </div>
                <div className='flex justify-between items-center bg-gray-300  rounded-xl mt-5'>
                    <input className='block w-full bg-transparent border-0 text-sm  text-slate-500 focus:outline-none focus:ring-0' type="url"  name="image" placeholder='Image URL' required  onChange={(e)=> setImageURL(e.target.value)} value={imageURL} />
                </div>
                <div className='flex justify-between items-center bg-gray-300  rounded-xl mt-5'>
                    <textarea className='block w-full bg-transparent border-0 text-sm  text-slate-500 focus:outline-none focus:ring-0' type="text"  name="description" placeholder='Description' required onChange={(e)=> setDescription(e.target.value)} value={description} ></textarea>
                </div>

                <div className='flex justify-center  items-center mt-5'>
                    <button className='inlinr-blcok w-full  py-2.5 bg-green-600 text-white text-md font-meduim  leading-tight rounded-full uppercase hover:bg-green-800 ' type="submit">Update Project</button>
                </div>
            </form>
        </div> 

    </div>
  )
}

export default UpdateProject