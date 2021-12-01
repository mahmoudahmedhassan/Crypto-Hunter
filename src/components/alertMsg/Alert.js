import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {CryptoState} from '../../useCrypto'


export default function Alert(){
    const { alert ,handleClose} = CryptoState();
  return (
  
      <Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose}>

      <MuiAlert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.Msg}
      </MuiAlert>
      </Snackbar>
  )}
