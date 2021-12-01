import React from "react";
import "./header.css";
import {CryptoState} from "../../useCrypto";
import { useHistory } from "react-router-dom";
import BasicModal from '../AuthLogin/Modaluser'
import Sidebar from '../Sidepar/Sidebar'

function Header() {
  let history = useHistory();
  const { setCurrency,currency, user } = CryptoState();
 
  return (
    <div className="header">
      <div className="header__title">
        <h3 onClick={()=> history.push(`/`)}>Crypto Hunter</h3>
      </div>
      <div className="header__coins">
        <select
          sx={{ m: 1, minWidth: 100 }}
          className="header__coins__select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
         >
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
        </select>

        <div className="header__coins__login">

          { user?<Sidebar/>:<button className="login"> <BasicModal/></button> }

         
        </div>
      </div>
    </div>
  );
}

export default Header;









