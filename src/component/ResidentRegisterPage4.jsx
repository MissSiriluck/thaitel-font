import React, { useContext, useState } from "react";
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
import Select from "@mui/material/Select";
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


function ResidentRegisterPage4() {

  const {values, setValues} = useContext(CreateResidentContext)

  const [showImg, setShowImg] = useState("")

  const [file, setFile] = useState(null)
  // console.log(file)

  const handleChangeFile = e => {
    setFile(e.target.files[0])
    const reader = new FileReader();
    reader.onloadend = () => {
      //   console.log(reader.result);
      setShowImg(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleOnChangeCheckNoSmoking = ( props, event) => {
    const clone = { ...values };
    clone.noSmoking = !clone.noSmoking;
    setValues({ ...values, [props]: event.target.value });
  };

  const handleOnChangeCheckPetAllow = ( props, event) => {
    const clone = { ...values };
    clone.petAllow = !clone.petAllow;
    setValues({ ...values, [props]: event.target.value });
  };

  const handleChange = ( props, event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Container maxWidth="md" sx={{ padding: 0, mt: 18 }}>
      <Grid container direction="column" sx={8} spacing={2}>
        <Grid item sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            style={{
              fontSize: 40,
            }}
          >
            รูปแบบ และ ราคา
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "column" }}>
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
                โปรดเลือก
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
                      value={values.roomTypeOf}
                      onChange={e => handleChange('roomTypeOf', e)}
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
                        value={values.roomAmount}
                        onChange={e => handleChange('roomAmount', e)}
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
                        value={values.roomSize}
                        onChange={e => handleChange('roomSize', e)}
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
                      value={values.optionRoomDetail}
                      onChange={e => handleChange('optionRoomDetail', e)}
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
                  กดเพื่อเพิ่มรูปภาพห้องพักของคุณ
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
                    value={values.noSmoking}
                    onChange={e => handleOnChangeCheckNoSmoking('noSmoking', e)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="ห้ามนำสัตว์เลี้ยงเข้ามา"
                    value={values.petAllow}
                    onChange={e => handleOnChangeCheckPetAllow('petAllow', e)}

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
                    value={values.roomAmount}
                    onChange={e => handleChange('roomAmount', e)}

                  />
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
                  marginTop: "-30px",

                  height: "20px",
                }}
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
      </Grid>
    </Container>
  );
}

export default ResidentRegisterPage4;
