import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import Box from "@mui/material/Box";
import DateRangePicker from "@mui/lab/DateRangePicker";
import MuiDateRangePickerDay from "@mui/lab/DateRangePickerDay";
import { styled } from "@mui/material/styles";

// Customized day rendering
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

function DatePicker() {
  const [value, setValue] = React.useState([null, null]);

  const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
    return <DateRangePickerDay {...dateRangePickerDayProps} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: "4px" }}> */}
      <Stack
        spacing={1}
        sx={{
          width: "18rem",
          m: 3,
        }}
      >
        <DateRangePicker
          startText='Check-in Date'
          endText='Check-out Date'
          value={value}
          renderDay={renderWeekPickerDay}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField
                {...startProps}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  border: "none",
                  mr: 1,
                  "&:hover, &:focus": {
                    border: "3.8px solid #64CEEF",
                    borderRadius: "4px",
                  },
                }}
              />
              <TextField
                {...endProps}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  border: "none",
                  "&:hover": {
                    border: "3.8px solid #64CEEF",
                    borderRadius: "4px",
                  },
                }}
              />
            </React.Fragment>
          )}
        />
      </Stack>
      {/* </Box> */}
    </LocalizationProvider>
  );
}

export default DatePicker;
