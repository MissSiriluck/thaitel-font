import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { ResidentContext } from "../context/ResidentContext";
import HotelCardList from "./HotelCardList";

function HotelCard({ data }) {
  const { residents, setResidents } = useContext(ResidentContext);

  useEffect(() => {
    // const fetchResident = async () => {
    //   try {
    //     const res = await axios.get("/residents");
    //     setResidents(res.data.resident);
    //     // console.log(res.data.resident);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchResident();
    setResidents(data);
  }, [setResidents, data]);

  // console.log("residents....................", residents.length);

  return (
    <Grid container sx={{ mb: 10 }}>
      <Grid item xs={12}>
        <Typography sx={{ mb: 2 }}>
          ที่พักทั้งหมด ：พบที่พัก {residents.length} แห่ง
        </Typography>
      </Grid>

      {residents.map(item => (
        <Grid item xs={12}>
          <HotelCardList resident={item} />
        </Grid>
      ))}
    </Grid>
  );
}
export default HotelCard;
