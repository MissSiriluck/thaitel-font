import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { ResidentContext } from "../context/ResidentContext";
import HotelCardList from "./HotelCardList";

function HotelCard() {
  const { residents, setResidents } = useContext(ResidentContext);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const res = await axios.get("/residents");
        setResidents(res.data.resident);
        // console.log(res.data.resident);
      } catch (err) {
        console.log(err);
      }
    };
    fetchResident();
  }, []);

  // console.log("residents....................", residents.length);

  return (
    <Grid container>
      <Grid item>
        <Typography sx={{ mb: 4 }}>
          ที่พักทั้งหมด ：พบที่พัก {residents.length} แห่ง
        </Typography>
      </Grid>
      {residents.map((item) => (
        <HotelCardList resident={item} />
      ))}
    </Grid>
  );
}
export default HotelCard;
