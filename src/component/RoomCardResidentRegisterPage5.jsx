import React from "react";
import { Container, Grid, TextField, Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 10px 20px;
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
        background-color: #FF0005;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #9a2a2c;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function RoomCardResidentRegisterPage5(props) {
  return (
    <Stack
      xs={12}
      direction="row"
      spacing={2}
      sx={{
        padding: "20px",
        border: "2px solid #c4c4c4",
        borderRadius: "10px",
        justifyContent: "space-between",
        height: "14vh",
      }}
    >
      <Grid item>
        <Typography sx={{ fontSize: "18px" }}>
          {/* ห้องมาตรฐานเตียงเดี่ยว */}
          {props.roomName}
        </Typography>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          xs={12}
          md={5}
        >
          <Typography>จำนวนห้องพัก :</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            id="outlined-password-input"
            label="x ห้อง"
            size="small"
            sx={{ width: "80%", alignItems: "stretch" }}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            xs={12}
            md={6}
            value={props.roomAmount}
          />
        </Grid>
      </Grid>
      <Grid
        container
        xs={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={1}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CustomButton
            sx={{
              background: "#FFFFFF",
              color: "#07133C",
              border: "1px solid #07133C",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "16px",
            }}
            // onClick={signIn}
          >
            <Typography
              style={{
                fontSize: 14,
                marginBottom: "1px",
                justifyContent: "center",
                fontWeight: 500,
                padding: "0 10px",
              }}
            >
              EDIT
            </Typography>
          </CustomButton>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "16px",
            }}
            // onClick={signIn}
          >
            <Typography
              style={{
                fontSize: 14,
                marginBottom: "1px",
                justifyContent: "center",
                fontWeight: 400,
              }}
            >
              DELETE
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default RoomCardResidentRegisterPage5;
