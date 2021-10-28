import React from "react";
import Box from "@mui/material/Box";
import SearchingBox from "./SearchingBox";
import DatePicker from "./DatePicker";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import BtnGuestnRoom from "./BtnGuestnRoom";
import { useState } from "react";
import axios from "axios";
const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 12px 35px;
    border-radius: 60px;
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

function SearhchingBar() {
  const [resident, setResident] = useState("");
  const [checkIn, setCheckIn] = useState([null, null]);
  // const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState(1);
  const [room,setRoom]= useState(1);

  function handleGetData() {
    axios.get(
      `http://localhost:7777/search/?resident=${resident}&&checkin=${checkIn}&&roominput=${room}`
    );
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: "12% 10%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff60",
          borderRadius: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <SearchingBox value={resident} setResident={setResident} />
          <DatePicker checkIn={checkIn} setCheckIn={setCheckIn} />
          <BtnGuestnRoom guest={guest} setGuest={setGuest} room={room} setRoom={setRoom}/>
          <CustomButton
            sx={{
              background: "#03a9f4",
              color: "#fff",
              fontFamily: "'Noto Sans Thai', sans-serif",
              ml: 3,
            }}
            onClick={handleGetData}
          >
            Search
          </CustomButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearhchingBar;
