import React, { useState } from "react";
import './styled.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Login from './Login';
import Register from './Register';

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

export default function BasicModal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tap, setTap] = useState(0);

  const handelClick = (index) => {
    setTap(index)
  }
  console.log(tap)
  return (
    <div>
      <Button onClick={handleOpen}>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="taps">
            <button onClick={() => handelClick(0)} style={{ borderBottom: tap === 0 ? '2px solid red' : 'none' }} > Login</button>
            <button onClick={() => handelClick(1)} style={{ borderBottom: tap === 1 ? '2px solid red' : 'none' }}> Register</button>
          </div>

          <Login tap={tap} />
          <Register tap={tap} />

        </Box>
      </Modal>
    </div>
  );
}
