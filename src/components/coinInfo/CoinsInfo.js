import { React, useState, useEffect } from "react";
import "./conisinfo.css";
import CircularStatic from "../Progress";
// import useCrypto from "../../useCrypto";
import axios from "axios"; 
import ButtonDays from './ButtonDays'
import { Line } from "react-chartjs-2";
import {CryptoState} from '../../useCrypto'

function CoinsInfo({ coinsDetails }) {
  const {currency,symbol } = CryptoState();
   const [days,setDays]= useState('1');
 
  const [coinsInfo, setCoinsInfo] = useState();
  let URL = `https://api.coingecko.com/api/v3/coins/${coinsDetails}/market_chart?vs_currency=${currency}&days=${days}`;
  const fetchCoinsInfo = async () => {
    const { data } = await axios.get(URL);
    setCoinsInfo(data.prices);
  };
 
  useEffect(() => {
    fetchCoinsInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days,currency]);

  return (
    <div className="coins_info">
      {!coinsInfo ? (
        <div style={{ position: "relative", top: "40%", left: "50%" }}>
          <CircularStatic />
        </div>
      ) : (
        <>
          <div>
            <Line
              data={{
                labels: coinsInfo.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: coinsInfo.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in USD}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
            />
          </div>
          <div>
              <ButtonDays setDays={setDays} days={days}/>
          </div>
        </>
      )}
    </div>
  );
}

export default CoinsInfo;
