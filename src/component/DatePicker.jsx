import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import MuiDateRangePickerDay from "@mui/lab/DateRangePickerDay";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/system";

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
                      outline: "64CEEF70 solid 3px",
                      boxShadow: "#64CEEF 0px 0px 0px 10px",
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
                  mr: 1,
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
      {/* </Box> */}
    </LocalizationProvider>
  );
}

export default DatePicker;
