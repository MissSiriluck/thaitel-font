import * as React from "react";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

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

function OwnerRegister() {
  return (
    <Container maxWidth="lg" sx={{ justifyContent: "center", display: "flex" }}>
      <Grid
        container
        spacing={2}
        xs={10}
        sx={{ alignContent: "center", justifyContent: "center", margin: 0 }}
      >
        <Grid item>
          <Typography
            style={{ margin: 0, fontSize: "36px", marginBottom: "20px" }}
          >
            กรุณาระบุรายละเอียดข้อมูลของคุณ
          </Typography>
        </Grid>
        <Grid item sx={{ width: "90%" }}>
          <Box
            component="form"
            noValidate
            sx={{
              alignContent: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                border: "2px solid #cfcfcf",
                borderRadius: "5px",
                paddingBottom: "20px",
                marginBottom: "35px",
              }}
            >
              <Grid item sx={{ width: "90%" }}>
                <Typography style={{ margin: 0, fontSize: "24px" }}>
                  ข้อมูลผู้ให้บริการที่พัก
                </Typography>
              </Grid>
              <Grid item xs={5.8} sx={{ padding: 0, marginLeft: "-16px" }}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  อีเมล์
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="อีเมล์"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  size="small"
                  sx={{ marginTop: "8px" }}
                />
              </Grid>
              <Grid item xs={5.8}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  เบอร์โทรศัพท์
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="เบอร์โทรศัพท์"
                  size="small"
                  sx={{ marginTop: "8px" }}
                />
              </Grid>

              <Grid item xs={5.8} sx={{ padding: 0, marginLeft: "-16px" }}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  รหัสผ่าน
                </Typography>

                <TextField
                  spacing={2}
                  margin="normal"
                  required
                  fullWidth
                  label="รหัสผ่าน"
                  placeholder="กรอกรหัสผ่าน"
                  type="password"
                  autoComplete="current-password"
                  autoFocus
                  size="small"
                  sx={{ marginTop: "8px" }}
                />
              </Grid>

              <Grid item xs={5.8}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  ยืนยันรหัสผ่าน
                </Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id=""
                  label="รหัสผ่าน"
                  placeholder="กรอกรหัสผ่าน"
                  autoFocus
                  size="small"
                  sx={{ marginTop: "8px" }}
                />
              </Grid>
            </Grid>
            {/*  */}
            <Grid
              container
              spacing={2}
              sx={{
                border: "2px solid #cfcfcf",
                borderRadius: "5px",
                paddingBottom: "30px",
              }}
            >
              <Grid
                item
                xs={5.8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "12px", marginLeft: "4px" }}
                >
                  <Typography style={{ margin: 0, fontSize: "16px" }}>
                    ชื่อผู้ติดต่อ
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id=""
                    label="ชื่อผู้ติดต่อ"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                    sx={{ marginTop: "8px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "12px", marginLeft: "4px" }}
                >
                  <Typography style={{ margin: 0, fontSize: "16px" }}>
                    นามสกุลผู้ติดต่อ
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="นามสกุลผู้ติดต่อ"
                    placeholder="กรอกนามสกุลผู้ติดต่อ"
                    size="small"
                    sx={{ marginTop: "8px" }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "12px", marginLeft: "4px" }}
                >
                  <Typography style={{ margin: 0, fontSize: "16px" }}>
                    หมายเลขบัตรประชาชน
                  </Typography>

                  <TextField
                    spacing={2}
                    margin="normal"
                    required
                    fullWidth
                    label="หมายเลขบัตรประชาชน"
                    placeholder="กรอกหมายเลขบัตรประชาชน"
                    type="password"
                    autoComplete="current-password"
                    autoFocus
                    size="small"
                    sx={{ marginTop: "8px" }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={5.9} sx={{ display: "flex" }}>
                <Box
                  item
                  xs={12}
                  sx={{
                    border: "2px dotted #cfcfcf",
                    width: "100%",
                    margin: "5px",
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
                    marginTop: "10px",
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OwnerRegister;
