import { Grid, Box } from "@mui/material";
// import { BackgroundContainer } from "../assets/images/bg_container_residentregisterpage2.jpeg";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import Typography from "@mui/material/Typography";
import React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { height, styled } from "@mui/system";
import CardResidentRegisterPage2 from "./CardResidentRegisterPage2";

const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 40px;
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

const styles = {
  paperContainer: {
    // backgroundImage: `url(${BackgroundContainer})`,
  },
};

function ResidentRegiterPage2() {
  return (
    <Grid container xs={12}>
      <Grid
        item
        sx={{
          display: "flex",
          height: "40vh",
          alignItems: "center",
          padding: "45px",
          background: "black",
          marginBottom: "30px",
        }}
        // style={styles.paperContainer}
        xs={12}
      >
        <Typography sx={{ color: "white", fontSize: "24px", width: "450px" }}>
          มอบประสบการณ์การ ที่คุณต้องการแบ่งบัน...
          เริ่มต้นเลือกประเภทที่พักของคุณ
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="space-around" xs={12}>
        <CardResidentRegisterPage2 />
      </Grid>
    </Grid>
  );
}

export default ResidentRegiterPage2;
