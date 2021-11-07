import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "../config/axios";
// import FacebookLogin from "react-facebook-login";
import { setToken } from "../service/localStorage";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

//Material UI
import Button from "@mui/material/Button";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

//customize button style
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
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function OwnerLogin() {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (props, event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Test");
    try {
      const data = new FormData(e.currentTarget);
      const values = {
        email: data.get("email"),
        password: data.get("password"),
      };

      if (!values.email) {
        setErrors((curr) => ({
          ...curr,
          email: "กรุณากรอกอีเมลของท่าน",
        }));
      }

      if (!values.password) {
        setErrors((curr) => ({
          ...curr,
          password: "กรุณากรอกรหัสผ่านของท่าน",
        }));
      }

      const res = await axios.post("/hotelOwners/login", values);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));

      history.push({
        pathname: "/ownerhistory",
        state: {
          successMessage: "Already Login.",
          from: " login page ",
        },
      });
    } catch (err) {
      console.dir(err);
      if (err.response.status === 400) {
        setErrors((curr) => ({
          ...curr,
          email: "กรุณากรอกข้อมูลให้ถูกต้อง",
          password: "กรุณากรอกข้อมูลให้ถูกต้อง",
        }));
      }
      console.log(`err`, err);
    }
  };
  const responseGoogle = async (response) => {
    try {
      const res = await axios.post("/hotelOwners/ownerGoogleLogin", {
        email: response.profileObj.email,
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        googleId: response.profileObj.googleId,
      });
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

  const responseFacebook = async (res) => {
    console.log(res);

    const resultLogin = await axios.post("/hotelOwners/ownerFacebookLogin", {
      email: res.email,
      facebookId: res.id,
      firstName: res.first_name,
      lastName: res.last_name,
    });
    setToken(resultLogin.data.token);
    setUser(jwtDecode(resultLogin.data.token));
    history.push({
      pathname: "/ownerhistory",
      state: {
        successMessage: "Already Login.",
        from: " login page ",
      },
    });
  };

  return (
    <Container
      maxWidth="sm"
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ padding: 0, mt: "20vh" }}
    >
      <Grid Container sx={{ flexGlow: 1 }}>
        {/* --------------- head --------------- */}
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 600, mb: 3 }}
        >
          เข้าสู่ระบบสำหรับผู้ปล่อยเช่า
        </Typography>

        {/* --------------- button submit by google --------------- */}
        <Grid container justifyContent="space-between" alignContent="center">
          <Grid item xs={5.8}>
            <GoogleLogin
              clientId="653158791610-ii8s99m412cd01m9lmb9113fjjbocssd.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
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
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>

          {/* facebook login......................... */}
          <Grid item xs={5.8}>
            <FacebookLogin
              appId="934707233799748"
              // autoLoad={true}
              fields="name,email,picture,first_name,last_name"
              // onClick={handleFacebookLogin}
              callback={responseFacebook}
              render={(renderProps) => (
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    // background: "#4c69ba",
                  }}
                  onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  {/* <Grid
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
                  <i class='fab fa-facebook'></i>
                </Grid> */}
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
                      Sign In With Facebook
                    </Typography>
                  </Grid>
                </Button>
              )}
            />
          </Grid>
        </Grid>

        {/* --------------- line --------------- */}
        <Box
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 2,
            flexGlow: 1,
          }}
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <Grid container>
            <Grid
              item
              xs={5.2}
              i
              sx={{
                padding: 0,
                borderBottom: "1px solid #C4C4C4",
                height: 15,
                mb: 1.5,
                mr: 1,
              }}
            />
            <Grid item xs={1}>
              <Typography sx={{ color: "#C4C4C4", textAlign: "center" }}>
                or
              </Typography>
            </Grid>
            <Grid
              item
              xs={5.2}
              sx={{
                padding: 0,
                borderBottom: "1px solid #C4C4C4",
                height: 15,
                mb: 1.5,
                ml: 1,
              }}
            />
          </Grid>

          {/* --------------- input email and password --------------- */}
          <Grid
            item
            xs={12}
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
              name="email"
              size="small"
              value={values.email}
              onChange={(e) => handleChange("email", e)}
              helperText={errors.email ? errors.email : ""}
              error={errors.email}
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ padding: 0 }}>
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
              id="outlined-adornment-password"
              label="รหัสผ่าน"
              placeholder="กรอกรหัสผ่าน"
              name="password"
              value={values.password}
              type={values.showPassword ? "text" : "password"}
              onChange={(e) => handleChange("password", e)}
              helperText={errors.password ? errors.password : ""}
              error={errors.password}
              size="small"
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* --------------- button submit login--------------- */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              type="submit"
              sx={{
                background: "#c62828",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 3,
              }}
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
        </Box>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Grid mr={1}>
            <Typography style={{ color: "grey", margin: 0 }}>
              คุณยังไม่เคยลงทะเบียน ?
            </Typography>
          </Grid>
          <Grid mr={1}>
            <Link to="/ownerregister" style={{ textDecoration: "none" }}>
              <Typography
                style={{ color: "#16264D", fontWeight: 700, margin: 0 }}
              >
                สมัครสมาชิก
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* ------------------------------- forget password ----------------------------- */}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
        }}
      >
        {/* <Grid mr={1}>
            <Typography style={{ color: "grey", margin: 0 }}>
              จำรหัสผ่านไม่ได้ ?
            </Typography>
          </Grid> */}
        <Grid mr={1}>
          <Link to="/reset" style={{ textDecoration: "none" }}>
            <Typography
              // onClick={handleClickReset({
              //   vertical: "top",
              //   horizontal: "center",
              // })}
              style={{ color: "#16264D", fontWeight: 700, margin: 0 }}
            >
              ลืมรหัสผ่าน
            </Typography>
          </Link>
        </Grid>
      </Grid>
      {/* ------------------------------- forget password ----------------------------- */}
    </Container>
  );
}

export default OwnerLogin;
