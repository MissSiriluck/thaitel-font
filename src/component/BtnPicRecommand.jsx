import chiangmai_pic from "../assets/images/buttons/boudewijn-huysmans-ltEBVNSr-nQ-unsplash.jpg";
import khonkaen from "../assets/images/buttons/rob-king-Mcw7iFvOjdQ-unsplash.jpg";
import pattaya from "../assets/images/buttons/ashwani-verma-Hb6Gvz6Puew-unsplash.jpg";
import phuket from "../assets/images/buttons/jiho-lee-CIMpyhZ5mn0-unsplash.jpg";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { useHistory } from "react-router";
const images = [
  {
    url: `${chiangmai_pic}`,
    title: "เชียงใหม่",
    width: "280px",
  },
  {
    url: `${khonkaen}`,
    title: "ขอนแก่น",
    width: "280px",
  },
  {
    url: `${pattaya}`,
    title: "พัทยา",
    width: "280px",
  },
  {
    url: `${phuket}`,
    title: "ภูเก็ต",
    width: "280px",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  margin: 10,
  height: 200,

  [theme.breakpoints.down("1500")]: {
    height: "170px",
  },

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
      backgroundColor: "#00000080",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function BtnPicRecommand() {
  const history = useHistory();
  function HandleSumbit(e) {
    console.log(e)
    history.push(`/bottommenu/${e}`);
    console.log('106')
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        "& .MuiBox-root": {
          width: "1200px",
        },
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            flexGrow: 1,
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontSize: "20px",
          }}
        >
          ที่พักยอดนิยมในจังหวัดต่างๆ
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
              className="img_btn_homepage"
              onClick={()=>HandleSumbit(image.title)}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    fontFamily: "'Noto Sans Thai', sans-serif",
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default BtnPicRecommand;
