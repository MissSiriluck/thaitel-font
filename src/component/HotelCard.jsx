import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ResidentContext } from "../context/ResidentContext";
import HotelCardList from "./HotelCardList";

function HotelCard() {
  const { residents, setResidents } = useContext(ResidentContext);
  console.log("residents.........................", residents);
  return (
    <Grid container>
      <Grid item>
        <Typography
          sx={{ mb: 4 }}
        >{`ที่พักทั้งหมด ：พบที่พัก 200 แห่ง`}</Typography>
      </Grid>
      {/* {residents.map((item) => ( */}
      <HotelCardList />
      {/* ))} */}
    </Grid>
  );
}
export default HotelCard;
