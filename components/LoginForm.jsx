import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
const LoginForm = () => {
    return (
        <div >
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '10px 15px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    right: 0,
                    top: '50px'
                }}
            >
                <div className='flex flex-col w-72'>
                    <div className='flex flex-col'>
                        <p style={{ color: 'black' }}>Nemaš nalog? Pridruži nam se besplatno</p>
                        <button
                            className=' hover:opacity-80 mt-2'
                            style={{
                                padding: '12px 32px',
                                borderRadius: '4px',
                                backgroundColor: '#06B6D4',
                                border: 'none',
                                color: '#ffffff',
                                cursor: 'pointer',
                            }}
                        >
                            <div className='flex items-center justify-center'>
                                <FiUserPlus className='mr-4' fontSize={24} /> <span>Register</span>
                            </div>

                        </button>

                    </div>
                    <div style={{height:' 1px',backgroundColor: 'rgba(0,0,0,0.1)'}} className='mt-4'></div>
                    <div className='flex flex-col mt-4'>
                        <p style={{ color: 'black' }}>Poseduješ nalog? Prijavi se</p>
                        <button
                            className=' hover:opacity-80 mt-2'
                            style={{
                                padding: '12px 32px',
                                borderRadius: '4px',
                                backgroundColor: 'transparent',
                                border: '1px solid #06B6D4',
                                cursor: 'pointer',
                                color:'#06B6D4'
                            }}
                        >
                            <div className='flex items-center justify-center'>
                                <FaRegUserCircle className='mr-4' fontSize={24} /> <span>Register</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm