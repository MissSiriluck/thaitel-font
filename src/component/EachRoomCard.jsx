import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import {
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

function EachRoomCard({ room, updateRoomAmount }) {
  // console.log("room..................................", room);

  const [roomBookingAmount, setRoomBookingAmount] = useState(0);

  const handleClickIncrease = (e) => {
    e.preventDefault();
    // updateRoomAmount(room.roomId, roomBookingAmount + 1);
    // setRoomBookingAmount(roomBookingAmount + 1);
    if (roomBookingAmount < room.roomRemaining) {
      updateRoomAmount(room.roomId, roomBookingAmount + 1);
      setRoomBookingAmount(roomBookingAmount + 1);
    } else {
    }
  };

  const handleClickDecrease = (e) => {
    e.preventDefault();
    if (roomBookingAmount > 0) {
      updateRoomAmount(room.roomId, roomBookingAmount - 1);
      setRoomBookingAmount(roomBookingAmount - 1);
    }
  };

  return (
    <Grid
      item
      id=""
      xs={12}
      sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
    >
      <Grid container>
        <Grid item xs={2.2}>
          <img
            src={room.imgURL}
            style={{
              width: "170px",
              height: "170px",
              borderRadius: 8,
            }}
          />
        </Grid>
        <Grid item xs={9.8} sx={{ flexGlow: 1 }} sx={{ mt: 2 }}>
          <Grid container>
            <Grid item xs={5}>
              <Typography sx={{ fontSize: "20px", mb: 1 }}>
                {room.typeOf}
                {/* {`ห้องมาตราฐานเตียงเดี่ยว`} */}
              </Typography>
              <Typography>{`${room.roomDetail}`}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Box item xs={4} sx={{ mb: 2, display: "flex" }}>
                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={handleClickDecrease}
                >
                  -
                </CustomButton>
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

                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={handleClickIncrease}
                >
                  +
                </CustomButton>
              </Box>
              <Typography sx={{ mb: 1 }}>
                Room size : {room.size} ตารางเมตร
              </Typography>
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
