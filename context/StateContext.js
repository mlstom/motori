import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [trenutni, settrenutni] = useState("Automobili")
    const [izgledHedera, setizgledHedera] = useState(true)
  return (
    <Context.Provider
      value={{
        trenutni,
        settrenutni,
        izgledHedera,
        setizgledHedera
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);