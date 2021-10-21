import { Container, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 10px 40px;
    border-radius: 50px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 20px;
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

function ConfirmPayment() {
  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          border: "1px solid #BFBFBF",
          borderRadius: "4px",
          p: 4,
          mt: 15,
          mb: 6,
        }}
      >
        <Typography sx={{ fontSize: "36px", textAlign: "center", mb: 2 }}>
          การจองของท่านดำเนินการเสร็จสิ้นแล้ว
        </Typography>
        <Typography sx={{ fontSize: "36px", textAlign: "center" }}>
          ขอบคุณที่ใช้บริการ
        </Typography>
      </Box>

      <Container sx={{ textAlign: "center" }}>
        <CustomButton sx={{ background: "#c62828", color: "#fff" }}>
          กลับหน้าเมนูหลัก
        </CustomButton>
      </Container>
    </Container>
  );
}

export default ConfirmPayment;
