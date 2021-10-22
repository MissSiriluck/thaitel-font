import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomButton } from "./BookingCfmDetail";

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
