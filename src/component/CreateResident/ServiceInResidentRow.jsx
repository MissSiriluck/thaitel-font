import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React ,{useState}from 'react';
import FreeServiceInResidentRow from './FeeServiceInresidentRow';

function ServiceInResidentRow({ service, setService, index }) {

  const handleChangeHavingService = (boolean) => {
    const newService = {...service, isHaving: boolean}
    setService(index, newService)
  }


  return (
    <Stack direction='row' xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
      <FormControl component='fieldset' sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
        <Grid xs={2.5}>
          <FormLabel component='legend' sx={{ alignItems: 'center' }}>
            <Typography sx={{ fontSize: '20px', alignItems: 'center' }}>
              {service?.serviceName === "parking" ? (
                    "ที่จอดรถ"
                  ) : service?.serviceName === "breakFast" ? (
                    "อาหารเช้า"
                  ) : service?.serviceName === "wifi" ? (
                    "Wifi"
                  ) : service?.serviceName === "swimingPool" ? (
                    "สระว่ายน้ำ"
                  ) : service?.serviceName === "bar" ? (
                    "บาร์"
                  ) : service?.serviceName === "sauna" ? (
                    "ห้องซาวน่า"
                  ) : service?.serviceName === "reception" ? (
                    "แผนกต้อนรับ 24 ชั่วโมง"
                  ) : service?.serviceName === "roomService" ? (
                    "Room Service"
                  ) : service?.serviceName === "fitnessRoom" ? (
                    "ห้องฟิตเนส"
                  ) : null}</Typography>
          </FormLabel>
        </Grid>

        <Grid xs={4} sx={{ display: 'flex', flexDirection: 'row', marginLeft: '25px' }}>
          <RadioGroup
            aria-label='gender'
            serviceName='controlled-radio-buttons-group'
            defaultValue={service.isHaving}
            sx={{ display: 'flex', flexDirection: 'row' }}
          >
            <FormControlLabel
              value={false}
              onChange={(e) => handleChangeHavingService(false)}
              control={<Radio />}
              label='ไม่มีบริการ'
              checked={service.isHaving === false}
            />
            <FormControlLabel
              value={true}
              control={<Radio />}
              onChange={(e) => handleChangeHavingService(true)}
              label='มีบริการ'
              checked={service.isHaving === true}
            />
          </RadioGroup>
        </Grid>

        {service.isHaving ? <FreeServiceInResidentRow service={service} setService={setService} index={index}/> : null}
        
      </FormControl>
    </Stack>
  );
}

export default ServiceInResidentRow;
