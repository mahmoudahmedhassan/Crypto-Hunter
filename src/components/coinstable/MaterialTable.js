import  {React,useState} from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@mui/material";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CustomPagination from '../paginations/PaginationPage';
import "./materialtable.css";

export default function BasicTable({handelSearch ,symbol}){
    const [page, setPage] = useState(1);
    console.log(`handelSearch :${handelSearch}`)

  let history = useHistory();
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table_head">
            <TableRow className="table_row">
              <TableCell className="unified"> Coin</TableCell>
              <TableCell className="unified" align="right">Price</TableCell>
              <TableCell className="unified" align="right">24h Change </TableCell>
              <TableCell className="unified" align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="table_body">
            {handelSearch().slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((row) => (
              <TableRow
              className="table_row"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={()=> history.push(`/singlePage/${row.id}`)}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    border: "1px solid #fff",
 
                  }}
                >
                  <img
                    src={row.image}
                    alt={row.name}
                    height="50px"
                    width="50px"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20px",
                    }}
                  >
                    <span>{row.symbol}</span>
                    {row.name}
                  </div>
                </TableCell>

                <TableCell align="right"
                className='TableCell'
                  >
                  {row.current_price.toFixed(2)}
                </TableCell>
                <TableCell align="right"
                style={{color:`${row.price_change_24h < 0 ? 'red' : '#0ECB81'} `}} >
                  <span>{symbol}</span>

                  {row.price_change_24h.toFixed(2)}
                </TableCell>
                <TableCell align="right"
                style={{color: '#fff'}}>

                  <span>{symbol}</span>
                  
                  {(row.market_cap / 1000000).toFixed(2)} M
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomPagination page={page} setPage={setPage} handelSearch={handelSearch}/>
      
    </ThemeProvider>
  );
}
