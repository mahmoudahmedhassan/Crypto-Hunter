import React from 'react';

import { Box, Button } from "@material-ui/core";
import { TextField } from '@mui/material';


function Register({ tap }) {
    return (
        <div style={{ display: tap === 1 ? 'flex' : 'none' }} >

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
                        fullWidth
                      />
                    <TextField
                        variant="outlined"
                        label="Enter Password"
                        type="password"
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        size="large"
                        style={{ backgroundColor: "#EEBC1D" }}
                    >
                       Register
                    </Button>
                </Box>
            </form>

        </div>
    )
}

export default Register
