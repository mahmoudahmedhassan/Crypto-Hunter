import React,{useState} from 'react'
import './styled.css';
import { Box, Button} from "@material-ui/core";
import { TextField } from '@mui/material';
import {CryptoState} from '../../useCrypto'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from '../../Firebase/firebasConfig'

function Login({tap,handleClose}) {
    const {setAlert} =CryptoState();
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    const handelSubmit = async()=>{

         if(!email || !password){
         return setAlert({
                open: true,
                type: 'error',
                Msg: 'Please fill all the Fields'
            })}
        try {
            const res = await signInWithEmailAndPassword(
            auth,email,password
        );
        setAlert({
            open: true,
            Msg: `successful ${res.user.email}`,
            type: 'success'
        });
        handleClose();

        }catch(err){
            setAlert({
                open:true,
                Msg: err.message,
                type: 'error'
            });
            return;
        }
    }
 
    return (
 
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
                        value={ email}
                        onChange={({target})=>setEmail(target.value)}
                        />
                    <TextField
                        variant="outlined"
                        label="Enter Password"
                        type="password"
                        value={ password}
                        onChange={({target})=>setPassword(target.value)}

                    />
 
                    <Button
                        variant="contained"
                        size="large"
                        style={{ backgroundColor: "#EEBC1D",fontWeight:'bold' }}
                        onClick={handelSubmit}
                    >
                       Login
                    </Button>
                </Box>
            </form>
            
        </div>
     )
}

export default Login
