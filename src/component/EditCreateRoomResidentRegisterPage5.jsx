import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
//Material 
import { styled } from "@mui/material/styles";
import { Container, Grid, TextField, Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { CreateResidentContext } from "../context/createResidentContext";

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

function EditCreateRoomResidentRegisterPage5(props) {

    const {values, setValues} = useContext(CreateResidentContext)
    const roomCollection = props.roomCollection
    console.log(props)

    // const [roomCollection, setRoomCollection] = useState( props.roomCollection )
    
    const handleChangeFile = e => {
        setFile(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
          //   console.log(reader.result);
          setShowImg(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }

      const [showImg, setShowImg] = useState("")

      const [file, setFile] = useState(null)
      // console.log(file)

      const location = useLocation();
      console.log(location)
    
      const history = useHistory();
    
    
      const handleOnChangeCheckNoSmoking = ( props, event) => {
        setValues({ ...values, [props]: event.target.value });
        const clone = { ...values };
        // clone.noSmoking = !clone.noSmoking;
        setValues({ ...values, [props]: event.target.value , noSmoking : !clone.noSmoking});
      };
    
      const handleOnChangeCheckPetAllow = ( props, event) => {
        setValues({ ...values, [props]: event.target.value });
        const clone = { ...values };
        setValues({ ...values, [props]: event.target.value , petAllow : !clone.petAllow});
      };
    
      const handleChange = ( props, event) => {
        setValues({ ...values, [props]: event.target.value });
      };
    
      const Input = styled("input")({
        display: "none",
      });

      const handleSubmitPage5 = e => {
        const eachRoom = {
          roomTypeOf: values.roomTypeOf,
          roomAmount: values.roomAmount,
          roomSize: values.roomSize,
          maxGuest: values.maxGuest,
          noSmoking: values.noSmoking,
          petAllow: values.petAllow,
          optionRoomDetail: values.optionRoomDetail,
          roomImgUrl: values.roomImgUrl,
          roomShowImg: values.roomShowImg,
        }
    
        const clone = [...values.roomCollection]
    
        clone.push(eachRoom)
    
        setValues({ ...values, roomCollection : clone});
    
        try {
          history.push({
            
            state: {
              email: location.state.email,
              phone: location.state.phone,
              password: location.state.password,
              confirmPassword: location.state.confirmPassword,
              firstName: location.state.firstName,
              lastName: location.state.lastName,
              idCard: location.state.idCard,
              idCardImgUrl: location.state.idCardImgUrl,
              typeof: location.state.typeof,
              residentName: location.state.residentName,
              rateStar: location.state.rateStar,
              address: location.state.address,
              subDistrict: location.state.subDistrict,
              district: location.state.district,
              postalCode: location.state.postalCode,
                residentImgUrl: location.state.residentImgUrl ,
              timeCheckInToStart: values.timeCheckInToStart,
                timeCheckInToEnd: values.timeCheckInToEnd,
                timeCheckOutToStart: values.timeCheckOutToStart,
                timeCheckOutToEnd: values.timeCheckOutToEnd,
                cancelDate: values.cancelDate,
              roomTypeOf: values.roomTypeOf,
              roomAmount: values.roomAmount,
              roomSize: values.roomSize,
              maxGuest: values.maxGuest,
              optionRoomDetail: values.optionRoomDetail,
              noSmoking: location.state.noSmoking,
                petAllow: location.state.petAllow,
              roomShowImg: location.state.roomShowImg,
              roomCollection: clone,
            },
          });
        } catch(err) {
          console.dir(err);
        }
      }

      console.log(roomCollection)

    return (
        <>
        <Grid item sx={{ display: "flex", flexDirection: "column", border: "2px solid #c4c4c4", borderRadius:'10px', padding: '20px' }}>
          <Grid item sx={{ display: "flex", flexDirection: "column" }}>
            <Grid
              item
              sx={{ display: "flex", flexDirection: "column", flexgrow: "1" }}
            >
              <Typography
                style={{
                  fontSize: 27,
                }}
              >
                แก้ไขข้อมูลห้องพักของคุณ
              </Typography>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid #c4c4c4",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
                spacing={2}
                xs={12}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    width: "100%",
                    alignItems: "flex-end",
                  }}
                  xs={12}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: "10px",
                      }}
                    >
                      ประเภทห้องพัก
                    </Typography>
                    <TextField
                      id="outlined-password-input"
                      label="ประเภทห้องพัก"
                      size="small"
                      sx={{ width: "100%" }}
                      value={roomCollection.roomTypeOf}
                    //   onChange={e => handleChange('roomTypeOf', e)}
                    />
                  </Grid>
                </Grid>
                <Stack
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xs={3.5}>
                      <Typography
                        style={{
                          fontSize: 18,
                          marginTop: "10px",
                        }}
                      >
                        จำนวนของห้องพัก
                      </Typography>
                      <TextField
                        id="outlined-password-input"
                        label="จำนวนของห้องพัก"
                        size="small"
                        sx={{ width: "100%", alignItems: "stretch" }}
                        value={roomCollection.roomAmount}
                        // onChange={e => handleChange('roomAmount', e)}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={3.5}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: 18,
                          marginTop: "10px",
                        }}
                      >
                        ขนาดห้องพัก
                      </Typography>
                      <TextField
                        id="outlined-password-input"
                        label="ประเภทห้องพัก"
                        size="small"
                        sx={{ width: "100%", alignItems: "stretch" }}
                        value={roomCollection.roomSize}
                        // onChange={e => handleChange('roomSize', e)}
                      />
                    </Grid>

                  <Grid item xs={3.8}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: "10px",
                      }}
                    >
                      จำนวนแขกสูงสุด
                    </Typography>
                    <TextField
                      id="outlined-password-input"
                      label="ประเภทห้องพัก"
                      size="small"
                      xs={5}
                      sx={{ width: "100%" }}
                      value={roomCollection.maxGuest}
                    //   onChange={e => handleChange('maxGuest', e)}
                    />
                  </Grid>
                </Stack>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: "10px",
                      }}
                    >
                      รายละเอียดห้องพักเพิ่มเติม
                    </Typography>
                    <TextField
                      id="outlined-password-input"
                      label="รายละเอียดห้องพักเพิ่มเติม"
                      size="small"
                      sx={{ width: "100%" }}
                      value={roomCollection.optionRoomDetail}
                    //   onChange={e => handleChange('optionRoomDetail', e)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              border: "2px solid #c4c4c4",
              borderRadius: "5px",
              marginTop: "20px",
              padding: "12px",
              display: "flex",
            }}
          >
            <Grid item xs={7} sx={{ display: "flex", paddingBottom: "3px" }}>
              <Box
                item
                xs={12}
                sx={{
                  border: "2px dotted #cfcfcf",
                  width: "100%",
                  margin: "5px",
                  height: "35vh",
                  alignItems: "center",
                  borderRadius: "5px",
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
                  อัพโหลดรูปห้องพักจำนวน 1 รูป
                </Typography>}
                
              </Box>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleChangeFile}
                />
                <Button variant="contained" component="span">
                  กดเพื่อเลือกรูปภาพห้องพักของคุณ
                </Button>
              </label>
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: "50px", marginTop: "15px" }}>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid
                item
                xs={5.8}
                sx={{
                  border: "2px solid #c4c4c4",
                  borderRadius: "5px",
                  padding: "20px",
                }}
              >
                <Typography sx={{ fontSize: "18px" }}>
                  นโยบายข้อห้าม และ ข้อกำหนด
                </Typography>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="ห้ามสูบบุหรี่"
                    value={roomCollection.noSmoking}
                    onChange={e => handleOnChangeCheckNoSmoking('noSmoking', e)}

                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="ห้ามนำสัตว์เลี้ยงเข้ามา"
                    value={roomCollection.petAllow}
                    onChange={e => handleOnChangeCheckPetAllow('petAllow', e)}
                    // { roomCollection.petAllow ? checked : ""}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={5.8}
                sx={{
                  border: "2px solid #c4c4c4",
                  borderRadius: "5px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "18px" }}>ราคาต่อคืน</Typography>
                  <TextField
                    id="outlined-password-input"
                    label="ราคาต่อคืน(บาท)"
                    size="small"
                    sx={{ width: "100%" }}
                    value={values.pricePerNigth}
                    onChange={e => handleChange('pricePerNigth', e)}

                  />
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
                  background: "#fff",
                  color: "#07133C",
                border: "1px solid #07133C",
                  display: "flex",
                  justifyContent: "center",
                  width: "90%",
                  marginTop: "-30px",
                    marginRight: "20px",
                  height: "20px",
                }}
                // onClick={handleSubmitPage5}
              >
                <Typography
                  style={{
                    fontSize: 16,
                    justifyContent: "start",
                  }}
                >
                  ยกเลิกการแก้ไขข้อมูล
                </Typography>
              </CustomButton>
            </Grid>
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
                  width: "85%",
                  marginTop: "-30px",

                  height: "20px",
                }}
                // onClick={handleSubmitPage5}
              >
                <Typography
                  style={{
                    fontSize: 16,
                    justifyContent: "start",
                  }}
                >
                  แก้ไขข้อมูลห้องพัก
                </Typography>
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        </>
    )
}

export default EditCreateRoomResidentRegisterPage5
     