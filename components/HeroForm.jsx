import React, { useState } from 'react';
import SingleSelect from './SingleSelect';
import { SlArrowDown } from 'react-icons/sl';



export default function MyForm() {
    const [selectedMarke, setSelectedMarke] = useState(null);
    const [selectedTipovi, setSelectedTipovi] = useState(null);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Pretraga:', selectedMarke, selectedTipovi);
    };
    const Marke = [{
        id: 1,
        naziv: 'Yamaha',
        tipovi: [{
            id: 1,
            naziv: 'R1'
        }]
    }, , {
        id: 2,
        naziv: 'Honda',
        tipovi: [{
            id: 1,
            naziv: "Cbr 250"
        }, {
            id: 2,
            naziv: 'Cbr 125'
        }
        ]
    }]
    return (<div className='lg:px-20 lg:pb-50 mb-72' >
        <div className='rounded-md bg-white px-20 py-10' >
            <div className='py-15 lg:px-25 flex flex-col'>
                <div className='   w-12/12 flex flex-col pt-10  lg:flex-row'>
                    <div className='lg:w-8/12'>
                        <div className='flex flex-wrap w-12/12'>
                            <div className='mb-10 w-12/12 md:w-6/12 md:pr-5'>
                                <SingleSelect options={Marke} placeholder='Marke' />
                            </div>
                            <div className='mb-10 w-12/12 md:w-6/12 md:pr-5'>
                                <SingleSelect options={Marke} placeholder='Marke' />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col mb-10'>
                        <button
                            className='hover:opacity-80 mr-4'
                            style={{
                                padding: '8px 32px',
                                borderRadius: '4px',
                                backgroundColor: '#06B6D4',
                                border: 'none',
                                color: '#ffffff',
                                cursor: 'pointer',
                            }}
                        >
                            Pretrazi
                        </button>
                        <div className='flex  pt-5  text-teal font-bold' >
                            <a href='negde' style={{width:'200px'}}  className='flex justify-center items-center hover:opacity-80' >
                                <span style={{ color: '#06B6D4' }}>Opsirnija pretraga</span>
                                <SlArrowDown color='#06B6D4' className='ml-2' />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    );
}
