import { Button, Checkbox, Container, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import axios from '../../config/axios'

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
          background-color: #4BB543;
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

function EditRoomForm({ room, editRoomCollection, index,handleClose }) {
  const [editRoomForm, setEditRoomForm, ] = useState(room); //{optionRoomDetail: '',maxGuest: '',roomSize: '',roomTypeOf: '',roomAmount: '',noSmoking: false,petAllow: false,pricePerNigth: '',roomImageFile: null,roomShowImg: '',}
  console.log(room)

  const [editRoomFormError, setEditRoomFormError] = useState({
    optionRoomDetail: '',
    maxGuest: '',
    roomSize: '',
    roomTypeOf: '',
    roomAmount: '',
    pricePerNigth: '',
    roomShowImg: '',
  })

  const handleClickSaveRoom = async () => {

    let allPass = true // สมมุติว่าทุกตัวผ่าน 

    if (!editRoomForm.optionRoomDetail) {
      allPass = false // สมมุติว่าถ้ามีตัวใดตัวนึงเข้า if ที่ check err, allPass จะมีค่าเป็น false 
      setEditRoomFormError((curr) => ({ ...curr, optionRoomDetail: 'กรุณากรอกรายละเอียดที่พักเพิ่มเติม'}))
    }
    if (!editRoomForm.maxGuest) {
      allPass = false
      setEditRoomFormError((curr) => ({ ...curr, maxGuest: 'กรุณากรอกรายละเอียดที่พักเพิ่มเติม'}))
    }
    if (!editRoomForm.roomSize) {
      allPass = false
      setEditRoomFormError((curr) => ({ ...curr, roomSize: 'กรุณากรอกรายละเอียดขนาดที่พัก'}))
    }
    if (!editRoomForm.roomTypeOf) {
      allPass = false
      setEditRoomFormError((curr) => ({ ...curr, roomTypeOf: 'กรุณากรอกรายละเอียดชนิดของห้อง'}))
    }
    if (!editRoomForm.roomAmount) {
      allPass = false
      setEditRoomFormError((curr) => ({ ...curr, roomAmount: 'กรุณากรอกปริมาณของห้องพัก'}))
    }
    if (!editRoomForm.pricePerNigth) {
      allPass = false
      setEditRoomFormError((curr) => ({ ...curr, pricePerNigth: 'กรุณากรอกรายละเอียดราคาของห้อง'}))
    }
    if (!editRoomForm.roomShowImg) {
      allPass = false
      setEditRoomFormError((curr) => ({ ...curr, roomShowImg: 'กรุณาเพิ่มรูปของห้องพัก'}))
    }

    if (allPass) { //ถ้าไม่มี err ถึงทำ function นี้
      editRoomCollection(index, editRoomForm);
      handleClose()
    }

  };

  const handleChange = (type, e) => {
    setEditRoomForm((cur) => ({ ...cur, [type]: e.target.value }));
  };

  const handleChangeCheckBox = (type) => {
    setEditRoomForm((cur) => ({ ...cur, [type]: !cur[type] }));
  };

  const handleChangeFileInRoomForm = (e) => {
    setEditRoomForm((cur) => ({ ...cur, roomImageFile: e.target.files[0] }));
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditRoomForm((cur) => ({ ...cur, roomShowImg: reader.result }));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Container maxWidth='md' sx={{ padding: 0 }}>
      <Grid container direction='column' sx={8} spacing={2}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', flexgrow: '1' }}>
              <Typography
                style={{
                  fontSize: 27,
                }}
              >
                โปรดเลือก
              </Typography>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '2px solid #c4c4c4',
                  borderRadius: '5px',
                  padding: '20px',
                  width: '100%',
                }}
                spacing={2}
                xs={12}
              >
                <Grid
                  item
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',

                    width: '100%',
                    alignItems: 'flex-end',
                  }}
                  xs={12}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: '10px',
                      }}
                    >
                      ประเภทห้องพัก
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='ประเภทห้องพัก'
                      size='small'
                      sx={{ width: '100%' }}
                      value={editRoomForm.roomTypeOf}
                      onChange={(e) => handleChange('roomTypeOf', e)}
                      helperText= {editRoomFormError.roomTypeOf ? editRoomFormError.roomTypeOf : ""}
                      error={editRoomFormError.roomTypeOf}
                    />
                  </Grid>
                </Grid>
                <Stack
                  item
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Grid item xs={3.5}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: '10px',
                      }}
                    >
                      จำนวนของห้องพัก
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='จำนวนของห้องพัก'
                      size='small'
                      sx={{ width: '100%', alignItems: 'stretch' }}
                      value={editRoomForm.roomAmount}
                      onChange={(e) => handleChange('roomAmount', e)}
                      helperText= {editRoomFormError.roomAmount ? editRoomFormError.roomAmount : ""}
                      error={editRoomFormError.roomAmount}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={3.5}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: '10px',
                      }}
                    >
                      ขนาดห้องพัก
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='ขนาดห้องพัก'
                      size='small'
                      sx={{ width: '100%', alignItems: 'stretch' }}
                      value={editRoomForm.roomSize}
                      onChange={(e) => handleChange('roomSize', e)}
                      helperText= {editRoomFormError.roomSize ? editRoomFormError.roomSize : ""}
                      error={editRoomFormError.roomSize}
                    />
                  </Grid>

                  <Grid item xs={3.8}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: '10px',
                      }}
                    >
                      จำนวนแขกสูงสุด
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='ประเภทห้องพัก'
                      size='small'
                      xs={5}
                      sx={{ width: '100%' }}
                      value={editRoomForm.maxGuest}
                      onChange={(e) => handleChange('maxGuest', e)}
                      helperText= {editRoomFormError.maxGuest ? editRoomFormError.maxGuest : ""}
                      error={editRoomFormError.maxGuest}
                    />
                  </Grid>
                </Stack>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: '10px',
                      }}
                    >
                      รายละเอียดห้องพักเพิ่มเติม
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='รายละเอียดห้องพักเพิ่มเติม'
                      size='small'
                      sx={{ width: '100%' }}
                      value={editRoomForm.optionRoomDetail}
                      onChange={(e) => handleChange('optionRoomDetail', e)}
                      helperText= {editRoomFormError.optionRoomDetail ? editRoomFormError.optionRoomDetail : ""}
                      error={editRoomFormError.optionRoomDetail}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              border: '2px solid #c4c4c4',
              borderRadius: '5px',
              marginTop: '20px',
              padding: '12px',
              display: 'flex',
            }}
          >
            <Grid item xs={7} sx={{ display: 'flex', paddingBottom: '3px' }}>
              <Box
                item
                xs={12}
                sx={{
                  border: '2px dotted #cfcfcf',
                  width: '100%',
                  margin: '5px',
                  height: '35vh',
                  alignItems: 'center',
                  borderRadius: '5px',
                  justifyContent: 'center',
                  backgroundImage: `url(${editRoomForm.roomShowImg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {editRoomForm.roomShowImg ? null : (
                  <Typography
                    style={{
                      fontSize: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    อัพโหลดรูปห้องพักจำนวน 1 รูป
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <label htmlFor='button-file-room-edit'>
                <Input
                  accept='image/*'
                  id='button-file-room-edit'
                  multiple
                  type='file'
                  onChange={handleChangeFileInRoomForm}
                />
                <Button variant='contained' component='span'>
                  กดเพื่อเพิ่มรูปภาพห้องพักของคุณ
                </Button>
              </label>
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: '50px', marginTop: '15px' }}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid
                item
                xs={5.8}
                sx={{
                  border: '2px solid #c4c4c4',
                  borderRadius: '5px',
                  padding: '20px',
                }}
              >
                <Typography sx={{ fontSize: '18px' }}>นโยบายข้อห้าม และ ข้อกำหนด</Typography>
                <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label='ห้ามสูบบุหรี่'
                    value={editRoomForm.noSmoking}
                    onChange={(e) => handleChangeCheckBox('noSmoking')}
                    checked={editRoomForm.noSmoking}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='ห้ามนำสัตว์เลี้ยงเข้ามา'
                    value={editRoomForm.petAllow}
                    onChange={(e) => handleChangeCheckBox('petAllow')}
                    checked={editRoomForm.petAllow}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={5.8}
                sx={{
                  border: '2px solid #c4c4c4',
                  borderRadius: '5px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Grid
                  item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '18px' }}>ราคาต่อคืน</Typography>
                  <TextField
                    id='outlined-password-input'
                    label='ราคาต่อคืน(บาท)'
                    size='small'
                    sx={{ width: '100%' }}
                    value={editRoomForm.pricePerNigth}
                    onChange={(e) => handleChange('pricePerNigth', e)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={12} justifyContent='center'>
          <Grid
            item
            xs={2.5}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              marginBottom: '25px',
            }}
          >
            <CustomButton
              sx={{
                background: '#64CEEF',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '50px',
                height: '40px',
              }}
              onClick={handleClickSaveRoom}
            >
              <Typography
                style={{
                  fontSize: 16,
                  justifyContent: 'start',
                }}
              >
                บันทึก
              </Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditRoomForm;
