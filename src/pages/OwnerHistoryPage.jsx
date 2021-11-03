import React, { useContext, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardOwnerHistoryList from "../component/CardOwnerHistoryList";
import { ResidentContext } from "../context/ResidentContext";
import axios from "../config/axios";
import { AuthContext } from "../context/AuthContext";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { Box, styled } from "@mui/system";
import { useHistory, useLocation } from "react-router";

//customize button blue
const CustomButtonRoot = styled("button")(`
    background-color: none;
    padding: 12px 35px;
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
        background-color: #64CEEF;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #0276aa;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function OwnerHistoryPage() {
  const { user } = useContext(AuthContext);
  const { residents, setResidents } = useContext(ResidentContext);
  // console.log(user);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const res = await axios.get(`/residents/getAllResByOwner`);
        setResidents(res.data.resultResident);
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

  const history = useHistory();
  const location = useLocation();
  
  const handleClickRoomSumary = (e) => {
    console.log(residents)
    e.preventDefault();
    history.push({
      pathname: "/createresident",
      state: {
        // resident: resident,
    //   //   checkInDate: "2020-10-11",
    //   //   checkOutDate: "2020-10-12",
    //   //   rooms: filterRoom,
      },
    });
  };

  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={12} sx={{ display:'flex', flexDirection: 'row'}}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CustomButton
            sx={{
              background: "#fff",
              border: "1px solid #07133C",
              color: "#07133C",
              fontFamily: "'Noto Sans Thai', sans-serif",
              fontSize: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              width: "100%",
              height: "60%"
            }}
            onClick={handleClickRoomSumary}
          >
            เพิ่มที่พักของคุณ
          </CustomButton>
        </Grid>
          <Grid>

            </Grid>
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
