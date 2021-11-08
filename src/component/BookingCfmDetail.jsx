import { Container, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useLocation } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { useEffect, useState } from "react";
// import axios from "axios";

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

export function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function BookingCfmDetail() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log("location...................................", location.state);

  const hotelName = location.state.resident.resident.name;
  const timeCheckInStart = location.state.resident.resident.timeCheckInStart;
  const timeCheckInEnd = location.state.resident.resident.timeCheckInEnd;
  const timeCheckOutStart = location.state.resident.resident.timeCheckOutStart;
  const timeCheckOutEnd = location.state.resident.resident.timeCheckOutEnd;

  // const price = location.state.rooms
  // const fetchRoomSummary = location.state.resident;
  // console.log(fetchRoomSummary);

  // const [resident, setResident] = useState({});

  // useEffect(() => {
  //   const fetchResidentByid = async () => {
  //     // const res = await axios.get(`/residents/${user.id}`);
  //     const res = await axios.get(`/residents/${location.state.id}`);
  //     setResident(res.data);
  //     // console.log("res.data.......................", res.data);
  //   };
  //   fetchResidentByid();
  // }, []);

  // console.log("resident.............................", resident.resident);

  let totalService = location.state.resident.resident.ServiceItems.reduce(
    (a, c) => a + +c.pricePerTime,
    0
  );
  // console.log("totalService..............................", totalService);

  let totalPrice = location.state.rooms.reduce(
    (a, c) => a + +c.pricePerNight * c.roomBookingAmount,
    0
  );
  let total = totalPrice;

  const getCheckIn = new Date(location.state.checkInDate);
  const getCheckInDate = getCheckIn.getDate();
  const fullDateCheckIn = getCheckIn.toLocaleString("en-US", {
    weekday: "short",
    // year: "numeric",
    month: "short",
    day: "numeric",
  });
  // console.log("fullDateCheckIn...", fullDateCheckIn);
  console.log("getCheckInDate...", getCheckInDate);

  const getCheckOut = new Date(location.state.checkOutDate);
  const fullDateCheckOut = getCheckOut.toLocaleString("en-US", {
    weekday: "short",
    // year: "numeric",
    month: "short",
    day: "numeric",
  });
  // console.log("fullDateCheckOut...", fullDateCheckOut);
  const getCheckOutDate = getCheckOut.getDate();
  console.log("getCheckOutDate...", getCheckOutDate);

  const totalNight = getCheckOutDate - getCheckInDate;
  const allTotalPrice = total * totalNight + totalService;

  const handleClickToPayment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/payments/request-payment", {
        userId: user.id,
        checkInDate: location.state.checkInDate,
        checkOutDate: location.state.checkOutDate,
        totalPrice: total,
        serviceFee: totalService,
        rooms: location.state.rooms,
      });
      window.location.assign(res.data.ChillpayData.PaymentUrl);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
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
                    {hotelName}
                    {/* Paradise tree hostel */}
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
                  <Box>
                    {location?.state?.rooms?.map((resident) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          width: "400px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            width: "200px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "20px", p: 1, flexGrow: 1 }}
                          >
                            {resident?.typeOf}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "20px", p: 1, flexGrow: 1 }}
                          >
                            {resident?.roomBookingAmount} ห้อง
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ p: 1 }}>
                {/* <Typography sx={{ fontSize: "20px" }}>จำนวน 1 ห้อง</Typography> */}
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
                      {fullDateCheckIn}
                    </Typography>
                    <Typography sx={{ p: 1, flexGrow: 1 }}>
                      {timeCheckInStart} AM - {timeCheckInEnd} AM
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
                      {fullDateCheckOut}
                    </Typography>
                    <Typography sx={{ p: 1, flexGrow: 1 }}>
                      {timeCheckOutStart} PM - {timeCheckOutEnd} PM
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
                    {total} บาท/คืน x{totalNight}
                    คืน
                  </Typography>
                  <Typography sx={{ fontSize: "20px", p: 1 }}>
                    {total * totalNight} บาท
                    {/* 4,500.00 บาท */}
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
                    {totalService} บาท
                    {/* 0.00 บาท */}
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
                    {allTotalPrice} บาท
                    {/* 4,500.00 บาท */}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </Box>

        {/* <Container sx={{ textAlign: "center" }}>
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              height: "40px",
              mt: 3,
              mb: 15,
              p: 2.5,
            }}
          >
            ยืนยันการจองและดำเนินการชำระเงิน
          </CustomButton>
        </Container> */}

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            sx={{
              background: "#c62828",
              color: "#fff",
              fontFamily: "'Noto Sans Thai', sans-serif",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              mt: 3,
              mb: 15,
              p: 2.5,
              width: "50%",
            }}
            onClick={handleClickToPayment}
          >
            จองห้องพัก
          </CustomButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookingCfmDetail;
