import React from "react";
import { Container, Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { fontSize } from "@mui/system";
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

function ResidentRegisterPage6() {
  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Grid item>
          <Typography sx={{ fontSize: "36px", marginBottom: "5px" }}>
            บริการภายในโรงแรม
          </Typography>
        </Grid>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            border: "2px solid #c4c4c4",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            xs={12}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>ที่จอดรถ</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>

              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>อาหารเช้า</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>Wifi</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>สระว่ายน้ำ</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>บาร์</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>ห้องซาวน่า</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px", marginRight: "25px" }}>
                แผนกต้อนรับส่วนหน้า 24 ชั่วโมง
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>Room service</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Grid xs={3}>
              <Typography sx={{ fontSize: "20px" }}>ห้องออกกำลังกาย</Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="บริการฟรี"
                  sx={{ marginRight: "50px" }}
                />
                <FormControlLabel control={<Checkbox />} label="มีค่าบริการ" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  xs={3}
                  id="outlined-password-input"
                  label="(บาท)"
                  size="small"
                  sx={{ width: "100%", alignItems: "stretch" }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
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

export default ResidentRegisterPage6;
