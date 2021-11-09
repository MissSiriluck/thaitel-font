import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
// import { CustomButton } from "./BookingCfmDetail";

const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 12px 35px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 14px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

    &:hover {
        background-color: #64CEEF;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #0276aa;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function EachRoomCard({ room, updateRoomAmount, resident }) {
  // console.log("room..................................", room);
  // console.log("resident..................................", resident);

  const [roomBookingAmount, setRoomBookingAmount] = useState(0);

  const handleClickIncrease = e => {
    e.preventDefault();
    // updateRoomAmount(room.roomId, roomBookingAmount + 1);
    // setRoomBookingAmount(roomBookingAmount + 1);
    if (roomBookingAmount < room.roomRemaining) {
      updateRoomAmount(room.roomId, roomBookingAmount + 1);
      setRoomBookingAmount(roomBookingAmount + 1);
    } else {
    }
  };

  const handleClickDecrease = e => {
    e.preventDefault();
    if (roomBookingAmount > 0) {
      updateRoomAmount(room.roomId, roomBookingAmount - 1);
      setRoomBookingAmount(roomBookingAmount - 1);
    }
  };

  return (
    <Grid
      item
      id=''
      xs={12}
      sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 3, mb: 2 }}
    >
      <Grid container>
        <Grid item xs={2} sx={{ position: "relative", width: "50%" }}>
          <img
            src={room.imgURL}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
              objectPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={9.5} sx={{ flexGlow: 1 }} sx={{ mt: 1, ml: 3 }}>
          <Grid container>
            <Grid item xs={6} sx={{ mr: 3 }}>
              <Typography sx={{ fontSize: "20px", mb: 1 }}>
                {room.typeOf}
                {/* {`ห้องมาตราฐานเตียงเดี่ยว`} */}
              </Typography>
              <Typography
                sx={{ mb: 1 }}
              >{`${room.optionalRoomDetail}`}</Typography>
              <Typography>Room size : {room.size} ตารางเมตร</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ mb: 1 }}>
                กรุณาเลือกจำนวนห้องที่ต้องการ
              </Typography>
              <Box item xs={4} sx={{ mb: 2, display: "flex" }}>
                <Button
                  variant='outlined'
                  sx={{
                    mr: 1,
                    fontSize: "22px",
                    borderRadius: "10px",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    width: "50px",
                    boxShadow:
                      "0 4px 20px 0 rgb(61 71 82 / 10%), 0 0 0 0 rgb(0 127 255 / 0%)",
                  }}
                  onClick={handleClickDecrease}
                >
                  -
                </Button>
                <Box
                  sx={{
                    display: "inline-flex",
                    // display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    mx: 2,
                    px: 1,
                    fontSize: "20px",
                  }}
                >
                  {roomBookingAmount}
                </Box>

                <Button
                  variant='outlined'
                  sx={{
                    ml: 1,
                    fontSize: "22px",
                    textAlign: "center",
                    borderRadius: "10px",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    width: "50px",
                    boxShadow:
                      "0 4px 20px 0 rgb(61 71 82 / 10%), 0 0 0 0 rgb(0 127 255 / 0%)",
                  }}
                  onClick={handleClickIncrease}
                >
                  +
                </Button>
              </Box>

              <Typography sx={{ mb: 1 }}>
                Price : {room.pricePerNight} BAHT
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EachRoomCard;
