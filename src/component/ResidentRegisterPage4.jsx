import React from "react";
import { Container, Grid, TextField, Typography, Box } from "@mui/material";
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
  const [age, setAge] = React.useState("");

  // const handleChange = event => {
  //   setAge(event.target.value);
  // };

  const Input = styled("input")({
    display: "none",
  });

  const [values, setValues] = React.useState({
    name: "",
    rateStar: "",
    address: "",
    subDistrict: "",
    province: "",
    postalCode: "",
    description: "",
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="md">
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
                value={values.name}
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
                label="ชื่อที่พักที่ให้บริการ"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.address}
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
                label="ระดับดาว"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.subDistrict}
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
                label="ชื่อที่พักที่ให้บริการ"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.district}
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
                label="ชื่อที่พักที่ให้บริการ"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.province}
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
                label="ระดับดาว"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={values.postalCode}
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
                    value={values.postalCode}
                  />
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
                        label="วันที่เช็คอิน"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.startCheckIn}
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
                        label="วันที่เช็คอิน"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                        value={values.endCheckIn}
                      />
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
                        label="วันที่เช็คอิน"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
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
                        label="วันที่เช็คอิน"
                        size="small"
                        sx={{
                          width: "100%",
                          alignItems: "stretch",
                          marginBottom: "12px",
                        }}
                      />
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
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        id="demo-simple-select-helper-label"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingTop: "-15px",
                        }}
                      >
                        จำนวนวันก่อนวันเช็คอิน
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        size="small"
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                        xs={5.8}
                      >
                        <MenuItem value="" sx={{ justifyContent: "center" }}>
                          <Typography
                            style={{
                              fontSize: 18,
                              marginTop: "10px",
                              backgroundColor: "pink",
                            }}
                          >
                            เลือกรายละเอียดห้องของท่าน
                          </Typography>
                        </MenuItem>
                        <MenuItem value={10}>วิวสะว่ายน้ำ</MenuItem>
                        <MenuItem value={20}>ริมทางเดิน</MenuItem>
                        <MenuItem value={30}>ห้องเดี่ยว</MenuItem>
                      </Select>
                      {/* <FormHelperText>With label + helper text</FormHelperText> */}
                    </FormControl>
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
    </Container>
  );
}

export default ResidentRegisterPage4;
