import React from "react";
import { Container, Grid, Box, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 5px;
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

function ResidentRegisterPage8() {
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Container>
      <Grid
        container
        sx={{
          border: "2px solid #c4c4c4",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "5px",
        }}
      >
        <Typography sx={{ fontSize: "36px" }}>การชำระค่าคอมมิสชั่น</Typography>
        <Grid container justifyContent="space-between">
          <Grid
            xs={12}
            md={8}
            sx={{
              backgroundColor: "#c4c4c4",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestiae vel! Natus iusto voluptates voluptatum aliquam voluptas
              numquam ad mollitia obcaecati deleniti? Repudiandae doloribus
              voluptatum possimus quasi hic veniam temporibus.
            </Typography>
          </Grid>

          <Grid
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography>ค่าคอมมิชชั่่น 15 %</Typography>
            <Typography>ค่าดำเนินธุรกรรม 2.1 %</Typography>
          </Grid>
          <Grid xs={12} sx={{ marginTop: "10px" }}>
            <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <FormControlLabel control={<Checkbox />} label="ยอมรับข้อตกลง" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Grid
          sx={{
            border: "2px solid #c4c4c4",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
          md={6}
        >
          <Grid item xs={12} sx={{ display: "flex", marginBottom: "8px" }}>
            <Grid xs={4}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ชื่อหน้าบัญชี :
              </Typography>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="outlined-password-input"
                label="ชื่อหน้าบัญชี"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", marginBottom: "8px" }}>
            <Grid xs={4}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ระบุเลขบัญชี :
              </Typography>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="outlined-password-input"
                label="ระบุเลขบัญชี"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", marginBottom: "8px" }}>
            <Grid xs={4}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ธนาคาร :
              </Typography>
            </Grid>
            <Grid item xs={8}>
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
        <Grid item xs={5.9} sx={{ display: "flex" }}>
          <Box
            item
            xs={12}
            sx={{
              border: "2px dotted #cfcfcf",
              width: "100%",
              alignItems: "center",
              borderRadius: "5px",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              อัพโหลดรูปบัตรประชาชน
            </Typography>
          </Box>
          {/*  */}
        </Grid>
      </Grid>
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
              width: "92%",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            <Typography
              style={{
                fontSize: 16,
                marginBottom: "1px",
                justifyContent: "start",
              }}
            >
              ดำเนินการต่อ
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResidentRegisterPage8;
