import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

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
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 4,
      }}
    >
      <AppBar
        position='static'
        sx={{
          borderRadius: 2,
          backgroundColor: "#07133C",
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, fontFamily: "'Noto Sans Thai', sans-serif" }}
          >
            THAITEL
          </Typography>
          <CustomButton sx={{ background: "#c62828", color: "#fff" }}>
            ลงทะเบียนที่พักของท่าน
          </CustomButton>
          <Button
            color='inherit'
            sx={{ marginLeft: 2, fontFamily: "'Noto Sans Thai', sans-serif" }}
          >
            สมัครสมาชิก
          </Button>
          <Button
            color='inherit'
            sx={{ marginLeft: 2, fontFamily: "'Noto Sans Thai', sans-serif" }}
          >
            เข้าสู่ระบบ
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
