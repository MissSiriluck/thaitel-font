import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "../config/axios";
import { setToken } from "../service/localStorage";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

//Material UI
import Button from "@mui/material/Button";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
// import FacebookOAuth from "./FacebookOAuth";
import { GoogleLogin } from "react-google-login";
import { user } from "../service/localStorage";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { GoogleCustomButton } from "../style/button/GoogleCustomButton";
import { FacebookCustomButton } from "../style/button/FacebookCustomButton";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function LoginContent() {
  const history = useHistory();

  const location = useLocation();

  console.log(user);
  const responseGoogle = async response => {
    try {
      const res = await axios.post("/googleLogin", {
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

  const { setUser } = useContext(AuthContext);

  const [openSnackLogin, setOpenSnackLogin] = React.useState(false);

  const [snackEditResident, setSnackEditResident] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = snackEditResident;

  const handleClose = () => {
    setOpenSnackLogin({ ...snackEditResident, open: false });
  };

  const handleOpenSnackBar = newState => () => {
    setOpenSnackLogin({ open: true, ...newState });
  };

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

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = (props, event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const values = {
        email: data.get("email"),
        password: data.get("password"),
      };

      if (!values.email) {
        setErrors(curr => ({
          ...curr,
          email: "กรุณากรอกอีเมลของท่าน",
        }));
      }

      if (!values.password) {
        setErrors(curr => ({
          ...curr,
          password: "กรุณากรอกรหัสผ่านของท่าน",
        }));
      }

      const res = await axios.post("/users/login", values);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));

      setOpenSnackLogin(true);

      history.push({
        pathname: "/",
        state: {
          successMessage: "Already Login.",
          from: " login page ",
        },
      });
    } catch (err) {
      console.dir(err);
      setErrors(curr => ({
        ...curr,
        email: "กรุณากรอกข้อมูลให้ถูกต้อง",
        password: "กรุณากรอกข้อมูลให้ถูกต้อง",
      }));
    }
  };

  // const [snack, setSnack] = useState({
  //   open: false,
  //   vertical: "top",
  //   horizontal: "center",
  // });

  // const handleClickReset = (newState) => () => {
  //   setSnack({ open: true, ...newState });
  // };

  // const handleCloseReset = () => {
  //   setSnack({ ...snack, open: false });
  // };

  const handleFacebookLogin = async e => {};

  const responseFacebook = async res => {
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
        message: ''
      },
    });
  };

  return (
    <Container
      maxWidth='sm'
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{ padding: 0, mt: "23vh" }}
    >
      <Grid Container sx={{ flexGlow: 1 }}>
        {/* --------------- head --------------- */}
        <Typography
          variant='h4'
          component='div'
          sx={{ fontWeight: 600, mb: 3 }}
        >
          เข้าสู่ระบบ
        </Typography>

        {/* --------------- button submit by google --------------- */}
        <Grid container justifyContent='space-between' alignContent='center'>
          <Grid item xs={5.9}>
            <GoogleLogin
              clientId='653158791610-ii8s99m412cd01m9lmb9113fjjbocssd.apps.googleusercontent.com'
              render={renderProps => (
                <GoogleCustomButton
                  variant='contained'
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs={1} sx={{ fontSize: "25px" }}>
                      <FcGoogle />
                    </Grid>

                    <Grid
                      item
                      xs={11}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant='p'
                        sx={{ fontFamily: '"Noto Sans Thai", sans-serif' }}
                      >
                        Sign In With Google
                      </Typography>
                    </Grid>
                  </Grid>
                </GoogleCustomButton>
              )}
              buttonText='Login'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>

          {/* facebook login............... */}
          <Grid item xs={5.9}>
            <FacebookLogin
              appId='934707233799748'
              // autoLoad={true}
              fields='name,email,picture,first_name,last_name'
              // onClick={handleFacebookLogin}
              callback={responseFacebook}
              render={renderProps => (
                <FacebookCustomButton
                  variant='contained'
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    // background: "#4c69ba",
                  }}
                  onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={1}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "30px",
                      }}
                    >
                      <FacebookIcon />
                    </Grid>
                    <Grid
                      item
                      xs={11}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "32px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant='p'
                        sx={{ fontFamily: '"Noto Sans Thai", sans-serif' }}
                      >
                        Sign In With Facebook
                      </Typography>
                    </Grid>
                  </Grid>
                </FacebookCustomButton>
                // <button onClick={renderProps.onClick}>
                //   This is my custom FB button
                // </button>
              )}
            />
          </Grid>
        </Grid>

        {/* --------------- line --------------- */}
        <Box
          container
          justifyContent='center'
          alignItems='center'
          sx={{
            mt: 2,
            flexGlow: 1,
          }}
          component='form'
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
            {/* <p style={{ backgroundColor}}>THAITEL</p> */}

            <TextField
              fullWidth
              label='อีเมล์'
              placeholder='กรอกอีเมล์'
              name='email'
              size='small'
              value={values.email}
              onChange={e => handleChange("email", e)}
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
              id='outlined-adornment-password'
              label='รหัสผ่าน'
              placeholder='กรอกรหัสผ่าน'
              name='password'
              value={values.password}
              type={values.showPassword ? "text" : "password"}
              onChange={e => handleChange("password", e)}
              helperText={errors.password ? errors.password : ""}
              error={errors.password}
              size='small'
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
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
              type='submit'
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

        {/* --------------- input email and password --------------- */}

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
            <Link to='/register' style={{ textDecoration: "none" }}>
              <Typography
                style={{ color: "#16264D", fontWeight: 700, margin: 0 }}
              >
                สมัครสมาชิก
              </Typography>
            </Link>
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
          <Grid mr={1}>
            <Link to='/reset' style={{ textDecoration: "none" }}>
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
      </Grid>

      {/* ยังแก้อยู่ */}
      <Snackbar
        open={openSnackLogin}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: "100%" }}>
          {location?.state?.message
            ? location.state.message
            : "การเข้าสู่ระบบของคุณได้ดำเนินการสำเร็จแล้ว"}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default LoginContent;
