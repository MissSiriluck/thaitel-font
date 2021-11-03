import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';

const CustomButtonRoot = styled('button')(`
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

function SubmitButton({ handleSubmit }) {

  return (
    <Container maxWidth='md'>
      <Grid item sx={{ display: 'flex', justifyContent: 'end' }}>
        <Grid container xs={12} justifyContent='end'>
          <Grid
            item
            xs={3}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              marginBottom: '25px',
            }}
          >
            <CustomButton
              sx={{
                background: '#c62828',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                width: '90%',
                marginBottom: '50px',
                marginTop: '20px',

                height: '40px',
              }}
              onClick={handleSubmit}
            >
              <Typography
                style={{
                  fontSize: 16,
                  justifyContent: 'start',
                }}
              >
                บันทึกข้อมูลที่พักของคุณ
              </Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SubmitButton;
