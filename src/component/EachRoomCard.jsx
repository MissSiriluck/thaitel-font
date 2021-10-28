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

function EachRoomCard({ room, updateRoomAmount }) {
  console.log("room..................................", room);
  const [roomBookingAmount, setRoomBookingAmount] = useState(0);

  const handleClickIncrease = (e) => {
    e.preventDefault();
    updateRoomAmount(room.roomId, roomBookingAmount + 1);
    setRoomBookingAmount(roomBookingAmount + 1);
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
              <Grid item xs={4} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">
                    จำนวนห้อง
                  </InputLabel> */}
                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="จำนวนห้อง"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select> */}
                  <button onClick={handleClickDecrease}>-</button>
                  {roomBookingAmount}
                  <button onClick={handleClickIncrease}>+</button>
                </FormControl>
              </Grid>
              <Typography sx={{ mb: 1 }}>
                Room size : {room.size} ตารางเมตร
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Price : {room.pricePerNight} BATH
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EachRoomCard;
