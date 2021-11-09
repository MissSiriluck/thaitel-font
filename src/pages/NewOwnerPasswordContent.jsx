import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { FcGoogle } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Alert, Container, Grid, Snackbar, TextField } from "@mui/material";
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

function NewOwnerPasswordContent() {
  const history = useHistory();
  const { token } = useParams();
  console.log("token................", token);
  const { setUser } = useContext(AuthContext);
  const [colorSnackBar, setColorSnackBar] = useState("success");
  const [sanackBarMessage, setSanackBarMessage] = useState("");

  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const values = {
        // email: data.get("email"),
        password: data.get("password"),
        token: token,
      };
      const res = await axios.post("/hotelOwners/new-password", values);
      //   setToken(res.data.token);
      //   setUser(jwtDecode(res.data.token));

      //   history.push({
      //     pathname: "/",
      //     state: {
      //       successMessage: "Already Login.",
      //       from: " login page ",
      //     },
      //   });
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    // <div>
    //   <Container
    //     maxWidth="md"
    //     justifyContent="center"
    //     alignItems="center"
    //     direction="column"
    //     sx={{ padding: 0, mt: 23 }}
    //   >
    //     <Box
    //       alignItems="center"
    //       justifyContent="center"
    //       sx={{
    //         height: "60vh",
    //         display: "flex",
    //         flexDirection: "column",
    //         padding: 0,
    //       }}
    //     >
    //       <Box
    //         alignItems="center"
    //         justifyContent="center"
    //         sx={{ width: "80%", display: "flex" }}
    //         xs={8}
    //         sm={8}
    //       >
    //         <Grid
    //           container
    //           justifyContent="start"
    //           alignItems="center"
    //           xs={9}
    //           sx={{ height: "40px" }}
    //         >
    //           <Typography variant="h3" component="div" sx={{ fontWeight: 600 }}>
    //             เปลี่ยนรหัสผ่าน
    //           </Typography>
    //         </Grid>
    //       </Box>
    //       {/*  */}

    //       <Box
    //         container
    //         spacing={2}
    //         justifyContent="center"
    //         alignItems="center"
    //         sx={{
    //           padding: 0,
    //           margin: 0,
    //           width: "100%",
    //         }}
    //         xs={12}
    //         md={12}
    //         component="form"
    //         onSubmit={handleSubmit}
    //         noValidate
    //       >
    //         <Grid container justifyContent="center">
    //           <Grid
    //             container
    //             spacing={2}
    //             justifyContent="space-around"
    //             alignContent="center"
    //             sx={{
    //               padding: 0,
    //               marginTop: "0s",
    //             }}
    //             xs={7}
    //             md={7}
    //           >
    //             {/*  */}
    //             {/* <Grid
    //               container
    //               spacing={2}
    //               justifyContent="center"
    //               alignItems="center"
    //               sx={{
    //                 padding: 0,
    //                 borderBottom: "2px solid #C4C4C4",
    //                 height: 15,
    //                 margin: 0,
    //               }}
    //               xs={5}
    //               md={5}
    //             /> */}
    //             {/* <Typography sx={{ color: "#C4C4C4" }}>or</Typography> */}
    //             <Grid
    //               container
    //               spacing={2}
    //               justifyContent="center"
    //               alignItems="center"
    //               sx={
    //                 {
    //                   // padding: 0,
    //                   // borderBottom: "2px solid #C4C4C4",
    //                   // height: 15,
    //                   // margin: 0,
    //                 }
    //               }
    //               xs={5}
    //               md={5}
    //             />
    //           </Grid>
    //           {/*  */}

    //           <Grid
    //             container
    //             spacing={2}
    //             justifyContent="center"
    //             alignItems="center"
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
    //                 พาสเวิร์ด
    //               </Typography>
    //               <TextField
    //                 fullWidth
    //                 label="enter a new password"
    //                 placeholder="password"
    //                 id="password"
    //                 name="password"
    //                 multiline
    //                 size="small"
    //                 sx={{
    //                   padding: 0,
    //                   marginBottom: "3px",
    //                 }}
    //               />
    //             </Grid>
    //           </Grid>
    //           {/* <Grid
    //             container
    //             spacing={2}
    //             justifyContent="center"
    //             alignItems="center"
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
    //                 label="อีเมล์"
    //                 placeholder="กรอกอีเมล์"
    //                 id="email"
    //                 name="email"
    //                 multiline
    //                 size="small"
    //                 sx={{
    //                   padding: 0,
    //                   marginBottom: "3px",
    //                 }}
    //               />
    //             </Grid>
    //           </Grid> */}
    //         </Grid>
    //         <Grid
    //           container
    //           spacing={2}
    //           justifyContent="center"
    //           alignItems="center"
    //           sx={{
    //             padding: 0,
    //             marginBottom: "3px",
    //           }}
    //           xs={12}
    //           md={12}
    //         ></Grid>
    //         <Grid
    //           container
    //           spacing={2}
    //           justifyContent="center"
    //           alignItems="center"
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
    //               type="submit"
    //             >
    //               <Typography
    //                 style={{
    //                   fontSize: 16,
    //                   marginBottom: "1px",
    //                   justifyContent: "start",
    //                 }}
    //               >
    //                 เปลี่ยนรหัสผ่าน
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
    //               <Link to="/register" style={{ textDecoration: "none" }}>
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
    <Container
      maxWidth="sm"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: 0, mt: "30vh" }}
    >
      <Box Container component="form" onSubmit={handleSubmit}>
        <Grid
          Container
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "293px",
            padding: 0,
            border: "1px solid #BFBFBF",
            borderRadius: 2,
            p: 5,
          }}
        >
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              เปลี่ยนรหัสผ่านเจ้าของโรงแรม
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography
              style={{
                fontSize: "16px",
                marginBottom: 8,
                justifyContent: "start",
              }}
            >
              พาสเวิร์ด
            </Typography>
            <TextField
              fullWidth
              label="พาสเวิร์ด"
              placeholder="กรอกอีเมล์"
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
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mt: 2 }}
          >
            <CustomButton
              sx={{
                background: "#c62828",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "50%",
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
                เปลี่ยนรหัสผ่าน
              </Typography>
            </CustomButton>
            <Snackbar
              open={open}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                // severity="success"
                severity={colorSnackBar}
                sx={{ width: "100%" }}
              >
                {/* This is a success message! */}
                {sanackBarMessage}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default NewOwnerPasswordContent;
