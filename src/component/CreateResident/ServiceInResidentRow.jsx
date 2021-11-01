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
import React from 'react';

function ServiceInResidentRow({ service, setService, index }) {
  return (
    <Stack direction='row' spacing={4} xs={12} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
      <FormControl component='fieldset' sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Grid xs={3}>
          <FormLabel component='legend'>
            <Typography sx={{ fontSize: '20px' }}>{service.serviceName}</Typography>
          </FormLabel>
        </Grid>

        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
          }}
        >
          <Grid xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
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
          </Grid>

          {!service.isFree ? (
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <TextField
                xs={3}
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
      </FormControl>
    </Stack>
  );
}

export default ServiceInResidentRow;
