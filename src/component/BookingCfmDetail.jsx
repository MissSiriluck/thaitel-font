import { Container, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

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

function BookingCfmDetail() {
  return (
    <Container maxWidth='md'>
      <Grid item>
        <Typography sx={{ fontSize: "36px", textAlign: "center", mb: 2 }}>
          ข้อมูลการจอง
        </Typography>
        <Box
          sx={{ border: "1px solid #BFBFBF", borderRadius: "4px", p: 4, mb: 6 }}
        >
          <div style={{ width: "100%" }}>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      p: 1,
                      mr: 1,
                      width: "10rem",
                    }}
                  >
                    ชื่อที่พัก
                  </Typography>
                  <Typography sx={{ fontSize: "20px", p: 1, flexGrow: 1 }}>
                    Paradise tree hostel
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      p: 1,
                      mr: 1,
                      width: "10rem",
                    }}
                  >
                    ลักษณะห้องพัก
                  </Typography>
                  <Typography sx={{ fontSize: "20px", p: 1, flexGrow: 1 }}>
                    ห้องมาตรฐานเตียงเดี่ยว
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 1 }}>
                <Typography sx={{ fontSize: "20px" }}>จำนวน 1 ห้อง</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                border: "1px solid #BFBFBF",
                margin: "0 20px",
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRight: "1px solid #BFBFBF",
                  flexGrow: 1,
                }}
              >
                <Box sx={{ p: 1 }}>
                  <CalendarTodayIcon />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Box
                    sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        p: 1,
                        mr: 1,
                        width: "10rem",
                      }}
                    >
                      Check-in
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      p: 1,
                      flexGrow: 1,
                      mr: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        p: 1,
                        mr: 1,
                        width: "7rem",
                      }}
                    >
                      Tue, Sep 21
                    </Typography>
                    <Typography sx={{ p: 1, flexGrow: 1 }}>
                      9.00AM -14.00PM
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexGrow: 1 }}>
                <Box sx={{ p: 1 }}>
                  <CalendarTodayIcon />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Box
                    sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        p: 1,
                        mr: 1,
                        width: "10rem",
                      }}
                    >
                      Check-out
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      p: 1,
                      flexGrow: 1,
                      mr: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        p: 1,
                        mr: 1,
                        width: "7rem",
                      }}
                    >
                      Tue, Sep 21
                    </Typography>
                    <Typography sx={{ p: 1, flexGrow: 1 }}>
                      9.00AM -14.00PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      p: 1,
                      mr: 1,
                      flexGrow: 1,
                    }}
                  >
                    1,500.00 บาท/คืน x 3 คืน
                  </Typography>
                  <Typography sx={{ fontSize: "20px", p: 1 }}>
                    4,500.00 บาท
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      p: 1,
                      mr: 1,
                      flexGrow: 1,
                    }}
                  >
                    Service fee
                  </Typography>
                  <Typography sx={{ fontSize: "20px", p: 1 }}>
                    0.00 บาท
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      p: 1,
                      mr: 1,
                      flexGrow: 1,
                    }}
                  >
                    Total
                  </Typography>
                  <Typography sx={{ fontSize: "20px", p: 1 }}>
                    4,500.00 บาท
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </Box>

        <Container sx={{ textAlign: "center" }}>
          <CustomButton sx={{ background: "#c62828", color: "#fff" }}>
            ยืนยันการจองและดำเนินการชำระเงิน
          </CustomButton>
        </Container>
      </Grid>
    </Container>
  );
}

export default BookingCfmDetail;
