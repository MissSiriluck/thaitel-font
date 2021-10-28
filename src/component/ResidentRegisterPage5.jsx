import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
//Material UI
import { Grid, Typography, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import RoomCardResidentRegisterPage5 from "./RoomCardResidentRegisterPage5";
import { styled } from "@mui/material/styles";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { CreateResidentContext } from "../context/createResidentContext";
import EditCreateRoomResidentRegisterPage5 from "./EditCreateRoomResidentRegisterPage5";

const CustomButtonRoot = styled("button")(`
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

function ResidentRegisterPage5(props) {

  const {values, setValues} = useContext(CreateResidentContext)
  
  
  const location = useLocation();
  console.log(location)
  const [roomCollections, setRoomCollections] = useState(location.state.roomCollection)

  const history = useHistory();

  const handleSubmitPage5 = e => {

    try {
      history.push({
        pathname: "/residentregisterpage6",
        state: {
          email: location.state.email,
          phone: location.state.phone,
          password: location.state.password,
          confirmPassword: location.state.confirmPassword,
          firstName: location.state.firstName,
          lastName: location.state.lastName,
          idCard: location.state.idCard,
          idCardImgUrl: location.state.file,
          typeof: location.state.type,
          residentName: location.state.residentName,
          rateStar: location.state.rateStar,
          address: location.state.address,
          subDistrict: location.state.subDistrict,
          district: location.state.district,
          postalCode: location.state.postalCode,
          residentImgUrl: location.state.residentImgUrl ,
          timeCheckInToStart: values.timeCheckInToStart,
            timeCheckInToEnd: values.timeCheckInToEnd,
            timeCheckOutToStart: values.timeCheckOutToStart,
            timeCheckOutToEnd: values.timeCheckOutToEnd,
            cancelDate: values.cancelDate,
          roomTypeOf: location.state.roomTypeOf,
          roomAmount: location.state.roomAmount,
          roomSize: location.state.roomSize,
          maxGuest: location.state.maxGuest,
          optionRoomDetail: location.state.optionRoomDetail,
          roomImgUrl: location.state.roomImgUrl,
          roomShowImg: location.state.roomShowImg,
          roomCollection:roomCollections
        },
      });
    } catch(err) {
      console.dir(err);
    }
  }

  const addRoomCollection = e => {

    try {
      history.push({
        pathname: "/residentregisterpage4",
        state: {
          email: location.state.email,
          phone: location.state.phone,
          password: location.state.password,
          confirmPassword: location.state.confirmPassword,
          firstName: location.state.firstName,
          lastName: location.state.lastName,
          idCard: location.state.idCard,
          idCardImgUrl: location.state.file,
          typeof: location.state.type,
          residentName: location.state.residentName,
          rateStar: location.state.rateStar,
          address: location.state.address,
          subDistrict: location.state.subDistrict,
          district: location.state.district,
          province: location.state.province,
          postalCode: location.state.postalCode,
          roomCollection: roomCollections,
          roomTypeOf: location.state.roomTypeOf,
          roomAmount: location.state.roomAmount,
          roomSize: location.state.roomSize,
          maxGuest: location.state.maxGuest,
          optionRoomDetail: location.state.optionRoomDetail,
          noSmoking: location.state.noSmoking,
          petAllow: location.state.petAllow,
          roomImgUrl: location.state.roomImgUrl,
          roomShowImg: location.state.roomShowImg,
          roomCollection: location.state.roomCollection,
        },
      });
    } catch(err) {
      console.dir(err);
    }
  }

  const deleteRoomCollections = (index)=>{
    const newRoomCollections = [...roomCollections]
    newRoomCollections.splice(index,1)
    setRoomCollections(newRoomCollections)
  }

  return (
    <Container maxWidth="md" sx={{ mt: 18 }}>
      <Stack spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <Typography sx={{ fontSize: "36px" }}>ห้องทั้งหมดของคุณ</Typography>
        </Grid>

        {roomCollections.map((item,index) => (
          <RoomCardResidentRegisterPage5 
            key={index}
            index={index}
            roomCollection={item}
            roomTypeOf={item.roomTypeOf}
            roomAmount={item.roomAmount} 
            deleteRoomCollections={deleteRoomCollections}
          />
        ))}

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
                width: "100%",
                marginBottom: "50px",
                marginTop: "20px",
                height: "40px",
              }}
              onClick={addRoomCollection}
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
                height: "40px",
              }}
              onClick={handleSubmitPage5}
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
