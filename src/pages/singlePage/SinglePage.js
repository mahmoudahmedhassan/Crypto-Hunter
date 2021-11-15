import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LinearProgress } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import "./singlePage.css";
import CoinsInfo from "../../components/coinInfo/CoinsInfo";
import { Container, Row, Col } from "react-bootstrap";
import {CryptoState} from "../../useCrypto";
function SinglePage() {
  const {symbol } = CryptoState();

  let { id } = useParams();
  const [coinsDetails, setCoinsDetails] = useState();

  let URL = `https://api.coingecko.com/api/v3/coins/${id}`;
 
  const fetchCoinsDetails = async () => {
    const Data = await axios.get(URL);

    setCoinsDetails(Data.data);
  };

  useEffect(() => {
    fetchCoinsDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
 
  return (
    <div className="SinglePage">
      {!coinsDetails ? (
        <LinearProgress style={{ backgroundColor: "gold" }} />
      ) : (
        <Container fluid>
          <Row>
            <Col
              lg={4}
               xs={12}
            >
              <div className="sidebar">

              <div className="sidebar__info">
                <img src={coinsDetails?.image.large} alt={coinsDetails?.name} />

                <h2 className="sidebar__info__name">{coinsDetails?.name}</h2>

                <p className="sidebar__info__discrptions">
                  {ReactHtmlParser(coinsDetails?.description.en.split(". ")[0])}
                </p>
              </div>

              <div className="details">
                <p className="details__rank">
                  Rank:
                  <span>{coinsDetails?.market_cap_rank}</span>
                </p>

                <p className="details__price">
                  Current Price:
                  <span>{symbol}  {coinsDetails?.market_data.current_price.ars} M</span>
                </p>

                <p className="details__marketcap">
                  Market Cap:
                  <span>
                  {symbol} 
                    {(
                      coinsDetails?.market_data.market_cap.ars / 1000000
                    ).toFixed(1)} 
                    M
                  </span>
                </p>
              </div>
              </div>

            </Col>

            <Col item lg={8} xs={12} container>
              <CoinsInfo coinsDetails={coinsDetails.id}/>
            </Col>

          </Row>
        </Container>
      )}
    </div>
  );
}

export default SinglePage;