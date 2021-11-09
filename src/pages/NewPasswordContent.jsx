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

function NewPasswordContent() {
  const history = useHistory();
  const { token } = useParams();
  const [colorSnackBar, setColorSnackBar] = useState("success");
  const [sanackBarMessage, setSanackBarMessage] = useState("");

  const [open, setOpen] = useState(false);

  // console.log("token................", token);
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const values = {
        // email: data.get("email"),
        password: data.get("password"),
        token: token,
      };
      const res = await axios.post("/users/new-password", values);
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
              เปลี่ยนรหัสผ่าน
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

export default NewPasswordContent;
