import { useStateContext } from '@/context/StateContext';
import React, { useState } from 'react';
import DropMenu from './DropMenu';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineCompare } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { BiMenuAltLeft } from 'react-icons/bi';
import LoginForm from './LoginForm';
import OverLayLogin from './OverLayLogin';

const Header = () => {
  const { izgledHedera } = useStateContext();
  const [isOpen, setisOpen] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [isOpen3, setisOpen3] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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
      nazic:'Cena'
    },
    {
      id:4,
      nazic:'Pomoc'
    },
  ];

  return (
    <div>
      {izgledHedera && (
        <div style={{ position: 'absolute', zIndex: '3', width: '100%' }}>
          <div className="px-12 md:px-20 py-8 flex  items-center text-white">
            <nav style={{ width: '100%' }} className="flex items-center">
              <div className="min-w-100 mr-20 xl:mr-40">
                <a href="/">MotoRs</a>
              </div>
              <div className="flex flex-grow">
                <div className="hidden lg:flex items-center text-center">
                  <div className="mr-8 xl:mr-25 ">
                    <a href="/" className="py-13 block hover:opacity-60">
                      Kupi
                    </a>
                  </div>
                  <div className="mr-8 xl:mr-25">
                    <a href="/" className="py-13 block hover:opacity-60">
                      Prodaj
                    </a>
                  </div>
                  <div className="mr-8 xl:mr-25">
                    <div
                      className="flex items-center cursor-pointer py-10 hover:opacity-60 lg:text-white"
                      onClick={() => setisOpen(!isOpen)}
                    >
                      <span className="mr-2">Za prodavače</span>
                      <SlArrowDown className="mr-8" fontSize={15} />
                    </div>
                    <DropMenu options={options} isOpen={isOpen} />
                  </div>
                  <div className="mr-8 xl:mr-25">
                    <div
                      className="flex items-center cursor-pointer py-10 hover:opacity-60 lg:text-white"
                      onClick={() => setisOpen2(!isOpen2)}
                    >
                      <span className="mr-2">Servis i Beneficije</span>
                      <SlArrowDown fontSize={15} />
                    </div>
                    <DropMenu options={options} isOpen={isOpen2} />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <a href="/" className="hover:opacity-60">
                    <AiOutlinePlusCircle fontSize={25} />
                  </a>
                </div>
                <div className="flex">
                  <div className="hover:opacity-60 flex-shrink-0 cursor-pointer text-white">
                    <a href="/" className="flex relative mr-4 ">
                      <MdOutlineCompare fontSize={25} />
                    </a>
                  </div>
                  <div className="hover:opacity-60 flex-shrink-0 cursor-pointer text-white">
                    <a href="/" className="flex relative mr-4">
                      <AiOutlineHeart fontSize={25} />
                    </a>
                  </div>
                  <div onClick={()=>setIsOverlayOpen(!isOverlayOpen)} className="block lg:hidden hover:opacity-60 flex-shrink-0 cursor-pointer text-white">
                      <BiMenuAltLeft fontSize={25} />
                  </div>
                </div>
                <div className="hidden lg:block rounded-4 py-2 px-4  mr-4 text-white border border-white relative">
                  <div
                    className="flex items-center cursor-pointer  hover:opacity-60 lg:text-white"
                    onClick={() => setisOpen3(!isOpen3)}
                  >
                    <div className="flex mr-4 items-center text-white">
                      <FaRegUserCircle fontSize={20} />
                    </div>
                    <div>
                      <SlArrowDown />
                    </div>
                  </div>
                  {isOpen3 && <LoginForm />}
                </div>
              </div>
            </nav>
          </div>
          {isOverlayOpen && <OverLayLogin setIsOverlayOpen={setIsOverlayOpen} />}
        </div>
      )}
      {!izgledHedera && (
        <div>
          <p>Proba</p>
        </div>
      )}
    </div>
  );
};

export default Header;
