import "../assets/css/HotelCard.css";
import hottel1 from "../assets/images/hotel-1.jpeg";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";

function HotelCard() {
  const [value, setValue] = useState(2);
  return (
    <Grid container>
      <Grid item>
        <Typography sx={{ mb: 2 }}>{`ภูเก็ต : ：พบที่พัก 200 แห่ง`}</Typography>
      </Grid>
    </Grid>

    // <div className="background-hotel-card">
    //   <img src={hottel1} alt="" className="img-hotel-card" />
    //   <div className="background-hotel-left">
    //     <div className="background-hotel-left-col1">
    //       <p className="hotel-title"> BEACH RESORT</p>

    //       <Rating
    //         name="simple-controlled"
    //         value={value}
    //         onChange={(event, newValue) => {
    //           setValue(newValue);
    //         }}
    //         className="star-rating"
    //         size="large"
    //       />
    //     </div>
    //     <div className="background-hotel-left-col2">
    //       <p className="hotel-title">ภูเก็ต</p>
    //       <p className="price-title">3,500 บาท</p>
    //     </div>
    //     <div className="background-hotel-left-col3">
    //       <button className="detail">จอง และดูรายละเอียดเพิ่มเติม</button>
    //     </div>
    //   </div>
    // </div>
  );
}
export default HotelCard;
