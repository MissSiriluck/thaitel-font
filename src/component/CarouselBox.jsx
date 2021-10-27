import "../assets/css/Carousel.css";
import { Paper, Button } from "@material-ui/core";
import { images } from "../service/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { residents } from "../mocks/residents";
import { Carousel } from "react-responsive-carousel";

function CarouselBox() {
  const [curImg, setCurImg] = useState(0);
  // const [value, setValue] = useState(0);

  // function onChange(value) {
  //   setValue(value);
  // }

  return (
    <Grid container sx={{ mb: 3 }}>
      {/* {residents.map(resident => (
        <Grid container>
          <Carousel value={value} onChange={onChange} arrows>
            <img
              src={`${resident.url}`}
              style={{
                width: "170px",
                height: "170px",
                borderRadius: 8,
              }}
            />
          </Carousel>
          <Dots value={value} onChange={onChange} number='' />
        </Grid>
      ))}  */}

      <div className="Carousel">
        <div
          className="CarouselInner"
          style={{ backgroundImage: `url(${images[curImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              curImg > 0 && setCurImg((currentImg) => currentImg - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>

          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              curImg < images.length - 1 &&
                setCurImg((currentImg) => currentImg + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      {/* // <Carousel infiniteLoop>
      //   <Grid container xs={12}>
      //     {residents.map(resident => (
      //       <img src={`${resident.url}`} />
      //     ))}
      //   </Grid>
      // </Carousel> */}
    </Grid>
  );
}

export default CarouselBox;
