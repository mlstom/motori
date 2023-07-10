import React, { useEffect,useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { AiOutlinePlusCircle } from 'react-icons/ai';

import { FiUserPlus } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { SlArrowDown } from 'react-icons/sl';
import DropMenu from './DropMenu';
const OverLayLogin = ({ setIsOverlayOpen }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Onemogući skrolovanje cele stranice kada se komponenta montira
        return () => {
            document.body.style.overflow = 'auto'; // Omogući skrolovanje cele stranice kada se komponenta demontira
        };
    }, []);
    const [isOpen, setisOpen] = useState(false)
    const [isOpen2, setisOpen2] = useState(false)
    const options = [
        {
          id: 1,
          naziv: 'Verifikuj',
        },
        {
          id: 2,
          naziv: 'Kupi Auto',
        },{
          id:3,
          naziv:'Cena'
        },
        {
          id:4,
          naziv:'Pomoc'
        },
      ];
    return (
        <div style={{ position: 'absolute', zIndex: '9999', top: 0, width: '100vw', height: '100vh', backgroundColor: 'white', overflow: 'hidden' }} className='z-modal w-12/12 my-0 h-full' >
            <button className='cursor-pointer absolute right-10 top-10' onClick={() => setIsOverlayOpen(false)}>
                <AiOutlineClose fontSize={24} />
            </button>
            <div className='text-black  mr-25 '>
                <div className='ml-10 mt-10 min-w-100 ml-25 mb-25 ' style={{ cursor: 'default' }}>MotoRS</div>
                <hr className='lg:hidden -header-menu_margin text-grey-1' />
                <div className='lg:hidden'>
                    <div className='lg:hidden  flex flex-col'>
                        <span className='font-bold text-xxs text-grey tracking-wider ml-20 uppercase' style={{ color: 'rgba(0,0,0,0.2)' }} >Prodaja</span>
                        <a href='/' className='flex items-center py-4 pl-20 cursor-pointer '>
                            <span className='mr-10 text-base leading-sm text-grey-4'><AiOutlinePlusCircle fontSize={24} /></span>
                            Reklamiraj
                        </a>
                    </div>
                    <div >
                        <div
                            className='flex justify-center'
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                padding: '10px 15px',
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
                                <div style={{ height: ' 1px', backgroundColor: 'rgba(0,0,0,0.1)' }} className='mt-4'></div>
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
                                            color: '#06B6D4'
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

                </div>
                <div className='ml-20 pt-4'>
                    <span className='font-bold text-xxs text-grey-dark-opaque tracking-wider uppercase' style={{ color: 'rgba(0,0,0,0.2)' }}>Kontent</span>
                    <div><a href="/" className="block py-2 hover:opacity-60">Kupi</a></div>
                    <div><a href="/" className="block py-2 hover:opacity-60">Prodaj</a></div>
                    <div className="block py-2 flex items-center hover:opacity-60 " style={{cursor:'pointer'}} onClick={()=>setisOpen(!isOpen)}><span>Servis i Beneficije</span><SlArrowDown fontSize={15} /></div>
                    <DropMenu options={options} isOpen={isOpen} idiLevo={true} />
                    <div className="block py-2 flex items-center hover:opacity-60" style={{cursor:'pointer'}}  onClick={()=>setisOpen2(!isOpen2)}><span>Servis i Beneficije</span><SlArrowDown fontSize={15} /></div>
                    <DropMenu options={options} isOpen={isOpen2} idiLevo={true} />
                </div>
            </div>
        </div>
    )
}

export default OverLayLogin