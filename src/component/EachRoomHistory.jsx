import { Grid, Typography } from "@mui/material";
import React from "react";

function EachRoomHistory({ booking }) {
  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid item xs={2}>
        <Typography sx={{ mb: 1 }}>ชื่อห้องพัก</Typography>
      </Grid>
      <Grid item xs={10}>
        {/* <Typography sx={{ mb: 1 }}>{`{Name of Room}`}</Typography> */}
        <Typography sx={{ mb: 1 }}>{booking?.rooms?.typeOf}</Typography>
      </Grid>
    </Grid>
  );
}

export default EachRoomHistory;
