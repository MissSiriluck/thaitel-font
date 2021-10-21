import React from "react";
import { FcGoogle } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import UnstyledButtonsSpan from "../service/No2SubmitButtons";

function LoginContent() {
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
                  justifyContent: "start",
                  // margin: 0,
                }}
              >
                เข้าสู่ระบบ
              </p>
            </Grid>
          </Box>
          {/*  */}

          <Grid
            container
            justifyContent="center"
            alignContent="center"
            sx={{
              padding: 0,
            }}
            xs={8}
            md={8}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid
                item
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50px",
                  height: "18px",
                  width: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FcGoogle />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="p">Sign In With Google</Typography>
              </Grid>
            </Button>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              padding: 0,
              margin: 0,
            }}
            xs={12}
            md={12}
          >
            <Grid
              container
              spacing={2}
              justifyContent="space-around"
              alignContent="center"
              sx={{
                padding: 0,
                marginTop: "10px",
              }}
              xs={8}
              md={8}
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                  padding: 0,
                  borderBottom: "2px solid #cfcfcf",
                  height: 15,
                  margin: 0,
                }}
                xs={5}
                md={5}
              />
              <p
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  justifyContent: "center",
                  margin: 0,
                }}
              >
                or
              </p>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                  padding: 0,
                  borderBottom: "2px solid #cfcfcf",
                  height: 15,
                  margin: 0,
                }}
                xs={5}
                md={5}
              />
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
              {/* <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              /> */}
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
                  <p style={{ color: "grey", margin: 0 }}>
                    คุณยังไม่เคยลงทะเบียน
                  </p>
                </Grid>
                <Grid mr={1}>
                  <p style={{ color: "#16264D", fontWeight: 700, margin: 0 }}>
                    สมัครสมาชิก
                  </p>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <Grid mr={1} sx={{ padding: 0 }}>
                  <p style={{ color: "#16264D", fontWeight: 700 }}>
                    ลืมรหัสผ่าน
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

export default LoginContent;
