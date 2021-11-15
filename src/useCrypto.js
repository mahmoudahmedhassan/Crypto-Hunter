// import react, {createContext,useContext, useState, useEffect} from 'react'

//  const crypto =createContext();

// const UseCrypto =({children})=> {

//     const [currency,setCurrency]= useState('USD');
//     const [symbol,setSymbol]= useState('$');

//      useEffect(() => {
//         if(currency==='USD') setSymbol("$");
//         else if (currency === "EUR") setSymbol("€");
//      }, [currency]);

//     console.log(currency,symbol);
    
//      return(
//          <crypto.Provider value={{setCurrency,currency,symbol}}>
//              {children}
//          </crypto.Provider>
//      )
//  }

// export default UseCrypto;

// export const CryptoState = ()=>{
//    return useContext(Crypto);
// }


import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ( props ) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {props.children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
}