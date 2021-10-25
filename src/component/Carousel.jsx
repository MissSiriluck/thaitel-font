import "../assets/css/Carousel.css";
import { useState } from "react";
import { images } from "../service/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [curImg, setCurImg] = useState(0);

  return (
    <div className='Carousel'>
      <div
        className='CarouselInner'
        style={{ backgroundImage: `url(${images[curImg].img})` }}
      >
        <div
          className='left'
          onClick={() => {
            curImg > 0 && setCurImg(currentImg => currentImg - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>

        <div className='center'></div>
        <div
          className='right'
          onClick={() => {
            curImg < images.length - 1 &&
              setCurImg(currentImg => currentImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
