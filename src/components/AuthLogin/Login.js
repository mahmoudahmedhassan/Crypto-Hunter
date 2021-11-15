import React from 'react'
import './styled.css';
import { Box, Button, ThemeProvider,createTheme,} from "@material-ui/core";
import { TextField } from '@mui/material';


function Login({tap}) {

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

        <div style={{display: tap === 0 ?'flex':'none'}} className='login' >
            
            <form autoComplete='off'>
                <Box
                    p={3}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="email"
                        label="Enter Email"
                        className='your_name'
                       />
                    <TextField
                        variant="outlined"
                        label="Enter Password"
                        type="password"
                         
                    />
 
                    <Button
                        variant="contained"
                        size="large"
                        style={{ backgroundColor: "#EEBC1D" }}
                    >
                       Login
                    </Button>
                </Box>
            </form>
            
        </div>
        </ThemeProvider>
    )
}

export default Login
