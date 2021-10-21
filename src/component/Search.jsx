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
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

// import { createMuiTheme } from "@material-ui/core";
// import DateFnsUtils from '@date-io/date-fns'

function Search() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleAddGuest() {
    setGuest(current => current + 1);
  }
  function handleMinusGuest() {
    if (guest > 0) {
      setGuest(current => current - 1);
    }
  }
  function handleAddRoom() {
    setRoom(current => current + 1);
  }
  function handleMinusRoom() {
    if (room > 0) {
      setRoom(current => current - 1);
    }
  }
  return (
    <div>
      <Grid className="search-background">
        <Typography className="find">ค้นหา</Typography>
        <Typography className="find-title">จุดหมาย/ชื่อที่พัก</Typography>
        {/* <TextField
          sx={{ ml: 1, flex: 1, backgroundColor: "white" }}
          placeholder="จุดหมาย/ชื่อที่พัก"
          inputProps={{ "aria-label": "search google maps" }}
          // className="search-input" //search bar??
        /> */}
        <Typography className="find-title">วันที่ เช็คอิน</Typography>
        <Grid style={{ position: "relative", display: "inline-block" }}></Grid>
        <Grid>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            className="date-picker"
          >
            <DatePicker
              label="Basic example"
              value={value}
              onChange={newValue => {
                setValue(newValue);
              }}
              renderInput={params => <TextField {...params} />}
              className="date-picker"
              color="primary"
            />
            {/* <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={newValue => {
                setValue(newValue);
              }}
              renderInput={params => <TextField {...params} />}
              sx={{ backgroundColor: "white" }}
            /> */}
          </LocalizationProvider>
        </Grid>
        <Grid className="find-title">
          <Typography>วันที่ เช็คเอาท์</Typography>
        </Grid>
        <Grid>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            className="date-picker"
          >
            {/* <DatePicker
              label="Basic example"
              value={value2}
              onChange={newValue => {
                setValue2(newValue);
              }}
              renderInput={params => <TextField {...params} />}
              className="date-picker"
              color="primary"
              sx={{ backgroundColor: "white" }}
            /> */}
            
          </LocalizationProvider>
        </Grid>
        <Grid style={{ position: "relative", display: "inline-block" }}></Grid>
        <Typography className="find-title">
          จำนวนผู้เข้าพัก และจำนวนห้อง
        </Typography>

        <Grid>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="button-picker"
          >
            <Typography>จำนวนผู้เข้าพัก และจำนวนห้อง</Typography>
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
              <span className="type">
                <Typography>Guest</Typography>
              </span>

              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab color="primary" aria-label="minus">
                  <RemoveIcon onClick={handleMinusGuest} />
                </Fab>
                <span>
                  <Typography>{guest}</Typography>
                </span>
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
        </Grid>
        <Grid>
          <button className="sumbit">Search</button>
        </Grid>
      </Grid>
    </div>
  );
}
export default Search;
