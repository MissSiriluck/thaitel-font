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
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

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

  const handleChange = event => {
    setAge(event.target.value);
  };

  const Input = styled("input")({
    display: "none",
  });
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
            <Grid item xs={5.5}>
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
              />
            </Grid>
            <Grid item xs={5.5}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                เมือง
              </Typography>
              <TextField
                id="outlined-password-input"
                label="ระดับดาว"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
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
            <Grid item xs={5.5}>
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
              />
            </Grid>
            <Grid item xs={5.5}>
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
              />
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
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              xs={12}
            >
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: "10px",
                  }}
                >
                  วันที่เช็คอิน
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="วันที่เช็คอิน"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
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
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              xs={12}
            >
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: 18,
                    marginTop: "10px",
                  }}
                >
                  วันที่เช็คเอาท์
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="วันที่เช็คเอาท์"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
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
