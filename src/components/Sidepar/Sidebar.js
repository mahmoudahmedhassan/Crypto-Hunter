import * as React from 'react';
import './sidbar.css'
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebasConfig';
import { CryptoState } from '../../useCrypto';
import Button from '@mui/material/Button';

export default function Sidebar() {
  const { user, setAlert } = CryptoState();
  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      Msg: "Logout Successfull !",
    });

    // toggleDrawer();
  };
  console.log(`user details ${user.uid}`);
  const [state, setState] = React.useState({

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
 
           <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "#EEBC1D",
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
           >
 
            <div className='user_sidebar'>

              <div className ='user_sidebar_profile'>
                <Avatar
                  className='sidebar_profile_img'
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <h3 className ='user_sidebar_profile_name'>{user.displayName || user.email}</h3>
              </div>

              <div className ='user_sidebar_whtch_list'>
              <h2> whtch list</h2>
                </div>

              {/* <button onClick={toggleDrawer(anchor, false)} className='user_sidebar_close'>close</button> */}
              <button onClick={logOut} className='user_sidebar_logout'>logout</button>
              <Button variant="contained" onClick={toggleDrawer(anchor, false)} className='user_sidebar_close' color='error'>close</Button>

            </div>

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
