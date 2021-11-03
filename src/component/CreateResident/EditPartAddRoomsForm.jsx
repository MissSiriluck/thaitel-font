import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';

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

function EditPartAddRoomsForm({ addRoomCollection }) {
  const [roomForm, setRoomForm] = useState({
    optionRoomDetail: '',
    maxGuest: '',
    roomSize: '',
    roomTypeOf: '',
    roomAmount: '',
    noSmoking: false,
    petAllow: false,
    pricePerNigth: '',
    roomImageFile: null,
    roomShowImg: '',
  });

  const [roomFormError, setRoomFormError] = useState({
    optionRoomDetail: '',
    maxGuest: '',
    roomSize: '',
    roomTypeOf: '',
    roomAmount: '',
    pricePerNigth: '',
    roomShowImg: '',
  })

  const handleChange = (type, e) => {
    setRoomForm((cur) => ({ ...cur, [type]: e.target.value }));
  };

  const handleChangeCheckBox = (type) => {
    setRoomForm((cur) => ({ ...cur, [type]: !cur[type] }));
  };

  const handleChangeFileInRoomForm = (e) => {
    setRoomForm((cur) => ({ ...cur, roomImageFile: e.target.files[0] }));
    const reader = new FileReader();
    reader.onloadend = () => {
      setRoomForm((cur) => ({ ...cur, roomShowImg: reader.result }));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleClickAddRoom = () => {

    let allPass = true // สมมุติว่าทุกตัวผ่าน 

    if (!roomForm.optionRoomDetail) {
      allPass = false // สมมุติว่าถ้ามีตัวใดตัวนึงเข้า if ที่ check err, allPass จะมีค่าเป็น false 
      setRoomFormError((curr) => ({ ...curr, optionRoomDetail: 'กรุณากรอกรายละเอียดที่พักเพิ่มเติม'}))
    }
    if (!roomForm.maxGuest) {
      allPass = false
      setRoomFormError((curr) => ({ ...curr, maxGuest: 'กรุณากรอกรายละเอียดที่พักเพิ่มเติม'}))
    }
    if (!roomForm.roomSize) {
      allPass = false
      setRoomFormError((curr) => ({ ...curr, roomSize: 'กรุณากรอกรายละเอียดขนาดที่พัก'}))
    }
    if (!roomForm.roomTypeOf) {
      allPass = false
      setRoomFormError((curr) => ({ ...curr, roomTypeOf: 'กรุณากรอกรายละเอียดชนิดของห้อง'}))
    }
    if (!roomForm.roomAmount) {
      allPass = false
      setRoomFormError((curr) => ({ ...curr, roomAmount: 'กรุณากรอกปริมาณของห้องพัก'}))
    }
    if (!roomForm.pricePerNigth) {
      allPass = false
      setRoomFormError((curr) => ({ ...curr, pricePerNigth: 'กรุณากรอกรายละเอียดราคาของห้อง'}))
    }
    if (!roomForm.roomShowImg) {
      allPass = false
      setRoomFormError((curr) => ({ ...curr, roomShowImg: 'กรุณาเพิ่มรูปของห้องพัก'}))
    }

    if (allPass) { //ถ้าไม่มี err ถึงทำ function นี้
      
      addRoomCollection(roomForm);
    }

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
                  fontSize: 20,
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
                  paddingTop: '10px',
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
                        fontSize: 14,
                        marginTop: '10px',
                      }}
                    >
                      ประเภทห้องพัก
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='ประเภทห้องพัก'
                      size='small'
                      sx={{ width: '100%', marginTop: '0px' }}
                      value={roomForm.roomTypeOf}
                      onChange={(e) => handleChange('roomTypeOf', e)}
                      helperText= {roomFormError.roomTypeOf ? roomFormError.roomTypeOf : ""}
                      error={roomFormError.roomTypeOf}
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
                        fontSize: 14,
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
                      value={roomForm.roomAmount}
                      onChange={(e) => handleChange('roomAmount', e)}
                      helperText= {roomFormError.roomAmount ? roomFormError.roomAmount : ""}
                      error={roomFormError.roomAmount}
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
                        fontSize: 14,
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
                      value={roomForm.roomSize}
                      onChange={(e) => handleChange('roomSize', e)}
                      helperText= {roomFormError.roomSize ? roomFormError.roomSize : ""}
                      error={roomFormError.roomSize}
                    />
                  </Grid>

                  <Grid item xs={3.8}>
                    <Typography
                      style={{
                        fontSize: 14,
                        marginTop: '10px',
                      }}
                    >
                      จำนวนแขกสูงสุด
                    </Typography>
                    <TextField
                      id='outlined-password-input'
                      label='จำนวนแขกสูงสุด'
                      size='small'
                      xs={5}
                      sx={{ width: '100%' }}
                      value={roomForm.maxGuest}
                      onChange={(e) => handleChange('maxGuest', e)}
                      helperText= {roomFormError.maxGuest ? roomFormError.maxGuest : ""}
                      error={roomFormError.maxGuest}
                    />
                  </Grid>
                </Stack>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        fontSize: 14,
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
                      value={roomForm.optionRoomDetail}
                      onChange={(e) => handleChange('optionRoomDetail', e)}
                      helperText= {roomFormError.optionRoomDetail ? roomFormError.optionRoomDetail : ""}
                      error={roomFormError.optionRoomDetail}
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
              marginTop: '10px',
              padding: '10px',
              display: 'flex',
            }}
          >
            <Grid item xs={7} sx={{ display: 'flex', flexDirection: 'column' ,paddingBottom: '3px' }}>
              <Box
                item
                xs={12}
                sx={{
                  width: '100%',
                  margin: '5px',
                  height: '24vh',
                  alignItems: 'center',
                  borderRadius: '5px',
                  justifyContent: 'center',
                  backgroundImage: `url(${roomForm.roomShowImg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
                border={ roomFormError.roomShowImg ? '2px dotted #d32f2f' : '2px dotted #cfcfcf' } 
              >
                {roomForm.roomShowImg ? null : (
                  <Typography
                    style={{
                      fontSize: '14px',
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
              {roomFormError.roomShowImg ? <Typography style={{ color: '#d32f2f', fontSize: '0.5rem', marginTop: '3px' }}> {roomFormError.roomShowImg} </Typography> : ""}
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
              <label htmlFor='button-file-room'>
                <Input
                  accept='image/*'
                  id='button-file-room'
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
          <Grid item sx={{ marginBottom: '20px', marginTop: '10px' }}>
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
                <Typography sx={{ fontSize: '16px' }}>นโยบายข้อห้าม และ ข้อกำหนด</Typography>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', fontSize: '12px'}}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label='ห้ามสูบบุหรี่'
                    value={roomForm.noSmoking}
                    onChange={(e) => handleChangeCheckBox('noSmoking')}
                    checked={roomForm.noSmoking}
                    sx={{ fontSize: '12px' }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='ห้ามนำสัตว์เลี้ยงเข้ามา'
                    value={roomForm.petAllow}
                    onChange={(e) => handleChangeCheckBox('petAllow')}
                    checked={roomForm.petAllow}
                    sx={{ fontSize: '12px' }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={5.8}
                sx={{
                  border: '2px solid #c4c4c4',
                  borderRadius: '5px',
                  padding: '0px 20px',
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
                  <Typography sx={{ fontSize: '14px' }}>ราคาต่อคืน</Typography>
                  <TextField
                    id='outlined-password-input'
                    label='ราคาต่อคืน(บาท)'
                    size='small'
                    sx={{ width: '100%', fontSize: '12px', height: "10px" }}
                    value={roomForm.pricePerNigth}
                    onChange={(e) => handleChange('pricePerNigth', e)}
                    helperText= {roomFormError.pricePerNigth ? roomFormError.pricePerNigth : ""}
                    error={roomFormError.pricePerNigth}
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
              marginBottom: '20px',
            }}
          >
            <CustomButton
              sx={{
                background: '#64CEEF',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                width: '90%',
                marginBottom: '10px',
                height: '35px',
              }}
              onClick={handleClickAddRoom}
            >
              <Typography
                style={{
                  fontSize: 14,
                  justifyContent: 'start',
                }}
              >
                เพิ่ม
              </Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditPartAddRoomsForm;
