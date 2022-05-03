import React, { useState } from "react";
import './styled.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Login from './Login';
import Register from './Register';
import GoogleButton from 'react-google-button';
import {auth} from '../../Firebase/firebasConfig';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {CryptoState} from '../../useCrypto';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  background: '#424242',
  borderRadius:'10px'
};
const _style ={
  width:'85%',
  margin: 'auto',
  marginBottom:'20px'
}

export default function BasicModal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tap, setTap] = useState(0);
  const {setAlert } = CryptoState();

  const handelClick = (index) => {
    setTap(index)
  }
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          Msg: `Sign Up Successful. Welcome ${res.user.email}`,
          type: "success",
        });
        window.location.pathname ="/";
        
         handleClose();
      })
      .catch((err) => {
        setAlert({
          open: true,
          Msg: err.message,
          type: "error",
        });
        return;
      });
  };


   return (
    <div>
      <Button onClick={handleOpen}>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
        <Box sx={style} className='modal_body'>
          <div className="taps">
            <button onClick={() => handelClick(0)} style={{ borderBottom: tap === 0 ? '2px solid red' : 'none' }} > Login </button>
            <button onClick={() => handelClick(1)} style={{ borderBottom: tap === 1 ? '2px solid red' : 'none' }}> Register</button>
          </div>

          <Login tap={tap}  handleClose={handleClose}/>
          <Register tap={tap} handleClose={()=>handleClose(false)}/>
          <p className ='taps_or'>OR</p>

          <GoogleButton onClick={signInWithGoogle} style={_style}  />

        </Box>
      </Modal>
    </div>
  );
}
