import React from 'react'

const DropMenu = ({options, isOpen,idiLevo}) => {
  return (
    <div className='relative'>
        {isOpen && (
                    <div
                      style={!idiLevo?{
                        position: 'absolute',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        top:'-30px',
                      }:{
                        position: 'absolute',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        left:'150px',
                        top:'-60px',
                      }
                    }
                    >
                      {options.map((option) => (
                        <div
                          key={option.id}
                          style={{
                            padding: '8px 16px',
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            color: '#000000',
                          }}
                        >
                          {option.naziv}
                        </div>
                      ))}
                    </div>
                  )}
    </div>
  )
}

export default DropMenu