
import React, {createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './Firebase/firebasConfig'
const Crypto = createContext();

const CryptoContext = ( props ) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [alert, setAlert] = useState([{
    open:false,
    type:'success',
    Msg:''
  }]);

  const [user, setUser] = useState(null);
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
    console.log(`user data ${user}`)

  }, [user]);
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
     setAlert({open:false})
  };

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol,alert ,setAlert,handleClose,user}}>
      {props.children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
}