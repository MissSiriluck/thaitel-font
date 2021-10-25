import { Grid, Typography } from "@mui/material";
import HotelCardList from "./HotelCardList";

function HotelCard() {
  return (
    <Grid container>
      <Grid item>
        <Typography
          sx={{ mb: 2 }}
        >{`ที่พักทั้งหมด ：พบที่พัก 200 แห่ง`}</Typography>
      </Grid>
      <HotelCardList />
    </Grid>
  );
}
export default HotelCard;
