import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "../config/axios";
import { setToken } from "../service/localStorage";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import FacebookLogin from "react-facebook-login";
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
// import FacebookOAuth from "./FacebookOAuth";
import { GoogleLogin } from "react-google-login";
import { user } from "../service/localStorage";
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

function LoginContent() {
  const history = useHistory();
  console.log(user);
  const responseGoogle = async (response) => {
    try {
      console.log(response);
      console.log(response.profileObj);
      // const response.profileObj
      // console.log(response.profileObj.email)
      console.log(response.profileObj.givenName);
      // console.log(response.profileObj.familyName)
      // console.log(response.profileObj.googleId)
      const res = await axios.post("/googleLogin", {
        email: response.profileObj.email,
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        googleId: response.profileObj.googleId,
      });
      console.log(res);
      setToken(res.data.token);

      setUser(jwtDecode(res.data.token));
      console.log(user);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
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
      // else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      // ) {
      //   setErrors(curr => ({
      //     ...curr,
      //     email: "กรุณากรอกอีเมลให้ถูกต้อง",
      //   }));
      // }

      if (!values.password) {
        setErrors((curr) => ({
          ...curr,
          password: "กรุณากรอกรหัสผ่านของท่าน",
        }));
      }

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
      setErrors((curr) => ({
        ...curr,
        email: "กรุณากรอกข้อมูลให้ถูกต้อง",
        password: "กรุณากรอกข้อมูลให้ถูกต้อง",
      }));
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
    <Container
      maxWidth="sm"
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ padding: 0, mt: 18 }}
    >
      <Grid Container sx={{ flexGlow: 1 }}>
        {/* --------------- head --------------- */}
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 600, mb: 3 }}
        >
          เข้าสู่ระบบ
        </Typography>

        {/* --------------- button submit by google --------------- */}
        <Grid container justifyContent="center" alignContent="center">
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
        {/* facebook login............... */}
        <FacebookLogin
          appId="934707233799748"
          // autoLoad={true}
          fields="name,email,picture,first_name,last_name"
          // onClick={handleFacebookLogin}
          callback={responseFacebook}
        />
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
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Typography
                style={{ color: "#16264D", fontWeight: 700, margin: 0 }}
              >
                สมัครสมาชิก
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginContent;
