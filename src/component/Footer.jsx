import React from "react";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <div className='footer_box'>
      <Typography
        variant='body1'
        color='inherit'
        sx={{
          fontFamily: "'Noto Sans Thai', sans-serif",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        Copyright © 2010 -2021 by ThaiTel.com
      </Typography>
    </div>
  );
}

export default Footer;
