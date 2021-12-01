import { React, useState, useEffect } from "react";
import "./carousel.css";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {CryptoState} from '../../useCrypto'
function CarouselTranding() {
  const [carouselData, setCarouselData] = useState([]);
  const {currency,symbol}=CryptoState();

   useEffect(() => {
    let URL=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
    axios
      .get(URL)
      .then((res) => {
        setCarouselData(res.data);
       })
      .catch((err) => console.log(err.massge));
  }, [currency]);

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
      width:"80%",
      overflow: "hidden",
      margin:'auto'

    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
  }));
  const classes = useStyles();


   const items = carouselData.map(({ id, ath, price_change_percentage_24h, image,symbol,name }) => {
      return (
        <Link key={id} className={classes.carouselItem} to={`./singlePage/${id}`}>
          <img src={image} alt={name} className="carousel__img" />
          <p className="carousel__price_change">
              <span>{symbol}</span>
              
            {price_change_percentage_24h}
          </p>
          <p className="carousel__ath">{ath}</p>
        </Link>
      )
    });

 
    const responsive = {
        0: {
          items: 4,
        },
        512: {
          items: 4,
        },
      };

  return (

    <div className={classes.carousel}>
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  </div>

  );
}

export default CarouselTranding;
