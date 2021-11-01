import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { ResidentContext } from "../context/ResidentContext";
import HotelCardList from "./HotelCardList";

function HotelCard(props) {
  return (
    <Grid container>
      <Grid item>
        <Typography sx={{ mb: 4 }}>
          ที่พักทั้งหมด ：พบที่พัก แห่ง
        </Typography>
      </Grid>
      <HotelCardList data={props.data} />
    </Grid>
  );
}
export default HotelCard;
