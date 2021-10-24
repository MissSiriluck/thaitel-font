import React from "react";
import Button from "@mui/material/Button";
import { Container, Grid, TextField } from "@mui/material";
import styledButtonsSubmit from "../service/SubmitButtons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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

function RegisterContent() {
  // export default function SignUp() {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     // eslint-disable-next-line no-console
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });
  //   };

  return (
    <div>
      <Container
        maxWidth='md'
        justifyContent='center'
        alignItems='center'
        direction='column'
        sx={{ padding: 0, mt: 23 }}
      >
        <Box
          alignItems='center'
          justifyContent='center'
          sx={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <Box
            alignItems='center'
            justifyContent='center'
            sx={{ width: "80%", display: "flex" }}
            xs={8}
            sm={8}
          >
            <Grid container justifyContent='start' alignItems='center' xs={10}>
              <Typography
                style={{
                  fontSize: 40,
                  marginBottom: 18,
                  justifyContent: "start",
                  fontWeight: 600,
                }}
              >
                สมัครสมาชิก
              </Typography>
            </Grid>
          </Box>
          {/*  */}
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
            sx={{
              padding: 0,
            }}
            xs={12}
            md={12}
          >
            <Grid
              container
              spacing={2}
              justifyContent='center'
              alignItems='center'
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
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: "3px",
                    justifyContent: "start",
                  }}
                >
                  ชื่อจริง
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-textarea fullWidth'
                  label='ชื่อจริง'
                  placeholder='กรอกชื่อจริง'
                  multiline
                  size='small'
                  justifyContent='center'
                  alignItems='center'
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
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: "3px",
                    justifyContent: "start",
                  }}
                >
                  นามสกุล
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-textarea fullWidth'
                  label='นามสกุล'
                  placeholder='กรอกนามสกุล'
                  multiline
                  size='small'
                  justifyContent='center'
                  alignItems='center'
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
              justifyContent='center'
              alignItems='center'
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
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: "3px",
                    justifyContent: "start",
                  }}
                >
                  อีเมล์
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-textarea fullWidth'
                  label='อีเมล์'
                  placeholder='กรอกอีเมล์'
                  multiline
                  size='small'
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
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: "3px",
                    justifyContent: "start",
                  }}
                >
                  เบอร์โทรศัพท์
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-textarea fullWidth'
                  label='เบอร์โทรศัพท์'
                  placeholder='กรอกเบอร์โทรศัพท์'
                  multiline
                  size='small'
                  sx={{
                    padding: 0,
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              alignItems='center'
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
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: "3px",
                    justifyContent: "start",
                  }}
                >
                  รหัสผ่าน
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-textarea fullWidth'
                  label='รหัสผ่าน'
                  placeholder='กรอกรหัสผ่าน'
                  multiline
                  size='small'
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
              justifyContent='center'
              alignItems='center'
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
              xs={12}
              md={12}
            >
              <Grid item xs={8} md={8} sx={{ padding: 0 }}>
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: "3px",
                    justifyContent: "start",
                  }}
                >
                  ยืนยันรหัสผ่าน
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-textarea fullWidth'
                  label='ยืนยันรหัสผ่าน'
                  placeholder='ยืนยันรหัสผ่าน'
                  multiline
                  size='small'
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
              justifyContent='center'
              alignItems='center'
              sx={{
                padding: 0,
              }}
              xs={12}
              md={12}
            >
              <Grid item xs={8} md={8}>
                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    width: "92%",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      marginBottom: "1px",
                      justifyContent: "start",
                    }}
                  >
                    สมัครสมาชิก
                  </Typography>
                </CustomButton>
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
                  <Typography style={{ color: "grey", margin: "0" }}>
                    เคยสมัครสมาชิกแล้ว ?
                  </Typography>
                </Grid>
                <Grid mr={1}>
                  <Typography
                    style={{ color: "#16264D", fontWeight: 700, margin: "0" }}
                  >
                    เข้าสู่ระบบ
                  </Typography>
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
