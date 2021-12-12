
import React, {createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth,db} from './Firebase/firebasConfig'
import { onSnapshot, doc } from "firebase/firestore";

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
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {

    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

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
    <Crypto.Provider value={{ currency, setCurrency, symbol,alert ,setAlert,handleClose,user,watchlist}}>
      {props.children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
}


