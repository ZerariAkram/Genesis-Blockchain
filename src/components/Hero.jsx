import React from 'react'
import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {

    const [stats] = useGlobalState('stats')
  return (
    <div className='text-center text-gray-500 bg-white py-24 px-6 '>
        <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
            <span className='capitalize'>Bring creative Projects to life on</span>
            <br/>
            <span className='uppercase text-green-600 '>Genesis.</span>
        </h1>
        <div className='flex justify-center space-x-2'>
            <button type='button' className='inline-block bg-green-500 border border-green-600 px-6 py-2.5 text-white  font-meduime text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-800 hover:text-white' onClick={() => setGlobalState('createModal', 'scale-100')} >Add Project</button>
            <button type='button' className='inline-block border border-green-600 px-6 py-2.5 text-green  font-meduime text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-800  hover:text-white'>Back Projects
            </button>

        </div>
        <div className='flex justify-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
                <span className='text-lg font-bold text-green-900 leading-9'>{stats?.totalProjects || 0} </span>
                <span>Projects</span>
            </div>
            <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
                <span className='text-lg font-bold text-green-900 leading-9'>{stats?.totalBacking || 0}</span>
                <span>Backings</span>
            </div>
            <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
                <span className='text-lg font-bold text-green-900 leading-9'>{stats?.totalDonations || 0} ETH</span>
                <span>Donated</span>
            </div>
        </div>

    </div>
  )
}

export default Hero