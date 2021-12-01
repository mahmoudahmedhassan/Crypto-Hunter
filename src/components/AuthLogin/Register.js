import React,{ useState} from 'react';

import { Box, Button } from "@material-ui/core";
import { TextField } from '@mui/material';
import {CryptoState} from '../../useCrypto'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from '../../Firebase/firebasConfig';

function Register({ tap,handleClose }) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
 
    const {setAlert} = CryptoState();


    const handelSubmit= async(e)=>{

        e.preventDefault();

        if(password !==confirmPassword ){
            return setAlert({
                open: true,
                Msg:'password not match',
                type:'error',
        })}
            
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setAlert({
                open: true,
                Msg :`Register Successful, Welcome ${res.user.email}`,
                type:'success',
            });
            console.log(res.user)

            handleClose();

        } catch (err){

                setAlert({
                    open: true,
                    Msg :err.message,
                    type:'error',
                });
                return;
        }
    };

    return (
        <div style={{ display: tap === 1 ? 'flex' : 'none' }} >

            <form autoComplete='off' onSubmit={handelSubmit}>
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
                        onChange={({target}) => setEmail(target.value)}
                        value={email}
                      />
                    <TextField
                        variant="outlined"
                        label="Enter Password"
                        type="password"
                        fullWidth
                        onChange={({target}) => setPassword(target.value)}
                        value={password}
                    />
                    <TextField
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        onChange={({target}) => setConfirmPassword(target.value)}
                        value={confirmPassword}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        style={{ backgroundColor: "#EEBC1D",fontWeight: "bold" }}
                        type='submit'
                    >
                       Register
                    </Button>
                 </Box>
            </form>

        </div>
    )
}

export default Register
