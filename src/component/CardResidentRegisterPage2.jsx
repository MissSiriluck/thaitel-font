import React, { useContext, useState } from "react";
//Material 
import { Grid, Box } from "@mui/material";
import { BackgroundContainer } from "../assets/images/bg_container_residentregisterpage2.jpeg";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import Typography from "@mui/material/Typography";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { height, styled } from "@mui/system";
import { CreateResidentContext } from "../context/createResidentContext";
import { useHistory, useLocation } from "react-router";

const CustomButtonRoot = styled("button")(`
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

function CardResidentRegisterPage2() {   
  const location = useLocation();

  console.log(location)
  
  const history= useHistory();

  const {values, setValues} = useContext(CreateResidentContext)
  
  const handleOnClickChooseType = (props, type) => {

    setValues({ ...values, [props]: type })
    
    history.push({pathname: "/residentregisterpage3",
      state:{
        typeof: type
    }
})
  }

  return (
    <>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "64vh",
        }}
        xs={3.6}
      >
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.8)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            Hotel
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <BusinessIcon
              sx={{
                fontSize: "120px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "-20px",
              height: "50px",
            }}
            onClick={() => handleOnClickChooseType('typeof', 'hotel')}
          >
            <Typography
              style={{
                fontSize: 18,
                marginBottom: "1px",
                justifyContent: "center",
              }}
            >
              ลงทะเบียน
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "64vh",
        }}
        xs={3.6}
      >
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.8)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            Apartment
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <ApartmentIcon
              sx={{
                fontSize: "120px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "-20px",
              height: "50px",
            }}
            onClick={() => handleOnClickChooseType('typeof', 'apartment')}
          >
            <Typography
              style={{
                fontSize: 18,
                marginBottom: "1px",
                justifyContent: "center",
              }}
            >
              ลงทะเบียน
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "64vh",
        }}
        xs={3.6}
      >
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.8)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            Villa
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <HolidayVillageIcon
              sx={{
                fontSize: "120px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "-20px",
              height: "50px",
            }}
            onClick={() => handleOnClickChooseType('typeof', 'villa')}
          >
            <Typography
              style={{
                fontSize: 18,
                marginBottom: "1px",
                justifyContent: "center",
              }}
            >
              ลงทะเบียน
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
}

export default CardResidentRegisterPage2;
