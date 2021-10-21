import React from "react";
import Button from "@mui/material/Button";
import { Container, Grid, TextField, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import UnstyledButtonsSpan from "../service/SubmitButtons";

function RegisterContent() {
  return (
    <div>
      <Container
        maxWidth="md"
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{ padding: 0 }}
      >
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ width: "80%", display: "flex" }}
            xs={8}
            sm={8}
          >
            <Grid container justifyContent="start" alignItems="center" xs={10}>
              <p
                style={{
                  fontSize: 40,
                  marginBottom: 18,
                  justifyContent: "start",
                }}
              >
                สมัครสมาชิก
              </p>
            </Grid>
          </Box>
          {/*  */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              padding: 0,
            }}
            xs={12}
            md={12}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: 0,
              }}
              xs={12}
              md={12}
            >
              <Grid
                item
                xs={4}
                md={4}
                sx={{
                  padding: 0,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  ชื่อจริง
                </p>
                <TextField
                  fullWidth
                  id="outlined-textarea fullWidth"
                  label="ชื่อจริง"
                  placeholder="กรอกชื่อจริง"
                  multiline
                  size="small"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: 0,
                    marginBottom: "3px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                sx={{
                  padding: 0,
                  marginBottom: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  นามสกุล
                </p>
                <TextField
                  fullWidth
                  id="outlined-textarea fullWidth"
                  label="นามสกุล"
                  placeholder="กรอกนามสกุล"
                  multiline
                  size="small"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: 0,
                    marginBottom: "3px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
              xs={12}
              md={12}
            >
              <Grid
                item
                xs={4}
                md={4}
                sx={{
                  padding: 0,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  อีเมล์
                </p>
                <TextField
                  fullWidth
                  id="outlined-textarea fullWidth"
                  label="อีเมล์"
                  placeholder="กรอกอีเมล์"
                  multiline
                  size="small"
                  sx={{
                    padding: 0,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                sx={{
                  padding: 0,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  เบอร์โทรศัพท์
                </p>
                <TextField
                  fullWidth
                  id="outlined-textarea fullWidth"
                  label="เบอร์โทรศัพท์"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  multiline
                  size="small"
                  sx={{
                    padding: 0,
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: 0,
              }}
              xs={12}
              md={12}
            >
              <Grid
                item
                xs={8}
                md={8}
                sx={{
                  padding: 0,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  รหัสผ่าน
                </p>
                <TextField
                  fullWidth
                  id="outlined-textarea fullWidth"
                  label="รหัสผ่าน"
                  placeholder="กรอกรหัสผ่าน"
                  multiline
                  size="small"
                  sx={{
                    padding: 0,
                    marginBottom: "3px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
              xs={12}
              md={12}
            >
              <Grid item xs={8} md={8} sx={{ padding: 0 }}>
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  ยืนยันรหัสผ่าน
                </p>
                <TextField
                  fullWidth
                  id="outlined-textarea fullWidth"
                  label="ยืนยันรหัสผ่าน"
                  placeholder="ยืนยันรหัสผ่าน"
                  multiline
                  size="small"
                  sx={{
                    padding: 0,
                    marginBottom: "3px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: 0,
              }}
              xs={12}
              md={12}
            >
              <Grid item xs={8} md={8}>
                <UnstyledButtonsSpan>สมัครสมาชิก</UnstyledButtonsSpan>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid mr={1}>
                  <p style={{ color: "grey" }}>เคยสมัครสมาชิกแล้ว ?</p>
                </Grid>
                <Grid mr={1}>
                  <p style={{ color: "#16264D", fontWeight: 700 }}>
                    เข้าสู่ระบบ
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
        </Box>
      </Container>
    </div>
  );
}

export default RegisterContent;
