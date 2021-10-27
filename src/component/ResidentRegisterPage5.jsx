import { Grid, Typography, Container } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import RoomCardResidentRegisterPage5 from "./RoomCardResidentRegisterPage5";
import { styled } from "@mui/material/styles";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 30px;
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

function ResidentRegisterPage5() {

  // const context = useContext(contextValue)

  return (
    <Container maxWidth="md" sx={{ mt: 18 }}>
      <Stack spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <Typography sx={{ fontSize: "36px" }}>ห้องทั้งหมดของคุณ</Typography>
        </Grid>
        {/* <Grid item>
          <RoomCardResidentRegisterPage5 />
        </Grid>
        <Grid item>
          <RoomCardResidentRegisterPage5 />
        </Grid> */}
      </Stack>
      <Grid item sx={{ display: "flex", justifyContent: "end" }}>
        <Grid container xs={12} justifyContent="end">
          <Grid
            item
            xs={2.5}
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "25px",
            }}
          >
            <CustomButton
              sx={{
                background: "#64CEEF",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "90%",
                marginBottom: "50px",
                marginTop: "20px",

                height: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: 16,
                  justifyContent: "start",
                }}
              >
                เพิ่มประเภทห้องพัก
              </Typography>
            </CustomButton>
          </Grid>

          <Grid
            item
            xs={2.5}
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "25px",
            }}
          >
            <CustomButton
              sx={{
                background: "#c62828",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "90%",
                marginBottom: "50px",
                marginTop: "20px",
                marginLeft: "20px",
                height: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: 16,
                  justifyContent: "start",
                }}
              >
                ดำเนินการต่อ
              </Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResidentRegisterPage5;
