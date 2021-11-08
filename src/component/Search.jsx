import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import MuiDateRangePickerDay from "@mui/lab/DateRangePickerDay";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { CustomButton } from "./BookingCfmDetail";
import { Container, Grid, InputBase, Typography } from "@mui/material";
import { alpha, Box, styled } from "@mui/system";
import BtnGuestnRoomForSearch from "./BtnGuestnRoomForSearch";
import { useHistory, useLocation } from "react-router";
//customize input box hover focus styles
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      outline: "#64CEEF70 solid 3px",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
    "&:focus": {
      outline: "#64CEEF70 solid 3px",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));

//customize input date picker
const RedditTextField = styled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
      outline: "#64CEEF70 solid 3px",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      outline: "#64CEEF70 solid 3px",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));

//customize date picker paper
const DateRangePickerDay = styled(MuiDateRangePickerDay)(
  ({ theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting }) => ({
    ...(isHighlighting && {
      borderRadius: 0,
      backgroundColor: "#64CEEF",
      color: theme.palette.common.white,
      "&:hover, &:focus": {
        backgroundColor: "#64CEEF",
      },
    }),
    ...(isStartOfHighlighting && {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    }),
    ...(isEndOfHighlighting && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
  })
);

function Search({ residentSearch, province, checkIn:cI,rooms }) {
  const history = useHistory();
  const location = useLocation();
  console.log(`location`, location)

  const [value, setValue] = useState([null, null]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [resident, setResident] = useState(residentSearch);
  const [checkIn, setCheckIn] = useState([new Date(cI.split(',')[0]), new Date(cI.split(',')[1])]); 

  // const [guest, setGuest] = useState(1);
  const [room, setRoom] = useState(1);
  console.log(checkIn);
  console.log(cI);
  console.log(`province`, province)

  function HandleSumbit() {
    // const history = useHistory();
    console.log("testt");

    let allPass = true

    if (!province) {
      allPass = false
      alert('กรุณาใส่ข้อมูลสำหรับการค้นหา')
    }
    if (!resident) {
      allPass = false
      alert('กรุณาใส่ข้อมูลสำหรับการค้นหา')
    }
    if (!checkIn) {
      allPass = false
      alert('กรุณาใส่วันที่เช็คอินหรือเช็คเอาท์')
    }
    if (allPass) {
      history.push(`/mainmenu/${resident}/${checkIn}/${room}`);
    }
  }

  const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
    return <DateRangePickerDay {...dateRangePickerDayProps} />;
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container xs={2.3} sx={{ position: "fixed" }}>
      <Grid item xs={11}>
        <Typography sx={{ mb: 2 }}>
          หน้าหลัก &gt; ผลการค้นหา &gt;
          <span style={{ color: "#c62828" }}> { residentSearch?residentSearch:province } </span>
        </Typography>
        <Box sx={{ background: "#07133C", flexGlow: 1, borderRadius: 2 }}>
          <Grid item sx={{ p: 4 }}>
            <Typography sx={{ color: "#fff", fontSize: "20px", pb: 2 }}>
              ค้นหา
            </Typography>
            <Typography sx={{ color: "#fff", pb: 1 }}>
              จุดหมาย/ชื่อที่พัก
            </Typography>
            <BootstrapInput
              defaultValue=''
              id='bootstrap-input'
              fullWidth
              placeholder="เลือกจุดหมายที่คุณต้องการ"
              size="small"
              value={resident}
              sx={{
                padding: 0,
                background: "#fff",
                borderRadius: "4px",
                mb: 2,
              }}
              onChange={e => setResident(e.target.value)}
            />

            <Typography sx={{ color: "#fff", pb: 1 }}>
              วันที่เช็คอิน / เช็คเอาท์
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack
                spacing={1}
                sx={{
                  flexGlow: 1,
                  mb: 2,
                }}
              >
                <DateRangePicker
                  startText='Check-in'
                  endText='Check-out'
                  value={checkIn}
                  renderDay={renderWeekPickerDay}
                  onChange={e => {
                    setCheckIn(e);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <RedditTextField
                        id='filled-basic'
                        label='Filled'
                        variant='filled'
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: "4px",
                          border: "none",
                          mr: 1,
                          "@ .MuiFilledInput-input": {
                            border: "none",
                            "@ :hover": {
                              backgroundColor: "#fff",
                              borderRadius: "4px",
                            },
                            "@ :action": {
                              outline: "64CEEF70 solid 3px",
                              boxShadow: "#64CEEF 0px 0px 0px 10px",
                            },
                          },
                        }}
                        {...startProps}
                      />
                      <RedditTextField
                        id='filled-basic'
                        label='Filled'
                        variant='filled'
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: "4px",
                          border: "none",
                          "@ :hover": {
                            backgroundColor: "#fff",
                            borderRadius: "4px",
                            outline: "64CEEF70 solid 3px",
                            boxShadow: "#64CEEF 0px 0px 0px 10px",
                          },
                        }}
                        {...endProps}
                      />
                    </React.Fragment>
                  )}
                />
              </Stack>
            </LocalizationProvider>

            <Typography sx={{ color: "#fff", pb: 1 }}>ผู้เข้าพัก</Typography>
            <BtnGuestnRoomForSearch room={room} setRoom={setRoom} />

            <Container sx={{ textAlign: "center", mb: 3 }}>
              <CustomButton
                sx={{ background: "#c62828", color: "#fff" }}
                onClick={HandleSumbit}
              >
                Search
              </CustomButton>
            </Container>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Search;
