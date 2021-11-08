import { Button, Container, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useContext } from 'react';
import { CreateResidentContext2 } from '../../context/CreateResidentContext2';
import ChooseTypeForm from './ChooseTypeForm';

function ResidentDetailForm() {
  const Input = styled('input')({
    display: 'none',
  });

  const { createResident, setCreateResident, createResidentError, setCreateResidentError } = useContext(CreateResidentContext2);

  const handleChangeFile = (e) => {
    setCreateResident((cur) => ({ ...cur, residentImageFile: e.target.files[0] }));
    const reader = new FileReader();
    reader.onloadend = () => {
      setCreateResident((cur) => ({ ...cur, residentImageUrl: reader.result }));
    };
    reader.readAsDataURL(e.target.files[0]);

    setCreateResidentError({ ...createResidentError, residentImageUrl: '' })
  };

  console.log(`createResidentError.residentImageUrl`, createResidentError.residentImageUrl)

  const handleChange = (props, event) => {
    setCreateResident({ ...createResident, [props]: event.target.value });
    setCreateResidentError({ ...createResidentError, [props]: '' })
  };

  return (
    <Container maxWidth='md'>
      <Box component='form'>
        <Grid Container sx={{ marginTop: '20px', marginBottom: '5px' }}>
          <Typography sx={{ fontSize: '36px' }}>รายละเอียดที่พัก</Typography>
        </Grid>
        <Grid
          Container
          sx={{
            flexDirection: 'column',
            border: '2px solid #c4c4c4',
            borderRadius: '5px',
            padding: '20px',
            width: '100%',
          }}
        >

          <Grid item>
          <Grid item>
            <ChooseTypeForm createResident={createResident} setCreateResident={setCreateResident} createResidentError={createResidentError} setCreateResidentError={setCreateResidentError} />
          </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: '40px',
              }}
              xs={11}
            >
              <Grid item xs={5.5}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  ชื่อที่พักที่ให้บริการ
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='ชื่อที่พักที่ให้บริการ'
                  size='small'
                  value={createResident.residentName}
                  onChange={(e) => handleChange('residentName', e)}
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  helperText= {createResidentError.residentName ? createResidentError.residentName : ""}
                  error={createResidentError.residentName}
                />
               
              </Grid>
              <Grid item xs={5.5}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  ระดับดาว(ถ้ามี)
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='ระดับดาว'
                  size='small'
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  value={createResident.rateStar}
                  onChange={(e) => handleChange('rateStar', e)}
                  helperText= {createResidentError.rateStar ? createResidentError.rateStar : ""}
                  error={createResidentError.rateStar}
                />
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: '40px',
              }}
              xs={11}
            >
              <Grid item xs={7.7}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  บ้านเลขที่ ซอย ถนน
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='บ้านเลขที่ ซอย ถนน'
                  size='small'
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  value={createResident.address}
                  onChange={(e) => handleChange('address', e)}
                  helperText= {createResidentError.address ? createResidentError.address : ""}
                  error={createResidentError.address}
                />
              </Grid>
              <Grid item xs={3.5}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  ตำบล/แขวง
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='ตำบล/แขวง'
                  size='small'
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  value={createResident.subDistrict}
                  onChange={(e) => handleChange('subDistrict', e)}
                  helperText= {createResidentError.subDistrict ? createResidentError.subDistrict : ""}
                  error={createResidentError.subDistrict}
                />
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: '40px',
              }}
              xs={11}
            >
              <Grid item xs={3.5}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  อำเภอ/เขต
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='อำเภอ/เขต'
                  size='small'
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  value={createResident.district}
                  onChange={(e) => handleChange('district', e)}
                  helperText= {createResidentError.district ? createResidentError.district : ""}
                  error={createResidentError.district}
                />
              </Grid>
              <Grid item xs={3.5}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  จังหวัด
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='จังหวัด'
                  size='small'
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  value={createResident.province}
                  onChange={(e) => handleChange('province', e)}
                  helperText= {createResidentError.province ? createResidentError.province : ""}
                  error={createResidentError.province}
                />
              </Grid>
              <Grid item xs={3.5}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: '10px',
                  }}
                >
                  รหัสไปรษณีย์
                </Typography>
                <TextField
                  id='outlined-password-input'
                  label='รหัสไปรษณีย์'
                  size='small'
                  sx={{ width: '100%', alignItems: 'stretch' }}
                  value={createResident.postalCode}
                  onChange={(e) => handleChange('postalCode', e)}
                  helperText= {createResidentError.postalCode ? createResidentError.postalCode : ""}
                  error={createResidentError.postalCode}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                xs={12}
              >
                <Grid item xs={11}>
                  <Typography
                    style={{
                      fontSize: 18,
                      marginTop: '10px',
                    }}
                  >
                    รายละเอียดที่พัก
                  </Typography>
                  <Grid xs={12}>
                  <TextField
                    id="filled-multiline-static"
                    label="รายละเอียดที่พัก"
                    multiline
                    rows={4}
                    value={createResident.description}
                    onChange={(e) => handleChange('description', e)}
                    helperText= {createResidentError.description ? createResidentError.description : ""}
                    error={createResidentError.description}
                    sx={{
                      width: '100%',
                      // padding: '18px',
                      fontFamily: '"Noto Sans Thai", sans-serif',
                      fontSize: '16px',
                    }}
                  />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Typography
            style={{
              fontSize: '30px',
              marginTop: '20px',
              marginBottom: '5px',
            }}
          >
            การเพิ่มรูปที่พักของคุณ
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid #c4c4c4',
            borderRadius: '5px',

            padding: '20px',
            width: '100%',
          }}
        >
          <Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              xs={12}
            >
              <Grid item xs={12}>
                <Grid
                  Container
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Grid xs={12} sx={{ display: 'flex', height: '240px' }}>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <Box
                        item
                        xs={5.9}
                        sx={{

                          width: '100%',
                          margin: '5px',
                          alignItems: 'center',
                          borderRadius: '5px',
                          height: '100%',
                          justifyContent: 'center',
                          backgroundImage: `url(${createResident.residentImageUrl})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                        }}
                        border={ createResidentError.residentImageUrl ? '2px dotted #ba000d' : '2px dotted #cfcfcf' } 
                      >
                        {createResident.residentImageUrl ? null : (
                          <Typography
                            style={{
                              fontSize: '18px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: '100%',
                            }}
                          >
                            อัพโหลดรูปภาพที่พักของคุณ
                          </Typography>
                        )}
                      </Box>
                        {createResidentError.residentImageUrl ? <Typography style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '3px' }}> {createResidentError.residentImageUrl} </Typography> : ""}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'end',
                          height: '40px',
                        }}
                      >
                        <label htmlFor='contained-button-file' sx={{ height: '40px' }}>
                          <Input
                            accept='image/*'
                            id='contained-button-file'
                            multiple
                            type='file'
                            onChange={handleChangeFile}
                          />
                          <Button variant='contained' component='span'>
                            กดเพื่อเพิ่มรูปภาพที่พักของคุณ
                          </Button>
                        </label>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid Container sx={{ marginTop: '20px', marginBottom: '5px' }}>
          <Typography sx={{ fontSize: '30px' }}>นโยบายข้อห้าม</Typography>
        </Grid>
        <Grid Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid
            item
            xs={5.8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid #c4c4c4',
              borderRadius: '5px',
              padding: '20px',
              width: '100%',
            }}
          >
            <Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                xs={12}
              >
                <Grid item xs={12}>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: 24,
                        marginBottom: '10px',
                      }}
                    >
                      เวลาที่เช็คอิน
                    </Typography>
                  </Grid>
                  <Grid>
                    <Grid item sx={{ display: 'flex' }}>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginBottom: '10px',
                          }}
                        >
                          ตั้งแต่ :
                        </Typography>
                      </Grid>
                      <Grid xs={9}>
                        <TextField
                          id='outlined-password-input'
                          label='เวลาที่เช็คอินตั้งแต่ (นาฬิกา)'
                          size='small'
                          sx={{
                            width: '100%',
                            alignItems: 'stretch',
                            marginBottom: '12px',
                          }}
                          value={createResident.timeCheckInToStart}
                          onChange={(e) => handleChange('timeCheckInToStart', e)}
                          helperText= {createResidentError.timeCheckInToStart ? createResidentError.timeCheckInToStart : ""}
                          error={createResidentError.timeCheckInToStart}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginLeft: '10px',
                          }}
                        >
                          นาฬิกา
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid>
                    <Grid item sx={{ display: 'flex' }}>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginBottom: '10px',
                          }}
                        >
                          ถึง :
                        </Typography>
                      </Grid>
                      
                      <Grid xs={9}>
                        <TextField
                          id='outlined-password-input'
                          label='เวลาที่เช็คอินได้ถึง (นาฬิกา)'
                          size='small'
                          sx={{
                            width: '100%',
                            alignItems: 'stretch',
                            marginBottom: '12px',
                          }}
                          value={createResident.timeCheckInToEnd}
                          onChange={(e) => handleChange('timeCheckInToEnd', e)}
                          helperText= {createResidentError.timeCheckInToEnd ? createResidentError.timeCheckInToEnd : ""}
                          error={createResidentError.timeCheckInToEnd}
                        />
                        <Typography
                          style={{
                            fontSize: 14,
                            marginBottom: '10px',
                            color: '#c4c4c4',
                          }}
                        >
                          ตัวอย่างการกรอกรายละเอียด เช่น 9.00
                        </Typography>
                      </Grid>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginLeft: '10px',
                          }}
                        >
                          นาฬิกา
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={5.8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid #c4c4c4',
              borderRadius: '5px',
              padding: '20px',
              width: '100%',
            }}
          >
            <Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                xs={12}
              >
                <Grid item xs={12}>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: 24,
                        marginBottom: '10px',
                      }}
                    >
                      เวลาที่เช็คเอาท์
                    </Typography>
                  </Grid>
                  <Grid>
                    <Grid item sx={{ display: 'flex' }}>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginBottom: '10px',
                          }}
                        >
                          ตั้งแต่ :
                        </Typography>
                      </Grid>
                      <Grid xs={9}>
                        <TextField
                          id='outlined-password-input'
                          label='เวลาที่เช็คเอาท์ตั้งแต่ (นาฬิกา)'
                          size='small'
                          sx={{
                            width: '100%',
                            alignItems: 'stretch',
                            marginBottom: '12px',
                          }}
                          value={createResident.timeCheckOutToStart}
                          onChange={(e) => handleChange('timeCheckOutToStart', e)}
                          helperText= {createResidentError.timeCheckOutToStart ? createResidentError.timeCheckOutToStart : ""}
                          error={createResidentError.timeCheckOutToStart}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginLeft: '10px',
                          }}
                        >
                          นาฬิกา
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid>
                    <Grid item sx={{ display: 'flex' }}>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginBottom: '10px',
                          }}
                        >
                          ถึง :
                        </Typography>
                      </Grid>
                      <Grid xs={9}>
                        <TextField
                          id='outlined-password-input'
                          label='เวลาที่เช็คเอาท์ถึง (นาฬิกา)'
                          size='small'
                          sx={{
                            width: '100%',
                            alignItems: 'stretch',
                            marginBottom: '12px',
                          }}
                          value={createResident.timeCheckOutToEnd}
                          onChange={(e) => handleChange('timeCheckOutToEnd', e)}
                          helperText= {createResidentError.timeCheckOutToEnd ? createResidentError.timeCheckOutToEnd : ""}
                          error={createResidentError.timeCheckOutToEnd}
                        />
                        <Typography
                          style={{
                            fontSize: 14,
                            marginBottom: '10px',
                            color: '#c4c4c4',
                          }}
                        >
                          ตัวอย่างการกรอกรายละเอียด เช่น 16.00
                        </Typography>
                      </Grid>
                      <Grid xs={3}>
                        <Typography
                          style={{
                            fontSize: 18,
                            marginLeft: '10px',
                          }}
                        >
                          นาฬิกา
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Typography
            style={{
              fontSize: '30px',
              marginTop: '20px',
              marginBottom: '5px',
            }}
          >
            การยกเลิกการจอง
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid #c4c4c4',
            borderRadius: '5px',

            padding: '20px',
            width: '100%',
          }}
        >
          <Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              xs={12}
            >
              <Grid item xs={12}>
                <Grid
                  Container
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Grid item xs={10}>
                    <Typography>สามารถยกเลิกการจองได้โดยมีเสียค่าธรรมเนียมก่อน :</Typography>
                  </Grid>
                  <Grid xs={12} >
                    <Grid item xs={12} >
                      <TextField
                        id='outlined-password-input'
                        label='สามารถยกเลิกการจองได้โดยมีเสียค่าธรรมเนียมก่อน (วัน)'
                        size='small'
                        sx={{
                          width: '100%',
                          alignItems: 'stretch',
                          marginBottom: '2px',
                        }}
                        value={createResident.cancelDate}
                        onChange={(e) => handleChange('cancelDate', e)}
                        helperText= {createResidentError.cancelDate ? createResidentError.cancelDate : ""}
                        error={createResidentError.cancelDate}
                      />
                    </Grid>
                    <Typography
                          style={{
                            fontSize: 14,
                            color: '#c4c4c4',
                          }}
                        >
                          ตัวอย่างการกรอกรายละเอียด เช่น 3
                        </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
            ></Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ResidentDetailForm;
