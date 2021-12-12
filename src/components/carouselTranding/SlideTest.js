// import { React, useState, useEffect } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { CryptoState } from "../../useCrypto";
// import "./carousel.css";

// function SlideTest() {
//   const [carouselData, setCarouselData] = useState([]);
//   const { currency, symbol } = CryptoState();

//   useEffect(() => {
//     let URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
//     axios
//       .get(URL)
//       .then((res) => {
//         setCarouselData(res.data);
//       })
//       .catch((err) => console.log(err.massge));
//   }, [currency]);

//   const items = carouselData.map(
//     ({ id, ath, price_change_percentage_24h, image, symbol: hey, name }) => {
//       return (
//         <Link key={id} to={`./singlePage/${id}`} className="carousel__items">
//           <img
//             src={image}
//             alt={name}
//             className="carousel__img"
//             height="200px"
//           />
//           <div className ='carousel__content'>
//             <p
//               className="carousel__price_change"
//               style={{
//                 color: price_change_percentage_24h > 0 ? "green" : "red",
//               }}
//             >
//               <span style={{ color: "#fff" }}>{hey} </span>{" "}
//               {price_change_percentage_24h.toFixed(2) > 0 ?  `+ ${price_change_percentage_24h.toFixed(2)}`: price_change_percentage_24h.toFixed(2)  }
//               <span>%</span>
//             </p>

//             <p className="carousel__ath">
//               <span>{symbol}</span>

//               {ath}
//             </p>
//           </div>
//         </Link>
//       );
//     }
//   );

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     pauseOnHover: false,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="main">
//       <Slider {...settings}>{items}</Slider>
//     </div>
//   );
// }

// export default SlideTest;
