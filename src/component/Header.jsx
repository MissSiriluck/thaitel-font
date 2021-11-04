import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import BtnLogOut from "./BtnLogOut";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//customize button red
const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 10px;
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

function Header() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        borderRadius: 2,
        backgroundColor: "#07133C",
        top: "3%",
        left: "2%",
        right: "2%",
        width: "auto",
        p: 1,
      }}
    >
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            flexGrow: 1,
            color: "#fff",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "'Noto Sans Thai', sans-serif",
            }}
          >
            THAITEL
          </Typography>
        </Link>
        {user ? (
          <BtnLogOut />
        ) : (
          <>
            <Link to="/ownerlogin" style={{ textDecoration: "none" }}>
              <CustomButton sx={{ background: "#c62828", color: "#fff" }}>
                ลงทะเบียนที่พักของท่าน
              </CustomButton>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  marginLeft: 2,
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  color: "#fff",
                }}
              >
                สมัครสมาชิก
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  marginLeft: 2,
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  color: "#fff",
                }}
              >
                เข้าสู่ระบบ
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
