import { React, useState, useEffect } from "react";
import "./coinstable.css";
import BasicTable from "./MaterialTable";
import axios from "axios";
import { Stack, LinearProgress } from "@mui/material";
import {CryptoState} from "../../useCrypto";
import {
  Container,
  ThemeProvider,
  createTheme,
  TextField,
} from "@material-ui/core";

function CoinsTable() {
  const { symbol, currency } = CryptoState();
  const [tableDate, setTableDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    let URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    setLoading(true);
    axios.get(URL).then((res) => {
      setTableDate(res.data);
      setLoading(false);
    }); 

  }, [currency]);

  
  const handelSearch = () => {
    return tableDate.filter( (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ TextAlign: "center" }}>
        <div className="head_table">
          <h3 className="head_table_title">
            Crypto Currency Prices By Market Cap
          </h3>
          <TextField
            label="Search for Cryptocurrency"
            variant="outlined"
            style={{ marginBottom: 20, width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
 
           {loading ? (
            <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
              <LinearProgress
                style={{
                  marginBottom: "20px",
                  backgroundColor: "rgb(238,188,29)",
                }}
              />
            </Stack>
          ) : (
            <div className="table_coins">
              <BasicTable handelSearch={handelSearch} symbol={symbol} />
            </div>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default CoinsTable;
