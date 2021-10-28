import React, { useContext, useState } from "react";
//Material 
import { Container, Grid, TextField, Typography, Box, } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { padding } from "@mui/system";
import { CreateResidentContext } from "../context/createResidentContext";

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

function ResidentRegisterPage3() {
  
  const history = useHistory();
  const location = useLocation();
  console.log(location)

  const Input = styled("input")({
    display: "none",
  });

  const [showImg, setShowImg] = useState("")

  const [file, setFile] = useState(null)

  const handleChangeFile = e => {
    setFile(e.target.files[0])
    const reader = new FileReader();
    reader.onloadend = () => {
      //   console.log(reader.result);
      setShowImg(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const {values, setValues} = useContext(CreateResidentContext)

  const handleChange = (props, event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleSubmitPage3 = e => {

    try {
      history.push({
        pathname: "/residentregisterpage4",
        state: {
          email: location.state.email,
          phone: location.state.phone,
          password: location.state.password,
          confirmPassword: location.state.confirmPassword,
          firstName: location.state.firstName,
          lastName: location.state.lastName,
          idCard: location.state.idCard,
          idCardImgUrl: location.state.idCardImgUrl,
          typeof: values.typeof,
          residentName: values.residentName,
          rateStar: values.rateStar,
          address: values.address,
          subDistrict: values.subDistrict,
          district: values.district,
          province: values.province,
          postalCode: values.postalCode,
          residentImgUrl: file ,
          timeCheckInToStart: values.timeCheckInToStart,
          timeCheckInToEnd: values.timeCheckInToEnd,
          timeCheckOutToStart: values.timeCheckOutToStart,
          timeCheckOutToEnd: values.timeCheckOutToEnd,
          cancelDate: values.cancelDate
        },
      });
    } catch(err) {
      console.dir(err);
    }
  }

  return (
    <Container maxWidth="md"  sx={{ mt: 18 }}>
      <Box 
      component="form"
            // onSubmit={handleSubmit}
      >
      <Grid Container sx={{ marginTop: "20px", marginBottom: "5px" }}>
        <Typography sx={{ fontSize: "36px" }}>รายละเอียดที่พัก</Typography>
      </Grid>
      <Grid
        Container
        sx={{
          flexDirection: "column",
          border: "2px solid #c4c4c4",
          borderRadius: "5px",
          padding: "20px",
          width: "100%",
        }}
      >
        <Grid item>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: "40px",
            }}
            xs={11}
          >
            <Grid item xs={5.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ชื่อที่พักที่ให้บริการ
              </Typography>
              <TextField
                id="outlined-password-input"
                label="ชื่อที่พักที่ให้บริการ"
                size="small"
                value={values.residentName}
                onChange={e => handleChange('residentName',e)}
                sx={{ width: "100%", alignItems: "stretch" }}
              />
            </Grid>
            <Grid item xs={5.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ระดับดาว(ถ้ามี)
              </Typography>
              <TextField
                id="outlined-password-input"
                label="ระดับดาว"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.rateStar}
                onChange={e => handleChange('rateStar',e)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: "40px",
            }}
            xs={11}
          >
            <Grid item xs={7.7}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                บ้านเลขที่ ซอย ถนน
              </Typography>
              <TextField
                id="outlined-password-input"
                label="บ้านเลขที่ ซอย ถนน"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.address}
                onChange={e => handleChange('address',e)}
              />
            </Grid>
            <Grid item xs={3.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ตำบล/แขวง
              </Typography>
              <TextField
                id="outlined-password-input"
                label="ตำบล/แขวง"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.subDistrict}
                onChange={e => handleChange('subDistrict',e)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: "40px",
            }}
            xs={11}
          >
            <Grid item xs={3.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                อำเภอ/เขต
              </Typography>
              <TextField
                id="outlined-password-input"
                label="อำเภอ/เขต"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.district}
                onChange={e => handleChange('district',e)}
              />
            </Grid>
            <Grid item xs={3.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                จังหวัด
              </Typography>
              <TextField
                id="outlined-password-input"
                label="จังหวัด"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.province}
                onChange={e=>handleChange('province',e)}
              />
            </Grid>
            <Grid item xs={3.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                รหัสไปรษณีย์
              </Typography>
              <TextField
                id="outlined-password-input"
                label="รหัสไปรษณีย์"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.postalCode}
                onChange={e => handleChange('postalCode',e)}
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
              xs={12}
            >
              <Grid item xs={11}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: "10px",
                  }}
                >
                  รายละเอียดที่พัก
                </Typography>
                <Grid xs={11.4}>
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="กรุณาใส่รายละเอียดที่พักของคุณ โดยระบุไม่เกิน 300 ตัวอักษร"
                    style={{
                      width: "100%",
                      border: "2px solid #c4c4c4",
                      borderRadius: "5px",
                      padding: "18px",
                      fontFamily: '"Noto Sans Thai", sans-serif',
                      fontSize: "16px",
                    }}
                    value={values.optionRoomDetail}
                    onChange={e=>handleChange('optionRoomDetail',e)}
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
            fontSize: "30px",
            marginTop: "20px",
            marginBottom: "5px",
          }}
        >
          การเพิ่มรูปที่พักของคุณ
        </Typography>
      </Grid>
      
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #c4c4c4",
          borderRadius: "5px",

          padding: "20px",
          width: "100%",
        }}
      >
        <Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            xs={12}
          >
            <Grid item xs={12}>
              <Grid
                Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
              
                <Grid xs={12} sx={{display: 'flex', height: '240px'}}>

                  <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  
                    <Box
                      item
                      xs={5.9}
                      sx={{
                        border: "2px dotted #cfcfcf",
                        width: "100%",
                        margin: "5px",
                        alignItems: "center",
                        borderRadius: "5px",
                        height: "100%",
                        justifyContent: "center",
                        backgroundImage: `url(${showImg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                        { showImg ? null : <Typography
                        style={{
                          fontSize: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        อัพโหลดรูปภาพที่พักของคุณ
                      </Typography>}
                    </Box>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        height:'40px',
                      }}
                    >
                      <label htmlFor="contained-button-file" sx={{height:'40px',}}>
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={handleChangeFile}
                          
                        />
                        <Button variant="contained" component="span">
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

      <Grid Container sx={{ marginTop: "20px", marginBottom: "5px" }}>
        <Typography sx={{ fontSize: "30px" }}>นโยบายข้อห้าม</Typography>
      </Grid>
      <Grid Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid
          item
          xs={5.8}
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid #c4c4c4",
            borderRadius: "5px",
            padding: "20px",
            width: "100%",
          }}
        >
          <Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              xs={12}
            >
              <Grid item xs={12}>
                <Grid>
                  <Typography
                    style={{
                      fontSize: 24,
                      marginBottom: "10px",
                    }}
                  >
                    เวลาที่เช็คอิน
                  </Typography>
                </Grid>
                <Grid>
                  <Grid item sx={{ display: "flex" }}>
                    <Grid xs={3}>
                      <Typography
                        style={{
                          fontSize: 18,
                          marginBottom: "10px",
                        }}
                      >
                        ตั้งแต่ :
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextField
                        id="outlined-password-input"
                        label="เวลาที่เช็คอินตั้งแต่ (นาฬิกา)"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.timeCheckInToStart}
                        onChange={e=>handleChange('timeCheckInToStart',e)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid>
                  <Grid item sx={{ display: "flex" }}>
                    <Grid xs={3}>
                      <Typography
                        style={{
                          fontSize: 18,
                          marginBottom: "10px",
                        }}
                      >
                        ถึง :
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextField
                        id="outlined-password-input"
                        label="เวลาที่เช็คอินได้ถึง (นาฬิกา)"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.timeCheckInToEnd}
                        onChange={e=> handleChange('timeCheckInToEnd',e)}
                      />
                      <Typography
                        style={{
                          fontSize: 14,
                          marginBottom: "10px",
                          color: '#c4c4c4'
                        }}
                      >
                        ตัวอย่างการกรอกรายละเอียด เช่น 9.00
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
            display: "flex",
            flexDirection: "column",
            border: "2px solid #c4c4c4",
            borderRadius: "5px",
            padding: "20px",
            width: "100%",
          }}
        >
          <Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              xs={12}
            >
              <Grid item xs={12}>
                <Grid>
                  <Typography
                    style={{
                      fontSize: 24,
                      marginBottom: "10px",
                    }}
                  >
                    เวลาที่เช็คเอาท์
                  </Typography>
                </Grid>
                <Grid>
                  <Grid item sx={{ display: "flex" }}>
                    <Grid xs={3}>
                      <Typography
                        style={{
                          fontSize: 18,
                          marginBottom: "10px",
                        }}
                      >
                        ตั้งแต่ :
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextField
                        id="outlined-password-input"
                        label="เวลาที่เช็คเอาท์ตั้งแต่ (นาฬิกา)"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.timeCheckOutToStart}
                        onChange={e=>handleChange('timeCheckOutToStart',e)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid>
                  <Grid item sx={{ display: "flex" }}>
                    <Grid xs={3}>
                      <Typography
                        style={{
                          fontSize: 18,
                          marginBottom: "10px",
                        }}
                      >
                        ถึง :
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextField
                        id="outlined-password-input"
                        label="เวลาที่เช็คเอาท์ถึง (นาฬิกา)"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.timeCheckOutToEnd}
                        onChange={e=>handleChange('timeCheckOutToEnd',e)}
                      />
                      <Typography
                        style={{
                          fontSize: 14,
                          marginBottom: "10px",
                          color: '#c4c4c4'
                        }}
                      >
                        ตัวอย่างการกรอกรายละเอียด เช่น 16.00
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
            fontSize: "30px",
            marginTop: "20px",
            marginBottom: "5px",
          }}
        >
          การยกเลิกการจอง
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #c4c4c4",
          borderRadius: "5px",

          padding: "20px",
          width: "100%",
        }}
      >
        <Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            xs={12}
          >
            <Grid item xs={12}>
              <Grid
                Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Grid item xs={10}>
                  <Typography>
                    สามารถยกเลิกการจองได้โดยมีเสียค่าธรรมเนียมก่อน :
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Grid item xs={12}>
                  <TextField
                        id="outlined-password-input"
                        label="สามารถยกเลิกการจองได้โดยมีเสียค่าธรรมเนียมก่อน (วัน)"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.cancelDate}
                        onChange={e=>handleChange('cancelDate',e)}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "end" }}>
        <Grid container xs={12} justifyContent="end">
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
              onClick={handleSubmitPage3}
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

export default ResidentRegisterPage3;
