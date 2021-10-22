import React from "react";
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

function ResidentRegiterPage3() {
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Container maxWidth="md">
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
                    xs={11}
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
                    />
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
                        จำนวนของห้องพัก
                      </Typography>
                      <TextField
                        id="outlined-password-input"
                        label="จำนวนของห้องพัก"
                        size="small"
                        sx={{ width: "100%", alignItems: "stretch" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={5.5}
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
                      />
                    </Grid>
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
                  <Grid item xs={5.8}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: "10px",
                      }}
                    >
                      รายละเอียดห้องพัก
                    </Typography>
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
                        รายละเอียดห้องพัก
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
                          //   backgroundColor: "yellow",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <MenuItem value="" sx={{ justifyContent: "center" }}>
                          <Typography
                            style={{
                              fontSize: 18,
                              marginTop: "10px",
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
                  <Grid item xs={5.8}>
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
                      label="ประเภทห้องพัก"
                      size="small"
                      sx={{ width: "100%" }}
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
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  อัพโหลดรูปห้องพักจำนวน 1 รูป
                </Typography>
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
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="ห้ามนำสัตว์เลี้ยงเข้ามา"
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
                  marginTop: "-20px",

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

export default ResidentRegiterPage3;
