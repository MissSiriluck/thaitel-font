import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useHistory, useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SearhchingBar from "../component/SearchingBar";
import BtnPicRecommand from "../component/BtnPicRecommand";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function Homepage() {

  const location = useLocation()

  const [openSnackLogin, setOpenSnackLogin] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackLogin(false);
  };
  
  useEffect(() => {
    if(location?.state?.message){
      setOpenSnackLogin(true)
    }
  }, [location])

  return (
    <>
      <div className='container_head_search'>
        <Header />
        <SearhchingBar />
      </div>
      <BtnPicRecommand />
      <Footer />
      <Snackbar open={openSnackLogin} anchorOrigin={{ vertical:'top', horizontal:'center' }} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {location?.state?.message? location?.state?.message:'การแก้ไขที่พักของคุณได้ดำเนินการสำเร็จแล้ว'}
          </Alert>
      </Snackbar>
    </>
  );
}

export default Homepage;
