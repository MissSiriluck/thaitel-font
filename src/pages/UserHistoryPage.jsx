import { Container, Grid, Typography } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardHistoryList from "../component/CardHistoryList";
import { BookingContext } from "../context/BookingContext";
// import { ResidentContext } from "../context/ResidentContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Box } from "@mui/system";

function UserHistoryPage() {
  const { booking, setBooking } = useContext(BookingContext);
  const { user } = useContext(AuthContext);
  // console.log(user.firstName);

  useEffect(() => {
    const fetchBookingItem = async () => {
      try {
        const res = await axios.get(`/bookings/getByUserId`);
        setBooking(res.data.booking);
        // console.log("res.data.booking................", res.data.booking);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchBookingItem();
  }, []);

  console.log("booking.............", booking);

  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "25px", mb: 1 }}>
              {/* {`สวัสดี คุณ{Username}`} */}
              สวัสดี คุณ {user.firstName}
            </Typography>
          </Grid>
          {booking.length > 0 ? (
            <>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "16px" }}>
                  ดูรายละเอียดการจองที่พักของคุณ
                </Typography>
              </Grid>
              {booking.map((item) => (
                <CardHistoryList booking={item} />
              ))}
            </>
          ) : (
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Box>
                  <img src="ownerHistory.jpg" width="600" height="400" />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "25px",
                  }}
                >
                  คุณยังไม่ได้จองห้องพัก
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default UserHistoryPage;
