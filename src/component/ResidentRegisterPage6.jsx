import React, { useState } from "react";
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

function ResidentRegisterPage6() {


  const [parking, setParking] = useState({
    name: 'ที่จอดรถ',
    isfree: true,
    pricePerNight: 0
  })

  const [breakfast, setBreakfast] = useState({
    name: 'อาหารเช้า',
    isfree: true,
    pricePerNight: 0
  })

  const [wifi, setWifi] = useState({
    name: 'Wifi',
    isfree: true,
    pricePerNight: 0
  })

  const [pool, setPool] = useState({
    name: 'สระว่ายน้ำ',
    isfree: true,
    pricePerNight: 0
  })

  const [twentyfourHourReception, setTwentyfourHourReception] = useState(
    {
      name: 'แผนกต้อนรับส่วนหน้า 24 ชั่วโมง',
      isfree: true,
      pricePerNight: 0
    }
  )
  const [bar, setBar] = useState({
      name: 'บาร์',
      isfree: true,
      pricePerNight: 0  
  })

const [sauna, setSauna] = useState({
  name: 'ห้องซาวน่า',
      isfree: true,
      pricePerNight: 0 
})

const [roomService, setRoomService] = useState({
  name: 'roomService',
      isfree: true,
      pricePerNight: 0 
})

const [gym, setGym] = useState({
  name: 'gym',
      isfree: true,
      pricePerNight: 0
})

const handleChangePricePerNightForParking = e => {
  const newParking = {...parking}
  newParking.pricePerNight=e.target.value
  setParking(newParking)
}

const handleChangePricePerNightForBreakfast = e => {
  const newBreakfast = {...breakfast}
  newBreakfast.pricePerNight=e.target.value
  setBreakfast(newBreakfast)
}

const handleChangePricePerNightForWifi = e => {
  const newWifi = {...wifi}
  newWifi.pricePerNight=e.target.value
  setWifi(newWifi)
}

const handleChangePricePerNightForPool = e => {
  const newPool = {...pool}
  newPool.pricePerNight=e.target.value
  setPool(newPool)
}

const handleChangePricePerNightForTwentyfourHourReception = e => {
  const newTwentyfourHourReception = {...twentyfourHourReception}
  newTwentyfourHourReception.pricePerNight=e.target.value
  setTwentyfourHourReception(newTwentyfourHourReception)
}

const handleChangePricePerNightForBar = e => {
  const newBar = {...bar}
  newBar.pricePerNight=e.target.value
  setBar(newBar)
}

const handleChangePricePerNightForSauna = e => {
  const newSauna = {...sauna}
  newSauna.pricePerNight=e.target.value
  setSauna(newSauna)
}

const handleChangePricePerNightForRoomService = e => {
  const newRoomService = {...roomService}
  newRoomService.pricePerNight=e.target.value
  setRoomService(newRoomService)
}

const handleChangePricePerNightForGym = e => {
  const newGym = {...gym}
  newGym.pricePerNight=e.target.value
  setGym(newGym)
}

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
                  name="controlled-radio-buttons-group"
                  defaultValue={parking.isfree}
                  sx={{ display: 'flex', flexDirection: 'row'}}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setParking(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setParking(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !parking.isfree ?  <Grid
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
                  value={parking.pricePerNight}
                  onChange={handleChangePricePerNightForParking}
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
                  name="controlled-radio-buttons-group"
                  defaultValue={breakfast.isfree}
                  sx={{ display: 'flex', flexDirection: 'row'}}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=> setBreakfast(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=> setBreakfast(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !breakfast.isfree ?  <Grid
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
                  value={breakfast.pricePerNight}
                  onChange={handleChangePricePerNightForBreakfast}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={wifi.isfree}

                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setWifi(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setWifi(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !wifi.isfree ?  <Grid
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
                  value={wifi.pricePerNight}
                  onChnage={handleChangePricePerNightForWifi}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={pool.isfree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setPool(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setPool(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !pool.isfree ?  <Grid
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
                  value={pool.pricePerNight} 
                  onChange={handleChangePricePerNightForPool}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={twentyfourHourReception.isfree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setTwentyfourHourReception(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setTwentyfourHourReception(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !twentyfourHourReception.isfree ?  <Grid
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
                  value={twentyfourHourReception.pricePerNight}
                  onChange={handleChangePricePerNightForTwentyfourHourReception}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={bar.isfree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setBar(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setBar(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !bar.isfree ?  <Grid
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
                  value={bar.pricePerNight} 
                  onChange={handleChangePricePerNightForBar}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={sauna.isfree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setSauna(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setSauna(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !sauna.isfree ?  <Grid
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
                  value={sauna.pricePerNight}
                  onChange={handleChangePricePerNightForSauna}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={roomService.isfree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=> setRoomService(cur=>{
                    return {...cur, isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=> setRoomService(cur=>{
                    return {...cur, isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !roomService.isfree ?  <Grid
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
                  onChange={handleChangePricePerNightForRoomService}
                  value={roomService.pricePerNight}
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
                  name="controlled-radio-buttons-group"
                  sx={{ display: 'flex', flexDirection: 'row'}}
                  defaultValue={gym.isfree}
                >
                  <FormControlLabel value={true} control={<Radio />} onChange={e=>setGym(cur=>{
                    return {...cur,isfree:true}
                  })} label="บริการฟรี" />
                  <FormControlLabel value={false} onChange={e=>setGym(cur=>{
                    return {...cur,isfree:false}
                  })} control={<Radio />} label="มีค่าบริการ" />
                </RadioGroup>

              </Grid>

              { !gym.isfree ?  <Grid
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
                  onChange={handleChangePricePerNightForGym}
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
        </Box>
    </Container>
  );
}

export default ResidentRegisterPage6;
