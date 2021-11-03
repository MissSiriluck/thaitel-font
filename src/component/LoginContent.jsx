import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { FcGoogle } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import axios from "../config/axios";
import { getToken, setToken } from "../service/localStorage";
import { AuthContext } from "../context/AuthContext";
import FacebookOAuth from "./FacebookOAuth";

const CustomButtonRoot = styled("button")(`
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
  return (
    // <ButtonUnstyled {...props} component={CustomButtonRoot} type="submit" />
    <ButtonUnstyled {...props} component={CustomButtonRoot} />
  );
}

function LoginContent() {
  const history = useHistory();

  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const values = {
        email: data.get("email"),
        password: data.get("password"),
      };
      const res = await axios.post("/users/login", values);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));

      history.push({
        pathname: "/",
        state: {
          successMessage: "Already Login.",
          from: " login page ",
        },
      });
    } catch (err) {
      console.dir(err);
    }
  };

  const handleFacebookLogin = async (e) => {
    //   e.preventDefault();
    //   try {
    // const data = new FormData(e.currentTarget);
    // const values = {
    //   // email: data.get("email"),
    //   // role: data.get("role"),
    //   facebookId: data.get("faceBookId"),
    //   // firstNane: data.get("firstNane"),
    //   // lastName: data.get("lastName"),
    //   // email,
    //   // facebookId,
    //   // firstName,
    //   // lastName,
    // };
    //     let x = getToken();
    //     console.log("x....................", x);
    //     const resultLogin = await axios.post(
    //       "/users/facebookLogin"
    //       // , values
    //     );
    //     console.log("res.data...........................", resultLogin);
    //     setToken(resultLogin.data.token);
    //     setUser(jwtDecode(resultLogin.data.token));
    //     history.push({
    //       pathname: "/",
    //       state: {
    //         successMessage: "Already Login.",
    //         from: " login page ",
    //       },
    //     });
    //   } catch (err) {
    //     console.dir(err);
    //   }
  };

  const responseFacebook = async (res) => {
    console.log(res);

    const resultLogin = await axios.post("/users/facebookLogin", {
      email: res.email,
      facebookId: res.id,
      firstName: res.first_name,
      lastName: res.last_name,
    });
    setToken(resultLogin.data.token);
    setUser(jwtDecode(resultLogin.data.token));
    history.push({
      pathname: "/",
      state: {
        successMessage: "Already Login.",
        from: " login page ",
      },
    });
  };

  return (
    <div>
      <Container
        maxWidth="md"
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{ padding: 0, mt: 23 }}
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
            <Grid
              container
              justifyContent="start"
              alignItems="center"
              xs={9}
              sx={{ height: "40px" }}
            >
              <Typography variant="h3" component="div" sx={{ fontWeight: 600 }}>
                เข้าสู่ระบบ
              </Typography>
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
            xs={7}
            md={7}
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "32px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontFamily: '"Noto Sans Thai", sans-serif' }}
                >
                  Sign In With Google
                </Typography>
              </Grid>
            </Button>
          </Grid>

          <FacebookLogin
            appId="934707233799748"
            // autoLoad={true}
            fields="name,email,picture,first_name,last_name"
            // onClick={handleFacebookLogin}
            callback={responseFacebook}
          />

          <Box
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              padding: 0,
              margin: 0,
              width: "100%",
            }}
            xs={12}
            md={12}
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <Grid container justifyContent="center">
              <Grid
                container
                spacing={2}
                justifyContent="space-around"
                alignContent="center"
                sx={{
                  padding: 0,
                  marginTop: "0s",
                }}
                xs={7}
                md={7}
              >
                {/*  */}
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: 0,
                    borderBottom: "2px solid #C4C4C4",
                    height: 15,
                    margin: 0,
                  }}
                  xs={5}
                  md={5}
                />
                <Typography sx={{ color: "#C4C4C4" }}>or</Typography>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: 0,
                    borderBottom: "2px solid #C4C4C4",
                    height: 15,
                    margin: 0,
                  }}
                  xs={5}
                  md={5}
                />
              </Grid>
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
                  item
                  xs={7}
                  md={7}
                  sx={{
                    padding: 0,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      marginBottom: 8,
                      justifyContent: "start",
                    }}
                  >
                    อีเมล์
                  </Typography>
                  <TextField
                    fullWidth
                    label="อีเมล์"
                    placeholder="กรอกอีเมล์"
                    id="email"
                    name="email"
                    multiline
                    size="small"
                    sx={{
                      padding: 0,
                      marginBottom: "3px",
                    }}
                  />
                </Grid>
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
              <Grid item xs={7} md={7} sx={{ padding: 0 }}>
                <Typography
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    justifyContent: "start",
                  }}
                >
                  รหัสผ่าน
                </Typography>
                <TextField
                  fullWidth
                  label="รหัสผ่าน"
                  placeholder="กรอกรหัสผ่าน"
                  id="password"
                  name="password"
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
              <Grid
                item
                xs={8}
                md={8}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    width: "80%",
                    marginTop: "10px",
                  }}
                  type="submit"
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      marginBottom: "1px",
                      justifyContent: "start",
                    }}
                  >
                    เข้าสู่ระบบ
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
                  <Typography style={{ color: "grey", margin: 0 }}>
                    คุณยังไม่เคยลงทะเบียน
                  </Typography>
                </Grid>

                <Grid mr={1}>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "#16264D",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      สมัครสมาชิก
                    </Typography>
                  </Link>
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
                }}
              >
                <Grid mr={1}>
                  <Typography style={{ color: "grey", margin: 0 }}>
                    ลืมพาสเวิร์ด
                  </Typography>
                </Grid>

                <Grid mr={1}>
                  <Link to="/reset" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "#16264D",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      กดที่นี่
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          {/*  */}
        </Box>
      </Container>
    </div>
  );
}

export default LoginContent;
