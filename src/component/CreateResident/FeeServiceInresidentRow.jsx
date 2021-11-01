import React ,{useState} from 'react';
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


function FreeServiceInResidentRow( {service, setService, index} ) {

    return (
        <>
          <Grid xs={5.2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', border: '2px solid rgba(22, 38, 77, 0.8)', borderRadius: '10px', padding: '5px', paddingLeft: '15px'}}>
            <RadioGroup
              aria-label='gender'
              serviceName='controlled-radio-buttons-group'
              defaultValue={service.isFree}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                onChange={(e) => setService(index, { ...service, isFree: true })}
                label='บริการฟรี'
              />
              <FormControlLabel
                value={false}
                onChange={(e) => setService(index, { ...service, isFree: false })}
                control={<Radio />}
                label='มีค่าบริการ'
              />
            </RadioGroup>
          {!service.isFree ? (
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}
              xs={3.5}
            >
              <TextField
                xs={12}
                id='outlined-password-input'
                label='(บาท)'
                size='small'
                sx={{ width: '100%', alignItems: 'stretch' }}
                value={service.pricePerTime}
                onChange={(e) => setService(index, { ...service, pricePerTime: e.target.value })}
              />
            </Grid>
          ) : null}
          </Grid>


        </>
    )
}

export default FreeServiceInResidentRow
