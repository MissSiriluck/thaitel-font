import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import { Container, Grid, Typography, TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CreateResidentContext } from "../context/createResidentContext";
import { fontSize, width } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

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

function ResidentRegisterPage6() {

  
  const [parking, setParking] = useState({
    serviceName: 'ที่จอดรถ',
    isFree: true,
    pricePerTime: 0
  })

  const [breakfast, setBreakfast] = useState({
    serviceName: 'อาหารเช้า',
    isFree: true,
    pricePerTime: 0
  })

  const [wifi, setWifi] = useState({
    serviceName: 'Wifi',
    isFree: true,
    pricePerTime: 0
  })

  const [pool, setPool] = useState({
    serviceName: 'สระว่ายน้ำ',
    isFree: true,
    pricePerTime: 0
  })

  const [twentyfourHourReception, setTwentyfourHourReception] = useState(
    {
      serviceName: 'แผนกต้อนรับส่วนหน้า 24 ชั่วโมง',
      isFree: true,
      pricePerTime: 0
    }
  )
  const [bar, setBar] = useState({
      serviceName: 'บาร์',
      isFree: true,
      pricePerTime: 0  
  })

const [sauna, setSauna] = useState({
  serviceName: 'ห้องซาวน่า',
      isFree: true,
      pricePerTime: 0 
})

const [roomService, setRoomService] = useState({
  serviceName: 'roomService',
      isFree: true,
      pricePerTime: 0 
})

const [gym, setGym] = useState({
  serviceName: 'gym',
      isFree: true,
      pricePerTime: 0
})


const handleChangepricePerTimeForParking = e => {
  const newParking = {...parking}
  newParking.pricePerTime=e.target.value
  setParking(newParking)
}

const handleChangepricePerTimeForBreakfast = e => {
  const newBreakfast = {...breakfast}
  newBreakfast.pricePerTime=e.target.value
  setBreakfast(newBreakfast)
}

const handleChangepricePerTimeForWifi = e => {
  const newWifi = {...wifi}
  newWifi.pricePerTime=e.target.value
  setWifi(newWifi)
}

const handleChangepricePerTimeForPool = e => {
  const newPool = {...pool}
  newPool.pricePerTime=e.target.value
  setPool(newPool)
}

const handleChangepricePerTimeForTwentyfourHourReception = e => {
  const newTwentyfourHourReception = {...twentyfourHourReception}
  newTwentyfourHourReception.pricePerTime=e.target.value
  setTwentyfourHourReception(newTwentyfourHourReception)
}

const handleChangepricePerTimeForBar = e => {
  const newBar = {...bar}
  newBar.pricePerTime=e.target.value
  setBar(newBar)
}

const handleChangepricePerTimeForSauna = e => {
  const newSauna = {...sauna}
  newSauna.pricePerTime=e.target.value
  setSauna(newSauna)
}

const handleChangepricePerTimeForRoomService = e => {
  const newRoomService = {...roomService}
  newRoomService.pricePerTime=e.target.value
  setRoomService(newRoomService)
}

const handleChangepricePerTimeForGym = e => {
  const newGym = {...gym}
  newGym.pricePerTime=e.target.value
  setGym(newGym)
}

const location = useLocation();
console.log(location)

const history = useHistory();

const {values, setValues} = useContext(CreateResidentContext)

const handleSubmitPage6 = async e => {
  
  e.preventDefault();
  
  const serviceArray = [parking, breakfast, pool, twentyfourHourReception, bar, sauna, roomService, gym]

  const clone = [...values.serviceCollection]

  clone.push(serviceArray)

  setValues({ ...values, serviceCollection: clone});
  
  try {
    history.push({
      pathname: "/residentregisterpage8",
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
        residentImgUrl: location.state.residentImgUrl,
        timeCheckInToStart: location.state.timeCheckInToStart,
        timeCheckInToEnd: location.state.timeCheckInToEnd,
        timeCheckOutToStart: location.state.timeCheckOutToStart,
        timeCheckOutToEnd: location.state.timeCheckOutToEnd,
        cancelDate: location.state.cancelDate,
        roomTypeOf: location.state.roomTypeOf,
        roomAmount: location.state.roomAmount,
        roomSize: location.state.roomSize,
        maxGuest: location.state.maxGuest,
        optionRoomDetail: location.state.optionRoomDetail,
        roomImgUrl: location.state.roomImgUrl,
        roomShowImg: location.state.roomShowImg,
        roomCollection: location.state.roomCollection,
        serviceCollection: clone 
      },
    });
  } catch(err) {
    console.dir(err);
  }
};

  return (
    <Container maxWidth='md' sx={{ mt: 18 }}>
        <Box>
      <Grid container direction='column'>
        <Grid item>
          <Typography sx={{ fontSize: "36px", marginBottom: "5px" }}>
            บริการภายในโรงแรม
          </Typography>
        </Grid>
        <Stack
          direction='column'
          spacing={2}
          sx={{
            border: "2px solid #c4c4c4",
            borderRadius: "10px",
            padding: "20px",
          }}
        >

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ display:'flex', justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>ที่จอดรถ</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  defaultValue={parking.isFree}
                  sx={{ display: 'flex', flexDirection: 'row'}}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setParking(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setParking(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !parking.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={parking.pricePerTime}
                  onChange={handleChangepricePerTimeForParking}
                  />
              </Grid> : null }
              
            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ display:'flex', justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>อาหารเช้า</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  defaultValue={breakfast.isFree}
                  sx={{ display: 'flex', flexDirection: 'row'}}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=> setBreakfast(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=> setBreakfast(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !breakfast.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={breakfast.pricePerTime}
                  onChange={handleChangepricePerTimeForBreakfast}
                  />
              </Grid> : null }
              
            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>Wifi</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}  sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={wifi.isFree}

                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setWifi(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setWifi(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !wifi.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={wifi.pricePerTime}
                  onChnage={handleChangepricePerTimeForWifi}
                  />
              </Grid> : null }

            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>สระว่ายน้ำ</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={pool.isFree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setPool(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setPool(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !pool.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={pool.pricePerTime} 
                  onChange={handleChangepricePerTimeForPool}
                  />
              </Grid> : null }

            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px", paddingRight: '25px' }}>แผนกต้อนรับส่วนหน้า 24 ชั่วโมง</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={twentyfourHourReception.isFree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setTwentyfourHourReception(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setTwentyfourHourReception(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !twentyfourHourReception.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={twentyfourHourReception.pricePerTime}
                  onChange={handleChangepricePerTimeForTwentyfourHourReception}
                  />
              </Grid> : null }
            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>บาร์</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={bar.isFree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setBar(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setBar(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !bar.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={bar.pricePerTime} 
                  onChange={handleChangepricePerTimeForBar}
                  />
              </Grid> : null }
            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>ห้องซาวน่า</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={sauna.isFree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setSauna(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setSauna(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !sauna.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  value={sauna.pricePerTime}
                  onChange={handleChangepricePerTimeForSauna}
                  />
              </Grid> : null }

            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >  

            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend" ><Typography sx={{ fontSize: "20px" }}>Room service</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={roomService.isFree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=> setRoomService(cur=>{
                    return {...cur, isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=> setRoomService(cur=>{
                    return {...cur, isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !roomService.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  onChange={handleChangepricePerTimeForRoomService}
                  value={roomService.pricePerTime}
                  />
              </Grid> : null }

            </Grid>
          </FormControl>
          </Stack>

          <Stack
            direction='row'
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <FormControl component="fieldset" sx={{ display:'flex', flexDirection:'row' , width: '100%'}}>
            <Grid xs={3}>
            <FormLabel component="legend"><Typography sx={{ fontSize: "20px" }}>ห้องออกกำลังกาย</Typography></FormLabel>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12} sx={{ display:'flex', flexDirection:'row'}}>

                <RadioGroup
                  aria-label="gender"
                  serviceName="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={gym.isFree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setGym(cur=>{
                    return {...cur,isFree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setGym(cur=>{
                    return {...cur,isFree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !gym.isFree ?  <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id='outlined-password-input'
                  label='(บาท)'
                  size='small'
                  sx={{ width: "100%", alignItems: "stretch" }}
                  onChange={handleChangepricePerTimeForGym}
                  value={gym.isFree}
                  />
              </Grid> : null }
            </Grid>
          </FormControl>
          </Stack>
        </Stack> 
      </Grid>

      <Grid item sx={{ display: "flex", justifyContent: "end" }}>
        <Grid container xs={12} justifyContent='end'>
          <Grid
            item
            xs={3}
            md={3}
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

                height: "40px",
              }}
              onClick={handleSubmitPage6}
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
        </Box>
    </Container>
  );
}

export default ResidentRegisterPage6;
