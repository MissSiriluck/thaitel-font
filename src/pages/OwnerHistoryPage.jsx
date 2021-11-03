import React, { useContext, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardOwnerHistoryList from "../component/CardOwnerHistoryList";
import { ResidentContext } from "../context/ResidentContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function OwnerHistoryPage() {
  const { user } = useContext(AuthContext);
  const { residents, setResidents } = useContext(ResidentContext);
  // console.log(user);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const res = await axios.get(`/residents/getAllResByOwner`);
        setResidents(res.data.resultResident);
        console.log(res.data.resultResident);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchResident();
  }, []);

  // console.log("residents.....................", residents);

  // let countBookedRoom = residents?.Rooms?.BookingItems?.reduce(
  //   (a, c) => a + c.roomBookingAmount,
  //   0
  // );

  // console.log("countBookedRoom..............", countBookedRoom);
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "25px", mb: 1 }}>
              {/* {`สวัสดี คุณ{Owner's name}`} */}
              สวัสดี คุณ {user.firstName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "16px" }}>
              รายละเอียดที่พักของฉัน
            </Typography>
          </Grid>
          {residents?.map((item) => (
            <CardOwnerHistoryList resident={item} />
          ))}
          {/* {} */}
          <CardOwnerHistoryList />
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default OwnerHistoryPage;
