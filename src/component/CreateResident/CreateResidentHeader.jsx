import { Grid, Typography } from '@mui/material';
import ImageCreateResident from '../../assets/images/bg_container_residentregisterpage2.jpeg'
import React from 'react';

function CreateResidentHeader() {
  return (
    <Grid container xs={12} sx={{ mt: 18 }}>
      <Grid
        item
        sx={{
          display: 'flex',
          height: '40vh',
          alignItems: 'center',
          padding: '45px',
          background: 'black',
          marginBottom: '30px',
          backgroundImage: `url(${ImageCreateResident})`,
          backgroundSize: 'cover',
          backgroundPositionY: '42%'
        }}
        xs={12}
      >
        <Typography sx={{ color: 'white', fontSize: '24px', width: '450px' }}>
          มอบประสบการณ์การ ที่คุณต้องการแบ่งบัน... เริ่มต้นเลือกประเภทที่พักของคุณ
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CreateResidentHeader;
