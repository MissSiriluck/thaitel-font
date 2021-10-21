import * as React from "react";
import { useState } from "react";
import "../assets/css/Search.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
// import { createMuiTheme } from "@material-ui/core";
// import DateFnsUtils from '@date-io/date-fns'

     function Search() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleAddGuest() {
    setGuest((current) => current + 1);
  }
  function handleMinusGuest() {
    if (guest > 0) {
      setGuest((current) => current - 1);
    }
  }
  function handleAddRoom() {
    setRoom((current) => current + 1);
  }
  function handleMinusRoom() {
    if (room > 0) {
      setRoom((current) => current - 1);
    }
  }
  return (
    <div>
      <div className="search-background">
        <p className="find">ค้นหา</p>
        <p className="find-title">จุดหมาย/ชื่อที่พัก</p>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="จุดหมาย/ชื่อที่พัก"
          inputProps={{ "aria-label": "search google maps" }}
          className="search-input" //search bar??
        />
        <p className="find-title">วันที่ เช็คอิน</p>
        <div style={{ position: "relative", display: "inline-block" }}></div>
        <div>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            className="date-picker"
          >
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              className="date-picker"
              color="primary"
            />
          </LocalizationProvider>
        </div>
        <p className="find-title">วันที่ เช็คเอาท์</p>
        <div>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            className="date-picker"
          >
            <DatePicker
              label="Basic example"
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              className="date-picker"
              color="primary"
            />
          </LocalizationProvider>
        </div>
        <div style={{ position: "relative", display: "inline-block" }}></div>
        <p className="find-title">จำนวนผู้เข้าพัก และจำนวนห้อง</p>

        <div>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="button-picker"
          >
            จำนวนผู้เข้าพัก และจำนวนห้อง
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <span className="type">Guest</span>

              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab color="primary" aria-label="minus">
                  <RemoveIcon onClick={handleMinusGuest} />
                </Fab>
                <span>{guest}</span>
                <Fab color="primary" aria-label="add">
                  <AddIcon onClick={handleAddGuest} />
                </Fab>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <span className="type">Room</span>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab color="primary" aria-label="minus">
                  <RemoveIcon onClick={handleMinusRoom} />
                </Fab>
                <span>{room}</span>
                <Fab color="primary" aria-label="add">
                  <AddIcon onClick={handleAddRoom} />
                </Fab>
              </Box>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <button className="sumbit">Search</button>
        </div>
      </div>
    </div>
  );
}
export default Search;