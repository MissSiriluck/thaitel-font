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
import UnstyledButtonsSpan from "../service/SubmitButtons";

function OwnerRegister() {
  return (
    <Grid
      container
      spacing={2}
      xs={12}
      sx={{ alignContent: "center", justifyContent: "center", margin: 0 }}
    >
      <Grid item>
        <p style={{ margin: 0, fontSize: "36px" }}>
          กรุณาระบุรายละเอียดข้อมูลของคุณ
        </p>
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
              <p style={{ margin: 0, fontSize: "24px" }}>
                ข้อมูลผู้ให้บริการที่พัก
              </p>
            </Grid>
            <Grid item xs={5.5}>
              <p style={{ margin: 0, fontSize: "16px" }}>อีเมล์</p>
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
              />
            </Grid>
            <Grid item xs={5.5}>
              <p style={{ margin: 0, fontSize: "16px" }}>เบอร์โทรศัพท์</p>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="เบอร์โทรศัพท์"
                size="small"
              />
            </Grid>

            <Grid item xs={5.5}>
              <p style={{ margin: 0, fontSize: "16px" }}>รหัสผ่าน</p>

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
              />
            </Grid>

            <Grid item xs={5.5}>
              <p style={{ margin: 0, fontSize: "16px" }}>ยืนยันรหัสผ่าน</p>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="รหัสผ่าน"
                placeholder="กรอกรหัสผ่าน"
                autoFocus
                size="small"
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
              paddingBottom: "20px",
            }}
          >
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Grid item xs={12}>
                <p style={{ margin: 0, fontSize: "16px" }}>อีเมล์</p>
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
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ margin: 0, fontSize: "16px" }}>เบอร์โทรศัพท์</p>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="เบอร์โทรศัพท์"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ margin: 0, fontSize: "16px" }}>รหัสผ่าน</p>

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
                />
              </Grid>
            </Grid>
            <Grid item xs={5.8} sx={{ display: "flex" }}>
              <Box
                item
                xs={12}
                sx={{
                  border: "2px dotted #cfcfcf",
                  width: "100%",
                  margin: "5px",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  อัพโหลดรูปบัตรประชาชน
                </p>
              </Box>
              {/*  */}
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid xs={3}>
        <UnstyledButtonsSpan> ดำเนินการต่อ </UnstyledButtonsSpan>
      </Grid>
    </Grid>
  );
}

export default OwnerRegister;
