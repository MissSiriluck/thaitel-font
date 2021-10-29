import React, { useContext } from "react";
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
import { setToken } from "../service/localStorage";
import { AuthContext } from "../context/AuthContext";

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

  const handleSubmit = async event => {
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

  return (
    <Container
      maxWidth='sm'
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{ padding: 0, mt: 20 }}
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
        <Grid container justifyContent='center' alignContent='center'>
          <Button
            variant='contained'
            sx={{
              width: "100%",
              height: "30%",
              display: "flex",
              justifyContent: "space-between",
              p: 1.5,
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
                height: "100%",
              }}
            >
              <Typography
                variant='p'
                sx={{ fontFamily: '"Noto Sans Thai", sans-serif' }}
              >
                Sign In With Google
              </Typography>
            </Grid>
          </Button>
        </Grid>

        {/* --------------- line --------------- */}
        <Grid
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
        </Grid>

        {/* --------------- input email and password --------------- */}
        <Box
          container
          spacing={2}
          justifyContent='center'
          alignItems='center'
          sx={{
            padding: 0,
            margin: 0,
            width: "100%",
          }}
          xs={12}
          md={12}
          component='form'
          onSubmit={handleSubmit}
          noValidate
        >
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
              label='อีเมล์'
              placeholder='กรอกอีเมล์'
              name='email'
              size='small'
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
              id='outlined-textarea fullWidth'
              label='รหัสผ่าน'
              placeholder='กรอกรหัสผ่าน'
              name='password'
              type='password'
              size='small'
              sx={{
                padding: 0,
                marginBottom: "3px",
              }}
            />
          </Grid>
        </Box>

        {/* --------------- button submit login--------------- */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 3,
            }}
            type='submit'
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
      </Grid>
    </Container>
    // <div>
    //   <Container
    //     maxWidth='md'
    //     justifyContent='center'
    //     alignItems='center'
    //     direction='column'
    //     sx={{ padding: 0, mt: 20 }}
    //   >
    //     <Box
    //       alignItems='center'
    //       justifyContent='center'
    //       sx={{
    //         height: "60vh",
    //         display: "flex",
    //         flexDirection: "column",
    //         padding: 0,
    //       }}
    //     >
    //       <Box
    //         alignItems='center'
    //         justifyContent='center'
    //         sx={{ width: "80%", display: "flex" }}
    //         xs={8}
    //         sm={8}
    //       >
    //         <Grid
    //           container
    //           justifyContent='start'
    //           alignItems='center'
    //           xs={9}
    //           sx={{ height: "40px" }}
    //         >
    //           <Typography variant='h4' component='div' sx={{ fontWeight: 600 }}>
    //             เข้าสู่ระบบ
    //           </Typography>
    //         </Grid>
    //       </Box>
    //       {/*  */}

    //       <Grid
    //         container
    //         justifyContent='center'
    //         alignContent='center'
    //         sx={{
    //           padding: 0,
    //         }}
    //         xs={7}
    //         md={7}
    //       >
    //         <Button
    //           variant='contained'
    //           sx={{
    //             width: "100%",
    //             display: "flex",
    //             justifyContent: "space-between",
    //           }}
    //         >
    //           <Grid
    //             item
    //             sx={{
    //               backgroundColor: "white",
    //               borderRadius: "50px",
    //               height: "18px",
    //               width: "18px",
    //               display: "flex",
    //               justifyContent: "center",
    //               alignItems: "center",
    //             }}
    //           >
    //             <FcGoogle />
    //           </Grid>
    //           <Grid
    //             item
    //             xs={12}
    //             sx={{
    //               display: "flex",
    //               justifyContent: "center",
    //               height: "32px",
    //               alignItems: "center",
    //             }}
    //           >
    //             <Typography
    //               variant='p'
    //               sx={{ fontFamily: '"Noto Sans Thai", sans-serif' }}
    //             >
    //               Sign In With Google
    //             </Typography>
    //           </Grid>
    //         </Button>
    //       </Grid>

    //       <Box
    //         container
    //         spacing={2}
    //         justifyContent='center'
    //         alignItems='center'
    //         sx={{
    //           padding: 0,
    //           margin: 0,
    //           width: "100%",
    //         }}
    //         xs={12}
    //         md={12}
    //         component='form'
    //         onSubmit={handleSubmit}
    //         noValidate
    //       >
    //         <Grid container justifyContent='center'>
    //           <Grid
    //             container
    //             spacing={2}
    //             justifyContent='space-around'
    //             alignContent='center'
    //             sx={{
    //               padding: 0,
    //               marginTop: "0s",
    //             }}
    //             xs={7}
    //             md={7}
    //           >
    //             {/*  */}
    //             <Grid
    //               container
    //               spacing={2}
    //               justifyContent='center'
    //               alignItems='center'
    //               sx={{
    //                 padding: 0,
    //                 borderBottom: "2px solid #C4C4C4",
    //                 height: 15,
    //                 margin: 0,
    //               }}
    //               xs={5}
    //               md={5}
    //             />
    //             <Typography sx={{ color: "#C4C4C4" }}>or</Typography>
    //             <Grid
    //               container
    //               spacing={2}
    //               justifyContent='center'
    //               alignItems='center'
    //               sx={{
    //                 padding: 0,
    //                 borderBottom: "2px solid #C4C4C4",
    //                 height: 15,
    //                 margin: 0,
    //               }}
    //               xs={5}
    //               md={5}
    //             />
    //           </Grid>
    //           {/*  */}

    //           <Grid
    //             container
    //             spacing={2}
    //             justifyContent='center'
    //             alignItems='center'
    //             sx={{
    //               padding: 0,
    //             }}
    //             xs={12}
    //             md={12}
    //           >
    //             <Grid
    //               item
    //               xs={7}
    //               md={7}
    //               sx={{
    //                 padding: 0,
    //               }}
    //             >
    //               <Typography
    //                 style={{
    //                   fontSize: 16,
    //                   marginBottom: 8,
    //                   justifyContent: "start",
    //                 }}
    //               >
    //                 อีเมล์
    //               </Typography>
    //               <TextField
    //                 fullWidth
    //                 label='อีเมล์'
    //                 placeholder='กรอกอีเมล์'
    //                 id='email'
    //                 name='email'
    //                 size='small'
    //                 sx={{
    //                   padding: 0,
    //                   marginBottom: "3px",
    //                 }}
    //               />
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //         <Grid
    //           container
    //           spacing={2}
    //           justifyContent='center'
    //           alignItems='center'
    //           sx={{
    //             padding: 0,
    //             marginBottom: "3px",
    //           }}
    //           xs={12}
    //           md={12}
    //         >
    //           <Grid item xs={7} md={7} sx={{ padding: 0 }}>
    //             <Typography
    //               style={{
    //                 fontSize: 16,
    //                 marginBottom: 8,
    //                 justifyContent: "start",
    //               }}
    //             >
    //               รหัสผ่าน
    //             </Typography>
    //             <TextField
    //               fullWidth
    //               label='รหัสผ่าน'
    //               placeholder='กรอกรหัสผ่าน'
    //               id='password'
    //               name='password'
    //               type='password'
    //               size='small'
    //               sx={{
    //                 padding: 0,
    //                 marginBottom: "3px",
    //               }}
    //             />
    //           </Grid>
    //           {/* <FormControlLabel
    //             control={<Checkbox defaultChecked />}
    //             label="Label"
    //           /> */}
    //         </Grid>
    //         <Grid
    //           container
    //           spacing={2}
    //           justifyContent='center'
    //           alignItems='center'
    //           sx={{
    //             padding: 0,
    //           }}
    //           xs={12}
    //           md={12}
    //         >
    //           <Grid
    //             item
    //             xs={8}
    //             md={8}
    //             sx={{ display: "flex", justifyContent: "center" }}
    //           >
    //             <CustomButton
    //               sx={{
    //                 background: "#c62828",
    //                 color: "#fff",
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 width: "80%",
    //                 marginTop: "10px",
    //               }}
    //               type='submit'
    //             >
    //               <Typography
    //                 style={{
    //                   fontSize: 16,
    //                   marginBottom: "1px",
    //                   justifyContent: "start",
    //                 }}
    //               >
    //                 เข้าสู่ระบบ
    //               </Typography>
    //             </CustomButton>
    //           </Grid>

    //           <Grid
    //             item
    //             xs={12}
    //             md={12}
    //             sx={{
    //               display: "flex",
    //               alignItems: "center",
    //               justifyContent: "center",
    //             }}
    //           >
    //             <Grid mr={1}>
    //               <Typography style={{ color: "grey", margin: 0 }}>
    //                 คุณยังไม่เคยลงทะเบียน
    //               </Typography>
    //             </Grid>

    //             <Grid mr={1}>
    //               <Link to='/register' style={{ textDecoration: "none" }}>
    //                 <Typography
    //                   sx={{
    //                     color: "#16264D",
    //                     fontWeight: 700,
    //                     margin: 0,
    //                   }}
    //                 >
    //                   สมัครสมาชิก
    //                 </Typography>
    //               </Link>
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //       {/*  */}
    //     </Box>
    //   </Container>
    // </div>
  );
}

export default LoginContent;
