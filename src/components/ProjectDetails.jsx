import React from 'react'
import Identicons from 'react-identicons'
import {FaEthereum} from 'react-icons/fa'
import { daysRemaining, setGlobalState, truncate, useGlobalState } from '../store'


const ProjectDetails = ({project}) => {

  const [connectedAccount] = useGlobalState('connectedAccount')
  const expired = new Date().getTime() > Number(project?.expiresAt + '000')
  return (
    <div className='py-24 px-6 flex justify-center'>
        <div className='flex justify-center  flex-col md:w-2/3 '>
          <div className='flex justify-start items-start sm:space-x-4 flex-wrap'>
            <img src={project?.imageURL} alt={project?.title} className='rounded-xl h-64 w-full sm:w-1/3  object-cover' />
          
          
            <div className='flex-1 sm:py-0 py-4'>
              <div className='flex flex-col justify-start flex-wrap'>
                <h5 className='text-gray-900 text-sm font-meduime'>{project?.title}</h5>
                <div>
                  <small className='text-gray-500 '>{ expired ? 'Expired' : daysRemaining(project?.expiresAt) + ' left' } </small>
                </div>

                <div className='flex-1 sm:py0 py-4'>
                  <div className='flex justify-between  items-center w-full '>
                        <div className='flex justify-start space-x-2 mb-3'>
                            <Identicons className="rounded-full shadow-md" string={project?.owner} size={15}/>
                            {project?.owner ?
                            (
                            <small className='text-gray-500'>{truncate(project?.owner , 4, 4, 11)}</small>
                            ):null}    
                            <small className='text-gray-500 font-bold'> {project?.backers} Backer{project?.backers == 1 ? '' : 's'}</small>
                        </div>

                        <div className='font-bold'>
                            {expired ? (
                                <small className='font-blod text-gray-500'>Open</small>
                            ): project?.status == 1 ?(
                                <small className='font-blod text-green-500'>Accepted</small>
                            ): project?.status == 2 ?(
                                <small className='font-blod text-gray-500'>Reverted</small>
                            ): project?.status == 3 ?(
                                <small className='font-blod text-red-500'>Deleted</small>
                            ): (
                                <small className='font-blod text-orange-500'>Paid</small>
                            )}
                        </div>
                        
                </div>
                </div>
                <div className=''>
                  <p className='text-sm font-light mt-3  '>{project?.description}</p>
                    <div className='w-full bg-gray-300   overflow-hidden mt-5'>
                      <div className='bg-green-600 text-green-100 text-xs text-center p-0.5 leading-none overflow-hidden rounded-full h-1 ' style={{width: `${(project?.raised / project?.cost) * 100 }%`}}>

                      </div>              
                    </div>

                    <div className='flex justify-between text-gray mt-2 items-center font-bold' >
                      <small>{project?.raised} ETH Raised</small>
                      <small className='flex justify-start items-center '>
                        <FaEthereum  />
                        <span>{project?.cost} ETH</span>
                      </small>
                    </div>
                    <div className='flex justify-start  space-x-2 mt-5'>
                      {project?.status == 0 ? (
                        <button type="button" className='inline-block border-green-600  bg-green-500 rounded-full px-6 py-2.5 text-white font-meduime text-xs leading-tight uppercase shadow-md hover:bg-green-800 hover:text-white' onClick={() => setGlobalState('backModal','scale-100')} >Back Project</button>
                      ):null}

                      {connectedAccount == project?.owner ? (
                        project?.status !=  3 ? (
                          project?.status ==  1 ? (
                            
                            <button type="button" className='inline-block border-green-600  bg-orange-500 rounded-full px-6 py-2.5 text-white font-meduime text-xs leading-tight uppercase shadow-md hover:bg-orange-800 hover:text-white ' onClick={()=> payoutProject(project?.id)}>Payout</button>
                          
                          ): project?.status != 4 ?(
                        
                            <>
                              <button type="button" className='inline-block border-gray-600  bg-gray-500 rounded-full px-6 py-2.5 text-white font-meduime text-xs leading-tight uppercase shadow-md hover:bg-gray-800 hover:text-white' onClick={() => setGlobalState('updateModal','scale-100')}>Edit</button>
    
                              <button type="button" className='inline-block border-red-600  bg-red-500 rounded-full px-6 py-2.5 text-white font-meduime text-xs leading-tight uppercase shadow-md hover:bg-red-800 hover:text-white' onClick={() => setGlobalState('deleteModal','scale-100')}>Delete</button>
                              
                            </>):(
                               <button type="button" className='inline-block border-gray-600  bg-gray-500 rounded-full px-6 py-2.5 text-white font-meduime text-xs leading-tight uppercase shadow-md hover:bg-gray-800 hover:text-white' >Project Close</button>
                            )
                         ): null 
                      ):null}

                    </div>
          </div>
              </div >
                  

            </div>
          </div>
        
         
          </div>
      </div>
     
  )
}

export default ProjectDetails