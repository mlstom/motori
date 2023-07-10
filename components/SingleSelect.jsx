import React, { useState } from 'react';

const SingleSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        value={selectedItem ? selectedItem.naziv : ''}
        placeholder={placeholder}
        onClick={handleInputClick}
        readOnly
        style={{
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Dodavanje sjene
          padding: '8px' // Dodavanje odstupanja (padding)
        }}
        
      />

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            marginTop: '10px',
          }}
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleItemClick(option)}
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
  );
};

export default SingleSelect;
